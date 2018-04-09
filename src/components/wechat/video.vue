<template>
  <div class="liveView">
    <header id="wx-header">
            <!-- <div class="other">
                <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-camera" v-show="$route.query.group_num==1"></router-link>
            </div> -->
            <div class="center">
                <router-link to="/contact/details" tag="div" class="iconfont icon-return-arrow">
                    <span>详细资料</span>
                </router-link>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
        </header>
    <!-- <h3>Vue Video.js Live Demo</h3>
    <p>Current Stream: <span class="badge badge-success">{{ currentStream }}</span></p>
    <p>Current Tech: <span class="badge badge-info">{{ currentTech }}</span></p> -->
    <video-player 
    class="vjs-custom-skin" 
    ref="videoPlayer" 
    :options="playerOptions" 
    @ready="onPlayerReadied" 
    @timeupdate="onTimeupdate"
    
    @error="onError" >
    </video-player>
    <!-- <div class="selectWrapper">
      Switch Tech：
      <div class="form-check">
        <input class="form-check-input" type="radio" name="tech" id="html5" value="Html5" v-model="currentTech" @change="changeTech">
        <label class="form-check-label" for="html5">
          Html5
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="tech" id="flash" value="Flash" v-model="currentTech" @change="changeTech">
        <label class="form-check-label" for="flash">
          Flash
        </label>
      </div>
    </div> -->

    <!-- <h5>Enter your streams link below</h5>
    <div class="inputWrapper">
      <div class="form-group row" v-if="currentStream==='RTMP'">
        <label for="" class="col-sm-4 col-form-label">RTMP: </label>
        <div class="col-sm-8">
          <input class="form-control" type="text" placeholder="RTMP url here" v-model="streams.rtmp">
        </div>
      </div>
      <div class="form-group row" v-else>
        <label for="" class="col-sm-4 col-form-label">HLS: </label>
        <div class="col-sm-8">
          <input class="form-control" type="text" placeholder="HLS url here" v-model="streams.hls">
        </div>
      </div>
    </div>
    <div class="buttonWrapper">
      <button class="btn btn-primary" type="button" @click="enterStream">Apply</button>
    </div> -->

    <!-- <Switcher></Switcher> -->
    <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">
             

              <span class="iconfont icon-camera"  v-on:click="onTest" style="margin: 0 auto;"></span>
              <span class="iconfont icon-record"  v-on:click="onTest" style="margin: 0 auto;"></span>
              <span class="iconfont icon-replay"  v-on:click="enterStream" style="margin: 0 auto;"></span>
              <span class="iconfont icon-hk-quit"  v-on:click="onTest" style="margin: 0 auto;"></span>
              
            </div>
        </footer>
  </div>
</template>

<script>
// import Switcher from '@/components/Switcher'
import contact from "../../vuex/contacts";
export default {
  name: "live",
  // components: {
  //   Switcher
  // },
  mixins: [window.mixin],
  data() {
    return {
      //mid:this.$route.query.mid,
      //user:this.$route.query.user,
      pageName: "直播",
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
        techOrder: ["html5"],
        sourceOrder: true,
        duration: 1,
        //flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [
          //   {
          //   type: 'rtmp/mp4',
          //   src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
          // },
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: ""
          }
        ],
        poster:
          "http://hls.open.ys7.com/openlive/8696ee60407747a0ab79d1943b1816f4.m3u8"
        // controlBar: {
        //   timeDivider: false, // 时间分割线
        //   durationDisplay: false, // 总时间
        //   progressControl: true, // 进度条
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全屏
        // },
      }
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
    onError() {
      console.log("onError");
      setTimeout(() => {
        this.enterStream();
      }, 1000);
    },
    onTest() {},
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true;
        this.currentTech = this.player.techName_;
        console.log("the player is readied");
      }
      //this.enterStream()
    },
    // record current time
    onTimeupdate(e) {
      console.log("currentTime", e.cache_.currentTime);
    },
    enterStream() {
      // console.log('enterStream')
      //this.playerOptions.sources[0].src = this.streams.hls
      //this.playerOptions.sources[0].src = this.streams.rtmp
      //  console.log('enterStream:',this.playerOptions.sources[0].src );
      //  location.reload();
      //this.$r.reload()
      //this.$route.go(0)
      //this.$router.go({path : '/wechat/video' , query: { province_id: "this.province_id"} })
      let player = this.$refs.videoPlayer.player;
      player.paused();
      player.load();
      // let src=this.playerOptions.sources[0].src
      // console.log(src)
      // if(!player.paused())
      // player.pause();
      //             console.log(src)
      player.src(this.playerOptions.sources[0]);
      player.load();
      player.play();
      this.playerOptions.autoplay = true;
    },
    changeTech() {
      if (this.currentTech === "Html5") {
        this.playerOptions.techOrder = ["html5"];
      } else if (this.currentTech === "Flash") {
        this.playerOptions.techOrder = ["flash"];
      }
      this.playerOptions.autoplay = true;
    }
  },
  /**
   * 3.在beforeMount和mounted之间，程序将上一步编辑好的html内容替换el属性指向的dom对象或者选择权对应的html标签里面的内容
   *
   * */
  mounted: function() {
    console.group("------mounted 挂载结束状态------");
    //console.log("mounted:"+this.$store.state.allContacts[0].src) ;
    //let src=this.$store.state.allContacts[this.mid-1].src;
    //console.log("mid:"+this.mid+"---src:"+src);
    //this.playerOptions.sources[0].src=src;
    let wx_id = this.$route.query.wx_id;
    console.log("user:" + wx_id);
    //let user= contact.getUserInfo(wx_id)
    console.log("user:" + contact.getCameraSrc(wx_id));
    this.playerOptions.sources[0].src = contact.getCameraSrc(wx_id);
  }
};
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


