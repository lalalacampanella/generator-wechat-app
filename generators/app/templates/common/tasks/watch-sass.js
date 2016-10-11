module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('sass', function () {
        $.watch([config.src.sass], function (e) {
            gulpTools.log(e);
            var paths = $.watchPath(e, config.src.sass, config.dist);
            gulpTools.compileSass(paths.srcPath, paths.srcDir.replace('src', 'dist'))
        })
    });
}
