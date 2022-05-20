import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Search from '@/pages/Search'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace
/* 重写push方法 */
VueRouter.prototype.push = function(location,res,rej){
    if(res && rej){
        originPush.call(this,location,res,rej);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function(location,res,rej){
    if(res && rej){
        originReplace.call(this,location,res,rej);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true},
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false},
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false},
        },
        /* 重定向 */
        {
            path:'/',
            redirect:'/Home'
        }
    ]
})