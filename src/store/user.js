import { getUserTempId } from "@/utils/userUtils"
import {reqDetailInfo} from "@/api"
import {register} from "@/api"
const state = {
    userTempId:getUserTempId()
}


const mutations = {

}


const actions = {
    async userRegister(context,userInfo){
        let res = await register(userInfo);
        if(res.code === 200){
            return 'OK';
        }else{
            return Promise.reject(new Error('注册失败'));
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