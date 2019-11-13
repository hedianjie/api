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
    Message
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
Vue.prototype.$http = axios;
Vue.prototype.$Message = Message;
// 在这里获取slidebar列表

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})