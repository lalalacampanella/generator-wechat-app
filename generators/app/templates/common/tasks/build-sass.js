module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('sass:build', function () {
        return gulpTools.compileSass(config.src.sass, config.dist)
    });
}
