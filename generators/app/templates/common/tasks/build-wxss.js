module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('wxss:build', function () {
        return gulpTools.compileWxss(config.src.wxss, config.dist)
    });
}
