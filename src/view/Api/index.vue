<template>
    <div class="api-warpper">
        <div class="api-slidebar">
            
            <div class="api-slidebar-toolbar">
                <a class="slidebar-fix"><Icon type="md-menu" size="24"/></a>
                <HButton @click="toEdit" theme="white" :only="true" icon="md-add">新建接口</HButton>
            </div>

            <scroll-bar :style="{height: '100%'}">
                <div v-for="(item, index) in api_list" :key="index" class="api-list">
                    <div class="api-list-status"></div>
                    <div class="api-list-content">
                        <div class="api-list-url">{{item.api_url}}</div>
                        <div class="api-list-explain">{{item.api_desc}}</div>
                    </div>
                </div>
            </scroll-bar>
    
        </div>
        <div class="main">
            <scroll-bar :style="{height: '100%', padding: '10px'}">
                <div style="padding: 10px 0;">
                    <!-- apiView -->
                    <div v-for="(item, index) in api_list" :key="index" class="api-content">
                        <!-- api地址 -->
                        <div class="api-content-url">
                            <h2 class="color-primary">接口：{{item.api_url}}</h2>
                            <div class="api-content-url-btn">
                                <HButton @click="toEdit(item.id)" icon="ios-create" class="m-r-5">编辑</HButton>
                                <HButton @click="delAPI(item.id)" icon="ios-trash">删除</HButton>
                            </div>
                        </div>
                        <!-- 华丽分割线 -->
                        <div class="api-content-line"></div>
                        <!-- api概述 -->
                        <div class="api-content-explain">概述：{{item.api_desc}}</div>
                        <!-- api methods -->
                        <div class="api-content-methods">方式：【{{methods_list[item.api_methods]}}】</div>
                        <!-- 调用接口字段解释 -->
                        <div class="api-content-flex">
                            <div class="api-content-flex-label">参数：</div>
                            <table class="api-content-flex-content api-content-parameter-table" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <td>字段</td>
                                        <td>说明</td>
                                        <td>类型</td>
                                        <td>必填</td>
                                        <td>默认值</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="item.request.filed.length">
                                        <tr v-for="(filed_item, filed_index) in item.request.filed" :key="filed_index">
                                            <td>{{filed_item.name}}</td>
                                            <td>{{filed_item.desc}}</td>
                                            <td>[<span class="color-primary">{{filed_item.type_name}}</span>]</td>
                                            <td v-html="filed_item.is_required === '0' ? '<span class=\'color-disabled\'>false</span>' : '<span class=\'color-error\'>true</span>'"><span class="color-error">true</span></td>
                                            <!-- color-disabled -->
                                            <td>{{filed_item.def}}</td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr><td colspan="5">无需传递参数</td></tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                        <!-- 调用接口示例 -->
                        <div class="api-content-flex">
                            <div class="api-content-flex-label">
                                <span>示例：</span>
                                <br/>
                                <a v-if="item.request.filed.length" title="复制示例" class="api-example-copy api-btn-default" href="javascript:void(0);">
                                    <Icon type="ios-copy" size="28" />
                                </a>
                            </div>
                            
                            <div v-if="item.request.filed.length" class="api-content-flex-content api-content-parameter-example">
                                <div class="api-example-show-all" @click="s ? s = null : s = 100">
                                    <Icon type="ios-reorder"/>
                                </div>
                                <!-- <scroll-bar :styles="{'max-height': '200px'}"> -->
                                <textarea @mousewheel.stop v-grow-height="{extra: 20, maxHeight: s}" class="api-example" v-html="item.request.sample"></textarea>
                                <!-- </scroll-bar> -->
                            </div>
                            <div v-else>
                                无请求示例
                            </div>
                        </div>
                        <!-- 返回接口字段解释 -->
                        <div class="api-content-flex">
                            <div class="api-content-flex-label">返回：</div>
                            <table class="api-content-flex-content api-content-parameter-table" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <td>字段</td>
                                        <td>说明</td>
                                        <td>类型</td>
                                        <td>必填</td>
                                        <td>默认值</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(filed_item, filed_index) in item.response.filed" :key="filed_index">
                                        <td>{{filed_item.name}}</td>
                                        <td>{{filed_item.desc}}</td>
                                        <td>[<span class="color-primary">{{filed_item.type_name}}</span>]</td>
                                        <td v-html="filed_item.is_required === '0' ? '<span class=\'color-disabled\'>false</span>' : '<span class=\'color-error\'>true</span>'"><span class="color-error">true</span></td>
                                        <!-- color-disabled -->
                                        <td>{{filed_item.def}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- 返回接口示例 -->
                        <div class="api-content-flex">
                            <div class="api-content-flex-label">
                                <span>示例：</span>
                                <br/>
                                <a title="复制示例" class="api-example-copy api-btn-default" href="javascript:void(0);">
                                    <Icon type="ios-copy" size="28" />
                                </a>
                            </div>
                            <div class="api-content-flex-content api-content-parameter-example">
                                <div class="api-example-show-all">
                                    <Icon type="ios-reorder" />
                                </div>
                                <scroll-bar :styles="{'max-height': '200px'}">
                                    <textarea class="api-example" v-html="item.response.sample"></textarea>
                                </scroll-bar>
                            </div>
                        </div>
                    </div>
                </div>
            </scroll-bar>
        </div>
    </div>
</template>
<script>
    // import apiView from "@/view/Api/components/apiView.vue";
    
    export default {
        computed: {
            project() {
                return this.$store.state.project;
            }

        },
        data() {
            return {
                api_list: [],

                methods_list: {
                    '0': 'GET',
                    '1': 'POST',
                    '2': 'DELETE',
                },
                data_type_list: {
                    '0': 'Numner',
                    '1': 'String',
                    '2': 'Boolean',
                    '3': 'Array',
                    '4': 'Object',
                    '5': 'File'
                },
                s: 100
            }
        },
    
        // components: {
        //     apiView
        // },
        methods: {
            /**
             * 初始化根据项目id获取项目下的所有api
             */
            initList() {
                this.$http.get('/api/getProjectApi', {params:{id: this.project.id}}).then(result =>{
                    const data = result.data,
                        ary = [];
                    for(let i = 0; i < data.length; i++) {
                        data[i].headers = JSON.parse(data[i].headers);
                        data[i].request = JSON.parse(data[i].request);
                        data[i].response = JSON.parse(data[i].response);
                        ary.push(data[i])
                    }
                    this.api_list = ary;
                    console.log(ary)
                })
            },
            /**
             * 新建或者编辑api
             */
            toEdit(id) {
                if(id) {
                    this.$router.push({name: 'ApiEdit', query: {id}});
                }
                else{
                    this.$router.push({name: 'ApiEdit'})
                }
            },
            /**
             * 删除API
             */
            delAPI(id){
                if(id) {
                    const _this = this;
                    this.$Modal.confirm({
                        title: '系统提示',
                        content: '是否确认删除当前项目的API？',
                        onOk() {
                            _this.$http.delete('/api/delProjectApi?id=' + id).then(result =>{
                                _this.$Message.success(result.msg);
                                _this.initList();
                            })
                        }
                    });
                }
                else {
                    this.$Message.error('系统异常，请重试……');
                }
            },


        },
        mounted() {
            this.initList();

        },
        watch: {
            project(val, oldVal) {
                this.initList();
            }
        }
    }
</script>
<style scoped>
    .api-warpper {
        padding-left: 320px;
        position: relative;
    }
    
    .api-slidebar {
    
        border-left: 1px solid #555;
    
        height: 100%;
    
        position: absolute;
    
        left: 0;
    
        top: 0;
    
        width: 320px;
    
        padding-top: 50px;
    
        background: #283744;
    
    }
    
    .api-slidebar-toolbar{
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
    
    .api-slidebar-toolbar .slidebar-fix{
        color: #f9f9f9;
        transition: transform .15s ease-in-out;
        cursor: pointer;
    }
    .api-slidebar-toolbar .slidebar-fix:hover{
        color: #fff;
        transform: scale(1.2);
    }

    .api-list {
    
        padding: 10px 15px;
    
        padding-right: 18px;
    
        color: rgb(238, 238, 238);
    
        display: flex;
    
        align-items: center;
    
    }
    
    
    
    .api-list-content {
    
        flex: 1;
    
    }
    
    
    
    .api-list-status {
    
        display: inline-block;
    
        width: 8px;
    
        height: 8px;
    
        background: rgb(175, 175, 175);
    
        border-radius: 50%;
    
        margin-right: 8px;
    
    }
    
    
    
    .api-list-explain {
    
        color: rgb(192, 192, 192);
    
        font-size: 12px;
    
        margin-top: 3px;
    
    }
    
    
    
    .api-list.active {
    
        background: #39435c;
    
        color: #97cbff;
    
    }
    
    
    
    .api-list.active .api-list-status {
    
        background: #3399ff;
    
    }
    
    
    
    .api-list.active .api-list-explain {
    
        color: #439ffb;
    
    }
    
    
    
    .main {
    
        height: 100%;
    
    }


    h2{
    font-weight: 400;
}
.api-content {
    margin: 0 10px;
    padding: 10px;
    margin-bottom: 20px;
    color: #657180;
    background: #fff;
    border: 1px solid #e3e8ee;
    border-radius: 3px;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif;
}

.api-content-line {
    width: 100%;
    height: 0px;
    border-top: 1px solid #e3e8ee
}

.api-content:last-child {
    margin-bottom: 0;
}

.api-content-url {
    /* font-size: 26px; */
    margin: 10px 0;
    margin-top: 0;
    font-weight: 400;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between
}
.api-content-url-btn{
    display: flex;
}
.api-content-flex {
    display: flex;
}

.api-content-flex-content {
    flex: 1;
}

.api-content-parameter-table {
    border-left: 1px solid #e3e8ee;
    border-top: 1px solid #e3e8ee;
    border-right: none;
    border-bottom: none;
    line-height: 1.625;
    background: #fff;
    overflow: hidden;
    border-radius: 3px;
    color: #000;
}

.api-content-parameter-table thead {
    font-weight: 400;
    color: #464c5b;
    background: #f5f7f9;
}

.api-content-parameter-table td {
    min-height: 48px;
    padding: 4px 16px;
    text-align: center;
    border-right: 1px solid #e3e8ee;
    border-bottom: 1px solid #e3e8ee;
    border-left: none;
    border-top: none;
}
.api-content-parameter-table thead td{
    font-weight: bold;
    color: #464c5b;
}

.api-content-parameter-example {
    background: #fff;
    border: 1px solid #e3e8ee;
    border-radius: 3px;
    padding-bottom: 15px;
    position: relative;
}

.api-example {
    width: 100%;
    height: 100px;
    /* height: 100%; */
    border: 1px solid #e3e8ee;
    padding: 8px 16px;
}

a.api-btn-default {
    user-select:none;
    color: #657180;
    transition: color .1s linear;
}

a.api-btn-default:hover {
    color: #858b92;
}

a.api-btn-default:active {
    color: #657180;
}

.api-example-show-all {
    position: absolute;
    bottom: 0;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    left: 0;
    width: 100%;
    border-top: 1px solid #e3e8ee;
    background: #f5f7f9;
    cursor: pointer;
}

.api-content-line,
.api-content-explain,
.api-content-methods,
.api-content-flex {
    margin-bottom: 10px;
}
</style>

