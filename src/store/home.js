
import {reqCategoryList,reqBannerList,reqFloorList} from "@/api"

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}


const mutations = {
    RECCEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    RECCEIVE_BANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    RECCEIVE_FLOORLIST(state,floorList){
        state.floorList = floorList;
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
    },

    // 获取轮播图数据
    async getBannerList(context){
        const result = await reqBannerList();
        if(result.code==200){
            context.commit('RECCEIVE_BANNERLIST',result.data);
        }
    },

    // 获取轮播图数据
    async getFloorList(context){
        const result = await reqFloorList();
        if(result.code==200){
            context.commit('RECCEIVE_FLOORLIST',result.data);
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