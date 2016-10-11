module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('js', function () {
        $.watch([config.src.watchJs], function (e) {
            var paths = $.watchPath(e, config.src.js, config.dist);
            if ( /pages|app/.test(paths.srcPath) ) {
                gulpTools.compileJs(paths.srcPath);
            }
            else {
                gulpTools.compileJs([config.src.js]);
            }
        })
    });
}
