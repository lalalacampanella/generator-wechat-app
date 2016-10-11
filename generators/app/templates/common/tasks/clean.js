module.exports = function(gulp, $, config, gulpTools) {
    gulp.task('clean', function () {
        return gulp.src(config.dist, {read: false})
            .pipe($.clean({ force: true }));
    });
}
