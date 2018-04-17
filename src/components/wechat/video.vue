<template>
  <div >
    <header id="wx-header">
            <div class="center">
                <router-link :to="{path:'/contact/details',query: {deviceSerial:qDeviceSerial}}" tag="div" class="iconfont icon-return-arrow">
                    <span>详细资料</span>
                </router-link>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
        </header>
   
    <video-player 
    class="vjs-custom-skin" 
    ref="videoPlayer" 
    :options="playerOptions" 
    
    @ready="onPlayerReadied($event)" 
    @timeupdate="onTimeupdate($event)"
    @error="onError($event)" >
    </video-player>

    <toast v-model="showToast" position="middle" :value=true :time="5000" text="设备不在线" type="warn"></toast>

    <!-- <footer class="dialogue-footer">
      <div class="component-dialogue-bar-person">
      <span class="iconfont icon-camera"  v-on:click="onTest" style="margin: 0 auto;"> </span>
      <span class="iconfont icon-record"  v-on:click="onTest" style="margin: 0 auto;"></span>
      <span class="iconfont icon-replay"  v-on:click="enterStream" style="margin: 0 auto;"></span>
      <span class="iconfont icon-hk-quit"  v-on:click="onTest" style="margin: 0 auto;"></span> 
      </div>
    </footer> -->

    

<div>
  <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/images/contact_add-friend-contacts.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/images/contact_add-friend-my-qr.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../../assets/images/contact_add-friend-my-qr.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/images/contact_add-friend-my-qr.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
</div>
  </div>


</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'
import contact from "../../vuex/contacts";
import { Toast } from 'vux'
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: "live",

  mixins: [window.mixin],
  data() {
    return {
      qDeviceSerial:this.$route.query.deviceSerial,
      pageName: "直播",
      initialized: false,
      currentTech: "",
      streams: {
        rtmp: "",
        hls: ""
      },
      playerOptions: {
        overNative: true,
        autoplay: true,
        controls: true,
        techOrder: ["html5"],
        sourceOrder: true,
        duration: 1,
        notSupportedMessage:"哎呀,设备不在线!",
        
        html5: { hls: { withCredentials: false } },
        sources: [
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

  components:{
   Toast,
    Tabbar,
    TabbarItem,
    Group,
    Cell

  },

  computed: {
    ...mapState({
       currentLive: state => state.currentLive,
       deviceSerial: state => state.currentLive.deviceSerial
    }),

    ...mapGetters({
      showToast: 'isShowToast',
    }),

    player() {
      return this.$refs.videoPlayer.player;
    },
    currentStream() {
      return this.currentTech === "Flash" ? "RTMP" : "HLS";
    }
  },
  methods: {
      onError(player) {
     // JSON.stringify(player)
     // player.message="不兼容啊"
      setTimeout(() => {
        this.enterStream();
      }, 1000);
    },
    
    onTest(){
     console.log("onTest");
    },

    onPlayerReadied(player) {
      //console.log("the player is readied",JSON.stringify(player));
      if (!this.initialized) {
        this.initialized = true;
        this.currentTech = this.player.techName_;
        //console.log("the player is readied");
      }
      
    },
    // record current time
    onTimeupdate(e) {
      //console.log("currentTime", e.cache_.currentTime);
    },
    enterStream() {
      
      if( !this.currentLive &&this.currentLive.length<1 &&this.currentLive[0].status!==1){
        this.playerOptions.autoplay = false;
        return;
      }
      let player = this.$refs.videoPlayer.player;
      player.paused();
      player.load();
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
   
   console.log("mounted:"+JSON.stringify(this.currentLive)) 
   if(!this.currentLive && this.currentLive.length<1 && this.currentLive[0].status!==1){
     this.playerOptions.autoplay = false;
     return;
   }else{
     if(this.currentLive[0]!==null){
        this.playerOptions.sources[0].src = this.currentLive[0].hls;
        console.log("mounted", this.currentLive[0].state)
     }
       
   }
    
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


