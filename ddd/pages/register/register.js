// pages/register/register.js
var http = require('../../http/http.js')
var common = require('../../common.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    code:'',
    pwd:'',
    secondPwd:'',
    time: 60,
    getCode: false
  },
  getVerify: function(e) {
    let url = http.api.GetCode;
    const self = this
    wx.request({
      url: url,
      data: { mobile: this.data.mobile },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
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
        common.Toast('获取验证码失败')
      }
    })
  },
  bindTelInput: function(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindCodeInput: function(e) {
    this.setData({
      code: e.detail.value
    })
  },
  bindPwdInput: function(e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  bindSecondInput: function(e) {
    this.setData({
      secondPwd: e.detail.value
    })
  },
  Register: function () {
    let url = http.api.Register
    wx.request({
      url: url,
      data: { user_login: this.data.mobile, user_pass: this.data.pwd, user_pass2: this.data.secondPwd, code: this.data.code },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.info('res.data', res)
        let code = res.data.data.code
       if(code === 0) {
         wx.showToast({
           title: '注册成功',
           icon: 'none',
           duration: 2000,
           success: function() {
             wx.redirectTo({
               url: '/pages/login/login',
             })
           }
         })
       } else if (code === 1005) {
         common.Toast('密码不能纯数字或字母')
       } else if(code === 1004) {
         common.Toast('密码必须长度在6-12位')
       }else {
         common.Toast('验证码失效')
       }
      }
    })
  }
})