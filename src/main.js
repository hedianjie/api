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
 * 路由拦截
 */

router.beforeEach((to, from, next) => {
  // 跳转ApiIndex/ApiEdit拦截没有项目id
  if( to.name && (to.name === 'ApiIndex' || to.name === 'ApiEdit' )) {
    if(!store.state.project || !store.state.project.id) {
      // 如果cookie中有project相关信息
      const projectInfo = VueCookie.get('x-cookie-project');
      if(projectInfo) {
        store.state.project = JSON.parse(projectInfo)
        // Vue.set(store.state, 'project', JSON.parse(projectInfo))
      }
      else {
        // 如果没有 则跳转到首页 并且提示
        Message.warning('进入页面失败，定向到首页');
        router.push({name: 'HomeIndex'});
        return;
      }
    }
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























const autoTextarea = (elem, extra, maxHeight) => {
  extra = extra || 0;
  var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
      isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
      addEvent = function (type, callback) {
          elem.addEventListener ?
              elem.addEventListener(type, callback, false) :
              elem.attachEvent('on' + type, callback);
      },
      getStyle = elem.currentStyle ? function (name) {
          var val = elem.currentStyle[name];

          if (name === 'height' && val.search(/px/i) !== 1) {
              var rect = elem.getBoundingClientRect();
              return rect.bottom - rect.top -
                  parseFloat(getStyle('paddingTop')) -
                  parseFloat(getStyle('paddingBottom')) + 'px';
          }
          return val;
      } : function (name) {
          return getComputedStyle(elem, null)[name];
      },
      minHeight = parseFloat(getStyle('height'));

  elem.style.resize = 'none';

  var change = function () {
    console.log(getStyle('height')  )
      var scrollTop, height,
          padding = 0,
          style = elem.style;
      if (elem._length === elem.value.length) return;
      elem._length = elem.value.length;

      if (!isFirefox && !isOpera) {
          padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
      }
      // scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      elem.style.height = minHeight + 'px';
      if (elem.scrollHeight > minHeight) {
          if (maxHeight && elem.scrollHeight > maxHeight) {
              height = maxHeight - padding;
              style.overflowY = 'auto';
          } else {
              height = elem.scrollHeight - padding;
              style.overflowY = 'hidden';
          }
          style.height = height + extra + 'px';
          // scrollTop += parseInt(style.height) - elem.currHeight;
          // document.body.scrollTop = scrollTop;
          // document.documentElement.scrollTop = scrollTop;
          elem.currHeight = parseInt(style.height);
      }
  };
  addEvent('propertychange', change);
  addEvent('input', change);
  addEvent('focus', change);
  change();
}


Vue.directive('growHeight', {
  componentUpdated: function (el,binding) {
    const event = new Event('propertychange');
    el.dispatchEvent(event);
    // console.log(el.onpropertychange(), binding)
    // console.log('ss', binding)

    //   const grow = el.getAttribute('data-grow');
    //   if (grow==='false'){
    //       autoTextarea(el, binding.value);
    //       el.setAttribute('data-grow','true');
    //   }
  },
  inserted: function (el, binding) {
      autoTextarea(el, binding.value.extra, binding.value.maxHeight);
      // el.setAttribute('data-grow','false');
  }
});

// Vue.directive('growHeight', function(el, binding){
//   autoTextarea(el, binding.value);
// });


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})