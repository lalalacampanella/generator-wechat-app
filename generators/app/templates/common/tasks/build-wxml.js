module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('wxml:build', function () {
        return gulpTools.compileWxml(config.src.wxml, config.dist)
    });
}
