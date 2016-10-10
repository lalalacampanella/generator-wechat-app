module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('sass', function () {
        $.watch([config.src.sass], function (e) {
            var date = new Date();
            console.log(chalk.green(`[${date.Format('hh:mm:ss')}] ${e.history} has changed, Build success!`));
            var paths = $.watchPath(e, config.src.sass, config.dist);
            gulpTools.compileSass(paths.srcPath, paths.srcDir.$.replace('src', 'dist'))
        })
    });
}
