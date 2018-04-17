import Vue from 'vue'
import Vuex from 'vuex'

import OfficialAccounts from "./official-account" //存放所有关注的公众号
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations"
import actions from "./actions"
import * as getters  from "./getters"
import {imgBaseUrl} from '@/config/env'
Vue.use(Vuex)
    // 统一管理接口域名 
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    
    currentLang: "zh", //当前使用的语言 zh：简体中文 en:英文 后期需要
    newMsgCount: 10, //新消息数量

    imgBaseUrl,
    status:["不在线","在线"],
    defence:['撤防','布防'],
    isEncrypt:['不加密','加密'],
    alarmSoundMode:['短叫','长叫','静音'],
    offlineNotify:['不通知','通知'],
    videoList:[],
    sensorList:{},
    switchList:{},
    arlamList:{},

    currentVideoInfo:{},
    currentLive:{},
    // currentDeviceSerial:0,
    // currentLiveHLS:"",
    // currentLiveHLS_HD:"",
    // currentLiveRTMP:"",
    // currentLiveRTMP_HD:"",
    currentLiveStatusMsg:["未使用或直播已关闭" ,"使用中","已过期","直播已暂停"],
    // currentStatus:0,
    currentLiveexceptionMsg:["正常","设备不在线","设备开启视频加密","设备删除","失效","未绑定","账户下流量已超出"],
    // currentLiveexception:0,

    allContacts: contact.contacts, //所有联系人
    OfficialAccounts: OfficialAccounts, //所有关注的公众号
    currentPageName: "物语", //用于在wx-header组件中显示当前页标题
    //backPageName: "", //用于在返回按钮出 显示前一页名字 已遗弃
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    // 所有接口地址 后期需要
    apiUrl: {
        demo: apiPublicDomain + ""
    },
    alarmList:{},
    msgList: {
        stickMsg: [], //置顶消息列表 后期需要
        baseMsg: [{ //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "camera",
                "group_name": "",
                "group_qrCode": "",
                "read": true, //true；已读 false：未读
                "newMsgCount": 1,
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{ //对话框的聊天记录 新消息 push 进
                    "text": "有人进入",
                    "date": 1521100113,
                    "name": "出入口",
                    "headerUrl": imgBaseUrl+"camera.jpg"
                }, {
                    "text": '有人进入',
                    "date": 1521109013,
                    "name": "出入口",
                    "headerUrl": imgBaseUrl+"camera.jpg"
                },
                {
                    "text": '有人进入',
                    "date": 1521109013,
                    "name": "出入口",
                    "headerUrl": imgBaseUrl+"camera.jpg"
                },
                ],
                "user": [contact.getUserInfo('839338877')], // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
               
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "湛江某农场",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                        "text": "长按消息，唤醒消息操作菜单",
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }, {
                        "text": '点击空白处，操作菜单消失',
                        "date": 1488117964495,
                        "name": "阿荡",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                    },
                    {
                        "text": '12℃、56%RH',
                        "date": 1488117964495,
                        "name": "温湿度",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('839338898'), contact.getUserInfo('wxid_yehua')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "山东某农场2号农场",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                    "text": '冒个泡',
                    "date": 1488117964495,
                    "name": "诸葛亮",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                }],
                "user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_zhaohd')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "长按消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '二氧化碳浓度过高',
                    "date": 1488117964495,
                    "name": "猪苗栏",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }],
                "user": [contact.getUserInfo('wxid_baiqian')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": '夫君,身体要紧~ ',
                    "date": 1488117964495,
                    "name": "孙尚香",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"
                }],
                "user": [contact.getUserInfo('wxid_sunshangxiang')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": true,
                "msg": [{
                    "text": '有人闯入！ ',
                    "date": 1488117964495,
                    "name": "出口摄像头",
                    "headerUrl": imgBaseUrl+"camera.jpg"
                }],
                "user": [contact.getUserInfo('wxid_guangyu')]
            }
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})