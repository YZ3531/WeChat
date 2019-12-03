// 应用级生命周期钩子函数
// 1. 入口 即 app.js 中必须调要 App 函数，且传入一个对象做为参数
// 2. 通过 App 可以定义小程序的生命周期、全局数据及方法
App({
  // 小程序启动时
 onLaunch(res){
   // 只会触发一次
  //  console.log(res)
   console.log('onLaunch...应用级-启动了')
 },
 // 小程序前台运行
 onShow(res){
   // 重复执行
  //  console.log(res)//-scene代表场景值(何种方式进入小程序)
   console.log("onShow...应用级-前台运行")
 },
 // 小程序后台运行
 onHide(){
   // 重复执行
   console.log("onHide...应用级-后台运行")
 },
 // 出现错误时调用
 onError(){
   // 出现错误,该方法被调用
   console.log("onError...应用级-出错了")
 },
 // 扫码打开小程序时,如果某个页面不存在,才会执行的声明周期
 // 切记勿要单纯的字面理解
 // 使用 navigator 跳转到一个不存在的页面时，并不会执行 onPageNotFound
 onPageNotFound(){
   console.log("onPageNotFound...应用级-找不到页面")
 }
})