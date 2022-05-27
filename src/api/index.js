import requets from "./ajax";
import mockrequets from './mockAjax';

// 三级联动接口
export const reqCategoryList = ()=>requets.get(`/product/getBaseCategoryList`);
// 获取banner轮播图数据接口
export const reqGetBannerList = ()=>mockrequets.get('/banner');
// 获取floor轮播图数据接口
export const reqGetFloorList = ()=>mockrequets.get('/floor');
// 获取搜索模块数据接口
export const reqGetSearchInfo = (params)=>requets({url:'list',method:'post',data:params});
/* export const reqGetSearchInfo = (params)=>requets.post('/list',{data:params}); */
/* Detail模块获取参数 */
export const reqGetDetailInfo = (id)=>requets({url:`/item/${id}`,method:'get'});