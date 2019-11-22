import Vue from 'vue';
import Router from 'vue-router'
import main from '@/view/main.vue'
import homeIndex from '@/view/Home/index.vue'
import apiIndex from '@/view/Api/index.vue'
import apiEdit from '@/view/Api/edit.vue'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/view',
            redirect: '/view/homeIndex',
            component: main,
            children: [
                {
                    path: '/view/homeIndex',
                    name : 'HomeIndex',
                    component: homeIndex
                }
            ]
        },
        {
            path: '/view',
            redirect: '/view/apiEdit',
            component: main,
            children: [
                {
                    path: '/view/apiEdit',
                    name: 'ApiEdit',
                    component: apiEdit
                }
            ]
        },
        {
            path: '/view',
            redirect: '/view/apiIndex',
            component: main,
            children: [
                {
                    path: '/view/apiIndex',
                    name: 'ApiIndex',
                    component: apiIndex
                }
            ]
        },
        { path: '/', redirect: '/view/homeIndex'},
    ]
})