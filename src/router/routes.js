import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import Order from "@/pages/Order"
import Pay from "@/pages/Pay"


export default [
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
            component:Pay
        },
        {
            path:"*",
            redirect:"/home"
        }
    ]