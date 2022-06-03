import requets from "./ajax";
import mockrequets from './mockAjax';

// 三级联动接口
export const reqCategoryList = ()=>requets.get(`/product/getBaseCategoryList`);
// 获取banner轮播图数据接口
export const reqGetBannerList = ()=>mockrequets.get('/banner');
// 获取floor轮播图数据接口
export const reqGetFloorList = ()=>mockrequets.get('/floor');
// 获取搜索模块数据接口
export const reqGetSearchInfo = (params)=>requets({url:'/list',method:'post',data:params});
/* export const reqGetSearchInfo = (params)=>requets.post('/list',{data:params}); */
/* Detail模块获取参数 */
export const reqGetDetailInfo = (id)=>requets({url:`/item/${id}`,method:'get'});
/* 添加购物车 */
export const reqAddcart = (skuId,skuNum)=>requets({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'});
/* 获取购物车列表 */
export const reqShopCart = ()=>requets({url:'/cart/cartList',method:'get'});
/* 删除购物车列表数据 */
export const reqDeleteCar = (skuId)=>requets({url:`/cart/deleteCart/${skuId}`,method:'delete'});
/* 修改购物车商品选中状态 */
export const reqCheckCart = (skuId,isChecked)=>requets({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});