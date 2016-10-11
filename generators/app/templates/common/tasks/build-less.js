module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('less:build', function () {
        return gulpTools.compileLess(config.src.less, config.dist)
    });
}
