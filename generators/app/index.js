'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            `Welcome to ` + chalk.red(`wechat-app`) + ` generator!`

        ));

        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'please input your project name',
            default: 'wechat-default-app'
        },{
            type: 'input',
            name: 'pages',
            message: 'except index, please input the names of your pages(example:detail,list)',
            default: 'test'
        }];

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            props.pages = props.pages.replace(/\s/g,'').split(',');
            props.pages = unique('index', props.pages);
            props.pages.splice(0,1);
            this.props = props;
            console.log(this.props);
        }.bind(this));
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('common/'),
            this.destinationPath(`${this.props.name}/`),
            { pages:this.props.pages }
        );
        for ( let page of this.props.pages ) {
            this.fs.copyTpl(
                this.templatePath('page/page.js'),
                this.destinationPath(`${this.props.name}/src/pages/${page}/${page}.js`),
                { page: page }
            );
            this.fs.copyTpl(
                this.templatePath('page/page.json'),
                this.destinationPath(`${this.props.name}/src/pages/${page}/${page}.json`),
                { page: page }
            );
            this.fs.copy(
                this.templatePath('page/page.less'),
                this.destinationPath(`${this.props.name}/src/pages/${page}/${page}.less`)
            );
            this.fs.copy(
                this.templatePath('page/page.wxml'),
                this.destinationPath(`${this.props.name}/src/pages/${page}/${page}.wxml`)
            );
        }
    },

    install: function () {
        //this.installDependencies();
    }
});

function unique(start, array){
    var n = [start];//临时数组
    for(var i = 0;i < array.length; i++){
        if(n.indexOf(array[i]) == -1 && array[i] != '') n.push(array[i]);
    }
    return n;
}
