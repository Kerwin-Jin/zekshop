<template>
  <div>
    <div class="wrap">
      <div class="title">
        注册新用户
      </div>
      <div class="input-form">
        手机号:<input type="text" v-model="registerInfo.phone"/><br>
        验证码:<input type="text" v-model="registerInfo.code"/><br>
        登录密码:<input type="password" v-model="registerInfo.password"/><br>
        确认密码:<input type="password" v-model="registerInfo.password2"/><br>
        <input type="checkbox" v-model="registerInfo.agree" />同意协议并注册《尚品汇用户协议》<br>
        <button class="login-btn" @click="register">登录</button>
      </div>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      registerInfo:{
        phone:"",
        code:"",
        password:"",
        password2:"",
        agree:false
      }
      
    }
  },
  methods:{
    register(){
      // 发请求
      let {phone,code,password,password2} = this.registerInfo;
      console.log(phone);
      if(phone&&code&&password&&password2){
        try{
          let res = this.$store.dispatch('userRegister',this.registerInfo);
          alert("注册成功");
        }catch(err){
          alert(err.message);
        }
      }else{
        alert("请完善信息");
      }
    }
  }
  
};
</script>

<style scoped>
  .wrap{
    width: 1000px;
    height: 600px;
    border: 1px solid #aaa;
    margin: 20px auto;
  }
  .title{
    height: 50px;
    background-color: #ececec;
    line-height: 50px;
    font-size: 20px;
    font-family:"微软雅黑";
    font-weight: bold;
    padding-left: 10px;
  }
  .input-form{
    width: 80%;
    margin: 20px auto;
    padding:10px;
    text-align: center;
  }
  .input-form input{
    height: 20px;
    line-height: 20px;
    border: 1px solid #aaa;
    border-radius: 5px;
    margin: 20px;
    outline: none;
    padding:5px;
  }
  .login-btn{
    width: 200px;
    height: 30px;
    background-color: #f40;
    border-radius: 3px;
    color: #fff;
    border:none;
    cursor: pointer;
    margin-top: 10px;
  }
  .login-btn:hover{
    box-shadow: 0 3px 7px #aaa;
  }
</style>