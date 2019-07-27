<template>
  <div>
 <div class="circles-box">
    <ul>
       <li>
         <router-link to="/dailyRecommendation">
        <div class="circle-box">
          <i class="iconfont icon-diantaizhibo"></i>
        </div>
        <h6>私藏推荐</h6>
        </router-link>
      </li>

       <li>
        <router-link :to="{path: '/moreSongList'}">
        <div class="circle-box">
          <i class="iconfont icon-diantaizhibo"></i>
        </div>
        <h6>私人FM</h6>
        </router-link>
      </li>
      <li>
         <router-link to="/leaderBoard">
          <div class="circle-box">
          <i class="iconfont icon-diantaizhibo"></i>
          </div>
          <h6>最新电音</h6>
        </router-link>
      </li>
      <li>
         <router-link to="/FM">
        <div class="circle-box">
          <i class="iconfont icon-diantaizhibo"></i>
        </div>
        <h6>Sati空间</h6>
        </router-link>
      </li>
       <li>
         <router-link to="/liveRadio">
        <div class="circle-box">
          <i class="iconfont icon-diantaizhibo"></i>
        </div>
        <h6>因乐交友</h6>
        </router-link>
      </li> 
    </ul>
  </div>

      <div class="play-list-box">
    <ul class="play-list-group">
      <li class="play-list-item">
        <!-- TODO: 下面的data -->
        <router-link :to="{name: 'RecentPlay'}">
          <div class="icon-container">
            <i class="iconfont icon-icon-"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">本地音乐</span>
            <span class="play-list-count">（{{recentPlayCount}}）</span>
          </div>
        </router-link>
      </li>
      <li class="play-list-item">
        <!-- TODO: 下面的data -->
        <router-link :to="{name: 'RecentPlay'}">
          <div class="icon-container">
            <i class="iconfont icon-play"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">最近播放</span>
            <span class="play-list-count">（{{recentPlayCount}}）</span>
          </div>
        </router-link>
      </li>
      <li class="play-list-item">
        <!-- TODO: 下面的data -->
        <router-link :to="{name: 'RecentPlay'}">
          <div class="icon-container">
            <i class="iconfont icon-xiazai"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">下载管理</span>
            <span class="play-list-count">（{{recentPlayCount}}）</span>
          </div>
        </router-link>
      </li>
      <li class="play-list-item">
        <!-- TODO: 下面的data -->
        <router-link :to="{name: 'RecentPlay'}">
          <div class="icon-container">
            <i class="iconfont icon-diantaizhibo"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">我的电台</span>
            <span class="play-list-count">（{{recentPlayCount}}）</span>
          </div>
        </router-link>
      </li>
      <li class="play-list-item">
        <router-link :to="{path: '/play-list-detail',query: {id: likelistId,}}">
          <div class="icon-container">
            <i class="iconfont icon-wodeshoucang"></i>
          </div>
          <div class="play-list-desc">
            <span class="play-list-title">我的收藏</span>
            <span class="play-list-count">（{{likelistCount}}）</span>
          </div>
        </router-link>
      </li>
    </ul>
    </div>

<div class="songlistuser">
<div class="songlistuser-head">
<div class="left"><i class="iconfont icon-xiajiantou"></i></div>
<span>创建的歌单（{{songlistusernum}}）</span>
<div class="right"><i class="iconfont icon-jiahao"></i>
<i class="iconfonticon-caozuo"></i></div>
</div>
<div class="songlistcontent">
<ul>
    <li>
        <div>

        </div>
    </li>
</ul>

</div>

</div>

<div class="songlist-recommodation-box">
    <div class="recom-songlist-header">
      <h4>推荐歌单</h4>
      <div class="recom-songlist-header-right">
         <router-link :to="{path: '/moreSongList'}">歌单广场</router-link>
        </div>
        </div>
        <div class="songlist-box">
    <ul class="songlist-group">
      <li v-for="(item, index) in recomSongList" :key="index" class="songlist-item">
        <router-link :to="{path: '/playList', query: {id: item.id}}">
          <div class="img-wrap">
            <img :src="item.picUrl" alt class="songlist-cover">
          </div>
          <p class="songlist-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
    </div>
  </div>


  </div>
</template>


<script>
  import { getRecommendSongList } from "../api/api";


export default {
  name: 'My',
  data() {
    return {
      likelistId: null,
      recentPlayCount:null,
      likelistCount:null,
      songlistusernum:null,
      recomSongList: null,
    };
  },
  mounted () {
      this.getRecom();
  },
  methods: {
   getRecom () {
      getRecommendSongList()
        .then((res) => {
          this.recomSongList = res.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

};
</script>

<style scoped >
.img-wrap {margin: 2rem auto 0;}
.img-wrap img{width: 100%;border-radius:0.5rem;}
.circles-box ul li{float:left;width:20%;}
.circle-box{width:2rem;height:2rem;border-radius:50% 50%;background-color:red;}
.circle-box .iconfont{font-weight:bold;color:white;font-size:1.5rem;}
.play-list-box{float:left;width:100%;}
.play-list-box ul li{height:2.5rem;border-top: 1px solid #e4e4e4;font-size: .16rem;}
.icon-container {box-sizing: border-box;display: inline-block;width: 10%;line-height:2.5rem;}
.iconfont {font-size: 1.4rem; }
 .play-list-desc {box-sizing: border-box;display: inline;font-size: 1rem;margin-left:1.2rem;}
 .recom-songlist-header{padding-top:1.2rem;}
.recom-songlist-header ul{display:inline;}
.recom-songlist-header ul li{display:inline;padding-right:0.5rem;}
.recom-songlist-header h4{display:inline;}
.recom-songlist-header-right{float:right;text-align:center;border-radius:0.6rem;border:1px solid gray;}
.recom-songlist-header-right a{justify-content:center;font-size:0.7rem;padding:0 0.5rem;}
.songlist-box ul{display: flex; justify-content: space-between;flex-wrap: wrap;}
.songlist-box ul li{position: relative;width:32%;}
/*.songlist-group {display: flex;justify-content: space-between;flex-wrap: wrap; }
.songlist-item {position: relative;width: 30%;}*/
.img-wrap {border-radius: 0.02rem;overflow: hidden;}
.songlist-cover {width: 100%;height: 100%;}
.songlist-title {font-size: .2rem;line-height: 0.8rem;overflow: hidden;}
.songlistuser-head .left{float:left;}
.songlistuser-head .right{float:right;}
</style>
