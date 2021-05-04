/*****************************************
 * Image Task
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
if (!config.tasks.images) return
var browserSync = require('browser-sync')
var changed = require('gulp-changed')
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var path = require('path')

/* Paths
 ******************************************/
var paths = {
	src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
	dest: path.join(config.root.dest, config.tasks.images.dest)
}

/* Task
 ******************************************/
var imagesTask = function() {
	return gulp.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(imagemin())
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream())
}

gulp.task('images', imagesTask)
module.exports = imagesTask
