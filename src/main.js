import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router"
import store from "@/store"
Vue.config.productionTip = false

import TypeNav from "@/components/TypeNav"
// 全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在components，注册在全局
Vue.component("TypeNav",TypeNav);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')