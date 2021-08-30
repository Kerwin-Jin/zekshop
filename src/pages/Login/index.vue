<template>
  <div class="login_wrap">
    <h1>账户登录</h1>
    <div class="input_form">
      用户名：<input type="text" placeholder="邮箱/用户名/手机号" v-model="phone"><br>
      密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" placeholder="请输入密码" v-model="password"><br>
      <input type="checkbox" />自动登录
      <a href="javascript:;">忘记密码？</a><br>
      <button class="login_btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
      return{
        phone:"",
        password:""
      }
    },
    methods:{
      async login(){
        let {phone,password} = this;

        if(phone&&password){
          // 发送登录请求
          try {
            await this.$store.dispatch("requestLogin",{phone,password});
            alert("登录成功");
            this.$router.push("/home");
          } catch (error) {
            alert(error.message); 
          }
        }else{
          alert("请输入用户名或者密码");
        }
      }
    }
}
</script>

<style scoped>
  .login_wrap{
    width: 470px;
    height: 460px;
    border: 1px solid #aaa;
    text-align: center;
    margin: 50px auto;
  }
  .login_wrap h1{
    height: 50px;
    line-height: 50px;
    background-color: #eee;
    font-size: 20px;
    margin-bottom: 40px;
  }
  .login_wrap input{
    outline: none;
    height: 40px;
    width: 300px;
    margin: 10px;
    border: 1px solid #aaa;
    padding:4px;
  }
  .login_wrap input[type="checkbox"]{
    height: 16px;
    width: 20px;
    line-height: 16px;
  }
  .login_btn{
    margin-top: 20px;
    outline: none;
    border: none;
    width: 350px;
    height: 40px;
    line-height: 40px;
    background-color: #f40;
    color: #fff;
    cursor: pointer;
  }
</style>
