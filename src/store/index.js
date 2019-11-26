import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        project: {}, //当前所在的项目id
        routerList: [{url: '/view/homeIndex', name: 'HomeIndex', realName: '首页', active: true}], // 被打开的路由 [{url, name, active}]
    },
    mutations: {
        /**
         * 添加路由 并且指定路由选中状态
         */
        routerAddRouters: (state, opt) => {
            const {url, name} = opt;
            let flag = false;
            for(var i = 0 ; i < state.routerList.length; i++) {
                // 如果同样的路由 选中当前路由
                if(state.routerList[i].name == name && state.routerList[i].url == url){
                    state.routerList[i].active = true;
                    flag = true;
                }
                // 不是同样路由 取消路由选中
                else {
                    state.routerList[i].active = false;
                }
            }

            // 如果是新路由 添加进来并且选中当前路由
            if(!flag) {
                state.routerList.push( Object.assign({active: true}, opt) );
            }
        },

        /**
         * 删除路由
         */
        routerDelRouters: (state, index) =>  state.routerList.splice(index, 1),

        /**
         * 删除所有路由
         */
        routerDelRoutersAll: state => Vue.set(state, 'routerList', [{url: '/view/homeIndex', name: 'HomeIndex', realName: '首页', active: true}]),

        /** 
         * 删除其他 
         */
        routerDelRouterOther: state => {
            for(var i = 0 ; i < state.routerList.length; i++) {
                if(!state.routerList[i].active && state.routerList[i].name != 'HomeIndex') {
                    state.routerList.splice(i, 1);
                    i--;
                }
            }
        }
    }
})