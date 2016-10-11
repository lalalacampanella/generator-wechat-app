module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('build-pre', function () {
        config.isBuild = true;
        gulp.start('build');
    });
}
