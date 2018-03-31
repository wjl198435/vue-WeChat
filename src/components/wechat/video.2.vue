<template>
  

  <div class="liveView">
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

    <!-- <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied" @timeupdate="onTimeupdate">
    </video-player> -->

    <video-player class="vjs-custom-skin"  ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied" >
    </video-player>
  </div>
</template>

<script>

// export default {
//   name: 'live',
  
//   data () {
//     return {
//       pageName: "直播",
//       initialized: false,
//       currentTech: '',
//       streams: {
//         rtmp: '',
//         hls: ''
//       },

//         playerOptions: {
//         overNative: true,
//         autoplay: false,
//         controls: true,

//         height: 240,
//         techOrder: ["flash", "html5"],
//         sourceOrder: true,
//         flash: { hls: { withCredentials: false } },
//         html5: { hls: { withCredentials: false } },
//         sources: [
//           {
//             type: "rtmp/mp4",
//             //src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
//             //src:
//               //"rtmp://rtmp.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.hd"
//               src:"http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8"
//           },
//           {
//             withCredentials: false,
//             type: "application/x-mpegURL",

//             //src:"http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8"
//             // src:'http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8'
//             src:"http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8"
//           }
//         ],
//         // poster: 'src/assets/images/logo.png',

//         playerCtrl: {
//           isPlay: false,
//           isEnd: false,
//           durationInt: 0,
//           currentTimeInt: 0,
//           duration: 0,
//           currentTime: 0,
//           volume: 0.5, //音量控制
//           voiceSlider: 50, //声音控制
//           isFullScreen: false
//         },
//         isBottomCtrlShow: false

//         // controlBar: {
//         //   timeDivider: false, // 时间分割线
//         //   durationDisplay: false, // 总时间
//         //   progressControl: true, // 进度条
//         //   customControlSpacer: true, // 未知
//         //   fullscreenToggle: true // 全屏
//         // },
//       },

//       // playerOptions: {
//       //   overNative: true,
//       //   autoplay: false,
//       //   controls: true,
//       //   techOrder: ['flash', 'html5'],
//       //   sourceOrder: true,
//       //   flash: { hls: { withCredentials: false } },
//       //   html5: { hls: { withCredentials: false } },
//       //   sources: [{
//       //     type: 'rtmp/mp4',
//       //     src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
//       //   }, {
//       //     withCredentials: false,
//       //     type: 'application/x-mpegURL',
//       //     //src: 'http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8'
//       //     src: 'http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8'
//       //  }],
//       //   //poster: '/vue-videojs-demo/static/images/logo.png',
//       //   // controlBar: {
//       //   //   timeDivider: false, // 时间分割线
//       //   //   durationDisplay: false, // 总时间
//       //   //   progressControl: true, // 进度条
//       //   //   customControlSpacer: true, // 未知
//       //   //   fullscreenToggle: true // 全屏
//       //   // },
//       // }
//     }
//   },
//   computed: {
//     player () {
//       return this.$refs.videoPlayer.player
//     },
//     currentStream () {
//       return this.currentTech === 'Flash' ? 'RTMP' : 'HLS'
//     }
//   },
//   methods: {
//     onPlayerReadied () {
//       if (!this.initialized) {
//         this.initialized = true
//         this.currentTech = this.player.techName_
//       }
//     },
//     // record current time
//     onTimeupdate (e) {
//       console.log('currentTime', e.cache_.currentTime)
//     },
//     enterStream () {
//       this.playerOptions.sources[1].src = this.streams.hls
//       this.playerOptions.sources[0].src = this.streams.rtmp
//       this.playerOptions.autoplay = true
//     },
//     changeTech () {
//       if (this.currentTech === 'Html5') {
//         this.playerOptions.techOrder = ['html5']
//       } else if (this.currentTech === 'Flash') {
//         this.playerOptions.techOrder = ['flash']
//       }
//       this.playerOptions.autoplay = true
//     }
//   }
// }





export default {
  data() {
    return {
      pageName:'直播',
      initialized: false,
      currentTech: "",
      streams: {
        rtmp: "",
        hls: ""
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,

        height: 248,
        techOrder: ["flash", "html5"],
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            type: "rtmp/mp4",
            //src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
            //src:
              //"rtmp://rtmp.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.hd"
              src:"rtmp://rtmp.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4"
          },
          {
            withCredentials: false,
            type: "application/x-mpegURL",

            //src:"http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8"
             
             //海康
             //src:'http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8'
            //我的
            src:"http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8"
          }
        ],
        // poster: 'src/assets/images/logo.png',

        playerCtrl: {
          isPlay: false,
          isEnd: false,
          durationInt: 0,
          currentTimeInt: 0,
          duration: 0,
          currentTime: 0,
          volume: 0.5, //音量控制
          voiceSlider: 50, //声音控制
          isFullScreen: false
        },
        isBottomCtrlShow: false

      },
    };
  },

  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    currentStream() {
      return this.currentTech === "Flash" ? "RTMP" : "HLS";
    }
  },

  methods: {
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true;
        this.currentTech = this.player.techOrder;
      }
    },
    enterStream() {
      this.playerOptions.sources[1].src = this.streams.hls;
      this.playerOptions.sources[0].src = this.streams.rtmp;
      this.playerOptions.autoplay = true;
    },
    changeTech() {
      if (this.currentTech === "Html5") {
        this.playerOptions.techOrder = ["html5"];
      } else if (this.currentTech === "Flash") {
        this.playerOptions.techOrder = ["flash"];
      }
      this.playerOptions.autoplay = true;
    },
    //底部控制条显示控制
    isBottomShowCtrl() {
      var _this = this;
      this.isBottomCtrlShow = true;
      setTimeout(function() {
        _this.isBottomCtrlShow = false;
      }, 10000);
    },
    videoMouseOver() {
      this.isBottomShowCtrl();
    },
    //播放
    onPlayerPlay(player) {
      this.playerCtrl.isPlay = true;
      player.volume(this.playerCtrl.volume);
      this.$emit("custom-vedio-say", true);
      this.isBottomShowCtrl();
    },
    // 暂停
    onPlayerPause(player) {
      this.playerCtrl.isPlay = false;
      this.$emit("custom-vedio-say", false);
    },
    //播放结束
    onPlayerEnded(player) {
      this.playerCtrl.isEnd = false;
      this.$emit("custom-vedio-say", false);
    },
    //正在播放
    onPlayerPlaying(player) {},
    onPlayerWaiting(player) {},
    //加载数据
    onPlayerLoadeddata(player) {
      this.playerCtrl.durationInt = Math.floor(player.duration());
      this.playerCtrl.duration = timeUtil.secondToDate(player.duration());
    },
    //时间更新
    onPlayerTimeupdate(player) {
      this.playerCtrl.currentTime = timeUtil.secondToDate(player.currentTime());
      this.playerCtrl.currentTimeInt = Math.floor(player.currentTime());
      console.log("当前音量", player.volume());
    },
    //状态改变
    playerStateChanged(playerCurrentState) {
      console.log("状态改变");
      console.log("当前音量", player.volume());
    },
    playerReadied(player) {
      console.log("the player is readied", player);
    },
    next(src) {
      console.log("--", this.player.el());

      this.player.addChild(document.getElementById("bottomCtrl"));
      let player = this.player;
      if (!player.paused()) player.pause();
      player.src(src);
      player.load();
      player.play();
    },
    // 自定义控制栏
    // 播放
    play() {
      this.player.play();
    },
    // 暂停
    pause() {
      this.player.pause();
    },
    //下一曲
    nextClick() {
      console.log("自定义", "下一曲点击");
    },
    //全屏
    fullScreenHandle() {
      console.log("全屏");
      if (!this.player.isFullscreen()) {
        this.player.requestFullscreen();
        this.player.isFullscreen(true);
      } else {
        this.player.exitFullscreen();
        this.player.isFullscreen(false);
      }
    },
    //进度条提示控制
    progressTipFormat(val) {
      return timeUtil.secondToDate(val);
    },
    //进度条被拉动
    progressChange(val) {
      this.player.currentTime(val);
      this.playerCtrl.currentTimeInt = val;
      this.playerCtrl.currentTime = timeUtil.secondToDate(val);
    },
    // 音量被拉动
    volumeChange(val) {
      this.player.volume(val / 100);
    },
     onImgError (item, $event) {
      console.log(item, $event)
    },
  },


};
</script>

<style scoped>
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
