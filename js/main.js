"use strict";

require({
	baseUrl: "/js",
	paths: {
		jquery: "../lib/jquery/dist/jquery.min",
		underscore: "../lib/underscore/underscore-min",
		backbone: "../lib/backbone/backbone",
		"backbone.paginator": "../lib/backbone.paginator/lib/backbone.paginator.min",
		jade: "../lib/jade/runtime",
		templates: "../templates"
	}
}, ["entities/app"], function () {});
//# sourceMappingURL=main.js.map