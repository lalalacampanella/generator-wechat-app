module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('dev', ['build'], function () {
        gulp.start('wxml','less', 'sass', 'wxss', 'js', 'static', 'json');
    });
}
