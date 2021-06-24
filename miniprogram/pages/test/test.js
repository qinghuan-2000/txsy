//获取应用实例
const app = getApp()
 
Page({
  data: {
    //顶部安全距离（状态栏高度）
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    list: [
      {id: 1,date:'2020-07-01',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:2,statusName:'已完成'},
      {id: 2,date:'2020-07-02',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:8,statusName:'已完成'},
      {id: 3,date:'2020-07-03',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:3,statusName:'已完成'},
      {id: 4,date:'2020-07-04',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:2,statusName:'已完成'},
      {id: 5,date:'2020-07-06',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:6,statusName:'已完成'},
      {id: 6,date:'2020-07-08',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:2,statusName:'已完成'},{id: 7,date:'2020-07-09',timeStatr:'08:10',timeEnd:'10:10',countNum:15,num:2,statusName:'已完成'}
    ]
  },
 
})