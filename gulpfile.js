 var gulp = require('gulp'),
	pump = require('pump'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


gulp.task('compress', function (cb) {
	var options = {
		mangle : false
	};
  pump([
        gulp.src([
          'src/pollyfill.js',
          'src/core.js',
          'src/core_method.js',
          'src/manipulation.js',
          'src/ajax.js'
        ]),
        concat('dom.js'),
        uglify(options),
        gulp.dest('dist')
    ],
    cb
  );
});