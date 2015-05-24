define([
		'utils/hash'
	],
	function (hash) {
		var doc = document;

		return function (result) {
			var el = doc.getElementById(result);

			if (el.tagName === 'P') {
				return {
					el: el,
					h2el: doc.getElementById(hash.p[el.id])
				};
			} else {
				return {
					el: el
				};
			}
		};
	});