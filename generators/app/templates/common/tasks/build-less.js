module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('less:build', function () {
        return gulpTools.compileLess(config.src.less, config.dist)
    });
}
