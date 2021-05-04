/*****************************************
* Static Task
******************************************/

/* Requirer
******************************************/
var config  = require('../config')
if(!config.tasks.static) return
var browserSync  = require('browser-sync')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')

/* Path
******************************************/
var paths = {
  src:path.join(config.root.src, config.tasks.static.src, '/**/{*,.*}'),
  dest: path.join(config.root.dest, config.tasks.static.dest)
}

/* Task
******************************************/
var staticTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('static', staticTask)
module.exports = staticTask
