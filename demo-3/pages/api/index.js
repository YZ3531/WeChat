Page({
  data:{
    img:""
  },
  // 加载中效果
  gerMore(){
    wx.showLoading({
      title:"加载中"
    })
  },
  // 对话框
  delete(){
    wx.showModal({
      title: '确定删除吗?',
      content: '不可恢复',
    })
  },
  // 提示信息
  add(){
    wx.showToast({
      title: '成功',
    })
  },
  // 底部展示选择栏
  update(){
    wx.showActionSheet({
      itemList: ["学习","睡觉"],
    })
  },
  // 选择图片API,获取图片信息
  upfile(){
    let that = this
    wx.chooseImage({
      success: function (res) {
        that.setData({
          img: res.tempFilePaths[0]
        })
      },
    })
  }

})