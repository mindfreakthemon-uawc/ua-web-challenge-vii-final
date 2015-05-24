var gulp = require('gulp'),
	rimraf = require('gulp-rimraf');

gulp.task('clean', function () {
	return gulp.src([
		'./public/css',
		'./public/js',
		'./public/html',
		'./public/templates.js'
	], { read: false })
		.pipe(rimraf());
});