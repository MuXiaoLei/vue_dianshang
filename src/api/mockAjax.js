/* 对axios二次封装 */
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

const requets = axios.create({
    baseURL:'/mock',
    timeout:5000,
})

/* 请求拦截器 */
requets.interceptors.request.use((config)=>{
    nprogress.start();
    return config
})

/* 响应拦截器 */
requets.interceptors.response.use((res)=>{
    /* 成功的回调函数:服务器响应回来的数据以后,响应拦截器检测到,做一些事情 */
    nprogress.done();
    return res.data;
},(error)=>{
    /* 失败的回调 */
    return Promise.reject(new Error('faile'));
})

export default requets;