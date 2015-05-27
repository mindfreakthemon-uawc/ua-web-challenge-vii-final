"use strict";

define(["backbone", "underscore", "tmpls"], function (Backbone, _, tmpls) {
	return Backbone.View.extend({
		tagName: "div",

		id: "indexation",

		template: tmpls.indexation,

		render: function () {
			this.$el.html(this.template());

			return this;
		}
	});
});
//# sourceMappingURL=../views/indexation.view.js.map