Page({
  data: {
    // 被激活项
    isActive: "hots",
    // 热映电影列表
    hotList: [],
    // 近期最受欢迎
    popular: [],
    // 待映电影列表
    planList: []
  },
  // 切换激活项，根据自定义属性值
  switch (ev) {
    this.setData({
      isActive: ev.target.dataset.active
    })
  },
  // 获取热门数据
  getHotList() {
    let that = this
    wx.request({
      url: "https://wx.maoyan.com/mmdb/movie/v2/list/hot.json",
      method: 'get',
      data: {
        limit: 12,
        offset: 0,
        ct: "北京"
      },
      success(res) {
        // 替换图片尺寸
        res.data.data.hot.forEach(item => {
          item.img = item.img.replace('w.h', '128.180')
        })
        // 设置给data里面的hotList
        that.setData({
          hotList: res.data.data.hot
        })
      },
      fail(err) {
        console.log(err)
      },
    })
  },
  // 获取待映数据
  getPlanList() {
    let that = this
    // 获取最受欢迎
    wx.request({
      url: 'https://wx.maoyan.com/mmdb/movie/v1/list/wish/order/coming.json',
      method: "get",
      data: {
        ci: 1,
        limit: 30,
        offset: 0
      },
      success(res) {
        res.data.data.coming.forEach(item => {
          item.img = item.img.replace('w.h', '170.230')
          item.comingTitle = item.comingTitle.replace("2020年", "")
          item.comingTitle=item.comingTitle.slice(0,6)
        })
        that.setData({
          popular: res.data.data.coming
        })
      },
      fail(err) {
        console.log(err)
      }

    })
    // 获取待映列表
    wx.request({
      url: 'https://wx.maoyan.com/mmdb/movie/v2/list/rt/order/coming.json',
      method: "get",
      data: {
        ci: 1,
        limit: 10
      },
      success(res){
        console.log(res.data.data)
          that.setData({
          planList: res.data.data.coming
        })
      },
      fail(err){
        console.log(err)
      }

    })
  },
  onLoad() {
    this.getHotList()
    this.getPlanList()
  }
});