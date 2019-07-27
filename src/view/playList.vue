<template>
<div>
    <section class="play-list-detail-top" ref="playListDesc">
      <back-header backHeaderTitle="歌单" class="goback"></back-header>
     <div class="search"><router-link to="/search"><i class="iconfont icon-search"></i></router-link></div>
      <div class="back-img">
         <img :src="coverImgUrl" />
      </div>
     
      <div class="img-wrap">
        <img :src="coverImgUrl" class="cover-img"/>
      </div>
      <div class="description">
      <p class="play-list-title">{{playListTitle}}</p>
      </div>
      <div class="controller">
       <ul >
        <li class="circle-box">
          <i class="iconfont icon-message"></i>
          <h6>评论</h6>
        </li>
        <li class="circle-box">
          <i class="iconfont icon-fenxiang"></i>
          <h6>分享</h6>
        </li>
        <li class="circle-box">
          <i class="iconfont icon-xiazai"></i>
          <h6>下载</h6>
        </li>
        <li class="circle-box">
          <i class="iconfont icon-duoxuan"></i>
          <h6>多选</h6>
        </li>
       </ul>
       </div>
    </section>
     <section class="play-list-detail-bottom">
      <div class="play-list-control">
        <div class="play-all">
          <i class="iconfont icon-play"></i>
          <span>播放全部（共{{trackCount}}首）</span>
        </div>
        <div class="star-me">+ 收藏（{{subscribedCount }}）</div>
      </div>
      <div class="track-list">
       <ul >
    <li  v-for="(item, index) in tracks" :key="index">
      <router-link
        :to="{name: 'Song', query: { musicId:item.id}, params: {coverImgUrl: item.al.picUrl}}"
        class="link-to-play-control"
      >
        <div class="track-rank">{{index + 1}}</div>
        <div class="track-info">
          <p class="track-title">{{item.name}}</p>
          <p class="track-desc"> {{item.ar[0].name}}-{{item.al.name}}</p>
        </div>
        <div class="track-control">

        </div>
      </router-link>
    </li>
  </ul>
  </div>
    </section>


</div>

</template>

<script>
import BackHeader from "../components/backHeader";
import {getPlayListDetail } from "../api/api";

export default {
  name: "playList",
   data() {
    return {
      coverImgUrl: "",
      playListTitle: "",
     author:"",
      tracks: [],
      trackCount: 0,
      subscribedCount: ""
    };
  },
   components: {
    BackHeader
  },
  methods: {
    getData() {
      getPlayListDetail(this.$route.query.id).then(res => {
        const { playlist } = res;
        this.coverImgUrl = playlist.coverImgUrl;
        this.playListTitle = playlist.name;
        this.updateTime =playlist.updateTime;
        this.tracks = playlist.tracks;
        this.trackCount = playlist.trackCount;
        this.subscribedCount = playlist.subscribedCount;
      });
    }
  },

  created() {
    this.getData();
  }
}

</script>

<style scoped>

.back-img{width:100%;height:280px;overflow: hidden;z-index: -1;position:absolute; filter: blur(10px);}
.goback{float:left;}
.img-wrap{padding:1rem 1.5rem;width:30%;}
.cover-img {width: 100%;margin-top:1rem;float:left;}
.description{color:white;width:60%;display: inline-block; margin-left: 0.6rem;}
.play-list-title{font-weight: bold;}
.controller{clear:both;}
.controller ul li{display: inline-block;width:20%;margin:1rem auto;}
.play-list-detail-bottom{margin-top:-2.5rem;}
.play-list-control{width:100%;height:3rem;border-radius:20% 20% 0 0;background-color:rgb(212, 208, 208);}
.play-all{display: inline;line-height:3rem;}
.star-me{float:right;margin-top:0.4rem;line-height:2.2rem;border-radius:1.5rem;background-color:red;}
.link-to-play-control {display: flex; height: 2.5rem;}
.track-list ul li{width:100%;height:3rem;}
.track-rank {width: 8%;color:gray;line-height:3rem;margin-top:0.5rem;}
.track-info {width: 70%;height:3rem;}
.track-title{font-size:0.9rem;}
.track-desc {font-size: 0.5rem;color: #757575;line-height:0.5rem;margin-top:-1rem;text-overflow:ellipsis;white-space:nowrap;}
.circle-box i{font-size:1.6rem;color:white;font-weight:bold;}
.circle-box h6{margin-top:0.2rem;color:white;font-weight:bold;}

.search{margin-top:0rem;}
</style>
