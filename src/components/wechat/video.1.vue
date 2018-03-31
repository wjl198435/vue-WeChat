<template>
    <div class="video">
        <header id="wx-header">
            <!-- <div class="other">
                <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-camera" v-show="$route.query.group_num==1"></router-link>
            </div> -->
            <div class="center">
                <router-link to="/" tag="div" class="iconfont icon-return-arrow">
                    <span>对话</span>
                </router-link>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
        </header>
        <section class="dialogue-section clearfix "  >
              
        </section>
        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">
                <div class="custom-video-outer-box">
                <video-player class="vjs-custom-skin"  ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied" >
                </video-player>
            </div>

                 <!-- <span class="more iconfont icon-dialogue-jia"></span> -->
                
                <!-- <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" v-on:click="currentChatWay=true"></span>
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" v-on:click="currentChatWay=false"></span>
                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say" v-press>
                        <span class="one">按住 说话</span>
                        <span class="two">松开 结束</span>
                    </div>
                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <input class="chat-txt" type="text" v-on:focus="focusIpt" v-on:blur="blurIpt"/>
                </div>
                <span class="expression iconfont icon-dialogue-smile"></span>
                <span class="more iconfont icon-dialogue-jia"></span>
                <div class="recording" style="display: none;" id="recording">
                    <div class="recording-voice" style="display: none;" id="recording-voice">
                        <div class="voice-inner">
                            <div class="voice-icon"></div>
                            <div class="voice-volume">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <p>手指上划,取消发送</p>
                    </div>
                    <div class="recording-cancel" style="display: none;">
                        <div class="cancel-inner"></div>
                        <p>松开手指,取消发送</p>
                    </div>
                </div> -->
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
name: 'live',

  data () {
    return {
      
      pageName: "直播",

      initialized: false,
      currentTech: '',
      streams: {
        rtmp: '',
        hls: ''
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        techOrder: ['flash', 'html5'],
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [{
          type: 'rtmp/mp4',
          src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
        }, {
          withCredentials: false,
          type: 'application/x-mpegURL',
          //海康
         //src: 'http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.hd.m3u8'
          //我的
         src:'http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8'
        }],
        // poster: '/vue-videojs-demo/static/images/logo.png',
        poster:''
        // controlBar: {
        //   timeDivider: false, // 时间分割线
        //   durationDisplay: false, // 总时间
        //   progressControl: true, // 进度条
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全屏
        // },
      }
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    },
    currentStream () {
      return this.currentTech === 'Flash' ? 'RTMP' : 'HLS'
    }
  },
  methods: {
    onPlayerReadied () {
      if (!this.initialized) {
        this.initialized = true
        this.currentTech = this.player.techName_
      }
    },
    // record current time
    onTimeupdate (e) {
      console.log('currentTime', e.cache_.currentTime)
    },
    enterStream () {
      this.playerOptions.sources[1].src = this.streams.hls
      this.playerOptions.sources[0].src = this.streams.rtmp
      this.playerOptions.autoplay = true
    },
    changeTech () {
      if (this.currentTech === 'Html5') {
        this.playerOptions.techOrder = ['html5']
      } else if (this.currentTech === 'Flash') {
        this.playerOptions.techOrder = ['flash']
      }
      this.playerOptions.autoplay = true
    }
  }
}
        // data() {
        //     return {
        //         pageName: "直播",
        //         currentChatWay: true, //ture为键盘打字 false为语音输入
        //         timer: null
        //             // sayActive: false // false 键盘打字 true 语音输入
        //     }
        // },      
        
    
    
</script>
<style>
    /* @import "../../assets/css/moments.css"; */
   @import "../../assets/css/lib/iconiot.css";
   @import "../../assets/css/video.css";
    .say-active {
        background: #c6c7ca;
    }
</style>