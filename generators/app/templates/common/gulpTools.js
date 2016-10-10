var named         = require('vinyl-named');
var webpackStream = require('webpack-stream');
var webpack       = require('webpack');
var runSequence   = require('run-sequence');

module.exports = function(gulp, $, config) {

    function static() {
        gulp.src(config.src.static)
            .pipe(gulp.dest(config.dist));
    }
    function json() {
        gulp.src(config.src.json)
            .pipe(gulp.dest(config.dist))
    }

    function images() {
        gulp.src(config.src.images)
            .pipe(gulp.dest(config.dist));
    }

    function views() {
        gulp.src(config.src.views)
            .pipe($.rename({
                extname: ".wxml"
            }))
            .pipe(gulp.dest(config.dist));
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
            .pipe($.postcss(config.processes))
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
    function build(ises5, cb) {
        runSequence(['js:build','less:build', 'sass:build', 'wxss:build'], function () {
            views();
            static();
            //images();
            //fonts();
            //json();
            cb && cb()
        });
    }
    return {
        //fonts:fonts,
        //json:json,
        views:views,
        //images:images,
        static:static,
        compileSass:compileSass,
        compileLess:compileLess,
        compileWxss:compileWxss,
        compileJs: compileJs,
        build:build
    }
}
