import Vue from 'vue';
import Router from 'vue-router'
import main from '@/view/Main/index.vue'
import homeIndex from '@/view/Home/index.vue'
import projectIndex from '@/view/Project/index.vue'
// import apiEdit from '@/view/Api/edit.vue'

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
                    component: homeIndex,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '首页'
                    }
                }
            ]
        },
        // {
        //     path: '/view',
        //     redirect: '/view/project/apiEdit',
        //     component: main,
        //     children: [
        //         {
        //             path: '/view/project/apiEdit',
        //             name: 'ApiEdit',
        //             component: apiEdit,
        //             meta: {
        //                 requireAuth: true, // 是否需要权限验证
        //                 realName: '接口编辑'
        //             }
        //         }
        //     ]
        // },
        {
            path: '/view/project',
            redirect: '/view/project/projectIndex',
            component: main,
            children: [
                {
                    path: '/view/project/projectIndex',
                    name: 'ProjectIndex',
                    component: projectIndex,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '项目管理'
                    }
                }
            ]
        },
        { path: '/', redirect: '/view/homeIndex'},
    ]
})