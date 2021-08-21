
import {reqDetailInfo} from "@/api"

const state = {
    detailInfo:{}
}


const mutations = {
    RECCEIVE_DETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo;
    }
}

const getters = {
    categoryView(state){
        return state.detailInfo.categoryView || {}
    }
}


const actions = {
    async getDetailInfo(context,skuId){
        const result = await reqDetailInfo(skuId);
        if(result.status === 200){
            context.commit('RECCEIVE_DETAILINFO',result.data);
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}