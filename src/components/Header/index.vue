<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>Zek商城欢迎您！</p>
          <p v-if="userToken">
            <span>Kersin</span>
            <span style="margin-left:10px;cursor:pointer" @click="logout">退出登录</span>
          </p>
          <p v-else>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center">我的订单</router-link>
          <router-link to="/order">订单信息</router-link>
          <a href="javascript:;" @click="handleAlert">我的购物车</a>
          <a href="javascript:;" @click="handleAlert">Zek会员</a>
          <a href="javascript:;" @click="handleAlert">企业采购</a>
          <a href="javascript:;" @click="handleAlert">关注Zek</a>
          <a href="javascript:;" @click="handleAlert">合作招商</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="Zek" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Header",
  data(){
    return {
      keyword:''
    }
  },
  mounted(){
    this.$bus.$on('clearKeyword',this.clearKeyword)
  },
  computed:{
    ...mapState({
      userToken:state=>state.user.token
    })
  },
  methods:{
    handleAlert(){
      this.$alert("该模块暂未开发，可以点击[我的订单]和[订单信息]试一试");
    },
    toSearch(){
      // 如果没有输入的内容，直接return
      if(this.keyword.trim()=="") return alert("请输入搜索关键词！");
      // this.$router.push({name:'search',params:{keyword:this.keyword}}).catch(()=>{});

      let location = {
        name:"search",
        params:{
          keyword:this.keyword || undefined
        }
      }

      // 判断之前有没有带query参数，有的话都带上（合并参数）
      if(this.$route.query){
        location.query = this.$route.query;
      }

      // 进行跳转      
      this.$router.push(location);
    },

    clearKeyword(){
      this.keyword = "";
    },

    // 退出登录
    logout(){
      this.$store.state.user.token = "";
      localStorage.removeItem("TOKEN_KEY");
      this.$message.error("退出成功");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>