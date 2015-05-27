"use strict";

define(["backbone", "underscore", "tmpls", "utils/mapper"], function (Backbone, _, tmpls, mapper) {
	return Backbone.View.extend({
		template: tmpls.suggestions,

		initialize: function (options) {
			this.results = options.results;
			this.words = options.words;
			this.query = options.query;
			this.time = options.time;
		},

		render: function () {
			this.$el.html(this.template({
				words: this.words,
				results: this.results.map(mapper)
			}));

			return this;
		}
	});
});
//# sourceMappingURL=../views/suggestions.view.js.map