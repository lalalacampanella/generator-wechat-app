module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('wxss', function () {
        $.watch([config.src.wxss], function (e) {
            gulpTools.log(e);
            var paths = $.watchPath(e, config.src.wxss, config.dist);
            gulpTools.compileWxss(paths.srcPath, paths.srcDir.replace('src', 'dist')); // 编译 .wxss
        });
    });
}
