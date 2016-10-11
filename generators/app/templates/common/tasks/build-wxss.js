module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('wxss:build', function () {
        return gulpTools.compileWxss(config.src.wxss, config.dist)
    });
}
