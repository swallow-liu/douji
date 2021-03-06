// pages/login/login.js
var http = require('../../http/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    pwd:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindTelInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  bindPwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  login: function() {
    let url = http.api.Login;
    wx.request({
      url: url,
      data: { user_login: this.data.username, user_pass: this.data.pwd },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        let code = res.data.data.code
        console.info(res.data)
        if (code === 0) {
           wx.redirectTo({
             url: '/pages/mineIndex/mineIndex',
           })
        } else {
          wx.showToast({
            title: '密码与账号不匹配',
            icon: 'none',
            duration: 4000
          })
        }
      },
      fail: function() {
        wx.showToast({
          title: '密码与账号不匹配',
          icon: 'none',
          duration: 4000
        })
      }
    })
  }
})