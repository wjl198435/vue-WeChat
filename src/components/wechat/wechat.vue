<template>
    <!--海哇组件-->
  <div id="wechat">
      
    <ul class="wechat-list">
        <!--props传递消息对象 baseMsgObj -->
        <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" ></msg-item>
        <!-- <span>{{$store.state.msgList.baseMsg.length}} </span> -->
    </ul>
  </div>
</template>
<script>
import search from "../common/search";
import msgItem from "../wechat/msg-item";
import { mapState } from "vuex";
export default {
  components: {
    search,
    msgItem
  },
  mixins: [window.mixin],
  data() {
    return {
      pageName: "消息"
    };
  },

  computed: {
    ...mapState([
      "imgCDNBaseUrl",
      "videoList",
      "sensorList",
      "switchList",
      "arlamList"
    ])
  },

  

  async mounted() {
    await this.$store.dispatch("fetchVideoes");
    console.log("wechat --> created!", "videoList" + this.videoList.length);

    this.videoList.forEach(element => {
      //console.log(JSON.stringify(element));
      //await this.$store.dispatch("fetchDeviceMsg", {
     //deviceSerial: ""
    //});
    });

     for (var i=0,len=this.videoList.length; i<len; i++)
    {
        
        let data = await this.$store.dispatch("fetchDeviceMsg", {
        deviceSerial: this.videoList[i].deviceSerial
        });
        if(this.videoList[i].deviceSerial==="839338877"){
           console.log(JSON.stringify(this.videoList[i]))
           console.log(JSON.stringify(data))
        }
    }
    
    //console.log(JSON.stringify(this.$store.state.msgList.baseMsg))
  }
};
</script>
<style>
@import "../../assets/css/wechat.css";
</style>