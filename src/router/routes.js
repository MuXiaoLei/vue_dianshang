import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

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
    /* 重定向 */
    {
        path:'/',
        redirect:'/home'
    }
]