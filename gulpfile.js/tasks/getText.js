/*****************************************
* getText Task
******************************************/

/* Requirer
******************************************/
var config  = require('../config')
if(!config.tasks.getText) return
var browserSync  = require('browser-sync')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')
var gettext = require('gulp-gettext')

/* Path
******************************************/
var paths = {
  src:path.join(config.root.src, config.tasks.getText.src, '/*.po'),
  dest: path.join(config.root.dest, config.tasks.getText.dest)
}

/* Task
******************************************/
var getTextTask = function() {
  return gulp.src(paths.src)
    .pipe(gettext())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('getText', getTextTask)
module.exports = getTextTask
