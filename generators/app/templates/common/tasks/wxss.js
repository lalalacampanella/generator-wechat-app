module.exports = function(gulp, $, config, chalk, gulpTools) {
    gulp.task('wxss', function () {
        $.watch([config.src.wxss], function (event) {
            var date = new Date();
            console.log(chalk.green(`[${date.Format('hh:mm:ss')}] ${event.history} has changed, Build success!`));
            var paths = $.watchPath(event, config.src.wxss, config.dist);
            gulpTools.compileWxss(paths.srcPath, paths.srcDir.$.replace('src', 'dist')); // 编译 .wxss
        });
    });
}
