Page({
  data: {
    num: 0,
    show: false
  },
  login() {
    console.log("HHHHH")
  },
  sudu(ev) {
    this.data.num += 1
  },
  onLoad() {
    var x = setInterval(() => {
      if (this.data.num >= 100) {
        clearInterval(x)
        this.setData({
          show: true
        })
      }
      this.setData({
        num: this.data.num + 1
      })
    }, 50)
  }
})