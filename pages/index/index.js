//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hidden:false,
    hasMore:true,
    hasRefesh:false,
    windowHeight:0,
    scrollTop:60
  },
  onLoad: function(options){
    var that = this;
    wx.getSystemInfo({
      success:function(res){
        that.setData({
          hidden: true,
          scrollTop: 60,
          windowHeight: res.windowHeight
        })
      }
    })
  },
  pullDownRefresh:function(e){
    // console.log(1)
  },
  pullUpLoad:function(e){
    // console.log(2);
  },
  scroll: function(e) {
    var that = this;
    var detail = e.detail;
    that.setData({
        scrollTop: detail.scrollTop
    })
    
    if(detail.scrollTop < 60 && detail.scrollTop > 0) {
        that.setData({
            scrollTop: 60
        })
    } else if(detail.scrollTop == 0) {
        this.onLoad();
        console.log('刷新了')
    }
    console.log(e)
  },
  scrolltolower:function(e) {
    // console.log(1)
  }
})
