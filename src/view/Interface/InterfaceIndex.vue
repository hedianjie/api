<template>
    <div class="api-warpper">
        <div class="api-warpper-header view-header">
            <div>
                <span class="color-sub">产品：</span>
                <Select style="width: 200px" v-model="project_id" class="unborder-select-like-title" placeholder="搜索要查询的产品">
                    <Option value="0">全部产品</Option>
                    <Option value="1">接口管理平台</Option>
                </Select>
                <span class="color-sub">版本：</span>
                <Select v-model="project_id" class="unborder-select-like-title" placeholder="搜索产品版本">
                    <Option value="0">全部版本</Option>
                    <Option value="1">V2.13.0</Option>
                </Select>
            </div>
            
        </div>
        <div class="main">
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
            <!-- <scroll-bar :style="{height: '100%', padding: '10px'}"> -->
            <div :style="{overflow: 'auto', height: '100%'}">
                <!-- apiView -->
                <div v-for="(item, index) in api_list" :key="index" class="api-content">
                    <!-- api地址 -->
                    <div class="api-content-url">
                        <h2 class="color-primary"><span class="f-s-22">{{item.api_url}}</span></h2>
                        <div class="api-content-url-btn">
                            <HButton @click="toEdit(item.id)" icon="ios-create" class="m-r-5">编辑</HButton>
                            <HButton @click="delAPI(item.id)" icon="ios-trash">删除</HButton>
                        </div>
                    </div>
                    <!-- 华丽分割线 -->
                    <div class="api-content-line"></div>
                    <!-- api概述 -->
                    <!-- <div class="api-content-explain">概述：{{item.api_desc}}</div> -->
                    <!-- api methods -->
                    <!-- <div class="api-content-methods">方式：【{{methods_list[item.api_methods]}}】</div> -->
                    <!-- api概述 -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">API概述：</div>
                        <div class="api-content-flex-content">{{item.api_desc}}</div>
                    </div>
                    <!-- api methods -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">请求方式：</div>
                        <div class="api-content-flex-content">
                            <Tag color="blue">{{methods_list[item.api_methods]}}</Tag>
                        </div>
                    </div>
                    <!-- headers -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">请求头：</div>
                        <table v-if="item.headers.length" class="api-content-flex-content api-content-table" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <td>key(字段名)</td>
                                    <td>value(示例)</td>
                                    <td>描述</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(headers_item, headers_index) in item.headers" :key="headers_index">
                                    <td>{{headers_item.key}}</td>
                                    <td>{{headers_item.value}}</td>
                                    <td>{{headers_item.desc}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else style="flex: 1">
                            <Alert show-icon>暂无请求头参数说明！</Alert>
                        </div>
                    </div>
                    <!-- Content-Type -->
                    <div v-if="item.api_methods === '1'" class="api-content-flex">
                        <div class="api-content-flex-label">发送方式：</div>
                        <div v-if="item.api_methods !== '0'" class="api-content-flex-content">
                            <Tag color="blue">{{application_list[item.request.request_type]}}</Tag>
                        </div>
                        <div v-else style="flex: 1">
                            <Alert show-icon>无需参数！</Alert>
                        </div>
                    </div>
                    <!-- 调用接口字段解释 -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">请求参数：<br><span class="color-error">改用高德API</span></div>
                        <table v-if="item.request.filed.length" class="api-content-flex-content api-content-table" cellspacing="0" cellpadding="0">
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
                                <tr v-for="(filed_item, filed_index) in item.request.filed" :key="filed_index">
                                    <td>{{filed_item.name}}</td>
                                    <td>{{filed_item.desc}}</td>
                                    <td>[<span class="color-primary">{{filed_item.type_name}}</span>]</td>
                                    <td v-html="filed_item.is_required === '0' ? '<span class=\'color-disabled\'>false</span>' : '<span class=\'color-error\'>true</span>'"><span class="color-error">true</span></td>
                                    <!-- color-disabled -->
                                    <td>{{filed_item.def}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-else style="flex: 1">
                            <Alert show-icon>暂无请求参数说明！</Alert>
                        </div>
                    </div>
                    <!-- 调用接口示例 -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">
                            <span>请求示例：<br><span class="color-error">改用jsontree</span></span>
                            <br/>
                            <a v-if="item.request.sample" title="复制示例" class="api-example-copy api-btn-default" href="javascript:void(0);">
                                <Icon type="ios-copy" size="28" />
                            </a>
                        </div>
                        <!-- 如果textarea示例中有内容 现实taxtarea （sample） -->
                        <div v-if="item.request.sample" class="api-content-flex-content api-content-parameter-example">
                            <div class="api-example-show-all" @click="item.request_sample_maxHeight ? item.request_sample_maxHeight = null : item.request_sample_maxHeight = 100">
                                <Icon type="ios-reorder"/>
                            </div>
                            <textarea disabled @mousewheel.stop v-grow-height="{extra: 20, maxHeight: item.request_sample_maxHeight}" class="api-example" v-html="item.request.sample"></textarea>
                        </div>
                        <!-- 如果表单提交示例中有内容 显示table（form_data_sample） -->
                        <table v-else-if="item.request.form_data_sample.length" class="api-content-flex-content api-content-table" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <td>字段名称</td>
                                    <td>字段类型</td>
                                    <td>示例</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(form_data_sample_item, form_data_sample_index) in item.request.form_data_sample" :key="form_data_sample_index">
                                    <td>{{form_data_sample_item.key}}</td>
                                    <td><span class="color-primary">{{form_data_sample_item.type === 'string' ? 'String' : 'File'}}</span></td>
                                    <td>{{form_data_sample_item.type === 'string' ? form_data_sample_item.value : '文件上传'}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- 如果都没有值 -->
                        <div style="flex: 1" v-else>
                            <Alert show-icon>暂无请求示例！</Alert>
                        </div>
                    </div>
                    <!-- 返回接口字段解释 -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">响应：</div>
                        <table v-if="item.response.filed.length" class="api-content-flex-content api-content-table" cellspacing="0" cellpadding="0">
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
                        <div v-else style="flex: 1">
                            <Alert show-icon>暂无响应参数说明！</Alert>
                        </div>
                    </div>
                    <!-- 返回接口示例 -->
                    <div class="api-content-flex">
                        <div class="api-content-flex-label">
                            <span>响应示例：</span>
                            <br/>
                            <a v-if="item.response.sample" title="复制示例" class="api-example-copy api-btn-default" href="javascript:void(0);">
                                <Icon type="ios-copy" size="28" />
                            </a>
                        </div>
                        <div v-if="item.response.sample" class="api-content-flex-content api-content-parameter-example">
                            <div class="api-example-show-all" @click="item.response_sample_maxHeight ? item.response_sample_maxHeight = null : item.response_sample_maxHeight = 100">
                                <Icon type="ios-reorder"/>
                            </div>
                            <textarea disabled @mousewheel.stop v-grow-height="{extra: 20, maxHeight: item.response_sample_maxHeight}" class="api-example" v-html="item.response.sample"></textarea>
                        </div>
                        <div style="flex: 1" v-else>
                            <Alert show-icon>暂无响应示例！</Alert>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </scroll-bar> -->
        </div>
    </div>
</template>
<script>
    // 示例textarea
    const change = (el) => {
        let height,
            style = el.style,
            minHeight = 100,
            extra = el.extra,
            maxHeight = el.maxHeight;
        el.style.height = minHeight + 'px';
        if (el.scrollHeight > minHeight) {
            if (maxHeight && el.scrollHeight > maxHeight) {
                height = maxHeight;
                style.overflowY = 'auto';
            } else {
                height = el.scrollHeight;
                style.overflowY = 'hidden';
            }
            style.height = height + extra + 'px';
            el.currHeight = parseInt(style.height);
        }
    }

    
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
                application_list: {
                    '0': 'none',
                    '1': 'application/form-data',
                    '2': 'application/x-www-form-urlencoded',
                    '3': 'params'
                }

                // 辅助作用 用来控制示例（sample）的展开收起
                // sample: {
                //     request: {}, response: {}
                // }
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
                this.$http.get('/api/getProjectApiList', {params:{id: 6}}).then(result =>{
                    const data = result.data,
                        ary = [];
                    for(let i = 0; i < data.length; i++) {
                        data[i].headers = JSON.parse(data[i].headers);
                        data[i].request = JSON.parse(data[i].request);
                        data[i].response = JSON.parse(data[i].response);
                        data[i].request_sample_maxHeight = 100;
                        data[i].response_sample_maxHeight = 100;
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
                    this.$router.push({name: 'InterfaceEdit', query: {id}});
                }
                else{
                    this.$router.push({name: 'InterfaceEdit'})
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
        directives: {
            'growHeight': {
                componentUpdated: function (el,binding) {
                    el.extra = binding.value.extra;
                    el.maxHeight = binding.value.maxHeight;
                    change(el);
                },
                inserted: function (el, binding) {
                    el.extra = binding.value.extra;
                    el.maxHeight = binding.value.maxHeight;
                    el.addEventListener('propertychange', () => change(el))
                    el.addEventListener('input',  () => change(el))
                    el.addEventListener('focus',  () => change(el))
                    change(el);
                }
            }
        },
        watch: {
            project(val, oldVal) {
                this.initList();
            }
        }
    }
</script>
<style scoped>
.api-warpper-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 10px;
}
    .api-warpper {
        /* padding-left: 320px; */
        padding-top: 63px;
        position: relative;
    }
    
    .api-slidebar {
    
        /* border-left: 1px solid #555; */
    
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
        position: relative;
        padding-left: 320px;
    
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
    border: 1px solid #dcdee2;
    border-radius: 3px;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif;
}

.api-content-line {
    width: 100%;
    height: 0px;
    border-top: 1px solid #dcdee2;
}

/* .api-content:last-child {
    margin-bottom: 0;
} */

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

.api-content-table {
    border-left: 1px solid #dcdee2;
    border-top: 1px solid #dcdee2;
    border-right: none;
    border-bottom: none;
    line-height: 1.625;
    background: #fff;
    overflow: hidden;
    border-radius: 3px;
    color: #000;
    width: 100%;
}

.api-content-table thead {
    font-weight: 400;
    color: #464c5b;
    background: #f5f7f9;
}

.api-content-table td {
    min-height: 48px;
    padding: 4px 16px;
    text-align: left;
    border-right: 1px solid #dcdee2;
    border-bottom: 1px solid #dcdee2;
    border-left: none;
    border-top: none;
}
.api-content-table thead td{
    font-weight: bold;
    color: #464c5b;
    white-space: nowrap;
}

.api-content-parameter-example {
    background: #fff;
    border: 1px solid #dcdee2;
    border-radius: 3px;
    padding-bottom: 15px;
    position: relative;
}

.api-example {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    padding: 4px 4px;
    resize: none;
    transition: height .15s ease-in-out;
}
.api-example:disabled{
    background: #fff;
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
    border-top: 1px solid #dcdee2;
    background: #f5f7f9;
    cursor: pointer;
}
.api-content-flex-label{
    width: 85px;
    text-align: right;
}
.api-content-flex-content{
    color: #333;
}
.api-content-line,
/* .api-content-explain,
.api-content-methods, */
.api-content-flex {
    margin-bottom: 10px;
}
</style>

