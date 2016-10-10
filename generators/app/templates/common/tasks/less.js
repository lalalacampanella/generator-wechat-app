module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('less', function () {
        $.watch([config.src.less], function (e) {
            var date = new Date();
            console.log(chalk.green(`[${date.Format('hh:mm:ss')}] ${e.history} has changed, Build success!`));
            var paths = $.watchPath(e, config.src.sass, config.dist);
            gulpTools.compileLess(paths.srcPath,paths.srcDir.replace('src','dist'))
        })
    });
}
