<template>
    <div>
        <scroll-bar :styles="{height: '100%'}">
            <div class="view-container">
                <!-- 内容导航 -->
                <div class="view-header">
                    <h4 class="view-title color-primary">
                        <a href="javascript: history.back(-1)" title="添加API"><Icon class="m-r-5" type="ios-arrow-back" size="16"/>{{project_name}} - 添加API</a>
                    </h4>
                </div>
                <!-- 主体 -->
                <div class="view-body">
                    <!-- 基础API配置 -->
                    <div class="form-group">
                        <label for="" class="label">API：</label>
                        <div class="form-control">
                            <Input placeholder="请输入API地址" v-model="api_url"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="label">API描述：</label>
                        <div class="form-control">
                            <Input placeholder="请输入API描述" v-model="api_desc"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="label">请求方式：</label>
                        <div class="form-control">
                            <RadioGroup v-model="api_methods">
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
                        </div>
                    </div>

                    <!-- API参数配置 -->
                    <div class="tab-groups">
                        <div @click="base_tab = 0" :class="base_tab === 0 ? 'active' : ''" class="tab-groups-list">request</div>
                        <div @click="base_tab = 1" :class="base_tab === 1 ? 'active' : ''" class="tab-groups-list">response</div>
                        <div class="clear-both"></div>
                    </div>
                    <div class="tab-container">
                        <div class="tab-container-list" v-show="base_tab === 0">
                            <!-- 请求示例 -->
                            <div class="form-group">
                                <label for="" class="label">请求示例：</label>
                                <div class="form-control">
                                    <Input v-model="request.sample" type="textarea" :autosize="{ minRows: 6}" placeholder="请输入或粘贴请求示 例如：{data: [], msg: '', state: 0}"/>
                                </div>
                            </div>
                            <!-- 请求字段列表 -->

                            <div v-for="(item, index) in request.filed" :key="index" class="group-layout">
                                <div class="group-title">request-字段-{{index + 1}}</div>
                                <div class="group-actions">
                                    <a herf="javascript:void(0);" title="删除字段">
                                        <Icon type="ios-trash" size="20"/>
                                    </a>
                                </div>

                                <div class="group-container">
                                    <div class="form-group">
                                        <label class="label">字段名称：</label>
                                        <div class="form-control">
                                            <Input v-model="item.name" placeholder="请输入字段名称"/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="label">字段类型：</label>
                                        <div class="form-control">
                                            <Select v-model="item.type" filterable>
                                                <Option v-for="item in base_type_list" :key="item.key" :value="item.key">{{item.value}}</Option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="label">是否必填：</label>
                                        <div class="form-control">
                                            <RadioGroup v-model="item.is_required">
                                                <Radio label="0"><span class="color-disabled">选填</span></Radio>
                                                <Radio label="1"><span class="color-error">必填</span></Radio>
                                            </RadioGroup>
                                        </div>
                                    </div>

                                     <div class="form-group">
                                        <label class="label">默认值：</label>
                                        <div class="form-control">
                                            <Input v-model="item.def" placeholder="请输入默认值"/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="" class="label">字段描述：</label>
                                        <div class="form-control">
                                            <Input v-model="item.desc" type="textarea" :autosize="{ minRows: 3}" placeholder="请输入字段描述"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button type="success" long>继续添加字段</Button>
                        </div>
                        <div class="tab-container-list" v-show="base_tab === 1">
                        </div>
                    </div>

                    
                </div>
            </div>
        </scroll-bar>
    </div>
</template>
<script>
    // import scrollBar from '@/components/scrollBar.vue'

    export default {
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

                base_tab: 0, // request / response 切换 0=>request 1=>response

                project_name: '物流仓储系统', // 项目名称
                api_url: '/api/login', // 接口地址
                api_desc: '这是一个登陆接口', // 接口描述
                api_methods: '0', // 请求方式
                request: { // 请求
                    sample: '{}', // 请求示例
                    filed: [
                        {
                            name: 'username', // 字段名称
                            type: '1', // 字段类型
                            is_required: '0', // 是否必填
                            def: '', // 默认值
                            desc: '', // 字段描述
                        },

                        {
                            name: 'username', // 字段名称
                            type: '1', // 字段类型
                            is_required: '0', // 是否必填
                            def: '', // 默认值
                            desc: '', // 字段描述
                        }
                    ]
                }

            }
        },
        // components: {scrollBar}
    }
</script>
<style scoped>
    .view-body{
        padding: 10px;
    }
    .form-group{
        width: 66.66666%;
        min-height: 32px;
        position: relative;
        padding-left: 85px;
        margin-bottom: 15px;
    }
    .form-group .label{
        position: absolute;
        top: 0;
        left: 0;
        line-height: 32px;
        font-size: 14px;
    }
    .form-group .form-control{
        line-height: 32px;
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
</style>
<style>
    
</style>


