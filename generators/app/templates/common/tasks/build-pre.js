module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('build-pre', function () {
        config.isBuild = true;
        gulp.start('build');
    });
}
