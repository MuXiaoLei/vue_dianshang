import {reqUserCode,reqUserRegister,reqUserLogin,reqUserList,clearUserList} from '@/api'
const state = {
    userCode:'',
    token:localStorage.getItem('TOKEN'),
    userList:{},
};
const mutations = {
    GETUSERCODE(state,userCode){
        state.userCode = userCode;
    },
    POSTUSERLOGIN(state,token){
        state.token = token;
    },
    GETUSERLIST(state,userList){
        state.userList = userList;
    },
    CLEARUSER(state){
        state.userCode = '';
        state.userList = {};
        state.token = localStorage.clear('TOKEN');
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
        // console.log(result);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    /* 用户登录 */
    async postUserLogin({commit},user){
        let result =  await reqUserLogin(user);
        // console.log(result);
        if(result.code == 200){
            commit('POSTUSERLOGIN',result.data.token);
            localStorage.setItem('TOKEN',result.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    /* 获取用户信息 */
    async getUserList({commit}){
        let result = await reqUserList();
        console.log(result);
        if (result.code == 200) {
            commit('GETUSERLIST',result.data);
        }
    },
    /* 退出用户 */
    async clearUser({commit}){
        let result = await clearUserList();
        console.log(result);
        if(result.code == 200){
            commit('CLEARUSER')
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