// home 模块的小仓库
import {reqCategoryList,reqGetBannerList,reqGetFloorList} from '@/api'
const state = {
    /* 三级菜单数据 */
    categoryList:[],
    /* 轮播图数据 */
    bannerList:[],
    /* 底部轮播图数据 */
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    // 通过API里面的接口调用,向服务器发请求,获取服务器数据
    async categoryList({commit}){
        const result = await reqCategoryList();
        // console.log(result);
        if(result.code === 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    /* 获取轮播图数据 */
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        /* console.log(result); */
        if(result.code === 200){
            commit('GETBANNERLIST',result.data);
        }
    },
    /* 获取底部轮播图数据 */
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code === 200){
            commit('GETFLOORLIST',result.data);
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
