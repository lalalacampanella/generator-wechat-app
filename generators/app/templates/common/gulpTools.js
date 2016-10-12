var named         = require('vinyl-named');
var webpackStream = require('webpack-stream');
var webpack       = require('webpack');
var runSequence   = require('run-sequence');
var chalk         = require('chalk');

module.exports = function(gulp, $, config) {

    function log(e) {
        var date = new Date();
        console.log(chalk.white('[') + chalk.gray(date.Format('hh:mm:ss')) + chalk.white('] ') + chalk.green(e.history) + chalk.white(' has changed, Build success!'));
    }
    function compileStatic(src, dist) {
        gulp.src(src)
            .pipe(gulp.dest(dist));
    }
    function compileJson(src, dist) {
        gulp.src(src)
            .pipe($.ifElse(config.isBuild === true, function () {
                return $.jsonmin();
            }))
            .pipe(gulp.dest(dist));
    }
    function compileWxml(src, dist) {
        gulp.src(src)
            .pipe($.ifElse(config.isBuild === true, function () {
                return $.htmlmin(config.htmlMinOptions);
            }))
            .pipe($.rename({ extname: ".wxml" }))
            .pipe(gulp.dest(dist));
    }
    function compileSass(src, dist) {
        return gulp.src(src)
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.base64({
                extensions: ['png', /\.jpg#datauri$/i],
                maxImageSize: 10 * 1024 // bytes,
            }))
            .pipe($.ifElse(config.isBuild === true, function () {
                return $.postcss(config.processes);
            }))
            .pipe($.rename({
                extname: ".wxss"
            }))
            .pipe(gulp.dest(dist));
    }
    function compileLess(src, dist) {
        return gulp.src(src)
            .pipe($.plumber({errorHandler: $.notify.onError('Error!!')}))
            .pipe($.less())
            .pipe($.base64({
                extensions: ['png', /\.jpg#datauri$/i],
                maxImageSize: 10 * 1024 // bytes,
            }))
            .pipe($.ifElse(config.isBuild === true, function () {
                return $.postcss(config.processes);
            }))
            .pipe($.rename({
                extname: ".wxss"
            }))
            .pipe(gulp.dest(dist));
    }
    function compileWxss(src, dist) {
        return gulp.src(src)
            .pipe($.base64({
                extensions: ['png', /\.jpg#datauri$/i],
                maxImageSize: 10 * 1024 // bytes,
            }))
            .pipe($.ifElse(config.isBuild === true, function () {
                return $.postcss(config.processes);
            }))
            .pipe($.rename({ extname: ".wxss" }))
            .pipe(gulp.dest(dist))
    }

    function compileJs(path) {
        return gulp.src(path)
            .pipe(named(function (file) {
                var path   = JSON.parse(JSON.stringify(file)).history[0];
                var sp     = path.indexOf('\\') > -1 ? 'src\\' : 'src/';
                var target = path.split(sp)[1];
                return target.substring(0, target.length - 3);
            }))
            .pipe(webpackStream(config.webpackConfig))
            .on('error', function (err) {
                this.end()
            })
            .pipe($.ifElse(config.isBuild === true, $.ugjs))
            .pipe(gulp.dest(config.dist))
    }
    function build() {
        runSequence(['js:build','less:build', 'sass:build', 'wxss:build', 'wxml:build', 'static:build', 'json:build'], function () {
            setTimeout(function () {
                console.log();
                if (config.isBuild) {
                    console.log(chalk.green('Build success!'));
                }
                else {
                    console.log(chalk.green('Build success! watching for files changes...'))
                }
            }, 0)
        });
    }
    return {
        compileStatic: compileStatic,
        compileJson: compileJson,
        compileSass: compileSass,
        compileLess: compileLess,
        compileWxss: compileWxss,
        compileJs: compileJs,
        compileWxml: compileWxml,
        build:build,
        log:log
    }
}
