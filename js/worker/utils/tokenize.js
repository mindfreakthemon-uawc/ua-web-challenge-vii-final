"use strict";

define([], function () {
	return function (text) {
		return text.split(/-+|,+|\.+|\s+/).map(function (v) {
			return v.trim().toLowerCase();
		}).filter(function (v) {
			return v;
		});
	};
});
//# sourceMappingURL=../../worker/utils/tokenize.js.map