const domain = 'https://douji.bishanshan.net/api/public/?service='
export const api = {
  GetCode: domain +'Login.GetCode',   //获取注册验证码
  GetForgetCode: domain + 'GetForgetCode', //获取找回密码的验证码
  Login: domain +'Login.UserLogin',    //登录
  Register: domain + 'Login.UserReg',    //注册
  forgetPwd: domain + 'Login.UserFindPass', //找回密码
  cooperationArtist: domain + 'User.GetMyCooperationArtist', //我合作的艺人
  cooperationEnterprise:domain + 'User.GetMyCooperationEnterprise', //我合作的企业
  MyRecommendArtist:domain + 'User.GetMyRecommendArtist', // 我推荐的艺人
  MyRecommendEnterprise:domain + 'User.GetMyRecommendEnterprise', //我推荐的公司
  Mycoments: domain + 'User.GetMycoments', //我的评论
  GetMyVideo: domain + 'Video.GetMyVideo', //获取我发布的视频
  AddMyAddress: domain + 'User.AddMyAddress', //新增收获地址
  DelMyAddress: domain + 'User.DelMyAddress', //删除收获地址
  Notice: domain + 'Home.Notice', //首页的公告列表
  GetMyCollectionVideo: domain + 'Video.GetMyCollectionVideo', //我收藏的视频
  SetVideo: domain + 'Video.SetVideo', //发布短视频
  GetMyOrders: domain + 'User.GetMyOrders', //用于我的订单全部
  GetMyOrdersEvaluate: domain + 'User.GetMyOrdersEvaluate', //我的订单待评价
  GetMyOrdersPayment: domain + 'User.GetMyOrdersPayment', // 我的订单 待付款
  GetMyOrdersReceipt: domain + 'User.GetMyOrdersReceipt', // 我的订单  待收获
}