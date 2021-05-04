/*****************************************
* Watch Task
******************************************/

/* Requirer
******************************************/
var config = require('../config')
var gulp   = require('gulp')
var path   = require('path')
var watch  = require('gulp-watch')

/* Task
******************************************/
var watchTask = function() {
  var watchableTasks = ['images', 'js', 'html', 'css', 'getText', 'static']
  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.*')
      watch(glob, function() {
       require('./' + taskName)()
      })
    }
  })
}
gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask
