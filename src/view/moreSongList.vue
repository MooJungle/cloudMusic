<template>
<div id="moreSongList">
<section  class="header">
    <back-header backHeaderTitle="歌单广场" class="goback"></back-header>
    <div class="head-nav">
        <ul>
            <li ><router-link :to="{path: '/moreSongList'}">推荐</router-link></li>
            <li v-for="(item, index) in cat" :key="index" class="songlist-cat">
                <router-link :to="{path: '/moreSongList', query: {cate: item.name}}">{{item.name}}</router-link>
                </li>
        </ul>
       
    </div>
<div class="picshow">


</div>
</section>

<section class="songlist">
        <div class="songlist-box">
    <ul class="songlist-group">
      <li v-for="(item, index) in songListData" :key="index" class="songlist-item">
        <router-link :to="{path: '/songList', query: {id: item.id}}">
          <div class="img-wrap">
            <img :src="item.coverImgUrl" alt class="songlist-cover">
            <div class="play-count-box">
              <i class="iconfont icon-erji"></i>
              {{(item.playCount/10000).toFixed(0)}}万
            </div>
          </div>
          <p class="songlist-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
    </div>
</section>

    </div>
    </template>


    <script>
import BackHeader from "../components/backHeader";
import {getCatList, getSongListCat } from "../api/api";

export default {
  name: "moreSongList",
   data() {
    return {
        songListData:[],
        cat:[],
        catall:[],
        cate:'',
    };
  },
   components: {
    BackHeader
  },
   methods: {
     getCatList() {
      getCatList().then(res => {
           this.catall=res.sub;
       this.cat=res.sub.slice(0,8);
      });
    },  
   getSongListCat() {
      getSongListCat().then(res => {
       this.songListData = res.playlists;
      });
    }
    
  },

  created() {
    this.getCatList();
    this.getSongListCat();
  }
}
</script>
<style  scoped>
.head-nav ul li{display: inline;margin-left:0.4rem;}
.songlist-recommodation-box{border-top:0.02px solid #efefef;float:left;}
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
.img-wrap {border-radius: 0.5rem;overflow: hidden;}
.songlist-cover {width: 100%;height: 100%;}
.play-count-box {position: absolute;top: 0.2rem;right: 0.2rem;color: #f1f1f1;font-size:0.2rem;font-weight:bold;}
.songlist-title {font-size: .2rem;line-height: 0.8rem;overflow: hidden;}
.selected{font-weight:bold;}

</style>