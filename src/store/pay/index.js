import {getOrderId} from '@/api'
const state = {
    payList:{},
};
const mutations = {
    PAYLIST(state,payList){
        state.payList = payList;
    }
};
const actions = {
    async getOrderId({commit},orderId){
        let result = await getOrderId(orderId);
        // console.log(result.data);
        if(result.code == 200){
            commit('PAYLIST',result.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
};