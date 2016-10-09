class Util {
    static formatTime(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return [year, month, day].map( formatNumber ).join('/') + ' ' + [hour, minute, second].map( formatNumber ).join(':');
    }
    static getUserInfo(){
        return new Promise((resolve, reject) => {
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            resolve(res.userInfo);
                        },
                        fail: function(res) {
                            resolve(res);
                        }
                    })
                },
                fail: function(res) {
                    resolve(res);
                }
            })
        })
    }

}

var formatNumber = function(n) {
    n = n.toString();
    return n[1] ? n : '0' + n
}

module.exports = Util;
