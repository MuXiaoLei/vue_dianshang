import requets from "./ajax";
import mockrequets from './mockAjax';

// 三级联动接口
export const reqCategoryList = ()=>requets.get(`/product/getBaseCategoryList`);
export const reqGetBannerList = ()=>mockrequets.get('/banner');
export const reqGetFloorList = ()=>mockrequets.get('/floor');