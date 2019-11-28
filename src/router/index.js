import Vue from 'vue';
import Router from 'vue-router'
import main from '@/view/Main/index.vue'
import homeIndex from '@/view/Home/index.vue'
import projectMain from '@/view/Project/index.vue'
import projectIndex from '@/view/Project/projectIndex.vue'
import versionIndex from '@/view/Project/versionIndex.vue'
import versionInfo from '@/view/Project/versionInfo.vue'
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
                        realName: '首页',
                        tagNav: true, // 是否记录tag-nav
                        partName: 'Home', // 用于判断当前页面属于哪个菜单的标识
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
                // 产品版本管理二级路由（产品 / 版本管理）
                {
                    path: '/view/project',
                    redirect: '/view/project/projectIndex',
                    component: projectMain,
                    children: [
                        // 三级路由 产品列表
                        {
                            path: '/view/project/projectIndex',
                            name: 'ProjectIndex',
                            component: projectIndex,
                            meta: {
                                requireAuth: true, // 是否需要权限验证
                                realName: '产品管理',
                                tagNav: true, // 是否记录路由,
                                partName: 'Project'
                            }
                        },
                        // 三级路由 版本管理
                        {
                            path: '/view/project/versionIndex',
                            name: 'VersionIndex',
                            component: versionIndex,
                            meta: {
                                requireAuth: true, // 是否需要权限验证
                                realName: '版本管理',
                                tagNav: true,
                                partName: 'Project'
                            }
                        }
                    ]
                },
                // 版本详情介绍页面二级路由
                {
                    path: '/view/project/versionInfo',
                    name: 'VersionIndex',
                    component: versionInfo,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '版本详情介绍',
                        tagNav: false,
                        partName: 'Project'
                    }
                }
            ]
        },
        // {
        //     path: '/view/project',
        //     redirect: '/view/project/projectIndex',
        //     component: main,
        //     children: [
        //         // 
                
        //     ]
        // },
        // {
        //     path: '/view/project',
        //     redirect: '/view/project/versionIndex',
        //     component: main,
        //     children: [
        //         {
        //             path: '/view/project/versionIndex',
        //             name: 'VersionIndex',
        //             component: versionIndex,
        //             meta: {
        //                 requireAuth: true, // 是否需要权限验证
        //                 realName: '版本管理',
        //                 tagNav: false
        //             }
        //         }
        //     ]
        // },
        { path: '/', redirect: '/view/homeIndex'},
    ]
})