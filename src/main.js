import Vue from 'vue';
import App from '@/App';
import router from '@/router/index.js';
import store from '@/store/index';
import axios from 'axios';

import 'iview/dist/styles/iview.css';

import ScrollBar from '@/components/scrollBar';
import HButton from '@/components/hButton';
import {
    Icon,
    Input,
    Select,
    Option,
    Radio,
    RadioGroup,
    Button,
    Modal,
    Message,
    Form,
    FormItem
} from 'iview';
Vue.component('Icon', Icon);
Vue.component('Input', Input);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Radio', Radio);
Vue.component('RadioGroup', RadioGroup);
Vue.component('ScrollBar', ScrollBar);
Vue.component('Button', Button);
Vue.component('HButton', HButton);
Vue.component('Modal', Modal);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);


/**
 * 请求拦截
 */
axios.interceptors.request.use(

    // 发送请求成功
    config => {
      console.log(config);
      return config;
    },
  
    // 发送请求失败
    err => Promise.reject(err)
  
  )
  
  /**
   * 响应拦截
   */
  axios.interceptors.response.use(
  
    // 接收响应成功
    result => {
        if(result.data.state !== 0) {
            Promise.reject(result.data.msg) && Vue.prototype.$Message.error(`请求错误：${result.msg}`);
        }
        else {
            return result.data;
        }
    },
  
    // 接收响应失败
    err => Promise.reject(err) && Vue.prototype.$Message.error(`请求失败：${err}`)
  
  )

Message.config({
    duration: 2
});

Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})