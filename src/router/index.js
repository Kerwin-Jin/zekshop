import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

Vue.use(VueRouter);

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