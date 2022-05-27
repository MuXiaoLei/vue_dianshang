import { reqGetDetailInfo } from "@/api";
const state = {
    detailList : {},
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