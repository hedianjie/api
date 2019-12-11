import Vue from 'vue';
import Router from 'vue-router'
import main from '@/view/Main/index.vue'
import homeIndex from '@/view/Home/index.vue'

import projectMain from '@/view/Project/index.vue'
import projectIndex from '@/view/Project/projectIndex.vue'
import versionIndex from '@/view/Project/versionIndex.vue'
import versionInfo from '@/view/Project/versionInfo.vue'

import interfaceIndex from '@/view/Interface/interfaceIndex.vue'
import interfaceEdit from '@/view/Interface/interfaceEdit.vue'

import persionalInfo from '@/view/Self/persionalInfo.vue'

import peopleMain from '@/view/People/index.vue'
import userIndex from '@/view/People/userIndex.vue'
import departmentIndex from '@/view/People/departmentIndex.vue'

import testIndex from '@/view/Test/testIndex.vue'
import testEdit from '@/view/Test/testEdit.vue'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        /**
         * 首页
         */
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
        /**
         * 个人信息
         */
        {
            path: '/view',
            redirect: '/view/self',
            component: main,
            children: [
                {
                    path: '/view/self/persionalInfo',
                    name : 'PersionalInfo',
                    component: persionalInfo,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '个人信息',
                        tagNav: true, // 是否记录tag-nav
                        partName: '', // 用于判断当前页面属于哪个菜单的标识
                    }
                }
            ]
        },
        /**
         * 测试管理
         */
        {
            path: '/view',
            redirect: '/view/test',
            component: main,
            children: [
                /**
                 * 测试管理
                 */
                {
                    path: '/view/test/testIndex',
                    name: 'TestIndex',
                    component: testIndex,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '测试管理',
                        tagNav: true, // 是否记录tag-nav
                        partName: 'Test', // 用于判断当前页面属于哪个菜单的标识
                    }
                },
                /**
                 * 编辑测试
                 */
                {
                    path: '/view/test/testEdit',
                    name: 'TestEdit',
                    component: testEdit,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '测试编辑',
                        tagNav: false, // 是否记录tag-nav
                        partName: 'Test', // 用于判断当前页面属于哪个菜单的标识
                    }
                }
            ]

        },
        /**
         * 人员管理
         */
        {
            path: '/view/people',
            redirect: '/view/people/userIndex',
            component: main,
            children: [
                {
                    path: '/view/people',
                    name : 'PeopleIndex',
                    redirect: '/view/people/userIndex',
                    component: peopleMain,
                    children: [
                        /**
                         * 用户管理
                         */
                        {
                            path: '/view/people/userIndex',
                            name: 'UserIndex',
                            component: userIndex,
                            meta: {
                                requireAuth: true, // 是否需要权限验证
                                realName: '用户信息',
                                tagNav: true,
                                partName: 'People'
                            }
                        },
                        /**
                         * 部门管理
                         */
                        {
                            path: '/view/people/departmentIndex',
                            name: 'DepartmentIndex',
                            component: departmentIndex,
                            meta: {
                                requireAuth: true, // 是否需要权限验证
                                realName: '用户信息',
                                tagNav: true,
                                partName: 'People'
                            }
                        }
                    ]
                }
            ]
        },
        /**
         * 接口管理
         */
        {
            path: '/view/interface',
            redirect: '/view/interface/interfaceEdit',
            component: main,
            children: [
                /**
                 * 接口列表
                 */
                {
                    path: '/view/interface/interfaceIndex',
                    name: 'InterfaceIndex',
                    component: interfaceIndex,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '接口列表',
                        tagNav: true,
                        partName: 'Interface'
                    }
                },
                /**
                 * 编辑接口
                 */
                {
                    path: '/view/interface/interfaceEdit',
                    name: 'InterfaceEdit',
                    component: interfaceEdit,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '接口编辑',
                        tagNav: true,
                        partName: 'Interface'
                    }
                },
            ]
        },
        /**
         * 产品版本管理
         */
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
                        /**
                         * 三级路由 产品列表
                         */
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
                        /**
                         * 三级路由 版本管理
                         */
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
                /**
                 * 版本详情介绍页面二级路由
                 */
                {
                    path: '/view/project/versionInfo',
                    name: 'VersionInfo',
                    component: versionInfo,
                    meta: {
                        requireAuth: true, // 是否需要权限验证
                        realName: '版本详情介绍',
                        tagNav: false,
                        partName: 'Project'
                    }
                },
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