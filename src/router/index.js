import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes.js"



Vue.use(VueRouter);

// 将原有的push方法保存起来，后期还能拿到原来的
const originPush = VueRouter.prototype.push;

// 可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function(location, onResolved, onRejected){

    if(onResolved === undefined && onRejected === undefined){

        // 如果没有传后边两个回调函数，就catch一下，就不会出现告警了
        return originPush.call(this,location).catch(()=>{});
    }else{

        // 如果传了后边两个回调函数，说明已经将告警处理了
        return originPush.call(this,location,onResolved,onRejected);
    }

}

const router = new VueRouter({
    routes,

    // 配置滚动行为，跳转到新的路由界面滚动条的位置
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0};
    }
})

export default router