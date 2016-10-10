module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('views', function () {
        $.watch([config.src.views]).on('change', function (e) {
            var date = new Date();
            console.log(chalk.green(`[${date.Format('hh:mm:ss')}] ${e} has changed, Build success!`));
            gulpTools.views();
        })
    });
}
