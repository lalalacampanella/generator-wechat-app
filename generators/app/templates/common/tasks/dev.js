module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('dev', ['build'], function () {
        gulp.start('views','less', 'sass', 'wxss', 'js', 'static');
    });
}
