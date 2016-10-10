module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('sass:build', function () {
        return gulpTools.compileSass(config.src.sass, config.dist)
    });
}
