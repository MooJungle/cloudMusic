<template>
<div id="login">
<section class="login-wrap">
    <back-header title="手机号登录"></back-header>
    <form action @submit="tryToLogin">
      <div class="phone-number-container">
        <label>
          <i class="iconfont icon-shouji"></i>
          <span class="country-code">+86</span>
        </label>
        <input
          class="tel-input"
          type="tel"
          autofocus
          v-model="tel"
          required
          pattern="^1[34578]\d{9}"
        >
        <button class="clean-btn" @click="cleanTel">
          <i class="iconfont icon-chahao"></i>
        </button>
      </div>
      <div class="password-container">
        <label for>
          <i class="iconfont icon-suo"></i>
        </label>
        <input
          class="password-input"
          type="password"
          placeholder="请输入密码"
          v-model="password"
          required
        >
      </div>
      <div class="login-btn-container">
        <input class="login-btn" type="submit" value="登录">
      </div>
    </form>
    <!-- <reminder :word="reminderWord" :ifShow="reminderFlag" :callback="resetReminder"></reminder> -->
      <div :class="reminderWrapClassName" ref="reminderWrap" @click="hiddenReminder">
    <div :ifShow="reminderFlag"  :word="reminderWord" :callback="resetReminder" class="reminder-container">{{word}}</div>
  </div>


  </section>


</div>
</template>


<script>
import { mapActions } from 'vuex';
import BackHeader from '../components/backHeader';
import { login } from '../api/api';


export default {
  data() {
    return {
      tel: null,
      password: null,
      reminderFlag: false,
      reminderWord: '',
    };
  },
    components: {
    BackHeader,
  },
  methods: {
    ...mapActions(['getThenSetLoginStatus']),
    cleanTel() {
      this.tel = null;
    },
    async tryToLogin(e) {
      e.preventDefault(); // 防止表单提交的默认行为：刷新当前页面
      try {
        const res = await login(this.tel, this.password);
        localStorage.setItem('uid', res.account.id); // 先将用户的id即uid存储在localStorage里
        await this.getThenSetLoginStatus(); // 更新vuex里的登录状态
        this.$router.replace('/my');
      } catch (error) {
        this.reminderFlag = true;
        this.reminderWord = error.msg;
      }
    },
    resetReminder() {
      this.reminderFlag = false;
    },
    hiddenReminder() {
      this.callback();
    },
  },

   mounted() {
    this.$refs.reminderWrap.style.height = document.documentElement.clientHeight+"px";
  },
  computed: {
    reminderWrapClassName() {
      return this.ifShow
        ? 'reminder-wrap'
        : 'reminder-wrap hidden';
    },
  },
};
</script>

<style scoped >
.login-wrap {padding-top: 0.44rem;}
.phone-number-container,.password-container {position: relative;border-bottom: 1px solid #e4e4e4;padding: 0.05rem 0;margin: 0.2rem 0.2rem;}
.tel-input,.password-input {font-size: 16px;margin-left: 0.1rem;border: none;}
.iconfont {font-size: 18px;color: gray;}
.country-code {font-size: 16px;margin: 0 0.1rem;}
.clean-btn {position: absolute;right: .05rem;}
.login-btn-container {text-align: center;}
.login-btn {background: #d44439; color: #f1f1f1;border: none;width: 90%;height: 0.4rem;border-radius: 0.2rem;font-size: 16px;}
.reminder-wrap {background: rgba(0, 0, 0, 0.7);position: absolute;left: 0;top: 0;z-index: 1000;width: 100%;}
.hidden {display: none;}
.reminder-container {position: absolute;left: 50%;top: 50%;box-sizing: border-box;width: 1rem;height: 0.6rem;margin: -0.3rem 0 0 -0.5rem;padding: 0.2rem 0;text-align: center;color: #000;box-shadow: 0 0 1rem #000;border-radius: 0.03rem;background: rgba(255, 255, 255, 0.5);}

</style>

