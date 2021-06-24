//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    //tabbar:{},
    seatNumber: '',
    showNumber: '',
    id: '用户扫描商品上的溯源码获取溯源信息',
    img: [
      'https://i.loli.net/2020/12/23/JIUZfNBXp6Rvtxb.jpg',
      'https://i.loli.net/2020/11/04/nms5zDLoafMT6v8.jpg',
      'https://i.loli.net/2020/11/04/f6Dz71jiJlRgMZ5.jpg',
      'https://i.loli.net/2020/11/04/DEWCazrsP59U3xF.jpg'
    ]
  },
  touch1() {
    wx.navigateTo({
      url: '/pages/trace/trace',
    })
  },
  touch2() {
    wx.navigateTo({
      url: '/pages/enter/enter',
    })
  },
})