<template>
  <div id="playercontainer"></div>
</template>

<script>

// import Switcher from '@/components/Switcher'
//import contact from "../../vuex/contacts"
export default {
  name: 'live',
  // components: {
  //   Switcher
  // },
   mixins: [window.mixin],
  data () {
    return {
      
      
    }
  },
  computed: {
   
  },
  methods: {
    

    beforeCreate: function() {
                console.group('------beforeCreate创建前状态------');
            },
            /**
             * 1.在beforeCreate和created钩子之间，程序开始监控Data对象数据的变化及vue内部的初始化事件
             * 
             * */
            created: function() {
                console.group('------created创建完毕状态------');
            },
            /**
             * 2.在created和beforeMount之间，判断是否有el选项，若有则继续编译，无，则暂停生命周期；
             * 然后程序会判断是否有templete参数选项，若有，则将其作为模板编译成render函数。若无，则将外部html作为模板编译（template优先级比外部html高）
             * 
             * */
            beforeMount: function() {
                console.group('------beforeMount挂载前状态------');
            },
            /**
             * 3.在beforeMount和mounted之间，程序将上一步编辑好的html内容替换el属性指向的dom对象或者选择权对应的html标签里面的内容
             * 
             * */
            mounted: function() {
                console.group('------mounted 挂载结束状态------');
               //console.log("mounted:"+this.$store.state.allContacts[0].src) ;
               //let src=this.$store.state.allContacts[this.mid-1].src;
               //console.log("mid:"+this.mid+"---src:"+src);
               //this.playerOptions.sources[0].src=src;
        var player = cyberplayer("#playercontainer").setup({
        width: 680, // 宽度，也可以支持百分比(不过父元素宽度要有)
        height: 448, // 高度，也可以支持百分比
        title: "基本功能", // 标题
        file: "http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hbqagik5sfq1jsai/mda-hbqagik5sfq1jsai.mp4", // 播放地址
        image: "http://gcqq450f71eywn6bv7u.exp.bcevod.com/mda-hbqagik5sfq1jsai/mda-hbqagik5sfq1jsai.jpg", // 预览图
        autostart: false, // 是否自动播放
        stretching: "uniform", // 拉伸设置
        repeat: false, // 是否重复播放
        volume: 100, // 音量
        controls: true, // controlbar是否显示
        starttime: 0, // 视频开始播放时间点(单位s)，如果不设置，则可以从上次播放时间点续播
        logo: { // logo设置
            linktarget: "_blank",
            margin: 8,
            hide: false,
            position: "top-right", // 位置
            file: "./img/logo.png" // 图片地址
        },
        ak: "xxxxxxxxxxxxxxxx" // 公有云平台注册即可获得accessKey
    });
               
            },
            /**
             * 4.mounted和beforeUpdate之间，程序实时监控数据变化
             * 
             * */
            beforeUpdate: function() {
                console.group('beforeUpdate 更新前状态===============》');
               
            },
            /**
             * 5.beforeUpdate和updated之间，实时更新dom
             * 
             * */
            updated: function() {
                console.group('updated 更新完成状态===============》');
               
            },
            beforeDestroy: function() {
                console.group('beforeDestroy 销毁前状态===============》');
               
            },
            /**
             * 6.实例销毁
             * 
             * */
            destroyed: function() {
                console.group('destroyed 销毁完成状态===============》');       
            }

}
}
</script>

<style scoped>

   @import "../../assets/css/lib/iconiot.css";
   @import "../../assets/css/dialogue.css";
.liveView {
  position: relative;
}

.selectWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
  margin: 20px;
  vertical-align: baseline;
}

.inputWrapper {
  width: 500px;
  margin: 0 auto;
}

.buttonWrapper {
  text-align: center;
}
</style>


