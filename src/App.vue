<template>
  <div>
    <Header/>
    <router-view></router-view>
    <!-- <Footer v-show="$route.path!=='/login' && $route.path!=='/register'"/> -->
    <Footer v-show="!$route.meta.isHidden"/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name:"App",
  components:{Header,Footer},
  mounted(){

    // 当App组件挂载的时候，就通知vuex中的action去发送请求，将数据进行保存，这样就不用每次TypeNav挂载的时候去重复发请求了
    this.$store.dispatch("getCategoryList");
    
   
  }
}
</script>

<style>

</style>