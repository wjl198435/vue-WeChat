<template>
    <!--新的朋友组件 交互没写完-->
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
        <header id="wx-header">
            <div class="other"><span>添加服务</span></div>
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>云服务</span>
                </router-link>
                <span>新的服务</span>
            </div>
        </header>
         <!--这里的 search 组件的样式也需要修改一下-->
        <search></search>
        <!-- <div class="weui-cells margin-top-0">
            <router-link to="/contact/new-friends/mobile-contacts" tag="div" class="weui-cell">
                <dl class="add-tel-address">
                    <dt><span class="iconfont icon-iphone-address"></span></dt>
                    <dd>添加手机联系人</dd>
                </dl>
            </router-link>
        </div> -->
        <div class="weui-cells message-list">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/camera.jpg" alt=""> </div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>视频</b></p>
                    <p><span>来自海康威视</span></p>
                </div>
                <div class="weui-cell__ft">已添加</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/th.jpeg" alt=""></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>温度传感器</b></p>
                    <p><span>来自博士科技</span></p>
                </div>
                <div class="weui-cell_ft">已添加</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/switch.jpg" alt=""></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>智能开关</b></p>
                    <p><span>来自鸿雁智能</span></p>
                </div>
                <div class="weui-cell_ft"> 
                    <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">
                        重试
                    </a> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import search from "../common/search"
    export default {
        components: {
            search
        },
        data() {
            return {
                pageName: "新的朋友"
            }
        }
    }
</script>
<style>
    @import "../../assets/css/new-friends.css";
</style>