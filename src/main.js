import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router"
import store from "@/store"
import * as API from "@/api"    //将写的所有API接口引入进来

import "swiper/css/swiper.min.css"

Vue.config.productionTip = false

import TypeNav from "@/components/TypeNav"
import Pagination from "@/components/Pagination"
// 全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在components，注册在全局
Vue.component("TypeNav",TypeNav);
Vue.component("Pagination",Pagination);

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;     //将API接口挂到Vue原型上边
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')