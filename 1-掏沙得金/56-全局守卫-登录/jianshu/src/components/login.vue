<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <!--取消submit的默认行为-->
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input placeholder="请输入用户名" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn"><input type="submit" value="一键登入" /></div>
      </form>
      <div class="back-index">
        <router-link  to="/">首页>>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import cookies from 'js-cookie'
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin () {
       // 省略验证用户名
       cookies.set('miaov', 'login')

       // 跳回到来的页面

        let redirect = this.$route.query.redirect
        console.log(redirect)
        if(redirect){
         this.$router.replace({
          name: redirect
         })
        }else{
          this.$router.replace('/')
        }
      }
    }
  }
</script>
<style>
@import '../assets/login.css';
</style>
