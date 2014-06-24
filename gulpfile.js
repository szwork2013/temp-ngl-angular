global.Combine = require('stream-combiner');
global.gulp = require('gulp');
global.notify = require('gulp-notify');
global.gutil = require('gulp-util');
global.$ = require('gulp-load-plugins')();

require('./bootstrap/start');

var fs = require('fs'),
	path = require('path'),
	onlyScripts = require('./bootstrap/util/scriptFilter'),
	tasks = fs.readdirSync('./bootstrap/commands/gulp/').filter(onlyScripts);

// Set up tasks
tasks.forEach(function(task) {
	require('./bootstrap/commands/gulp/' + task);
});