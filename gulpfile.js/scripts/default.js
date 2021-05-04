/*****************************************
 * Default Script – npm start
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
var gulp = require('gulp')
var gulpSequence = require('gulp-sequence')
var inquirer = require('inquirer')

/* Settings
 ******************************************/
var scripts = ['dev', 'prod']

var questions = [{
	type: 'list',
	name: 'scripts',
	message: 'What script do you want to launch ?',
	choices: scripts
}];

/* Task
 ******************************************/
var defaultTask = function(cb) {
	console.log(' ');
	console.log('  Welcome to the gulp starter !');
	console.log(' ');

	inquirer.prompt(questions).then(function(answers) {
		gulpSequence(answers.scripts, cb)
	});
}

gulp.task('default', defaultTask)
module.exports = defaultTask
