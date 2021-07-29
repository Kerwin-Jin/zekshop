// 这个文件写的都是函数，我们叫接口请求函数
// 以后，我们每个接口都对应了一个函数，如果想要拿相关接口的数据，只需要调用相关的接口进行请求

import request from "./ajax.js"
// http://123.57.205.78/api/product/getBaseCategoryList

// 请求三级分类列表数据
export const getCategoryList = function(){
    return request({
        url:"/product/getBaseCategoryList",
        method:"get"
    })
}