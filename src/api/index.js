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
/* 获取验证码 */
export const reqUserCode = (phone)=>requets({url:`/user/passport/sendCode/${phone}`,method:'get'});
/*  注册用户 */
export const reqUserRegister = (data)=>requets({url:`/user/passport/register`,data,method:'post'});
/* 用户登录 */
export const reqUserLogin = (data)=>requets({url:`/user/passport/login`,data,method:'post'});
/* 获取用户信息 */
export const reqUserList = ()=>requets({url:'/user/passport/auth/getUserInfo',method:'get'});
/* 退出用户 */
export const clearUserList = ()=>requets({url:'/user/passport/logout',method:'get'});
/* 获取用户地址信息 */
export const reqUserAddress = ()=>requets({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
/* 获取订单详情 */
export const reqTrade = ()=>requets({url:'/order/auth/trade',method:'get'});
/* 提交订单 */
export const reqPay = (tradeNo,data)=>requets({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});
/* 获取订单信息 */
export const getOrderId = (orderId)=>requets({url:`/payment/weixin/createNative/${orderId}`,method:'get'});
/* 查询订单状态 */
export const getPaySuccessOrderId = (orderId)=>requets({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});
/* 获取订单列表 */
export const getOrderLimit = (page,limit)=>requets({url:`/order/auth/${page}/${limit}`,method:'get'});