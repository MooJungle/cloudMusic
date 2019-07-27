<template>
  <div id="search">
<section  class="header">
    <back-header class="goback"></back-header>
    <div class="search-con">
        <input type="search" value="" class="search-box">
        <router-link to="/searchResult">歌手</router-link>
    </div>
    </section>

<section v-show="ifshowHistorySearch" class="history-search ">
    <h5>历史纪录</h5>
    <div class="delete-history-search">删除</div>
    <ul>
        <li v-for="(item, index) in searchitems" :key="index"><router-link to="/searchResult">{{item}}</router-link></li>
    </ul>
    
</section>

<section class="search-hot">
  <h5>热搜榜</h5>
    <ul>
        <li  v-for="(item, index) in searchHot" :key="index">
          
            <router-link to="/searchResult">{{index}} {{item.first}}</router-link>
            
            </li>
              
    </ul>


</section>

  </div>


</template>
<script>
//搜索时数据push进searchitems暂时未做，搜索结果未做
import BackHeader from "../components/backHeader";
import { getHotSearch } from '../api/api';
export default {
  name: 'Search',
   components: {
    BackHeader
  },
  data() {
    return {
     ifshowHistorySearch:true,
     searchitems:['独家记忆','孤独患者','遇见','千与千寻','拜拜','fire'],
     ishot:true,
     searchHot:[],
    };
  },

  methods: {
getData() {
      getHotSearch().then(res => {
           this.searchHot=res.result.hots;
          

      });
    }, 
  },
  created() {
    this.getData();
  },
}

</script>
 <style  scoped>
 .goback{float:left;}
input{width:70%;height:2rem;border:none;border-bottom:solid black 1px;}
.history-search{margin-top:2rem;}
.history-search h5{display: inline;}
.delete-history-search{float:right;}
.history-search ul li{display: inline;padding:0 0.8rem;margin:0 0.5rem;border-radius:0.5rem;background-color:rgba(202, 195, 195, 0.25);}
.search-hot{margin-top:2rem;}
.search-hot ul li{font-size: 1.1rem;height:2.5rem;}
.search-hot ul li a{color:gray;}
</style>
