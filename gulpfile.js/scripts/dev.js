/*****************************************
 * Default Script – npm run dev
 ******************************************/

/* Requirer
******************************************/
var config          = require('../config')
var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

/* Task
******************************************/
var devTask = function(cb) {
    global.production = false
		// Check in config.json to define active tasks
		gulpSequence('clean', config.tasks.active, 'watch', cb)
}

gulp.task('dev', devTask)
module.exports = devTask
