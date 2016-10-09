# generator-wechat-app [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> a small wechat app cli for less(sass,css), es6

## Installation

First, install [Yeoman](http://yeoman.io) and generator-wechat-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-wechat-app
```

Then generate your new project:

```bash
yo wechat-app
```
Then complete the operation according to the guidelines

```bash
please input your project name #your project
except index, please input the names of your pages(example:detail,list) #your pages names
```

## Start using the template

感谢kodo,本项目基于其 https://github.com/MeCKodo/wxapp-cli 项目改写而来。

支持wxss，less，sass，支持es6+，需要注意的是，模块系统使用了babel而放弃了微信小程序原生require

使用方法：
```bash
npm run dev 
#启动开发模式（监听自动更新）

npm run build
#构建预发布项目（压缩）
```

构建完成后，在微信开发工具中将项目根目录定到/disk上，即可开始开发。

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

 © [lacampanella](https://github.com/lalalacampanella)


[npm-image]: https://badge.fury.io/js/generator-wechat-app.svg
[npm-url]: https://npmjs.org/package/generator-wechat-app
[travis-image]: https://travis-ci.org/lalalacampanella/generator-wechat-app.svg?branch=master
[travis-url]: https://travis-ci.org/lalalacampanella/generator-wechat-app
[daviddm-image]: https://david-dm.org/lalalacampanella/generator-wechat-app.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lalalacampanella/generator-wechat-app
[coveralls-image]: https://coveralls.io/repos/lalalacampanella/generator-wechat-app/badge.svg
[coveralls-url]: https://coveralls.io/r/lalalacampanella/generator-wechat-app
