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


// 请求获取Search组件中的数据
// 这个请求参数params必须是一个对象，可以是空对象，但是必须传
// 如果这个参数给空对象，代表获取商品默认搜索的数据
export const reqSearchInfo = (params)=>{
    return mockRequest({
        url:"/list",
        method:"post",
        data:params     //params是用户搜索的参数，这个参数是用户在请求的时候个传递的
    })
}


// 请求获取详情数据
export function reqDetailInfo(skuId){
    return mockRequest({
        url:`/item/${skuId}`,
        method:"get"
    })
}


// 注册用户的请求
// /api/user/password/register
export function register(userInfo){
    return request({
        url:"/user/password/register",
        method:"post",
        data:userInfo
    })
}


// 获取验证码
export function reqCode(){
    return request({
        url:"/user/register/code",
        method:"get"
    })
}


// 登录请求
export function reqLogin(userInfo){
    return request({
        url:"/user/login",
        method:"post",
        data:userInfo
    })
}


// 获取收货地址
export function reqAddress(){
    return request({
        url:"/user/order/address",
        method:"get",
    })
}


// 请求提交创建订单
//
export const reqSubmitOrder = (tradeInfo)=>{
    return request({
        url:"/order/auth/submitOrder",
        method:"post",
        data:tradeInfo
    })
}


// 请求支付信息
export const reqPayInfo = ()=>{
    return request({
        url:"/payment/createNative/ap",
        method:"get"
    })
}

// 获取支付状态
export const reqPaySatus = (orderNum)=>{
    return request({
        url:`/pay/status?orderNum=${orderNum}`,
        method:"get"
    })
}


// 获取我的订单
export const reqMyCenterOrder = (page,limit)=>{
    return request({
        url:`/center/mycenter/order/${page}/${limit}`,
        method:"get"
    })
}