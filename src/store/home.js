
import {reqCategoryList} from "@/api"


const state = {
    categoryList:[]
}


const mutations = {
    RECCEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
}


const actions = {
    // 与组件当中用户对接
    // 一般是异步发请求
    // 提交mutations
    async getCategoryList(context){
        // 发送请求拿数据，调教给mutations，存储到state
        // await和async作用
        // 可以通过同步代码实现异步效果，可读性强
        // .then.catch不是不能用，而是可读性不强，里面还有异步代码（异步回调函数）
        const result = await reqCategoryList();

        if(result.code === 200){
            context.commit('RECCEIVE_CATEGORYLIST',result.data);
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