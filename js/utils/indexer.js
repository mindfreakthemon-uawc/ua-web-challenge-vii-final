"use strict";

define(["jquery", "underscore", "utils/hash"], function ($, _, hash) {
	return function (selector) {
		var $content = $(selector),
		    array = [];

		$content.find("h2").each(function () {
			var h2 = this,
			    sibling = h2.nextElementSibling,
			    p = [];

			h2.id = _.uniqueId("h2_");

			while (sibling && sibling.tagName !== "H2") {
				if (sibling.tagName === "P") {
					sibling.id = _.uniqueId("p_");

					hash.p[sibling.id] = h2.id;

					p.push({
						id: sibling.id,
						text: sibling.innerText
					});
				}

				sibling = sibling.nextElementSibling;
			}

			hash.h2[h2.id] = p;

			array.push({
				text: h2.innerText,
				id: h2.id,
				p: p
			});
		});

		return array;
	};
});
//# sourceMappingURL=../utils/indexer.js.map