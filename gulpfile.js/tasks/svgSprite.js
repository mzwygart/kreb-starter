/*****************************************
* SVG Sprite Task
******************************************/

/* Requirer
******************************************/
var config      = require('../config')
if(!config.tasks.svgSprite) return
var browserSync = require('browser-sync')
var gulp        = require('gulp')
var imagemin    = require('gulp-imagemin')
var svgstore    = require('gulp-svgstore')
var path        = require('path')

/* Settings
******************************************/
var settings = {
	src: path.join(config.root.src, config.tasks.svgSprite.src, '/*.svg'),
	dest: path.join(config.root.dest, config.tasks.svgSprite.dest)
}

/* Task
******************************************/
var svgSpriteTask = function() {
  return gulp.src(settings.src)
    .pipe(imagemin())
    .pipe(svgstore( config.tasks.svgSprite.svgStore ))
    .pipe(gulp.dest(settings.dest))
    .pipe(browserSync.stream())
}

gulp.task('svgSprite', svgSpriteTask)
module.exports = svgSpriteTask
