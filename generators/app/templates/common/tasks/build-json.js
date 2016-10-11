module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('json:build', function () {
        return gulpTools.compileJson(config.src.json, config.dist)
    });
}
