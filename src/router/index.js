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
            path: '/home',
            redirect: '/home/index',
            component: main,
            children: [
                {
                    path: '/home/index',
                    name : 'HomeIndex',
                    component: homeIndex
                }
            ]
        },
        {
            path: '/api',
            redirect: '/api/index',
            component: main,
            children: [
                {
                    path: '/api/edit',
                    name: 'ApiEdit',
                    component: apiEdit
                }
            ]
        },
        {
            path: '/api',
            redirect: '/api/index',
            component: main,
            children: [
                {
                    path: '/api/index',
                    name: 'ApiIndex',
                    component: apiIndex
                }
            ]
        },
        { path: '/', redirect: '/home/index'},
    ]
})