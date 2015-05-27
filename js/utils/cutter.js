"use strict";

define([], function () {
	var BOUNDARIES = 20;

	return function (text, words) {
		text = " " + text.toLowerCase();

		return words.map(function (word) {
			var index = text.indexOf(" " + word),
			    regExp = new RegExp("(?:^|\\s)(" + word + ")", "gi");

			return text.slice(Math.max(0, index - BOUNDARIES), index + word.length + BOUNDARIES).replace(regExp, function (m0, m1) {
				return " <b>" + m1 + "</b>";
			});
		}).join("...");
	};
});
//# sourceMappingURL=../utils/cutter.js.map