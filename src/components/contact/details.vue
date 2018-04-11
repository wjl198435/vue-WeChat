<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>云设备</span>
                </router-link>
                <span>详细资料</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><img :src='imgBaseUrl+"camera.jpg"' alt="" class="self-header" style="width:60px"></div>
                <!-- <span>{{currentVideo}}</span> -->
                <div class="weui-cell__bd">
                    <!-- <h4 class="self-nickname">{{userInfo.nickname}}<span class="gender" :class="[userInfo.sex===1?'gender-male':'gender-female']"></span></h4> -->
                    <h4 class="self-nickname">{{currentVideoInfo.deviceName}} &nbsp;<span :class="[currentVideoInfo.status?'iconfont icon-online':'iconfont icon-offline']" ></span></h4>
                    <p class="self-wxid" style="font-size: 13px;color: #999;">序列号: {{currentVideoInfo.deviceSerial}}</p>
                    <p class="nickname" style="font-size: 13px;color: #999;">型号:{{currentVideoInfo.model||'无'}}</p>
                </div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>设置备注和标签</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>状态</p>
                </div>
                <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                     <!-- <span v-for="item in userInfo.area">{{item}}&nbsp;&nbsp;&nbsp;</span>  -->
                     <span>{{status[currentVideoInfo.status]}}&nbsp;</span>
                     <span>{{defence[currentVideoInfo.defence]}}&nbsp;</span>
                     <span>{{isEncrypt[currentVideoInfo.isEncrypt]}}&nbsp;</span>
                     <span>{{alarmSoundMode[currentVideoInfo.alarmSoundMode]}}&nbsp;</span>
                     <span>{{offlineNotify[currentVideoInfo.offlineNotify]}}&nbsp;</span>
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>照片</p>
                </div>
                <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                    <div class="album-list">
                        <!-- <img :src="item.imgSrc" style="width:50px;margin:0 5px" v-for="item in userInfo.album"> -->
                    </div>
                </div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>更多</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>

         <div >
             
            <!-- <span class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">发命令</span> -->
            <router-link :to="{path:'/wechat/video',query: {deviceSerial}}" tag="span"    >
            <span class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">直播</span>
            </router-link>
             <a href="https://open.ys7.com/view/h5/e364754d10cc40408dcde63f6646fb28" class="weui-btn weui-btn_default" style="width:90% ;margin-top:20px;">分享直播</a>
        </div>

        
       


        <!-- <a href="javascript:;" class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">发消息</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" style="width:90%">视频</a> -->
        
    </div>
</template>
<script>
import { mapState } from "vuex";
import contact from "../../vuex/contacts";
export default {
  data() {
    return {
      
      pageName: "",
      deviceSerial: this.$route.query.deviceSerial
    };
  },
  computed: {
    ...mapState([
      "imgBaseUrl",
      "currentVideoInfo",
      "status",
      "defence",
      "isEncrypt",
      "alarmSoundMode",
      "offlineNotify"
    ])
    // userInfo() {
    //     return contact.getUserInfo(this.$route.query.wxid)
    // }
  },

  async mounted() {
    
    if(this.deviceSerial===null ||this.deviceSerial===this.currentVideoInfo.deviceSerial) return 
   
        await this.$store.dispatch("fetchVideoInfo", {
      deviceSerial: this.deviceSerial
    });
   
    const res = await this.$store.dispatch("fetchLiveAddress", {
      deviceSerial: this.deviceSerial,
      channelNo: 1
    });

   

    
  }
};
</script>
<style>

</style>