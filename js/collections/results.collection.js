"use strict";

define(["backbone", "models/result.model", "backbone.paginator"], function (Backbone, Result) {
	return Backbone.PageableCollection.extend({
		model: Result,
		mode: "client",

		state: {
			pageSize: 5
		}
	});
});
//# sourceMappingURL=../collections/results.collection.js.map