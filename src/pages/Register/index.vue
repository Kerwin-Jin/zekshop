<template>
  <div>
    <div class="wrap">
      <div class="title">
        注册新用户
      </div>
      <div class="input-form">
        手机号:<input type="text" v-model="registerInfo.phone"/><br>
        验证码:<input type="text" v-model="registerInfo.code"/>
        <button class="code" @click="getCode">获取验证码</button>{{code}}<br>
        登录密码:<input type="password" v-model="registerInfo.password"/><br>
        确认密码:<input type="password" v-model="registerInfo.password2"/><br>
        <input type="checkbox" v-model="registerInfo.agree" />同意协议并注册《尚品汇用户协议》<br>
        <button class="login-btn" @click="register">完成注册</button>
      </div>
    </div>
    <div class="bottom"></div>
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
      },
      code:""
    }
  },
  methods:{
    async register(){
      // 发请求
      let {phone,code,password,password2} = this.registerInfo;
      if(phone&&code&&password&&password2&&password==password2&&code==this.code){
        try{
          await this.$store.dispatch('userRegister',this.registerInfo);
          alert("注册成功");
          // 注册成功之后跳到登录页
          this.$router.push("/login");
        }catch(err){
          this.$alert(err.message);
        }
      }else{
        this.$alert("请完善信息");
      }
    },

    // 获取验证码
    async getCode(){
      try{
        // 成功了，code就已经存储在state里面的code当中了
        await this.$store.dispatch('requestCode');
        this.code = this.$store.state.user.code;
      }catch(err){
        alert(err.message);
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
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    padding:10px;
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
  .code{
    padding:5px;
    margin-right: 5px;
    border: 1px solid #aaa;
    outline: none;
    cursor: pointer;
  }
</style>