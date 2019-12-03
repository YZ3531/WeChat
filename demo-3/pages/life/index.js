// 页面级别生命周期钩子函数
Page({
  // 页面加载时,可以获取地址栏携带的参数
  onLoad(query){
    // 只会触发一次
    console.log("onLoad...页面级-加载")
    // console.log(query)
  },
  // 页面显示时
  onShow(){
    // 重复触发
    console.log("onShow...页面级-显示")
  },
  // 页面初次渲染完毕
  onReady(){
    // 只会触发一次
    console.log("onReady...页面级-渲染完毕")
  },
  // 页面隐藏时--跳转,tabBar,后台运行
  onHide(){
    // 重复触发
    console.log("onHide...页面级-后台运行")
  }
})