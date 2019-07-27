<template>
  <div id="app">
    <div class="header" v-if="shouldHaveNav">
<div class="sidebar"><router-link to="/side"><i class="iconfont icon-menu"></i></router-link> </div>
<div class="nav" >
  <ul>
    <li><router-link to="/My">我的</router-link></li>
    <li><router-link to="/Explore">发现</router-link></li>
    <li><router-link to="/Friends">朋友</router-link></li>
    <li><router-link to="/video">视频</router-link></li>
  </ul>
</div>
<div class="search"><router-link to="/search"><i class="iconfont icon-search"></i></router-link></div>
    </div>
<div class="content">
  <router-view></router-view>
</div>


<div class="bottom">
  
    <div class="pic"><img src="" alt=""></div>
    <div><p>晚安</p><p>横滑可以切换上下首喔</p></div>
    <div class="play"></div>
    <div class="playlist"></div>
  
</div>
</div>


 
</template>

<script>
export default {
  name: 'App',

  
  computed: {
   shouldHaveNav(){
      return ['/','/Explore', '/My','/Friends','/video','/login'].indexOf(this.$route.path) !== -1
    }
}
}


</script>

<style>
.header{width:100%;padding-top:15px;}
.sidebar{float:left;}
.nav{color:gray;width:100%;height:1.5rem;}
.nav ul {display:inline;}
.nav ul li{display:inline;margin-left:1rem;}
.nav ul li a{color:gray;text-decoration: none;font-size: 1.2rem;}
.search{float:right;}
.content{position:relative;}
.bottom{position:fixed;bottom:0;}
.search{margin-top:-1.5rem;}
.search i{font-size: 1.8rem;color:gray;}


</style>
