module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('static', function () {
        $.watch([config.src.static]).on('change', function (event) {
            var date = new Date();
            console.log(chalk.green(`[${date.Format('hh:mm:ss')}] ${event} has changed, Build success!`));
            gulpTools.static();
        }).on('add', function (event) {
            var date = new Date();
            console.log(chalk.green(`[${date.Format('hh:mm:ss')}] ${event} has changed, Build success!`));
            gulpTools.static();
        })
    });
}
