module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('js', function () {
        $.watch([config.src.watchJs], function (event) {
            var paths = $.watchPath(event, config.src.js, config.dist);
            if ( /[(pages)(app)]/.test(paths.srcPath) ) {
                gulpTools.compileJs(paths.srcPath);
            }
            else {
                gulpTools.compileJs([config.src.js]);
            }
        })
    });
}
