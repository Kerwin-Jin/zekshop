// 这个文件写的都是函数，我们叫接口请求函数
// 以后，我们每个接口都对应了一个函数，如果想要拿相关接口的数据，只需要调用相关的接口进行请求

import request from "./ajax.js"
import mockRequest from "./mockAjax.js"

// 请求三级分类列表数据
export const reqCategoryList = function(){
    return request({
        url:"/product/getBaseCategoryList",
        method:"get"
    })
}


// 请求获取轮播图banner数据
export const reqBannerList = function(){
    return mockRequest({
        url:"/banner",
        method:"get"
    })
}

// 请求获取floor数据
export const reqFloorList = function(){
    return mockRequest({
        url:"/floor",
        method:"get"
    })
}