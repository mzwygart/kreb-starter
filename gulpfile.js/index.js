/*****************************************
* GULPFILE.JS
******************************************/
// Entry point for gulpfile.

// Require all tasks in gulpfile.js/tasks, including subfolders
var requireDir = require('require-dir')
requireDir('./tasks', { recurse: true })
requireDir('./scripts', { recurse: true })
