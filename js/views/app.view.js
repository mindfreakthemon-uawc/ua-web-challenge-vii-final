"use strict";

define(["jquery", "backbone", "views/search.view"], function ($, Backbone, SearchView) {
	var doc = document;

	return Backbone.View.extend({
		el: doc,

		events: {
			"click .fn-click": "redirect",
			"click a": "redirect",
			keydown: "keydown",
			click: "close"
		},

		searchWidget: null,

		initialize: function () {
			this.searchWidget = new SearchView();

			this.searchWidget.$el.prependTo(doc.body);
		},

		keydown: function (e) {
			var which = e.which;

			switch (which) {
				case 27:
					// hide widget
					this.searchWidget.hide();
					break;
				default:
					if (e.altKey || e.metaKey || e.ctrlKey || e.shiftKey && which === 16) {
						break;
					}

					if (!this._isSearchWidgetVisible()) {
						this.searchWidget.show();
					}
			}
		},

		close: function (e) {
			if (!$.contains(this.searchWidget.el, e.target)) {
				this.searchWidget.hide();
			}
		},

		_isSearchWidgetVisible: function () {
			return this.$el.is(":visible");
		}
	});
});
//# sourceMappingURL=../views/app.view.js.map