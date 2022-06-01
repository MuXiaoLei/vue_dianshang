import {reqShopCart} from '@/api';
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
        }
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