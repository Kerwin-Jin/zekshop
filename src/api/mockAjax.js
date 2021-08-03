// 这个文件是对axios进行二次封装
// 额外的让axios发请求的时候，具有其他的功能
// 配置基础路径和超时限制
// 添加进度条信息   nprogress
// 返回的响应不再需要从data属性中拿数据，而是响应就是我们要的数据
// 统一处理请求错误，具体请求也可以选择处理或不处理

import axios from "axios"
import NProgress from "nprogress";
import "nprogress/nprogress.css"

const service = axios.create({
    baseURL: "https://www.fastmock.site/mock/a18ca6ac4613074da344a3f90320ede6/api",
    timeout: 20000
})


// 添加进度条信息功能 nprogress
// 以后如果你想对axios添加额外的功能或者是给请求头添加额外的信息
// 必然用到axios的请求拦截器和响应拦截器


// 添加一个请求拦截器
service.interceptors.request.use(function (config) {

    // config其实就是我们的请求报文
    // 这个请求报文一定要返回去，因为还要继续往下走
    // 在这里我们可以添加额外的功能，也可以给请求头添加需要的数据
    NProgress.start();  //开启进度条

    return config;
});

// 添加一个响应拦截器
service.interceptors.response.use(function (response) {


    NProgress.done();   //停止进度条

    return response.data;

}, function (error) {

    NProgress.done();   //停止进度条

    // 统一处理错误
    alert("发送ajax请求失败：",error.message||"未知错误");
    //后面想继续处理这个错误，返回一个失败的promise
    return Promise.reject(error);       
    //返回的是pedding状态的promise，代表中断promise链，后期就没办法处理了
    // return new Promise(()=>{})      
});

export default service  //把封装好的axios实例暴露出去，后面用