<template>
<!--可复用的相册组件 这里只完成静态页面 不涉及数据-->
    <div class="album">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>相册</span>
            </div>
        </header>
        <div class="home-pic">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="http://p5iqmly4z.bkt.clouddn.com/superman.jpeg">
                    </div>
                </div>
                <div class="top-name _ellipsis">海哇</div>
            </div>
            <p class="sign">填坑小能手</p>
        </div>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">04</b>
                <b class="month">3月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/ai.jpg" alt="">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/iot.jpg" alt="">
                   
                </div>
                <div class="thumb-desc">
                  随便说说
                    <p class="number">共2张</p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">12</b>
                <b class="month">2月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/iot.jpg" alt="">
                     <img src="http://p5iqmly4z.bkt.clouddn.com/iot.jpg" alt="">
                </div>
                <div class="thumb-desc">
                    无人农场
                    <p class="number">共2张</p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">23</b>
                <b class="month">1月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="http://p5iqmly4z.bkt.clouddn.com/iot.jpg" alt="">
                </div>
                <div class="thumb-desc">
                    为小农赋能
                    <p class="number">共1张</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}
</script>
<style>
    @import "../../assets/css/album.css";
</style>