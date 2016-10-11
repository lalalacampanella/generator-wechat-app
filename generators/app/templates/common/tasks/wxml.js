module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('wxml', function () {
        $.watch([config.src.wxml], function (e) {
            gulpTools.log(e);
            var paths = $.watchPath(e, config.src.wxml, config.dist);
            gulpTools.compileWxml(paths.srcPath, paths.srcDir.replace('src', 'dist')); // 编译 .wxss
        })
    });
}
