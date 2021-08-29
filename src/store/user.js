import { getUserTempId } from "@/utils/userUtils"
import {register,reqCode,reqLogin} from "@/api"
const state = {
    userTempId:getUserTempId(),
    code:"", //验证码
    token:""    //用户token
}


const mutations = {
    REQUEST_CODE(state,data){
        state.code = data;
    },
    RECEIVE_TOKEN(state,data){
        state.token = data;
    }
    
}

// 用户注册
const actions = {
    async userRegister(context,userInfo){
        let res = await register(userInfo);
        if(res.code === 200){
            return 'OK';
        }else{
            return Promise.reject(new Error('注册失败'));
        }
    },

    async requestCode(context){
        let {code,data} = await reqCode();
        if(code===200){
            context.commit('REQUEST_CODE',data)
        }else{
            return Promise.reject(new Error('获取验证码失败'));
        }
    },

    async requestLogin(context,userInfo){
        const result = await reqLogin(userInfo);
        if(result.code===200){
            context.commit('RECEIVE_TOKEN',result.data.token);
            return "OK";
            // token获取到之后，需要存储到localStorage当中，因为token在一定时间内不会随意更改
            // localStorage.setItem("TOKEN_KEY",result.data.token);
        }else{
            return Promise.reject(new Error("登录失败ya"));
        }
    }
}


const getters = {

}


export default {
    state,
    mutations,
    actions,
    getters
}