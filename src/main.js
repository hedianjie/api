import Vue from 'vue';
import VueCookie from 'vue-cookie';
import App from '@/App';
import router from '@/router/index.js';
import store from '@/store/index';
import Utils from '@/utils/index.js';
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
    FormItem,
    Alert,
    Tag,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tooltip,
    Switch,
    Badge,
    DatePicker 
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
Vue.component('Alert', Alert);
Vue.component('Tag', Tag);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);
Vue.component('Tooltip', Tooltip);
Vue.component('SwitchComponent', Switch);
Vue.component('Badge', Badge);
Vue.component('DatePicker', DatePicker);


/**
 * 路由拦截
 */

router.beforeEach((to, from, next) => {
  // 跳转ApiIndex/ApiEdit拦截没有项目id
  // if( to.name && (to.name === 'ApiIndex' || to.name === 'ApiEdit' )) {
  //   if(!store.state.project || !store.state.project.id) {
  //     // 如果cookie中有project相关信息
  //     const projectInfo = VueCookie.get('x-cookie-project');
  //     if(projectInfo) {
  //       store.state.project = JSON.parse(projectInfo)
  //       // Vue.set(store.state, 'project', JSON.parse(projectInfo))
  //     }
  //     else {
  //       // 如果没有 则跳转到首页 并且提示
  //       Message.warning('进入页面失败，定向到首页');
  //       router.push({name: 'HomeIndex'});
  //       return;
  //     }
  //   }
  // }
  if(
    to.meta.tagNav
  ) {
    store.commit('routerAddRouters', {
      url: to.path,
      name: to.name,
      realName: to.meta.realName
    });
  }
  next();
   // to and from are both route objects. must call `next`.
 });


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
          Promise.reject(result.data.msg) && Message.error(`请求错误：${result.msg}`);
      }
      else {
          return result.data;
      }
  },

  // 接收响应失败
  err => {
    Message.error(`请求失败：${err}`);
    return Promise.reject(err);
  }

)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Message.config({
    duration: 2
});

Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$cookie = VueCookie;
Vue.prototype.$utils = Utils;

// const change = (el) => {
//     let scrollTop, height,
//     style = el.style,
//     minHeight = 100,
//     extra = el.extra,
//     maxHeight = el.maxHeight;
//         el.style.height = minHeight + 'px';
//         if (el.scrollHeight > minHeight) {
//             if (maxHeight && el.scrollHeight > maxHeight) {
//                 height = maxHeight;
//                 style.overflowY = 'auto';
//             } else {
//                 height = el.scrollHeight;
//                 style.overflowY = 'hidden';
//             }
//             style.height = height + extra + 'px';
//             el.currHeight = parseInt(style.height);
//         }
// }


// Vue.directive('growHeight', {
//     componentUpdated: function (el,binding) {
//             el.extra = binding.value.extra;
//             el.maxHeight = binding.value.maxHeight;
//             change(el);
//     },
//     inserted: function (el, binding) {
//             el.extra = binding.value.extra;
//             el.maxHeight = binding.value.maxHeight;
//             el.addEventListener('propertychange', () => change(el))
//             el.addEventListener('input',  () => change(el))
//             el.addEventListener('focus',  () => change(el))
//             change(el);
//     }
// });

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})