module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('static:build', function () {
        return gulpTools.compileStatic(config.src.static, config.dist)
    });
}
