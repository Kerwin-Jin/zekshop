
import {reqSearchInfo} from "@/api"

const state = {
    searchInfo:{}
}


const mutations = {
    RECEIVE_SEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo;
    }
}


const actions = {
    async getSearchInfo(context,params){

        // searchParams这个参数，是用户发请求的时候，也就是dispatch的时候给我们传递的对象
        // 这个参数在actions的函数当中只能放在context后面作为第二个参数
        const result = await reqSearchInfo(params);
        if(result.code == 200){
            context.commit('RECEIVE_SEARCHINFO',result.data);
        }
    }
}


const getters = {

    // 将state中获取到的数据摘出来做下处理，然后组件中获取更方便
    // 为什么要使用getters，是因为我们获取到的数据内部结构比较复杂，使用起来不方便，甚至会出现小问题（假报错）
    // 所以我们拿到复杂的数据之后，会把这个数据先做计算，计算出来我们要直接使用的数据，简化操作
    attrList(state){
        return state.searchInfo.attrList || [];
    },

    goodList(state){
        return state.searchInfo.goodList || [];
    },

    trademarkList(state){
        return state.searchInfo.trademarkList || [];
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}