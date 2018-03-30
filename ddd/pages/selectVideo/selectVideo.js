// pages/selectVideo/selectVideo.js
var http = require('../../http/http.js')
var common = require('../../common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      chooseImg:''
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
  selectVideo: function() {
    console.log('选取视频')
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        console.info('选取视频',res)
        that.setData({
          src: res.tempFilePath,
          chooseImg: res.thumbTempFilePath
        })
      }
    })
  },
  textInput:function(e) {
    this.setData({
      title: e.detail.value
    })
  },
  /**发布视频申请 */
  confirmVideo: function() {
    var that  = this
    let uid = localStorage.uid, url = http.api.SetVideo, token = localStorage.token;
    wx.request({
      url: url,
      data: { uid: uid, token: token, title: that.data.title, thumb: that.data.chooseImg, href: that.data.href },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        common.Toast('发布成功')
      },
      fail: function(res) {
        common.Toast('发布失败')
      }
    })
  }
})