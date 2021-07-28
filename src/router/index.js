import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

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


const routes = {
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/login",
            component:Login,
            meta:{
                isHidden:true
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            name:"search",
            path:"/search/:keyword",
            component:Search,
            props(route){
                const {keyword} = route.params;
                return{keyword};
            }
        },
        {
            path:"*",
            redirect:"/home"
        }
    ]
}


const router = new VueRouter(routes)

export default router