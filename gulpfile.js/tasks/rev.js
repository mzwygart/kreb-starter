/*****************************************
 * Rev Task
 ******************************************/

/* Requirer
 ******************************************/
var config = require('../config')
var gulp = require('gulp')
var gutil = require('gulp-util')
var gulpSequence = require('gulp-sequence')
var path = require('path')
var rev = require('gulp-rev')
var revNapkin = require('gulp-rev-napkin')
var revReplace = require('gulp-rev-replace')

/* Tasks
 ******************************************/
// All tasks
var revTask = function(cb) {
	gulpSequence('rev-css', 'rev-js', 'rev-html', cb)
}
// CSS rev task
gulp.task('rev-css', function() {
	return gulp.src(path.join(config.root.dest, '/**/*.css'))
		.pipe(rev())
		.pipe(gulp.dest(config.root.dest))
		.pipe(revNapkin({
			verbose: false
		}))
		.pipe(rev.manifest(path.join(config.root.dest, 'rev-manifest.json'), {
			merge: true
		}))
		.pipe(gulp.dest(''))
})
// JS rev task
gulp.task('rev-js', function() {
	return gulp.src(path.join(config.root.dest, '/**/*.js'))
		.pipe(rev())
		.pipe(gulp.dest(config.root.dest))
		.pipe(revNapkin({
			verbose: false
		}))
		.pipe(rev.manifest(path.join(config.root.dest, 'rev-manifest.json'), {
			merge: true
		}))
		.pipe(gulp.dest(''))
})
// HTML rev task
gulp.task('rev-html', function() {
	var manifest = gulp.src(path.join(config.root.dest, "/rev-manifest.json"))
	return gulp.src(path.join(config.root.dest, config.tasks.html.dest, '/**/*.html'))
		.pipe(revReplace({
			manifest: manifest
		}))
		.pipe(gulp.dest(path.join(config.root.dest, config.tasks.html.dest)))
})

gulp.task('rev', revTask)
module.exports = revTask
