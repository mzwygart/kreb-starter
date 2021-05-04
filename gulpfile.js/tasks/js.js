/*****************************************
 * JS Task
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
if (!config.tasks.css) return
var gulp = require('gulp')
var gulpif = require('gulp-if')
var browserSync = require('browser-sync')
var handleErrors = require('../lib/handleErrors')
var path = require('path')
var sourcemaps = require('gulp-sourcemaps')
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat');

/* Paths
 ******************************************/
var paths = {
	src: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
	dest: path.join(config.root.dest, config.tasks.js.dest),
}

/* Config
 ******************************************/
var settings = {
	babel: {
		presets: ["es2015"]
	},
	uglify: {
		mangle: {
			toplevel: true
		}
	},
}

/* Task
 ******************************************/
var jsTask = function() {
	return gulp.src(paths.src)
		.pipe(gulpif(!global.production, sourcemaps.init()))
		.pipe(gulpif(global.production, concat(config.tasks.js.output)))
		.pipe(babel(settings.babel))
		.on('error', handleErrors)
		.pipe(gulpif(global.production, uglify(settings.uglify)))
		.pipe(gulpif(!global.production, concat(config.tasks.js.output)))
		.pipe(gulpif(!global.production, sourcemaps.write()))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream())
}

gulp.task('js', jsTask)
module.exports = jsTask
