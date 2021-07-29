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
import {getCategoryList} from "@/api"

export default {
  name:"App",
  components:{Header,Footer},
  mounted(){
   const res = getCategoryList();
   console.log(res);
  }
}
</script>

<style>

</style>