//index.js
//获取应用实例
var Util = require('../../utils/util');

var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        items:[
            <% pages.forEach(function(name) { %>{
                link: '<%= name %>'
            },<% }) %>
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    bindChangeTap: function(e) {
        var item = e.currentTarget.dataset.item;
        wx.navigateTo({
            url: `../${item}/${item}`
        })
    },
    onLoad: async function () {
        var userInfo = await Util.getUserInfo();
        console.log(userInfo);
        //更新数据
        this.setData({
            userInfo:userInfo
        })
    }
})
/*
// 请别再ES5模式下写ES6代码, uglify压缩不支持
function pro(msg) {
return new Promise((resolve,reject) => {
setTimeout(() => {
resolve(msg)
},1000)
})
}*/
