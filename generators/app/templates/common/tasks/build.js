module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('build', ['clean'], function () {
        gulpTools.build();
    });
}
