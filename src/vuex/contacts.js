/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */
//http://p5iqmly4z.bkt.clouddn.com/alarm-3.jpg
import {imgBaseUrl} from '@/config/env'
const contacts = [
    { //昵称备注都有的朋友
        "wxid": "839338898",
        "type":'video',
        "initial": 's',
        "headerUrl": imgBaseUrl+"camera.jpg",
        "nickname": "摄像头",
        "sex": 1,
        "remark": "出入口绿相机",
        "signature": "出入口",
        "telphone": 18896586152,
        "album": [{
            imgSrc: ""
        }],
        "area": ["中国", "北京", "海淀"],
        "from": "",
        "tag": "",
        "desc": {

        },
        "src":'http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8'
    },
    {
        "wxid": "wxid_baiqian",
        "initial": 'c',
        "type":'sensor',
        "headerUrl": imgBaseUrl+"sensor.jpg",
        "nickname": "传感器",
        "sex": 0,
        "remark": "一号猪栏二氧化碳传感器",
        "signature": "湛江河谷一号农场",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘"],
        "from": "通过扫一扫",
        "tag": "女帝",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }, { //昵称备注都有的朋友
        "wxid": "wxid_yehua",
        "initial": 'c',
        "headerUrl": imgBaseUrl+"sensor.jpg",
        "nickname": "传感器",
        "sex": 1,
        "remark": "二号猪栏温湿度传感器",
        "signature": "浅浅，过来",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["九重天", "洗梧宫"],
        "from": "通过扫一扫",
        "tag": "太子",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_liubei",
        "initial": 'b',
        "headerUrl": imgBaseUrl+"alarm.jpg",
        "nickname": "报警器",
        "sex": 1,
        "remark": "三号猪栏报警器",
        "signature": "惟贤惟德，仁服于人",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "主公",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_guangyu",
        "initial": 'b',
        "headerUrl": imgBaseUrl+"alarm.jpg",
        "nickname": "报警器",
        "sex": 1,
        "remark": "一号猪栏报警器",
        "signature": "观尔乃插标卖首",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "蜀",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {	
        
        "wxid": "wxid_zhugeliang",
        "initial": 'k',
        "headerUrl": imgBaseUrl+"switch.jpg",
        "nickname": "开关",
        "sex": 1,
        "remark": "一号猪栏灯光开关",
        "signature": "你可识得此阵？",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "卧龙",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "839338877",
        "initial": 's',
        "type":'video',
        "headerUrl":imgBaseUrl+"camera.jpg",
        "nickname": "摄像机",
        "sex": 0,
        "remark": "二号猪栏摄像机",
        "signature": "839338877",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["吴国", "富春"],
        "from": "通过手机号码添加",
        "tag": "孙夫人",
        "desc": {
            "title": "",
            "picUrl": ""
        },
        "src":"http://hls.open.ys7.com/openlive/c774d96d198c486eaa08fcb933000086.m3u8"
    },
    
    {
        "wxid": "839338719",
        "initial": 's',
        "type":'video',
        "headerUrl": imgBaseUrl+"camera.jpg",
        "nickname": "摄像机",
        "sex": 0,
        "remark": "三号猪栏",
        "signature": "哼哼~",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }],
        "area": ["蜀", "荆州"],
        "from": "通过手机号码添加",
        "tag": "蜀",
        "desc": {
            "title": "",
            "picUrl": ""
        },
        'src':"http://hls.open.ys7.com/openlive/e364754d10cc40408dcde63f6646fb28.m3u8"
    }, 
]

const contact = {
    contacts
}
contact.getUserInfo = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in contacts) {
            if (contacts[index].wxid === wxid) {
                // console.log(contacts[index].telphone)
                return contacts[index]
            }
        }
    }
}

contact.getCameraSrc = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in contacts) {
            if (contacts[index].wxid === wxid) {
                // console.log(contacts[index].src)
                return contacts[index].src
            }
        }
    }
}

export default contact