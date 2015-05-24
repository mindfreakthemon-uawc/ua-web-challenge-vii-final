define([], function () {
	return function (text) {
		return text
			.split(/-+|,+|\.+|\s+/)
			.map((v) => v.trim().toLowerCase())
			.filter((v) => v);
	}
});