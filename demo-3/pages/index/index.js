Page({
  data: {
    photo: "",
    user: null
  },
  upload() {
    // 获取图片
    let that = this
    wx.chooseImage({
      success: function(res) {
        // 加载中效果
        wx.showLoading({
          title:"加载中"
        })
        // 上传图片
        wx.uploadFile({
          url: 'https://ai.qq.com/cgi-bin/appdemo_detectface?g_tk=5381',
          filePath: res.tempFiles[0].path,
          name: 'image_file',
          success(data){
            let info = JSON.parse(data.data).data.face[0]
            // 设置数据
            that.setData({
             photo : res.tempFiles[0].path,
              user: info
            })
            // 关闭加载中效果
            wx.hideLoading()
          }
        })
      },
    })
  }
})