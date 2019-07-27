<template>
<div>
<back-header backHeaderTitle="排行榜"></back-header>
 <section class="official-list-box">
    <h2 class="official-list-title">官方榜</h2>
    <ul class="official-list">
      <li v-for="(item, index) in officialList" :key="index" class="offical-list-unit">
        <router-link :to="{path: '/playList', query: {id: item.id}}">
          <div class="img-wrap">
            <img :src="item.coverImgUrl" alt >
          </div>
          <div class="tracks-box">
            <p
              v-for="(track, indexOfTrack) in item.tracks"
              :key="indexOfTrack"
              class="track-title"
            >{{ indexOfTrack + 1}}.{{track.first}} - {{track.second}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>


   <section class="top-list-box">
    <h2 class="top-list-item-title">推荐榜</h2>
    <ul class="top-list">
      <li v-for="(item, index) in recommendList" :key="index" class="top-list-unit">
        <router-link :to="{path: '/playList', query: {id: item.id}}">
          <div class="img-wrap">
            <img :src="item.coverImgUrl" alt class="coverImg">
          </div>
          <p class="top-list-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </section>

<section class="top-list-box">
    <h2 class="top-list-item-title">全球榜</h2>
    <ul class="top-list">
      <li v-for="(item, index) in internationalList" :key="index" class="top-list-unit">
        <router-link :to="{path: '/playList', query: {id: item.id}}">
          <div class="img-wrap">
            <img :src="item.coverImgUrl" alt class="coverImg">
          </div>
          <p class="top-list-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </section>

  <section class="top-list-box">
    <h2 class="top-list-item-title">更多榜单</h2>
    <ul class="top-list">
      <li v-for="(item, index) in moreList" :key="index" class="top-list-unit">
        <router-link :to="{path: '/playList', query: {id: item.id}}">
          <div class="img-wrap">
            <img :src="item.coverImgUrl" alt class="coverImg">
          </div>
          <p class="top-list-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
import BackHeader from "../components/backHeader"
import { getToplistDetail } from "../api/api";
export default {
  name:"leaderBoard",
   data() {
    return {
      officialList: [],
      recommendList: [],
      internationalList: [],
      moreList: []
    };
  },
  components: {
    BackHeader,
  },

   mounted() {
    getToplistDetail()
      .then(res => {
        const { list } = res;
        this.officialList = list.slice(0, 4);
        this.recommendList = list.slice(5, 10);
        this.internationalList = list.slice(10, 16);
        this.moreList = list.slice(16);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped >
.official-list-box ul li{display: flex; height:100%;}
.official-list-box .img-wrap{width:40%;float:left;}
.img-wrap img{width: 100%;border-radius:0.5rem;}
.tracks-box p{color: gray;font-size: 0.8rem;}
.top-list {padding-top: 0.1rem;display: flex;flex-wrap: wrap}
.top-list-box ul li{display:inline-block;width:32%;margin:0 0.12rem;}

</style>