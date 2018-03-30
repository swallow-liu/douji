function Toast (data) {
  wx.showToast({
    title: data,
    icon: 'none',
    duration: 2000,
  })
}
module.exports.Toast = Toast