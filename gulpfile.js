var gulp = require('gulp'),
	pump = require('pump'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/*.js'),
        concat('dom.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

