import Vue from 'vue'
import Router from 'vue-router'
import Explore from '../view/Explore'
import My from '../view/My'
import Friends from '../view/Friends'
import Video from '../view/Video'
import leaderBoard from '../view/leaderBoard'
import playList from '../view/playList'
import moreSongList from '../view/moreSongList'
import login from '../view/login'
import search from '../view/search'
import searchResult from '../view/searchResult'
import playControl from '../view/playController'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/leaderBoard',
      name: 'leaderBoard',
      component: leaderBoard
    },
    {
      path: '/playList',
      name: 'playList',
      component: playList
    },
    {
      path: '/moreSongList',
      name: 'moreSongList',
      component: moreSongList
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult
    },
    {
      path: '/song/play',
      name: 'Song',
      component: playControl,
    },
  
  ]
})
