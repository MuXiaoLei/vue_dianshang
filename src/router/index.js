import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Search from '@/pages/Search'


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
            path:'/search',
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