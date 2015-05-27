"use strict";

importScripts("../../lib/requirejs/require.js");

require({
	baseUrl: "/js/worker",
	paths: {
		underscore: "../../lib/underscore/underscore-min"
	}
}, ["searcher", "indexer"], function () {
	self.postMessage({
		type: "ready"
	});
});
//# sourceMappingURL=../worker/main.js.map