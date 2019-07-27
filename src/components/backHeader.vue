<template>
<div>
  <div class="head">
<a @click="goBack">
    <i class="iconfont icon-fanhui"></i>
  </a>
<h4>{{backHeaderTitle}}</h4>
  </div>   
</div>
  </template>

  <script>
export default {
methods: {
    goBack() {
      this.$router.back();
    },
  },
props: ['backHeaderTitle']

}
  </script>
  <style scoped>
.head {margin: 0 0.5rem;}
.iconfont {font-size: 1.5rem;color:black;}
.head h4{display: inline;font-size:1.4rem;margin-left:1rem;}
  </style>
  
  