//index.js
//获取应用实例

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
    bindChangeTap: function(e) {
        var item = e.currentTarget.dataset.item;
        wx.navigateTo({
            url: `../${item}/${item}`
        })
    },
    onLoad: async function () {
        var userInfo = await app.getUserInfo();
        console.log(userInfo);
        //更新数据
        this.setData({
            userInfo:userInfo
        })
    }
})
