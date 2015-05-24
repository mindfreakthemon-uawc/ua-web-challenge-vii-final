define([
		'jquery',
		'templates',
		'underscore',

		'utils/cutter',
		'worker/utils/tokenize'
	],
	function ($, templates, _, cutter, tokenize) {
		Object.keys(templates)
			.forEach(function (key) {
				var fn = templates[key];

				templates[key] = function (locals) {
					return fn($.extend({
						_: _,
						cutter: cutter,
						tokenize: tokenize
					}, locals));
				};
			});


		return templates;
	});