import { Button,MessageBox } from 'element-ui';
const element = {
    install:function(Vue){
        Vue.use(Button);

        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
    }
}
export default element