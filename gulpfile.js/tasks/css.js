/*****************************************
 * CSS Task
 ******************************************/

/* Require
 ******************************************/
var config = require('../config')
if (!config.tasks.css) return
var gulp = require('gulp')
var gulpif = require('gulp-if')
var browserSync = require('browser-sync')
var sass = require('gulp-sass')
var sassGlob = require('gulp-sass-glob')
var sourcemaps = require('gulp-sourcemaps')
var handleErrors = require('../lib/handleErrors')
var autoprefixer = require('gulp-autoprefixer')
var path = require('path')
var cssnano = require('gulp-cssnano')
var purgecss = require('gulp-purgecss')
// var purify = require('gulp-purifycss')

/* Paths
 ******************************************/
var paths = {
	src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
	dest: path.join(config.root.dest, config.tasks.css.dest),
	srcHTML: path.join(config.root.src, config.tasks.html.src, '/**/*.{' + config.tasks.html.extensions + '}'),
	srcJS: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}')
}

/* Settings
 ******************************************/
var settings = {
	sass: {
		indentedSyntax: false,
		includePaths: [
			"./node_modules/normalize.css"
		]
	},
	autoprefixer: {
		browsers: ["last 3 versions"]
	},
	cssnano: {
		autoprefixer: false,
		zindex: false
	},
	purgecss: {
		content: ['src/**/*.html', 'src/**/*.php']
	}
}

/* Task
 ******************************************/
var cssTask = function() {
	return gulp.src(paths.src)
		.pipe(gulpif(!global.production, sourcemaps.init()))
		.pipe(sassGlob())
		.pipe(sass(settings.sass))
		.on('error', handleErrors)
		.pipe(autoprefixer(settings.autoprefixer))
		//.pipe(gulpif(global.production, purify([paths.srcJS, paths.srcHTML])))
		.pipe(gulpif(global.production, purgecss(settings.purgecss)))
		.pipe(gulpif(global.production, cssnano(settings.cssnano)))
		.pipe(gulpif(!global.production, sourcemaps.write()))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream())
}

gulp.task('css', cssTask)
module.exports = cssTask
