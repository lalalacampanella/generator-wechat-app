var gulp          = require('gulp');
var gulpTaskList  = require('fs').readdirSync('./tasks/')
var config        = require('./config');

var $ = require( 'gulp-load-plugins' )({
    rename: {
        'gulp-uglify': 'ugjs',
        'gulp-watch-path': 'watchPath',
        'gulp-if-else': 'ifElse',
        'gulp-rimraf': 'clean'
    }
});

var gulpTools = require('./gulpTools')(gulp, $, config);

gulpTaskList.forEach(function(taskfile) {
    require('./tasks/' + taskfile)(gulp, $, config, gulpTools);
});
