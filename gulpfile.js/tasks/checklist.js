/*****************************************
 * Checklist Task
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
var gulp = require('gulp')
var Table = require('cli-table')

/* Task
 ******************************************/
var checklistTask = function(cb) {

	var table = new Table();

	table.push({
		'Google Analytics': '– Does it have one ?\n– If yes, is it proprely integrate ?'
	}, {
		'Database': '– Do access are correct (host, user, password, database name) ?\n– Are the paths targeting the production server ?\n– Does all files and folder exist (uploads folder i.e)'
	}, {
		'.htaccess': '– Does it have gzipped enable ?\n– Are the paths correct ?'
	}, {
		'E-mailing': '– Are every e-mails from contact forms correct ?\n– Does it have a newsletter system (mailchimp) and is it the right one ?'
	}, {
		'Review': '– Checked responsive ?\n– Checked cross-browser comptability ?\n– Checked performances, accessibility, best practices (Lighthouse) ?'
	});

	console.log('\n[!] Don\'t forget these few points before and after production !')
	console.log(table.toString());
}

gulp.task('checklist', checklistTask)
module.exports = checklistTask
