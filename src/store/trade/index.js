import {reqUserAddress,reqTrade,reqPay} from '@/api' 
const state = {
    /* 用户地址信息 */
    UserAddress:[],
    /* 订单详情 */
    tradeList:{},
    /* 订单编号 */
    orderId:'',
};
const mutations = {
    USERADDRESS(state,UserAddress){
        state.UserAddress = UserAddress;
    },
    TRADELIST(state,tradeList){
        state.tradeList = tradeList;
    },
    TRADENO(state,orderId){
        state.orderId = orderId;
    }
};
const actions = {
    /* 获取用户地址信息 */
    async UserAddress({commit}){
        let result = await reqUserAddress();
        console.log(result);
        if(result.code == 200){
            commit('USERADDRESS',result.data);
        }
    },
    /* 获取订单详情 */
    async tradeList({commit}){
        let result = await reqTrade();
        console.log(result);
        if(result.code == 200){
            commit('TRADELIST',result.data);
        }
    },
    /* 提交订单 */
    async submitPay({commit},{tradeNo,data}){
        let result = await reqPay(tradeNo,data);
        if(result.code == 200){
            commit('TRADENO',result.data)
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}