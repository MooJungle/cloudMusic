import axios from 'axios';

// axios.defaults.baseURL = ' http://localhost:3000/';
axios.defaults.baseURL = ' http://meiyun.info:3000/';
axios.interceptors.response.use(res => res.data, err => Promise.reject(err.response.data));

// 获取主页轮播图的api
export const getBanner = () => axios.get('/banner');

//  获取主页推荐歌单的api
export const getRecommendSongList = () => axios.get('/personalized',{
  params: {
   limit:6,
   random: Math.random(),
  },
});

//  获取主页新碟
export const getNewCD = () => axios.get('/album/newest');

//  获取主页新歌
export const getNewSong = () => axios.get('/personalized/newsong');

//获取榜单数据
export const getToplistDetail = () => axios.get('/toplist/detail');

//获取歌单列表
export const getPlayListDetail = id => axios.get('/playlist/detail', {
    params: {
      id,
      random: Math.random(),
    },
  });

//获取歌单分类
  export const getCatList = () => axios.get('/playlist/catlist');
//获取分类歌单
  export const getSongListCat = () => axios.get('/top/playlist',{
    params: {
      cate:"",
      random: Math.random(),
    },

  });


  //获取登陆接口
  export const login = (phone, password) => axios.get('/login/cellphone', {
    params: {
      phone,
      password,
      random: Math.random(),
    },
    withCredentials: true,
  });

//获取用户喜欢列表和播放列表
  export const getUserLikelist = uid => axios.get('/likelist', {
    params: {
      uid,
      random: Math.random(),
    },
    withCredentials: true,
  });
  
  export const getUserPlaylist = uid => axios.get('/user/playlist', {
    params: {
      uid,
      random: Math.random(),
    },
  });

  //获取热搜列表
  export const getHotSearch = () => axios.get('/search/hot');


  export const getMusicUrl = musicId => axios.get('/song/url', {
    params: {
      musicId:id,
    },
    withCredentials: true,
  });
  
  export const toggleStarTheSong = (musicId, like) => axios.get('/like', {
    params: {
      id: musicId,
      like,
    },
    withCredentials: true,
  });