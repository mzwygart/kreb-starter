/*****************************************
 * Default Script – npm run prod
 ******************************************/

/* Requirer
******************************************/
var config          = require('../config')
var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

/* Task
******************************************/
var prodTask = function(cb) {
    global.production = true
		// Check in config.json to define active tasks
		gulpSequence('clean', config.tasks.active, 'size-report', 'checklist', cb)
}

gulp.task('prod', prodTask)
module.exports = prodTask
