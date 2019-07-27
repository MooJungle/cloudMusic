<template>
<div id="Explore">
   <swiper v-if="banners.length>1" :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
      <div class="img-wrap">
        <img class="banner-img swiper-lazy" :src="item.imageUrl" alt>
        <div class="swiper-lazy-preloader"></div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

   <div class="circles-box">
    <ul>
       <li>
         <router-link to="/dailyRecommendation">
        <div class="circle-box">
          <i class="iconfont icon-rili"></i>
        </div>
        <h6>每日推荐</h6>
        </router-link>
      </li>

       <li>
        <router-link :to="{path: '/moreSongList'}">
        <div class="circle-box">
          <i class="iconfont icon-jiarugedan"></i>
        </div>
        <h6>歌单</h6>
        </router-link>
      </li>
      <li>
         <router-link to="/leaderBoard">
          <div class="circle-box">
          <i class="iconfont icon-paixingbang"></i>
          </div>
          <h6>排行榜</h6>
        </router-link>
      </li>
      <li>
         <router-link to="/FM">
        <div class="circle-box">
          <i class="iconfont icon-xianxing_diantai"></i>
        </div>
        <h6>电台</h6>
        </router-link>
      </li>
       <li>
         <router-link to="/liveRadio">
        <div class="circle-box">
          <i class="iconfont icon-zhibohuifang"></i>
        </div>
        <h6>直播</h6>
        </router-link>
      </li> 
    </ul>
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
            <div class="play-count-box">
              <i class="iconfont icon-customerservice"></i>
              {{(item.playCount/10000).toFixed(0)}}万
            </div>
          </div>
          <p class="songlist-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
    </div>
  </div>
 <div class="newList">
    <div class="recom-songlist-header">
      <ul>
      <li v-for="(item,index) in newList" :key="index" @click="chosefromnew(index)" :class="{'selected':flag==index}"><a href="javascript:void(0);">{{item}}</a></li>
      </ul>
      <div class="recom-songlist-header-right">
         <router-link to="/newmore">{{flag==0?newCDorSong[0]:newCDorSong[1]}}</router-link>
        </div>
        </div>
        <div class="songlist-box">
    <ul class="songlist-group">
      <li v-for="(item, index) in flag==0?newCDList:newSongList" :key="index" class="songlist-item">
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



  <div class="recommodation"><h1>云村推荐</h1></div>
  
  </div>

</template>

<script>
import 'swiper/dist/css/swiper.css' 
import {swiper,swiperSlide} from 'vue-awesome-swiper' // 引入Vue版本的swiper插件
import { getBanner,getRecommendSongList,getNewCD,getNewSong } from "../api/api";
export default {
  name: 'Explore',
  components: {
    swiper,
    swiperSlide
  },
  
 data() {
    return {

      swiperOption: {
        autoplay: {
          delay:300000000,
          disableOnInteraction: false  // 用户操作swiper后，不停止自动播放
        },
　　     observer: true, //修改swiper自己或子元素时，自动初始化swiper 
　　     observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        lazy: {
          loadPrevNext: true // 同时预加载前一个和后一个元素
        }
      },
      banners: [],
      recomSongList: null,
      newCDList: [],
      newSongList: [],
      newData:[],
      flag:0,
      newList:['新碟','新歌'],
      newCDorSong:['更多新碟','新歌推荐'],
  
    };
  },
  methods: {
    getBanner () {
      getBanner().then(data => {
        this.banners = data.banners;
      });
    },
    getRecom () {
      getRecommendSongList()
        .then((res) => {
          this.recomSongList = res.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNewCD () {
      getNewCD().then(data => {
          this.newCDList = data.albums.slice(0, 3);
        });
    },
     getNewSong () {
      getNewSong().then(data => {
          this.newSongList = data.result.slice(0, 3);
        });
    },
    chosefromnew (index) {
      this.flag=index;
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
    
  },
  mounted () {
    this.getBanner();
    this.getRecom();
    this.getNewCD();
    this.getNewSong ();
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.img-wrap {margin: 2rem auto 0;}
.img-wrap img{width: 100%;border-radius:0.5rem;}
.circles-box ul li{float:left;width:20%;}
.circle-box{text-align:center;width:2.4rem;height:2.4rem;border-radius:50% 50%;background-color:red;}
.circle-box i{font-weight:bold;color:white;font-size:1.5rem;line-height:2.4rem;}
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
.img-wrap {border-radius: 0.02rem;overflow: hidden;}
.songlist-cover {width: 100%;height: 100%;}
.play-count-box {position: absolute;top: 2rem;right: 0.2rem;color: #f1f1f1;font-size:0.2rem;font-weight:bold;}
.songlist-title {font-size: .2rem;line-height: 0.8rem;overflow: hidden;}
.selected{font-weight:bold;}
</style>
