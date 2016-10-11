module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('js:build', function () {
        return gulpTools.compileJs([config.src.js]);
    });
}
