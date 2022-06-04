import {reqUserCode,reqUserRegister} from '@/api'
const state = {
    userCode:'',
};
const mutations = {
    GETUSERCODE(state,userCode){
        state.userCode = userCode;
    }
};
const actions = {
    /* 获取验证码 */
    async getUserCode({commit},phone){
        let result = await reqUserCode(phone);
        if(result.code == 200){
            console.log('ok');
            commit('GETUSERCODE',result.data);
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    /*  注册用户 */
    async getUserRegister({commit},user){
        let result = await reqUserRegister(user);
        console.log(result);
        if(result.code == 200){
            return 'ok';
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
};