import { getUserTempId } from "@/utils/userUtils"
import {register,reqCode,reqLogin,reqAddress} from "@/api"
const state = {
    userTempId:getUserTempId(),
    code:"", //验证码
    token:localStorage.getItem("TOKEN_KEY"),    //用户token
    addressList:[]
}


const mutations = {
    REQUEST_CODE(state,data){
        state.code = data;
    },
    RECEIVE_TOKEN(state,data){
        state.token = data;
    },
    RECEIVE_ADDRESS(state,data){
        state.addressList = data;
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
            // token获取到之后，需要存储到localStorage当中，因为token在一定时间内不会随意更改
            localStorage.setItem("TOKEN_KEY",result.data.token);
            return "OK";    //返回登录成功
        }else{
            return Promise.reject(new Error("登录失败ya"));
        }
    },

    // 获取地址
    async requestAddress(context){
        let result = await reqAddress();
        if(result.code === 200){
            context.commit("RECEIVE_ADDRESS",result.data);
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