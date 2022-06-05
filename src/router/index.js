import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

import routes from './routes'

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
/* 重写replace方法 */
VueRouter.prototype.replace = function(location,res,rej){
    if(res && rej){
        originReplace.call(this,location,res,rej);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

let router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
    }
})

export default router;

router.beforeEach(async (to, from, next) => {
    next();
    let token = store.state.user.token;
    let name = store.state.user.userList.name;
    /* 用户登录了 */
    if(token){
        if(to.path=='/login'){
            next('/home');
            console.log('11');
        }else{
            if(name){
                next();
                console.log('222');
            }else{
                try {
                    /* 获取用户信息在首页展示 */
                    await store.dispatch('getUserList');
                    next();
                    console.log('33');
                } catch (error) {
                    await store.dispatch('clearUser');
                    next('/login');
                }
            }
        }
    }else{
        /* 用户没登录 */
        console.log('44');
    }
});