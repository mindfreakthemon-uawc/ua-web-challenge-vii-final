var gulp = require('gulp'),
	connect = require('gulp-connect'),
	changed = require('gulp-changed'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	to5 = require('gulp-6to5');

gulp.task('js', function () {
	gulp.src('./app/js/**/*.es6')
		.pipe(changed('./public/js', { extension: '.js' }))
		.pipe(rename(function (path) {
			path.extname = '.js';
		}))
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(to5())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public/js'))
		.pipe(connect.reload());
});