define([], function () {

	function startsWith(text, item) {
		if (!text) {
			return false;
		}

		return text.slice(0, item.length) === item;
	}
	/**
	 * needs ascending list to search in
	 */
	return function (list, item) {
		var midpoint,
			i = 1,
			exit,
			length = list.length,
			results = [],
			first = 0,
			last = length - 1;

		while (first <= last) {
			midpoint = ((first + last) / 2) | 0;

			if (startsWith(list[midpoint], item)) {
				// we have found the position of the word
				// that starts with {item}
				// but we should also gather all other words that are right next to this one
				// if they starts with {item}
				results.push(list[midpoint]);

				while (true) {
					exit = true;

					if (startsWith(list[midpoint + i], item)) {
						results.push(list[midpoint + i]);
						exit = false;
					}

					if (startsWith(list[midpoint - i], item)) {
						results.push(list[midpoint - i]);
						exit = false;
					}

					++i;

					if (exit) {
						break;
					}
				}

				break;
			} else {
				if (item < list[midpoint]) {
					last = midpoint - 1;
				} else {
					first = midpoint + 1;
				}
			}
		}

		return results;
	};
});