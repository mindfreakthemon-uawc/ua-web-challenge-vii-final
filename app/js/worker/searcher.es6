define([
		'underscore',
		'utils/hash',
		'utils/binary',
		'utils/tokenize'
	],
	function (_, hash, binary, tokenize) {
		self.addEventListener('message', function (e) {
			if (e.data.type !== 'search') {
				return;
			}

			var query = e.data.text,
				words = tokenize(query),
				time = Date.now(),
				results = [];

			if (!words.length) {
				return;
			}

			words.every(function (word) {
				var items = binary(hash.keys, word);

				results.push(_.chain(items)
					.map((item) => hash.map[item])
					.flatten()
					.unique()
					.value()
				);

				return items.length;
			});

			self.postMessage({
				type: e.data.event,
				results: _.intersection.apply(_, results),
				words: words,
				query: query,
				time: Date.now() - time
			});
		});

	});