/*****************************************
 * HTML Task
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
if (!config.tasks.html) return
var browserSync = require('browser-sync')
var data = require('gulp-data')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin = require('gulp-htmlmin')
var path = require('path')
var render = require('gulp-pug')
var fs = require('fs')

/* Paths
 ******************************************/
var exclude = path.normalize('!**/{layouts, shared, macros, data}/**')
var paths = {
	src: [path.join(config.root.src, config.tasks.html.src, '/**/*.{' + config.tasks.html.extensions + '}'), exclude],
	dest: path.join(config.root.dest, config.tasks.html.dest),
}


/* Task
 ******************************************/
var htmlTask = function() {
	return gulp.src(paths.src)
		.on('error', handleErrors)
		.pipe(gulpif('*.pug', render({
			pretty: true
		})))
		.on('error', handleErrors)
		//.pipe(gulpif(global.production, htmlmin({collapseWhitespace: true})))
		.pipe(gulp.dest(paths.dest))
		.on('end', browserSync.reload)
}

gulp.task('html', htmlTask)
module.exports = htmlTask
