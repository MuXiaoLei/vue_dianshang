import { v4 as uuidv4 } from 'uuid';
// 要生成一个唯一的字符串,且每次执行不会发生变化,而且游客身份要持久存储
export const getUUID = ()=>{
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    if(!uuid_token){
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    return uuid_token;
};