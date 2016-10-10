module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('js:build', function () {
        return gulpTools.compileJs([config.src.js]);
    });
}
