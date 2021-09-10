// import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import Order from "@/pages/Order"
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess"
import Center from "@/pages/Center"
import MyCenter from "@/pages/Center/MyCenter"
import GroupCenter from "@/pages/Center/GroupCenter"
import store from "@/store"

export default [
        {
            path:"/home",
            component:()=>import( "@/pages/Home")   //路由懒加载
        },
        {
            path:"/login",
            component:Login,
            meta:{
                isHidden:true
            },
            // 路由独享守卫
            // beforeEnter: (to, from, next) => {
            //     let token = store.state.user.token;
            //     if(token){
            //         next("/home");
            //     }else{
            //         next();
            //     }
            // }
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
            path:"/search/:keyword?",
            component:Search,
            // props(route){
            //     const {categoryName} = route.query;
            //     const {keyword} = route.params;
            //     return{categoryName,keyword};
            // }
        },
        {
            path:"/detail/:goodId",
            component:Detail
        },
        {
            path:"/order",
            component:Order
        },
        {
            path:"/pay",
            component:Pay,
            // 只有从订单页面才能跳转到支付页面
            beforeEnter:(to,from,next)=>{
                if(from.path === "/order"){
                    next();
                }else{
                    alert("您还未点击支付！")
                    next(false);
                }
            }
        },
        {
            path:"/paysuccess",
            component:PaySuccess,
            // 只有从支付页面才能跳转到支付成功页面
            beforeEnter:(to,from,next)=>{
                if(from.path === "/pay"){
                    next();
                }else{
                    alert("你还未支付哦！");
                    next(false);
                }
            }
        },
        {
            path:"/center",
            component:Center,
            children:[
                {
                    path:"mycenter",
                    component:MyCenter
                },
                {
                    path:"groupcenter",
                    component:GroupCenter
                },
                {
                    path:"",
                    redirect:"mycenter"
                }
            ]
        },
        {
            path:"*",
            redirect:"/home"
        }
    ]