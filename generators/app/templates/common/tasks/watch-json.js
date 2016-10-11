module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('json', function () {
        $.watch([config.src.json], function (e) {
            gulpTools.log(e);
            var paths = $.watchPath(e, config.src.json, config.dist);
            gulpTools.compileJson(paths.srcPath, paths.srcDir.replace('src', 'dist')); // 编译 .wxss
        })
    });
}
