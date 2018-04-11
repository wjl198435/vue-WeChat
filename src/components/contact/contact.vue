<template>
    <div id="contact">
        <section>
            <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
                <router-link to="/contact/new-friends" class="weui-cell">
                    <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/device-setup.jpeg"> </div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>新的设备</p>
                    </div>
                </router-link>
                <router-link to="/contact/group-list" class="weui-cell">
                    <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/device-manage.jpeg"> </div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>设备管理</p>
                    </div>
                </router-link>
                <router-link to="/contact/tags" class="weui-cell">
                    <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"> </div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>订阅号</p>
                    </div>
                </router-link>
                <router-link to="/contact/official-accounts" class="weui-cell">
                    <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/base-server.jpeg"></div>
                    <div class="weui-cell_bd weui-cell_primary">
                        <p>基础服务</p>
                    </div>
                </router-link>
            </div>
            
            <!--联系人集合-->
            <template>
                
                <div v-if="videoList.length>0"  class="weui-cells__title">视频</div>
                <div   class="weui-cells" >
                    <router-link :key="item.deviceSerial" :to="{path:'/contact/details',query:{deviceSerial:item.deviceSerial}}" class="weui-cell weui-cell_access" 
                    v-for="item in videoList"  tag="div">
                         <div class="weui-cell__hd" >
                            <img :src='imgBaseUrl+"camera.jpg"'  class="home__mini-avatar___1nSrW" >
                        </div>
                           <ul style="margin:0; padding:0px; list-sytle:none">
                            <li>
                                <span style="font-size:1.0rem"> 
                                    {{item.deviceName}} 
                                </span> 
                            </li> 
                            <li >
                                <span :class="[item.status?'iconfont icon-online':'iconfont icon-offline']" ></span>
                                <span class="iconfont icon-smart"></span>
                            </li>
                        </ul>
                    </router-link> 
                </div>
            </template>             
</section>
<!--检索-->
<!-- <div class="initial-bar">
    <span @click="toPs(i)" v-for="i in contactsInitialList">{{i}}</span>
</div> -->
</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  mixins: [window.mixin],
  data() {
    return {
      pageName: "云服务"
    };
  },
  async created() {
    console.log("contact--> created!");
    await this.$store.dispatch("fetchVideoes");
  },
  mounted() {
    // mutations.js中有介绍
    this.$store.commit("toggleTipsStatus", -1);
  },
  activated() {
    this.$store.commit("toggleTipsStatus", -1);
  },
  computed: {
    ...mapState([
      "imgBaseUrl",
      "videoList",
      "sensorList",
      "switchList",
      "arlamList"
    ])
  },
  mounted() {
    //console.log("mounted videoList:"+JSON.stringify())
  },
  methods: {
    toPs(i) {
      window.scrollTo(0, this.$refs["key_" + i][0].offsetTop);
    }
  }
};
</script>
<style>
@import "../../assets/css/contact.css";
</style>