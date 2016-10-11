module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('static', function () {
        $.watch([config.src.static], function (e) {
            gulpTools.log(e);
            var paths = $.watchPath(e, config.src.static, config.dist);
            gulpTools.compileStatic(paths.srcPath, paths.srcDir.replace('src', 'dist')); // 编译 .wxss
        })
    });
}
