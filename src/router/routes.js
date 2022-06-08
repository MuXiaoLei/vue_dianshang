import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrde from '@/pages/Center/MyOrde'
import GroupOrde from '@/pages/Center/GroupOrde'

export default[
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
    {
        path:'/detail/:id',
        component:Detail,
        meta:{show:true}
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        name:'shopcart',
        path:'/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        name:'trade',
        path:'/trade',
        component:Trade,
        meta:{show:true},
        beforeEnter:(to, from, next) => {
            if(from.path == '/shopcart'){
                next();
            }else{
                next(false);
            }
            
        },
    },
    {
        name:'pay',
        path:'/pay',
        component:Pay,
        meta:{show:true},
        beforeEnter:(to,from,next) => {
            if (from.path == '/trade') {
                next();
            }else{
                next(false);
            }
        }
    },
    {
        name:'paysuccess',
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show:true},
        beforeEnter:(to,from,next) =>{
            if(from.path == '/pay'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        name:'center',
        path:'/center',
        component:Center,
        meta:{show:true},
        beforeEnter:(to,from,next) => {
            if(from.path == '/paysuccess'){
                next();
            }else{
                next(false);
            }
        },
        children:[
            {
                path:'myorde',
                component:MyOrde,
            },
            {
                path:'grouporde',
                component:GroupOrde,
            },
            {
                path:'/center',
                redirect:'/center/myorde'
            }
        ]
    },
    /* 重定向 */
    {
        path:'/',
        redirect:'/home'
    }
]