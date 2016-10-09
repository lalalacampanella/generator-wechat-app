#这是微信小程序模板程序

感谢kodo,本项目基于其 https://github.com/MeCKodo/wxapp-cli 项目改写而来。

支持wxss，less，sass，支持es6+，需要注意的是，由于支持es6需要babel，所以模块系统使用了babel而放弃了微信小程序原生require，同样放弃了原生模块化wxss，而使用less/sass(当然如果你选择写原生wxss的话便没有这个问题)

另外还需要注意的就是wxss和css有许多不同，我并没有扩展wxss的能力，仅仅是当做css编译过去了而已。


使用方法：

npm run dev 
启动开发模式（监听自动更新）

npm run build
构建预发布项目（压缩）

构建完成后，在微信开发工具中将项目根目录定到/disk上，即可开始开发。
