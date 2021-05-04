/*****************************************
 * Size report Task
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
var gulp = require('gulp')
var sizereport = require('gulp-sizereport')

/* Task
 ******************************************/
gulp.task('size-report', function() {
	return gulp.src([config.root.dest + '/**/*'])
		.pipe(sizereport({
			gzip: true
		}))
})
