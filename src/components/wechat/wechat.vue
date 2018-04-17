<template>
    <!--海哇组件-->
  <div id="wechat">
      
    <ul class="wechat-list">
        <!--props传递消息对象 baseMsgObj -->
        <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
        <!-- <span>{{$store.state.msgList.baseMsg.length}} </span> -->
    </ul>
  </div>
</template>
<script>
    import search from "../common/search"
    import msgItem from "../wechat/msg-item"
    export default {
        components: {
            search,
            msgItem
        },
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "消息"
            }
        },

         async created() {
            //console.log("wechat --> created!");
            await this.$store.dispatch("fetchDeviceMsg",{
            deviceSerial: "839338719"});
            //console.log(JSON.stringify(this.$store.state.msgList.baseMsg))
            },
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
</style>