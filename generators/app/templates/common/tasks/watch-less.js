module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('less', function () {
        $.watch([config.src.less], function (e) {
            gulpTools.log(e);
            var paths = $.watchPath(e, config.src.sass, config.dist);
            gulpTools.compileLess(paths.srcPath,paths.srcDir.replace('src','dist'))
        })
    });
}
