<template>
    <div style="height: 100%">
        <div class="layout-header"></div>
        <div class="layout-slidebar">
            <div class="slidebar-toolbar">
                <div class="auth-avatar"><img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" alt=""></div>
                <!-- <HButton 
                    @click="modalShow" 
                    theme="white" 
                    :only="true" 
                    icon="md-add"
                >新建项目</HButton> -->
            </div>
            <scroll-bar :styles="{height: '100%'}">
                <router-link :to="{name: 'HomeIndex'}" class="slidebar-list" :class="$route.name === 'HomeIndex' ? 'active' : ''"><Icon type="md-home" size="18" class="m-r-10"/><span>首页</span></router-link>
                <router-link :to="{name: 'PeopleIndex'}" class="slidebar-list" :class="$route.name === 'PeopleIndex' ? 'active' : ''"><Icon type="md-people" size="18" class="m-r-10"/><span>人员管理</span></router-link>
                <router-link :to="{name: 'ProjectIndex'}" class="slidebar-list" :class="$route.name === 'ProjectIndex' ? 'active' : ''"><Icon type="ios-albums" size="18" class="m-r-10"/><span>产品版本管理</span></router-link>
                <!-- <div 
                    class="slidebar-list" 
                    v-for="(item, index) in project_list" 
                    :key="index" :class="project.id == item.id ? 'active' : ''"  
                    @click="toAPI(item)"
                >
                    <div>
                        <div class="project-text">{{item.project_name}}</div>
                        <div class="color-sub f-s-12">{{item.project_url}}</div>
                    </div>
                    <div class="project-operate" @click.stop="modalShow(item)"><Icon type="ios-create" size="18"/></div>
                </div> -->
             
            </scroll-bar>
        </div>
        <div class="layout-main">
            <div class="layout-main-container">
                <div class="tag-nav-warpper"><tag-nav></tag-nav></div>
                <router-view class="container"></router-view>
            </div>
            
        </div>
        <!-- <div class="layout-footer"></div> -->

        <!-- <Modal 
            v-model="modal_status"
            title="添加项目"
        >
            <div class="form-horizontal">
                <Alert type="warning" show-icon style="line-height: 1.5; margin-bottom: 15px;">
                    请求会以url+端口号+api来请求
                    <template slot="desc">例如：http://127.0.0.1:8080/api/login</template>
                </Alert>

                <Form ref="project_modal" :model="modal_data" :rules="modal_data_rule" label-position="left" :label-width="85" >
                    <FormItem label="项目名称：" prop="project_name">
                        <Input v-model="modal_data.project_name" placeholder="请输入项目名称" :maxlength="15"/>
                    </FormItem>
                    <FormItem label="url地址：" prop="project_url">
                        <Input v-model="modal_data.project_url" placeholder="请输入url地址"/>
                    </FormItem>
                    <FormItem label="端口号：" prop="project_port">
                        <Input v-model="modal_data.project_port" :style="{width: '150px'}" placeholder="请输入端口号" :maxlength="5"/>
                    </FormItem>
                </Form>
            </div>

            <div slot="footer">
                <Button v-if="modal_data.id" @click="modalDel(modal_data.id)" class="pull-left" type="error" :loading="modal_del_loading">删除</Button>
                <Button type="primary" @click="modalSend" :loading="modal_submit_loading">保存</Button>
                <Button type="default" @click="modal_status=false">取消</Button>
            </div>
        </Modal> -->
    </div>
</template>
<script>
    import TagNav from './components/tag-nav.vue'
    export default {
        components: {TagNav},
        computed: {
            // project() {
            //     return this.$store.state.project;
            // },
            
        },
        data() {
            return {
                modal_status: false, // 模态框展示隐藏状态
                modal_submit_loading: false,// 提交按钮loading
                modal_del_loading: false, // 删除按钮loading
                // 模态框数据
                modal_data: {
                    id: '',
                    project_name: '', // 项目名称
                    project_port: '', // 端口号
                    project_url: '',  // 项目地址
                },
                // 模态框匹配规则
                modal_data_rule: {
                    project_name: [
                        {required: true, message: '请输入项目名称！', trigger: 'blur'},
                        {max: 15, message: '项目名称最多输入15个字符', trigger: 'blur'}
                    ],
                    
                    project_url: [
                        {required: true, message: '请输入URL地址!', trigger: 'blur'},
                        {type: 'url', message: '请输入有效的URL地址!'},
                    ],

                    project_port: [
                        {required: true, message: '请输入端口号!'},
                    ]

                },
                // 项目列表
                project_list: []
            }
        },
        methods: {
            /**
             * 获取项目列表
             */
            initProjectList() {
                this.$http.get('/api/getProjectList').then(result => {
                    this.project_list = result.data;
                })
            },
            /**
             * 展开modal
             */
            modalShow(option={}) {
                // 清空表单
                this.$refs['project_modal'].resetFields();
                this.modal_data.id = option.id;
                this.modal_data.project_name = option.project_name;
                this.modal_data.project_url = option.project_url;
                this.modal_data.project_port = option.project_port;
                this.modal_status = true;
            },
            /**
             * 验证modal并且提交
             */
            modalSend() {
                this.$refs['project_modal'].validate().then(valid => {
                    // 验证成功
                    if(valid) {
                        // 开启提交按钮loading
                        this.modal_submit_loading = true;
                        this.$http.post('/api/addProject', this.modal_data)
                        .then((result) => {
                            // 提示成功、关闭modal、刷新项目列表、关闭提交按钮loading
                            this.$Message.success(result.msg);
                            this.modal_status = false;
                            this.initProjectList();
                            this.modal_submit_loading = false;
                        })
                    }
                    else {
                        this.$Message.error('操作失败！');
                    }
                })
            },
            /**
             * 删除项目
             */
            modalDel(id) {
                const _this = this;
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '是否确认删除当前项目',
                    onOk() {
                        // 开启删除按钮loading
                        _this.modal_del_loading = true;
                        // axios delete传参?拼接
                        _this.$http.delete('/api/delProject?id=' + id).then(result =>{
                            // 提示成功、关闭modal、刷新项目列表、关闭删除按钮loading
                            _this.$Message.success(result.msg);
                            _this.modal_status = false;
                            _this.initProjectList();
                            // _this.modal_del_loading = false;
                        })
                        .finally(()=>{
                            _this.modal_del_loading = false;
                        })
                    }
                })
            },
            /**
             * 切换项目
             */
            toAPI(item) {
                // 先给store的item赋值 防止在路由拦截器拦截
                // Vue.set(this.$store.state, 'project', item)
                this.$store.state.project = item;
                // 设置当前浏览项目cookie
                this.$cookie.set('x-cookie-project', JSON.stringify(item));
                // 如果单签页不是ApiIndex 跳转到ApiIndex页
                if(this.$route.path !== '/view/apiIndex') {
                    this.$router.push({name: 'ApiIndex'});
                }
                
            }
        },

        beforeMount() {
            this.initProjectList();
        }
    }
</script>
<style scoped>
.layout-header{
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    background: #fff;
    /* z-index: 1; */
}
.layout-main{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-left: 250px;
    background: #f5f7f9;
}
/* .layout-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-top: 1px solid #eee;
    background: red;
} */

.layout-slidebar{
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    padding-top: 50px;
    border-right: 1px solid #39435c;
    z-index: 1;
    background: #39435c;
}
.container{
    overflow: auto;
}

.layout-slidebar .slidebar-toolbar{
    background: #283744;
    color: #f9f9f9;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0 ;
    width: 100%;
    border-bottom: 1px solid #555;
    padding: 0 10px;
}
.layout-slidebar .slidebar-toolbar .auth-avatar{
    width: 38px;
    height: 38px;
    overflow: hidden;
    border-radius: 50%;
}

 .slidebar-list{
    color: #ddd;
    font-size: 14px;
    height: 46px;
    /* line-height: 46px; */
    padding-left: 10px;
    padding-right: 10px;
    word-break: break-all;
    overflow: hidden;
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* padding: 10px 10px; */
    padding-left: 15px;
    background: #39435c;
    transition: background .15s ease-in-out;
    cursor: pointer;
}
.slidebar-list.active{
    background: #485475;
}

.slidebar-list::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    background: #3399ff;
    height: 100%;
    opacity: 0;
    transition: opacity .15s ease-in-out;
}
.slidebar-list.active::before{
    opacity: 1;
}
 /* .slidebar-list .project-icon{
    margin-right: 5px;
    display: inline-block;
} */
 .slidebar-list .project-operate{
    /* position: absolute; */
    /* right: 13px; */
    /* width: 24px;
    height: 24px;
    top: 11px;
    text-align: center;
    line-height: 24px; */
    padding:1px 3px;
    /* color: #ed4014; */
    border: 1px solid transparent;
    transition: all .2s linear;
    cursor: pointer;
}
 .slidebar-list .project-operate:hover{
    color:#ddd ;
    background: #3399ff;
    border: 1px solid #ddd;
}

tt, code, kbd, samp {
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  background: #f4f4f4;
  padding: 1px 5px;
  border-radius: 5px;
}

.layout-main-container{
    height: 100%;
    padding-top: 40px;
    position: relative;
}

.tag-nav-warpper{
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #eee;
    background: #fff;
}


</style>
