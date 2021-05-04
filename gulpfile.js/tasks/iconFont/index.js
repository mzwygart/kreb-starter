/*****************************************
* iconFont Task
******************************************/

/* Require
******************************************/
var config      = require('../../config')
if(!config.tasks.iconFont) return
var gulp             = require('gulp')
var iconfont         = require('gulp-iconfont')
var generateIconSass = require('./generateIconSass')
var handleErrors     = require('../../lib/handleErrors')
var package          = require('../../../package.json')
var path             = require('path')
var url              = require('url')

/* Paths
******************************************/
var paths = {
	font: path.join(config.root.dest, config.tasks.iconFont.dest),
	css: path.join(config.root.dest, config.tasks.css.dest)
}

/* Settings
******************************************/
var settings = {
	name: package.name + ' icons',
	src: path.join(config.root.src, config.tasks.iconFont.src, '/*.svg'),
	dest: path.join(config.root.dest, config.tasks.iconFont.dest),
	sassDest: path.join(config.root.src, config.tasks.css.src, 'lib'),
	template: path.normalize('./gulpfile.js/tasks/iconFont/template.sass'),
	sassOutputName: '_icons.sass',
	fontPath: url.resolve('.',path.relative(paths.css, paths.css)),
	className: 'icon',
	options: {
		timestamp: 1, // see https://github.com/fontello/svg2ttf/issues/33
		fontName: 'icons',
		normalize: true,
		prependUnicode: false,
		formats: config.tasks.iconFont.extensions
	}
}

/* Task
******************************************/
var iconFontTask = function() {
	return gulp.src(settings.src)
	.pipe(iconfont(settings.options))
	.on('glyphs', generateIconSass(settings))
	.on('error', handleErrors)
	.pipe(gulp.dest(settings.dest))
}

gulp.task('iconFont', iconFontTask)
module.exports = iconFontTask
