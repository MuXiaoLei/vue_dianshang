import Vue from 'vue'
import VueRouter from 'vue-router'

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

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { y: 0 }
      }
})