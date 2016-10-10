module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('build', ['clean'], function () {
        gulpTools.build(function () {
            setTimeout(function () {
                console.log();
                console.log(chalk.green('	Build success!'));
            }, 0)
        });
    });
}
