import { reqGetDetailInfo,reqAddcart } from "@/api";
// 封装的游客身份模块
import {getUUID} from '@/utils/uuid_token'
const state = {
    detailList : {},
    // 游客身份
    uuid_token:getUUID(),
};
const mutations = {
    GETDETAILLIST(state,detailList){
        state.detailList = detailList;
    }
};
const actions = {
    async getDetailList({commit},id){
        let result = await reqGetDetailInfo(id);
        if(result.code == 200){
            commit('GETDETAILLIST',result.data) 
        }
    },
    async addCartList({commit},{skuId,skuNum}){
        let result = await reqAddcart(skuId,skuNum);
        if(result.code == 200){
            return "ok";
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {
    categoryView(state){
        return state.detailList.categoryView||{};
    },
    skuInfo(state){
        return state.detailList.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.detailList.spuSaleAttrList||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
}