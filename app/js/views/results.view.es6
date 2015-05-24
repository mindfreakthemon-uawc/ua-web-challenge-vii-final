define([
		'backbone',
		'underscore',
		'tmpls',

		'utils/mapper',
		'collections/results.collection'
	],
	function (Backbone, _, tmpls, mapper, ResultsCollection) {
		const RESULTS_PAGE_SIZE = 5;

		return Backbone.View.extend({
			template: tmpls.results,

			events: {
				'click .next': 'next',
				'click .prev': 'prev'
			},

			initialize: function (options) {
				this.results = options.results;
				this.words = options.words;
				this.query = options.query;
				this.time = options.time;
				this.collection = new ResultsCollection(options.results.map(mapper));

				this.listenTo(this.collection, 'change reset', this.render);

				this.collection.setPageSize(RESULTS_PAGE_SIZE);
			},

			next: function (e) {
				e.preventDefault();
				e.stopPropagation();

				this.collection.getNextPage();
			},

			prev: function (e) {
				e.preventDefault();
				e.stopPropagation();

				this.collection.getPreviousPage();
			},

			render: function () {
				this.$el
					.html(this.template({
						results: this.results,
						query: this.query,
						words: this.words,
						time: this.time,
						collection: this.collection
					}));

				return this;
			}
		});
	});