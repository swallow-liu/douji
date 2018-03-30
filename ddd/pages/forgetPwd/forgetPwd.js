// pages/forgetPwd/forgetPwd.js
var http = require('../../http/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:0,
    code:'',
    pwd:'',
    secondPwd:'',
    time: 60,
    getCode: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  bindKeyInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  }, 
  bindCodeInput: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  bindPwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  bindSecondInput: function (e) {
    this.setData({
      secondPwd: e.detail.value
    })
  },
  getVerify: function () {
    let url = http.api.GetForgetCode;
    const self = this
    wx.request({
      url: url,
      data: { mobile: this.data.mobile},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        console.log(res.data)
        self.setData({ getCode: true })
        let Timer = setInterval(() => {
          self.setData({ time: self.data.time - 1 })
          if (self.data.time === 0) {
            clearInterval(Timer)
            self.setData({ getCode: false })
          }
        }, 1000)
      },
      fail: function () {
        wx.showToast({
          title: '获取验证码失败',
          icon: 'none',
          duration: 2000,
        })
      }
    })
  },
  confirm: function() {
    let url = http.api.forgetPwd
    wx.request({
      url: url,
      data: { user_login: this.data.mobile, user_pass: this.data.pwd, user_pass2: this.data.secondPwd, code:this.data.code },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        if(res.data.code === 0) {
          wx.showToast({
            title: '设置成功',
            icon: 'none',
            duration: 4000,
            success: function(){
              wx.redirectTo({
                url: '/pages/login/login',
              })
            }
          })
        } else if(res.data.code === 1) {
          wx.showToast({
            title: '验证码错误，请重新输入',
            icon: 'none',
            duration: 4000
          })
        } else if(res.data.code === 2) {
          wx.showToast({
            title: '用户密码不一致',
            icon: 'none',
            duration: 4000
          })
        } else {
          wx.showToast({
            title: '此用户不存在',
            icon: 'none',
            duration: 4000,
            success: function(e) {
              wx.redirectTo({
                url: '/pages/register/register',
              })
            }
          })
        }
      }
    })
  },
})