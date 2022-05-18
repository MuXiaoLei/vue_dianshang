import requets from "./requets";

// 三级联动接口
export const reqCategoryList = ()=>{
    return requets({url:'/product/getBaseCategoryList',method:'get'});
}