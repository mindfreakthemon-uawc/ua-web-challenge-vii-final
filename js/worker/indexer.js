"use strict";

define(["utils/hash", "utils/tokenize"], function (hash, tokenize) {
	function save(word, id) {
		if (word in hash.map) {
			hash.map[word].push(id);
		} else {
			hash.keys.push(word);
			hash.map[word] = [id];
		}
	}

	function process(entry) {
		var words = tokenize(entry.text);

		words.forEach(function (word) {
			save(word, entry.id);
		});
	}

	self.addEventListener("message", function (e) {
		if (e.data.type !== "index") {
			return;
		}

		e.data.array.forEach(function (entry) {
			process(entry);

			entry.p.forEach(function (entry) {
				return process(entry);
			});
		});

		hash.keys.sort(function (a, b) {
			return a > b ? 1 : -1;
		});

		self.postMessage({
			type: "indexed"
		});
	});
});
//# sourceMappingURL=../worker/indexer.js.map