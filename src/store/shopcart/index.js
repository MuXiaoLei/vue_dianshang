import {reqShopCart,reqDeleteCar,reqCheckCart} from '@/api';

const state = {
    shopCartList:[]
};
const mutations = {
    GETSHOPCART(state,shopCartList){
        state.shopCartList = shopCartList;
    },
};
const actions = {
    async getShopCart({commit}){
        let result = await reqShopCart();
        // console.log(result);
        if(result.code == 200){
            commit('GETSHOPCART',result.data);
            console.log(result.data);
        }
    },
    async deleteCart({commit},sukId){
        let result = await reqDeleteCar(sukId);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile')); 
        }
    },
    /* 修改商品状态 */
    async getCheckCart({commit},{skuId,isChecked}){
        let result = await reqCheckCart(skuId,isChecked);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    checkedAll({dispatch,state}){
        let promiseAll = [];
        state.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked==1?dispatch('deleteCart',item.skuId):'';
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    },
    /* 全选状态 */
    allCheckeCart({dispatch,getters},isChecked){
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = dispatch('getCheckCart',{skuId:item.skuId,isChecked});
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    }
};
const getters = {
    cartList(state){
        return state.shopCartList[0]||[];
    }
};
export default {
    state,
    mutations,
    actions,
    getters,
};