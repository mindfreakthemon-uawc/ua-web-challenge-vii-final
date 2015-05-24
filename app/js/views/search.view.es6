define([
		'backbone',
		'tmpls',

		'entities/worker',
		'utils/indexer',
		'views/suggestions.view',
		'views/indexation.view',
		'views/results.view'
	],
	function (Backbone, tmpls, worker, indexer, SuggestionsView, IndexationView, ResultsView) {
		const SUGGESTIONS_COUNT = 5;
		const MIN_QUERY_LEN_FOR_SUGGESTION = 3;

		return Backbone.View.extend({
			tagName: 'form',

			id: 'search-widget',

			template: tmpls.search,

			events: {
				'submit': 'submit',
				'input': 'input',
				'click #clear': 'clear'
			},

			initialize: function () {
				worker.addEventListener('message', this.message.bind(this));

				// auto-render
				this.render();

				this.indexationView = new IndexationView();
				this.indexationView.render().$el.prependTo('body');
			},

			clear: function () {
				this.el.reset();

				// untarget
				location.hash = '';
			},

			submit: function (e) {
				e.preventDefault();

				this._clearSuggestions();

				worker.postMessage({
					type: 'search',
					event: 'searched',
					text: e.target.querySelector('input').value
				});
			},

			input: function (e) {
				this._clearResults();
				this._clearSuggestions();

				var query = e.target.value;

				if (query.trim().length < MIN_QUERY_LEN_FOR_SUGGESTION) {
					return;
				}

				worker.postMessage({
					type: 'search',
					event: 'suggested',
					text: query
				});
			},

			message: function (e) {
				switch (e.data.type) {
					case 'ready':
						this._startIndexing();
						break;

					case 'suggested':
						this._attachSuggestions(e.data);
						break;

					case 'searched':
						this._attachSearchResults(e.data);
						break;

					case 'indexed':
						this._markIndexed();
						break;
				}
			},

			render: function () {
				this.$el
					.html(this.template());

				return this;
			},

			/* ----- */

			show: function () {
				this.$el.show().find('input').focus();
			},

			hide: function () {
				this.$el.hide().find('input').val('');

				this._clearResults();
				this._clearSuggestions();
			},

			/* ----- */

			_attachSearchResults: function (data) {
				this._clearResults();

				var results = new ResultsView(data);

				results.$el.appendTo('#results');
			},

			_clearResults: function () {
				this.$('#results').empty();
			},

			/* ----- */

			_attachSuggestions: function (data) {
				this._clearSuggestions();

				var suggestions = new SuggestionsView({
					results: data.results.slice(0, SUGGESTIONS_COUNT),
					words: data.words,
					query: data.query
				});

				suggestions.render().$el.appendTo('#suggestions');
			},

			_clearSuggestions: function () {
				this.$('#suggestions').empty();
			},

			/* ----- */

			_startIndexing: function () {
				worker.postMessage({
					type: 'index',
					array: indexer('#content')
				});
			},

			_markIndexed: function () {
				this.indexationView.$el.remove();
			}
		});
	});