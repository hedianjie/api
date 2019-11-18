<template>
    <div>
        <scroll-bar :styles="{height: '100%'}">
            <div class="view-container">
                <!-- 内容导航 -->
                <div class="view-header">
                    <h4 class="view-title color-primary">
                        <a href="javascript: history.back(-1)" title="添加API"><Icon class="m-r-5" type="ios-arrow-back" size="16"/>{{project.project_name}} - 添加API</a>
                    </h4>
                </div>
                <!-- 主体 -->
                <div class="view-body">
                    <!-- 基础API配置 -->
                    <Form ref="form_base" :model="form_data" :label-width="85" :rules="form_rules" :style="{width: '66.6666666666%'}">
                        <FormItem label="API：" prop="api_url">
                            <Input placeholder="请输入API地址" v-model="form_data.api_url"/>
                        </FormItem>
                        <FormItem label="API描述：" prop="api_desc">
                            <Input placeholder="请输入API描述" v-model="form_data.api_desc"/>
                        </FormItem>
                        <FormItem label="请求方式：" prop="api_methods">
                            <RadioGroup v-model="form_data.api_methods">
                                <Radio label="0">
                                    <span>GET</span>
                                </Radio>
                                <Radio label="1">
                                    <span>POST</span>
                                </Radio>
                                <Radio label="2">
                                    <span>DELTET</span>
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="headers：">
                            <table class="h-headers-table" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <th colspan="4">添加请求头</th>
                                    </tr>
                                    <tr>
                                        <th width="200">key</th>
                                        <th width="240">value</th>
                                        <th>描述</th>
                                        <th width="30"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr v-for="(item, index) in headers" :key="index">
                                        <td><Input :ref="`headers_parameter_key_${index}`" v-model="item.key" size="small" placeholder="key"/></td>
                                        <td><Input :ref="`headers_parameter_value_${index}`" v-model="item.value" size="small" placeholder="value"/></td>
                                        <td><Input :ref="`headers_parameter_desc_${index}`" v-model="item.desc" size="small" placeholder="描述"/></td>
                                        <td><Icon @click="headersParameterDel(index)" class="table-icon icon-close" type="ios-close-circle" size="20"/></td>
                                    </tr>
                                    <tr>
                                        <td><Input v-model="headers_push_data.key" size="small" placeholder="key"/></td>
                                        <td><Input v-model="headers_push_data.value" size="small" placeholder="value"/></td>
                                        <td><Input v-model="headers_push_data.desc" size="small" placeholder="描述"/></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </FormItem>

                        <!-- API参数配置 -->
                        <div class="tab-groups">
                            <div @click="base_tab = 0" :class="base_tab === 0 ? 'active' : ''" class="tab-groups-list">request</div>
                            <div @click="base_tab = 1" :class="base_tab === 1 ? 'active' : ''" class="tab-groups-list">response</div>
                            <div class="clear-both"></div>
                        </div>
                        <div class="tab-container">
                            <div class="tab-container-list" v-show="base_tab === 0">
                                <!-- 请求示例 -->
                                <FormItem label="请求示例：" prop="request.sample">
                                    <Input v-model="form_data.request.sample" type="textarea" :autosize="{ minRows: 6}" placeholder="请输入或粘贴请求示 例如：{data: [], msg: '', state: 0}"/>
                                </FormItem>
                                <!-- 请求字段列表 -->

                                <div v-for="(item, index) in form_data.request.filed" :key="index" class="group-layout">
                                    <div class="group-title">request-字段-{{index + 1}}</div>
                                    <div class="group-actions">
                                        <a herf="javascript:void(0);" title="删除字段">
                                            <Icon type="ios-trash" size="20"/>
                                        </a>
                                    </div>

                                    <div class="group-container">
                                        <FormItem label="字段名称：" :prop="`request.filed.${index}.name`" :rules="form_rules.name">
                                            <Input v-model="item.name" placeholder="请输入字段名称"/>
                                        </FormItem>
                                        <FormItem label="字段类型：" :prop="`request.filed.${index}.type`" :rules="form_rules.type">
                                           <Select @input="relTypeDef(item)" v-model="item.type" filterable>
                                                <Option v-for="item2 in base_type_list" :key="item2.key" :value="item2.key">{{item2.value}}</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem label="是否必填：" :prop="`request.filed.${index}.is_required`" :rules="form_rules.is_required">
                                            <RadioGroup v-model="item.is_required">
                                                <Radio label="0"><span class="color-disabled">选填</span></Radio>
                                                <Radio label="1"><span class="color-error">必填</span></Radio>
                                            </RadioGroup>
                                        </FormItem>
                                        <FormItem label="默认值：" :prop="`request.filed.${index}.def`" :rules="form_rules.def">
                                            <Input v-model="item.def" placeholder="请输入默认值"/>
                                        </FormItem>
                                        <FormItem label="字段描述：" :prop="`request.filed.${index}.desc`" :rules="form_rules.desc">
                                            <Input v-model="item.desc" type="textarea" :autosize="{ minRows: 3}" placeholder="请输入字段描述"/>
                                        </FormItem>
                                    </div>
                                </div>
                                <Button type="success" long @click="addRequestFiled()">继续添加字段</Button>
                            </div>
                            <div class="tab-container-list" v-show="base_tab === 1">
                                <!-- 响应示例 -->
                                <FormItem label="响应示例：" prop="response.sample">
                                    <Input v-model="form_data.response.sample" type="textarea" :autosize="{ minRows: 6}" placeholder="请输入或粘贴响应示 例如：{data: [], msg: '', state: 0}"/>
                                </FormItem>
                                <!-- 响应字段列表 -->

                                <div v-for="(item, index) in form_data.response.filed" :key="index" class="group-layout">
                                    <div class="group-title">response-字段-{{index + 1}}</div>
                                    <div class="group-actions">
                                        <a herf="javascript:void(0);" title="删除字段">
                                            <Icon type="ios-trash" size="20"/>
                                        </a>
                                    </div>

                                    <div class="group-container">
                                        <FormItem label="字段名称：" :prop="`response.filed.${index}.name`" :rules="form_rules.name">
                                            <Input v-model="item.name" placeholder="请输入字段名称"/>
                                        </FormItem>
                                        <FormItem label="字段类型：" :prop="`response.filed.${index}.type`" :rules="form_rules.type">
                                           <Select @change="relTypeDef(item)" v-model="item.type" filterable>
                                                <Option v-for="item2 in base_type_list" :key="item2.key" :value="item2.key">{{item2.value}}</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem label="是否必填：" :prop="`response.filed.${index}.is_required`" :rules="form_rules.is_required">
                                            <RadioGroup v-model="item.is_required">
                                                <Radio label="0"><span class="color-disabled">选填</span></Radio>
                                                <Radio label="1"><span class="color-error">必填</span></Radio>
                                            </RadioGroup>
                                        </FormItem>
                                        <FormItem label="默认值：" :prop="`response.filed.${index}.def`" :rules="form_rules.def">
                                            <Input v-model="item.def" placeholder="请输入默认值"/>
                                        </FormItem>
                                        <FormItem label="字段描述：" :prop="`response.filed.${index}.desc`" :rules="form_rules.desc">
                                            <Input v-model="item.desc" type="textarea" :autosize="{ minRows: 3}" placeholder="请输入字段描述"/>
                                        </FormItem>
                                    </div>
                                </div>
                                <Button type="success" long @click="addResponseFiled()">继续添加字段</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </scroll-bar>
    </div>
</template>
<script>
    export default {
        computed: {
            project() {
                return this.$store.state.project;
            }
        },
        data() {
            return {
                // 数据类型列表 
                base_type_list: {
                    0: {
                        key: '0',
                        value: 'Number',
                        def: '0'
                    },

                    1: {
                        key: '1',
                        value: 'String',
                        def: ''
                    },

                    2: {
                        key: '2',
                        value: 'Boolean',
                        def: 'false'
                    },

                    3: {
                        key: '3',
                        value: 'Array',
                        def: '[]',
                    },

                    4: {
                        key: '4',
                        value: 'Object',
                        def: '{}'
                    },

                    5: {
                        key: '5',
                        value: 'FormData',
                        def: ''
                    },

                    6: {
                        key: '6',
                        value: 'JSON',
                        def: ""
                    }
                },
                // request / response 切换 0=>request 1=>response
                base_tab: 0, 
                // 表单数据
                form_data: {
                    api_url: '/api/login', // 接口地址
                    api_desc: '这是一个登陆接口', // 接口描述
                    api_methods: '0', // 请求方式
                    request: { // 请求
                        sample: '', // 请求示例
                        filed: [
                            // {
                            //     name: 'username', // 字段名称
                            //     type: '1', // 字段类型
                            //     is_required: '0', // 是否必填
                            //     def: '', // 默认值
                            //     desc: '', // 字段描述
                            // },

                            // {
                            //     name: 'username', // 字段名称
                            //     type: '1', // 字段类型
                            //     is_required: '0', // 是否必填
                            //     def: '', // 默认值
                            //     desc: '', // 字段描述
                            // }
                        ]
                    },
                    response: { // 请求
                        sample: '{}', // 请求示例
                        filed: [
                            // {
                            //     name: 'username', // 字段名称
                            //     type: '1', // 字段类型
                            //     is_required: '0', // 是否必填
                            //     def: '', // 默认值
                            //     desc: '', // 字段描述
                            // },

                            // {
                            //     name: 'username', // 字段名称
                            //     type: '1', // 字段类型
                            //     is_required: '0', // 是否必填
                            //     def: '', // 默认值
                            //     desc: '', // 字段描述
                            // }
                        ]
                    },
                },
                // 验证表单提交规则
                form_rules: {
                    api_url: [{type: 'string', required: true, message: '请输入API地址！', trigger: 'blur'}],
                    api_desc: {required: true, message: '请输入API描述！', trigger: 'blur'},
                    api_methods: {required: true, message: '请选择一种请求方式！', trigger: 'change'},
                    'request.sample': {required: true, message: '请添加或粘贴一段请求示例！', trigger: 'blur'},
                    'response.sample': {required: true, message: '请添加或粘贴一段请求示例！', trigger: 'blur'},

                    name: {required: true, message: '请填写字段名称！', trigger: 'blur'},
                    type: {required: true, message: '请选择一种数据格式！', trigger: 'change'},
                    is_required: {required: true, message: '请选择是否必填！', trigger: 'change'},
                    def: {required: true, message: '请填写默认值！', trigger: 'blur'},
                    desc: {required: true, message: '请填写字段描述！', trigger: 'blur'},
                },
                // 设置请求头
                headers: [
                    {
                        key: 'Authorization',
                        value: '123',
                        desc: 'xxxxxxxx'
                    },

                ],
                headers_push_data: {
                    key: 123,
                    value: '',
                    desc: ''
                }

            }
        },

        methods: {
            addRequestFiled(name, type, def) {
                this.form_data.request.filed.push({
                    name: name || '', // 字段名称
                    type: type || '', // 字段类型
                    is_required: '0', // 是否必填
                    def: def || '', // 默认值
                    desc: '', // 字段描述
                });
            },
            addResponseFiled(name, type, def) {
                this.form_data.response.filed.push({
                    name: name || '', // 字段名称
                    type: type || '', // 字段类型
                    is_required: '0', // 是否必填
                    def: def || '', // 默认值
                    desc: '', // 字段描述
                })
            },
            /**
             * 删除请求头
             */
            headersParameterDel(index) {
                this.headers.splice(index, 1);
            },

            relTypeDef(item) {
                switch (item.type) {
                    case '0': {
                        item.def = '0';
                        break;
                    }
                    case '1': {
                        item.def = '""';
                        break;
                    }
                    case '2': {
                        item.def = 'false';
                        break;
                    }
                    case '3': {
                        item.def = '[]';
                        break;
                    }
                    case '4': {
                        item.def = '{}';
                        break;
                    }
                    case '5': {
                        item.def = 'null';
                        break;
                    }
                    case '6': {
                        item.def = '""';
                        break;
                    }
                }
            },
            
            /*
             * 分解获取示例
             */
            resolveSample(str) {
                const data = eval(str);
            },

        },

        watch: {
            'headers_push_data.key'(val, oldVal) {
                if(val) {
                    const copy_obj = this.$utils.deepCopy(this.headers_push_data);
                    this.headers.push(copy_obj);
                    this.$nextTick(() => {
                        this.headers_push_data.key = '';
                        this.$refs[`headers_parameter_key_${this.headers.length-1}`][0].focus();
                    });
                }
            },
            'headers_push_data.value'(val, oldVal) {
                if(val) {
                    const copy_obj = this.$utils.deepCopy(this.headers_push_data);
                    this.headers.push(copy_obj);
                    this.$nextTick(() => {
                        this.headers_push_data.value = '';
                        this.$refs[`headers_parameter_value_${this.headers.length-1}`][0].focus();
                    });
                }
            },
            'headers_push_data.desc'(val, oldVal) {
                if(val) {
                    const copy_obj = this.$utils.deepCopy(this.headers_push_data);
                    this.headers.push(copy_obj);
                    this.$nextTick(() => {
                        this.headers_push_data.desc = '';
                        this.$refs[`headers_parameter_desc_${this.headers.length-1}`][0].focus();
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .view-body{
        padding: 10px;
    }
    .form-group{
        width: 66.66666%;
    }

    .tab-groups{
        border-bottom: 1px solid #e3e8ee;
        margin-bottom: 15px;

    }
    .tab-groups .tab-groups-list{
        float: left;
        padding: 3px 24px;
        font-size: 13px;
        border-top: 1px solid #e3e8ee;
        border-right: 1px solid #e3e8ee;
        border-bottom:  1px solid #e3e8ee;
        position: relative;
        bottom: -1px;
        background: #e3e8ee;
        cursor: pointer;
    }
    .tab-groups .tab-groups-list:first-child{
        border-left: 1px solid #e3e8ee;
    }
    .tab-groups .tab-groups-list.active{
        background: #fff;
        border-bottom: 1px solid #fff;
    }

    .tab-container{
        padding: 0 10px;
    }
    .group-layout {
        border: 1px solid #e3e8ee;
        position: relative;
        margin-bottom: 15px;
    }
    .group-layout .group-title{
        position: absolute;
        font-size: 13px;
        line-height: 14px;
        top: -7px;
        left: 10px;
        padding: 0 5px;
        background: #fff;
        color: #2d8cf0;
    }
    .group-layout .group-actions{
        position: absolute;
        right: 10px;
        padding: 0 5px;
        top: -10px;
        line-height: 20px;
        font-size: 20px;
        background: #fff;
    }
    .group-layout .group-actions a{
        line-height: 20px;
        color: #333;
    }
    .group-layout .group-actions a:hover{
        color: #888;
    }

    .group-layout .group-container{
        padding: 10px;
        padding-top: 20px;
        padding-bottom: 0;
    }

    .h-headers-table{
        border-left: 1px solid #e3e8ee;
        border-top: 1px solid #e3e8ee;
        width: 100%;
    }
    .h-headers-table thead tr:first-child{
        background: #f5f7f9;
    }
    .h-headers-table td,
    .h-headers-table th{
        border-right: 1px solid #e3e8ee;
        border-bottom: 1px solid #e3e8ee;
        padding: 4px 4px;
        text-align: center;
    }
    .h-headers-table .table-icon{
        color: #999;
        cursor: pointer;
        transition: color .15s ease-in-out;
    }
    .h-headers-table .table-icon:hover{
        color: #333;
    }
    .h-headers-table tbody tr:hover td{
        background: rgb(241, 241, 241);
    }
</style>
<style>
    
</style>


