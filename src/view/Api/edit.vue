<template>
    <div>
        <scroll-bar 
            :styles="{height: '100%'}"
        >
            <div class="view-container">
                <!-- 内容导航 -->
                <div class="view-header">
                    <h4 class="view-title color-primary">
                        <a 
                            href="javascript: history.back(-1)"
                            title="添加API"
                        >
                            <Icon 
                                class="m-r-5"
                                type="ios-arrow-back"
                                size="16"
                            />
                            {{project.project_name}} - {{apiId ? '编辑' : '添加'}}API
                        </a>
                    </h4>
                    <div class="api-content-url-btn">
                        <Button @click="saveAPI" :loading="saveAPILoading" shape="circle" type="success" icon="ios-create" class="m-r-5">保存API</Button>
                        <Button @click="delAPI" :loading="delAPILoading" v-if="apiId" shape="circle" type="default" icon="ios-trash">删除API</Button>
                    </div>
                </div>
                <!-- 主体 -->
                <div class="view-body">
                    <!-- 基础API配置 -->
                    <Form
                        ref="form_base"
                        :model="form_data"
                        :label-width="85"
                        :rules="form_rules" 
                    >
                        <FormItem 
                            label="API：" 
                            prop="api_url"
                            :style="{width: '66.6666666666%'}"
                        >
                            <Input 
                                placeholder="请输入API地址" 
                                v-model="form_data.api_url"
                            />
                        </FormItem>
                        <FormItem 
                            label="API描述：" 
                            prop="api_desc"
                            :style="{width: '66.6666666666%'}"
                        >
                            <Input
                                placeholder="请输入API描述" 
                                v-model="form_data.api_desc"
                            />
                        </FormItem>
                        <FormItem 
                            label="请求方式：" 
                            prop="api_methods"
                            :style="{width: '66.6666666666%'}"
                        >
                            <RadioGroup 
                                v-model="form_data.api_methods" 
                                @input="defMethodsRequestType"
                            >
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
                        <FormItem 
                            label="headers："
                            :style="{width: '66.6666666666%'}"
                        >
                            <table 
                                class="h-headers-table" 
                                cellspacing="0" 
                                cellpadding="0">
                                    <thead>
                                        <tr>
                                            <th colspan="4">添加请求头</th>
                                        </tr>
                                        <tr>
                                            <th width="240">key</th>
                                            <th width="240">value</th>
                                            <th>描述</th>
                                            <th width="30"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                        <tr 
                                            v-for="(item, index) in headers"   
                                            :key="index"
                                        >
                                            <td>
                                                <Input 
                                                    :ref="`headers_parameter_key_${index}`" 
                                                    v-model="item.key" 
                                                    size="small" placeholder="key"
                                                />
                                            </td>
                                            <td>
                                                <Input 
                                                    :ref="`headers_parameter_value_${index}`" 
                                                    v-model="item.value" size="small" 
                                                    placeholder="value"
                                                />
                                            </td>
                                            <td>
                                                <Input 
                                                    :ref="`headers_parameter_desc_${index}`" 
                                                    v-model="item.desc" size="small" 
                                                    placeholder="描述"
                                                />
                                            </td>
                                            <td>
                                                <Icon 
                                                    @click="headersParameterDel(index)" 
                                                    class="table-icon icon-close" 
                                                    type="ios-close-circle" 
                                                    size="20"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Input
                                                    v-model="headers_push_data.key" 
                                                    size="small" 
                                                    placeholder="key"
                                                />
                                            </td>
                                            <td>
                                                <Input 
                                                v-model="headers_push_data.value" 
                                                size="small" placeholder="value"
                                            />
                                            </td>
                                            <td>
                                                <Input 
                                                    v-model="headers_push_data.desc" 
                                                    size="small" 
                                                    placeholder="描述"
                                                />
                                            </td>
                                            <td></td>
                                        </tr>
                                </tbody>
                            </table>
                        </FormItem>

                        <!-- API参数配置 -->
                        <div 
                            class="tab-groups"
                        >
                                <div @click="base_tab = 0" 
                                    :class="base_tab === 0 ? 'active' : ''" 
                                    class="tab-groups-list"
                                >
                                    request
                                </div>
                                <div 
                                    @click="base_tab = 1" :class="base_tab === 1 ? 'active' : ''" 
                                    class="tab-groups-list"
                                >
                                    response
                                </div>
                                <div 
                                    class="clear-both"
                                >
                                </div>
                        </div>
                        <div 
                            class="tab-container">
                            <div 
                                class="tab-container-list" 
                                v-show="base_tab === 0"
                            >
                                <!-- 请求方式 -->
                                    <FormItem 
                                        :style="{width: '66.6666666666%'}"
                                    >
                                        <RadioGroup 
                                            v-model="form_data.request.request_type"
                                        >
                                            <Radio 
                                                label="0">
                                                    <span>
                                                        none
                                                    </span>
                                            </Radio>
                                            <Radio 
                                                v-if="form_data.api_methods === '1'" 
                                                label="1"
                                            >
                                                    <span>
                                                        form-data
                                                    </span>
                                            </Radio>
                                            <Radio
                                                v-if="form_data.api_methods === '1'" 
                                                label="2">
                                                    <span> 
                                                        x-www-form-urlencoded
                                                    </span>
                                            </Radio>
                                            <!-- POST 默认 -->
                                            <Radio 
                                                v-if="form_data.api_methods !== '1'" 
                                                label="3">
                                                    <span>
                                                        params
                                                    </span>
                                            </Radio>
                                            <!-- GET DELETE 默认 -->
                                        </RadioGroup>
                                </FormItem>
                                <!-- 请求示例(x-www-form-urlencoded / params) -->
                                <FormItem 
                                    v-if="form_data.request.request_type === '2' || form_data.request.request_type === '3'" 
                                    label="请求示例：" 
                                    prop="request.sample"
                                    :style="{width: '66.6666666666%'}"
                                >
                                    <Button 
                                        @click="resolveSample(0)" 
                                        shape="circle" 
                                        size="small" 
                                        class="sample-btn btn-first"
                                    >解析示例</Button>
                                    <Button 
                                        shape="circle" 
                                        size="small" 
                                        class="sample-btn btn-second"
                                    >测试请求</Button>
                                    <textarea 
                                        style="min-height:136px;" 
                                        class="ivu-input" 
                                        @mousewheel.stop v-model="form_data.request.sample" 
                                        placeholder="请输入或粘贴请求示 例如：{data: [], msg: '', state: 0}" 
                                        rows="6" 
                                    ></textarea>
                                </FormItem>
                                <!-- 请求示例(form-data) -->
                                <FormItem 
                                    v-else-if="form_data.request.request_type === '1'" 
                                    label="请求示例：" 
                                    prop="request.sample" 
                                    :style="{'min-height': '90px',width: '66.6666666666%'}"
                                >
                                    <Button 
                                        @click="resolveFormDataSample(0)" 
                                        shape="circle" 
                                        size="small" 
                                        class="sample-btn btn-first"
                                    >解析示例</Button>
                                    <Button 
                                        shape="circle" 
                                        size="small" 
                                        class="sample-btn btn-second"
                                    >测试请求</Button>
                                    <table class="h-headers-table" cellspacing="0" cellpadding="0">
                                        <thead>
                                            <tr>
                                                <th>key</th>
                                                <th>value</th>
                                                <!-- <th>描述</th> -->
                                                <th width="30"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr 
                                                v-for="(item, index) in form_data.request.form_data_sample" 
                                                :key="index"
                                            >
                                                <td style="display: flex">
                                                    <Input 
                                                        :ref="`form_data_sample_key_${index}`" 
                                                        v-model="item.key" 
                                                        size="small" 
                                                        placeholder="key" 
                                                    />
                                                    <Select 
                                                        size="small" 
                                                        :style="{'margin-left': '4px'}" 
                                                        :ref="`form_data_sample_type_${index}`" 
                                                        v-model="item.type" 
                                                        filterable
                                                    >
                                                        <Option value="string">Text</Option>
                                                        <Option value="file">File</Option>
                                                    </Select>
                                                </td>
                                                <td>
                                                    <Input 
                                                        v-if="item.type === 'string'" 
                                                        :ref="`form_data_sample_value_${index}`" 
                                                        v-model="item.value" size="small" 
                                                        placeholder="value"
                                                    />
                                                    <input 
                                                        v-else-if="item.type === 'file'" 
                                                        @change="formDataFileChange(item, index)" 
                                                        :ref="`form_data_sample_file_${index}`" 
                                                        type="file" 
                                                        style="height: 24px;"
                                                    />
                                                </td>
                                                <!-- <td><Input :ref="`form_data_sample_desc_${index}`" v-model="item.desc" size="small" placeholder="描述"/></td> -->
                                                <td>
                                                    <Icon 
                                                        @click="formDataDel(index)" 
                                                        class="table-icon icon-close" 
                                                        type="ios-close-circle" 
                                                        size="20"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="display: flex">
                                                    <Input 
                                                        v-model="form_data_push_data.key" 
                                                        size="small" 
                                                        placeholder="key" 
                                                    />
                                                    <Select 
                                                        size="small" 
                                                        :style="{'margin-left': '4px'}" 
                                                        v-model="form_data_push_data.type" 
                                                        filterable
                                                    >
                                                        <Option value="string">Text</Option>
                                                        <Option value="file">File</Option>
                                                    </Select>
                                                </td>
                                                <td>
                                                    <Input 
                                                        v-model="form_data_push_data.value" 
                                                        size="small" 
                                                        placeholder="value"
                                                    />
                                                </td>
                                                <!-- <td><Input v-model="form_data_push_data.desc" size="small" placeholder="描述"/></td> -->
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </FormItem>
                                <!-- 字段搜索 有字段 并且不是none情况 -->
                                <FormItem 
                                    v-if="form_data.request.request_type !== '0' && form_data.request.filed.length"
                                    label="字段搜索："
                                    :style="{width: '66.6666666666%'}"
                                >
                                    <Input 
                                        placeholder="搜索查找字段名称（不区分大小写）" 
                                        suffix="ios-search"
                                        clearable
                                        v-model="request_filed_search"
                                    />
                                </FormItem>
                                <!-- 请求字段列表 -->
                                <template v-if="form_data.request.request_type !== '0'">
                                    <div 
                                        v-for="(item, index) in form_data.request.filed" 
                                        :key="index" 
                                        class="group-layout col-sm-3"
                                        :style="{'border-right': ((index + 1) % 4 ===0 || index === form_data.request.filed.length - 1) ? '1px solid #e3e8ee' : 'none'}"
                                        v-show="requestFiledSearch(item.name)"
                                    >
                                        <div 
                                            class="group-title" 
                                            v-html="`字段：<b style='font-weight:400;padding:0 4px;border-radius:3px;background:#2d8cf0;color:#fff;'>${item.name}</b>`"
                                        ></div>
                                        <div class="group-actions">
                                            <a 
                                                @click="delRequestFiled(index)" 
                                                herf="javascript:void(0);" 
                                                title="删除字段"
                                            >
                                                <Icon type="ios-trash" size="20"/>
                                            </a>
                                        </div>

                                        <div class="group-container">
                                            <FormItem 
                                                label="字段名称：" 
                                                :prop="`request.filed.${index}.name`" 
                                                :rules="form_rules.name"
                                            >
                                                <Input 
                                                    v-model="item.name" 
                                                    placeholder="请输入字段名称"
                                                />
                                            </FormItem>
                                            <FormItem 
                                                label="字段类型：" 
                                                :prop="`request.filed.${index}.type`" 
                                                :rules="form_rules.type"
                                            >
                                                <Select 
                                                    v-model="item.type" 
                                                    filterable
                                                >
                                                    <Option value="">- 请选择 -</Option>
                                                    <Option 
                                                        v-for="item2 in base_type_list" 
                                                        :key="item2.key" 
                                                        :value="item2.key"
                                                    >{{item2.value}}</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem 
                                                label="是否必填：" 
                                                :prop="`request.filed.${index}.is_required`" 
                                                :rules="form_rules.is_required"
                                            >
                                                <RadioGroup v-model="item.is_required">
                                                    <Radio label="0"><span class="color-disabled">选填</span></Radio>
                                                    <Radio label="1"><span class="color-error">必填</span></Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <!-- <FormItem 
                                                label="默认值：" 
                                                :prop="`request.filed.${index}.def`" 
                                                :rules="form_rules.def"
                                            > -->
                                            <FormItem 
                                                label="默认值：" 
                                            >
                                                <Input 
                                                    v-model="item.def" 
                                                    placeholder="请输入默认值"
                                                />
                                            </FormItem>
                                            <!-- <FormItem 
                                                label="字段描述：" 
                                                :prop="`request.filed.${index}.desc`" 
                                                :rules="form_rules.desc"
                                            > -->
                                            <FormItem 
                                                label="字段描述：" 
                                            >
                                                <Input 
                                                    v-model="item.desc" 
                                                    type="textarea" 
                                                    :autosize="{ minRows: 3}" 
                                                    placeholder="请输入字段描述"
                                                />
                                            </FormItem>
                                        </div>
                                    </div>
                                </template>
                                <Button 
                                    v-if="form_data.request.request_type !== '0'" 
                                    type="success" 
                                    long 
                                    @click="addRequestFiled()"
                                >点击添加字段</Button>
                            </div>
                            <div class="tab-container-list" v-show="base_tab === 1">
                                <!-- 响应示例 -->
                                <FormItem 
                                    label="响应示例：" 
                                    prop="response.sample"
                                    :style="{width: '66.6666666666%'}"
                                >
                                    <Button 
                                        @click="resolveSample(1)" 
                                        shape="circle" 
                                        size="small" 
                                        class="sample-btn btn-first"
                                    >解析示例</Button>
                                    <Button 
                                        shape="circle" 
                                        size="small" 
                                        class="sample-btn btn-second"
                                    >测试请求</Button>
                                    <textarea 
                                        style="min-height:136px;" 
                                        class="ivu-input" 
                                        @mousewheel.stop v-model="form_data.response.sample" 
                                        placeholder="请输入或粘贴请求示 例如：{data: [], msg: '', state: 0}" 
                                        rows="6" 
                                    ></textarea>
                                </FormItem>
                                <!-- 字段搜索 有字段 -->
                                <FormItem 
                                    v-if="form_data.response.filed.length"
                                    label="字段搜索："
                                    :style="{width: '66.6666666666%'}"
                                >
                                    <Input 
                                        placeholder="搜索查找字段名称（不区分大小写）" 
                                        suffix="ios-search"
                                        clearable
                                        v-model="response_filed_search"
                                    />
                                </FormItem>
                                <!-- 响应字段列表 -->
                                <div 
                                    v-for="(item, index) in form_data.response.filed" 
                                    :key="index" 
                                    class="group-layout"
                                    :style="{'border-right': ((index + 1) % 4 ===0 || index === form_data.response.filed.length - 1) ? '1px solid #e3e8ee' : 'none'}"
                                    v-show="responseFiledSearch(item.name)"
                                >
                                    <div 
                                        class="group-title" 
                                        v-html="`字段：<b style='font-weight:400;padding:0 4px;border-radius:3px;background:#2d8cf0;color:#fff;'>${item.name}</b>`"
                                    ></div>
                                    <div class="group-actions">
                                        <a 
                                            @click="delResponseFiled(index)" 
                                            herf="javascript:void(0);" 
                                            title="删除字段"
                                        >
                                            <Icon type="ios-trash" size="20"/>
                                        </a>
                                    </div>

                                    <div class="group-container">
                                        <FormItem 
                                            label="字段名称：" 
                                            :prop="`response.filed.${index}.name`" 
                                            :rules="form_rules.name"
                                        >
                                            <Input 
                                                v-model="item.name" 
                                                placeholder="请输入字段名称"
                                            />
                                        </FormItem>
                                        <FormItem 
                                            label="字段类型：" 
                                            :prop="`response.filed.${index}.type`" 
                                            :rules="form_rules.type"
                                        >
                                            <Select 
                                                v-model="item.type" 
                                                filterable
                                            >
                                                <Option value="">- 请选择 -</Option>
                                                <Option 
                                                    v-for="item2 in base_type_list" 
                                                    :key="item2.key" 
                                                    :value="item2.key"
                                                >{{item2.value}}</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem 
                                            label="是否必填：" 
                                            :prop="`response.filed.${index}.is_required`" 
                                            :rules="form_rules.is_required"
                                        >
                                            <RadioGroup v-model="item.is_required">
                                                <Radio label="0"><span class="color-disabled">选填</span></Radio>
                                                <Radio label="1"><span class="color-error">必填</span></Radio>
                                            </RadioGroup>
                                        </FormItem>
                                        <!-- <FormItem 
                                            label="默认值：" 
                                            :prop="`response.filed.${index}.def`" 
                                            :rules="form_rules.def"
                                        > -->
                                        <FormItem 
                                            label="默认值：" 
                                        >
                                            <Input 
                                                v-model="item.def" 
                                                placeholder="请输入默认值"
                                            />
                                        </FormItem>
                                        <!-- <FormItem 
                                            label="字段描述：" 
                                            :prop="`response.filed.${index}.desc`" 
                                            :rules="form_rules.desc"
                                        > -->
                                        <FormItem 
                                            label="字段描述：" 
                                        >
                                            <Input 
                                                v-model="item.desc" 
                                                type="textarea" 
                                                :autosize="{ minRows: 3}" 
                                                placeholder="请输入字段描述"
                                            />
                                        </FormItem>
                                    </div>
                                </div>
                                <Button type="success" long @click="addResponseFiled()">点击添加response字段</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </scroll-bar>

        <Modal
            v-model="sampleModal.status"
            title="解析结果"
            @on-ok="sampleModalSubmit"
        >
            <table class="h-headers-table">
                <thead>
                    <tr>
                        <td>字段名称</td>
                        <td>字段类型</td>
                        <td>默认值</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in sampleModal.data" :key="index">
                        <td>{{item.name}}</td>
                        <td><span class="color-primary">{{item.type_name}}</span></td>
                        <td><span class="color-sub">{{item.def}}</span></td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    </div>
</template>
<script>
    export default {
        computed: {
            project() {
                return this.$store.state.project;
            },
            apiId() {
                return this.$route.query.id;
            }
        },
        data() {
            /**
             * ************************ api_methods(请求方式)变更 ***************************
             * 当form_data.api_methods(请求方式)为GET或者DELETE时，请求示例默认Content-Type为params(key: 3)，并且只有params这一个Content-Type可选，
             * 当form_data.api_methods(请求方式)为POST时，请求示例默认Content-type为x-www-form-urlencoded(key: 2)，有none(无参数)、form-data(有file的表单提交)、x-www-form-urlencoded(无file的表单提交)可选，
             * 
             * ************************ request_type(Content-type)变更 ***************************
             * 当当form_data.request.request_type(Content-type)为0(none)时，清空filed(参数)、无添加参数按钮
             */
            return {
                // 数据类型列表 
                base_type_list: {
                    'number': {
                        key: '0',
                        value: 'Number',
                        def: '0'
                    },

                    'string': {
                        key: '1',
                        value: 'String',
                        def: '""'
                    },

                    'boolean': {
                        key: '2',
                        value: 'Boolean',
                        def: 'false'
                    },

                    'array': {
                        key: '3',
                        value: 'Array',
                        def: '[]',
                    },

                    'object': {
                        key: '4',
                        value: 'Object',
                        def: '{}'
                    },

                    'file': {
                        key: '5',
                        value: 'File',
                        def: 'null'
                    },
                },
                // request / response 切换 0=>request 1=>response
                base_tab: 0, 
                // 表单数据
                form_data: {
                    api_url: '/api/login', // 接口地址
                    api_desc: '这是一个登陆接口', // 接口描述
                    api_methods: '1', // 请求方式(默认post)
                    request: { // 请求
                        sample: '', // 请求示例
                        form_data_sample: [], // 表单提交请求示例
                        request_type: '2', // 请求方式（默认x-www-form-urlencoded）Content-Type
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
                    'request.sample': {required: false, message: '请添加或粘贴一段请求示例！', trigger: 'blur'},
                    'response.sample': {required: false, message: '请添加或粘贴一段请求示例！', trigger: 'blur'},

                    name: {required: true, message: '请填写字段名称！', trigger: 'blur'},
                    type: {required: true, message: '请选择一种数据格式！', trigger: 'change'},
                    is_required: {required: true, message: '请选择是否必填！', trigger: 'change'},
                    def: {required: true, message: '请填写默认值！', trigger: 'blur'},
                    desc: {required: true, message: '请填写字段描述！', trigger: 'blur'},
                },

                request_filed_search: '',
                response_filed_search: '',

                // 设置请求头
                headers: [],

                // 解析请求示例modal数据
                sampleModal: {
                    status: false,
                    data: [],
                    type: null, // 0->request 1->response
                },

                saveAPILoading: false,
                delAPILoading: false,










                // 请求头默认添加信息
                headers_push_data: {
                    key: '',
                    value: '',
                    desc: ''
                },

                // 设置表单提交请求示例
                form_data_push_data: {
                    key: '',
                    type: 'string', // string->text file->file
                    value: '',
                    file: ''
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
            delRequestFiled(index) {
                const _this = this;
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '是否确认删除当前编辑的字段？',
                    onOk() {
                        _this.form_data.request.filed.splice(index, 1);
                        _this.$Message.warning('重新保存后生效，请记得保存！')
                    }
                })
            },
            delResponseFiled(index) {
                const _this = this;
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '是否确认删除当前编辑的字段？',
                    onOk() {
                        _this.form_data.response.filed.splice(index, 1);
                        _this.$Message.warning('重新保存后生效，请记得保存！')
                    }
                })
            },
            /**
             * request字段搜索
             */
            requestFiledSearch(name) {
                return !this.request_filed_search || name.toLocaleLowerCase().indexOf(this.request_filed_search.toLocaleLowerCase()) !== -1;
            },
            /**
             * response字段搜索
             */
            responseFiledSearch(name) {
                return !this.response_filed_search || name.toLocaleLowerCase().indexOf(this.response_filed_search.toLocaleLowerCase()) !== -1;
            },
            /**
             * 删除请求头
             */
            headersParameterDel(index) {
                this.headers.splice(index, 1);
            },
            /**
             * 删除form-data数据
             */
            formDataDel(index) {
                this.form_data.request.form_data_sample.splice(index, 1);
            },
            /**
             * form-data中file变化时赋值
             * ** item.中存的是files集合（数组）
             */
            formDataFileChange(item, index) {
                item.file = this.$refs[`form_data_sample_file_${index}`][0].files;
            },

            /**
             * 返回数据类型的默认值
             */
            // dataTyleDefault(type) {
            //     switch (type) {
            //         case '0': return '0'
            //         case '1': return '""'
            //         case '2': return 'false'
            //         case '3': return '[]'
            //         case '4': return '{}'
            //         case '5': return 'null'
            //         case '6': return '""'
            //         default: return ''
            //     }
            // },
            /**
             * 
             */
            
            /**
             * 请求方式变更 切换请求示例中的请求类型（Content-Type）
             */
            defMethodsRequestType(val) {
                switch(val) {
                    case '0':
                    case '2': {
                        // 如果请求方式为GET、DELETE 设置默认请求类型为params
                        if(this.form_data.request.request_type !== '3')
                            this.form_data.request.request_type = '3';
                        break;
                    }
                    case '1': {
                        // 如果请求方式为POST 设置默认请求类型为x-www-form-urlencoded
                        if(this.form_data.request.request_type !== '2')
                            this.form_data.request.request_type = '2';
                        break;
                    }
                }
            },
            
            /*
             * 分解获取示例(x-www-form-urlencoded）Content)
             */
            resolveSample(type) { // 0>request 1>response
                let data, baseData, ary=[];
                // 根据type判断原始数据获取 0>request 1>response
                switch(type) {
                    case 0: {
                        baseData = this.form_data.request.sample;
                        break;
                    }
                    case 1: {
                        baseData = this.form_data.response.sample;
                    }
                }
                try{
                    data = eval(baseData);
                }
                catch(e) {
                    try{
                        data = new Function(`return ${baseData}`)();
                    }
                    catch(e) {
                        this.$Message.error('解析错误：可能不是一个对象，请输入正确的请求示例');
                        return;

                    }
                }

                /**
                 * 递归查找字段
                 */
                const parse = (d, name) => {
                    const dRes = this.$utils.testData(d);
                    for(let k in d) {
                        // 验证数据结果
                        const res = this.$utils.testData(d[k]);
                        let dName;
                        if(dRes === 'object') {
                            dName = name ? `${name}.${k}` : k;
                        }
                        else if(dRes === 'array'){
                            dName = name ? `${name}[${k}]` : k;
                        }

                        // 如果是对象或者数组 继续向下查找字段
                        if(res === 'object' || res === 'array') {
                            parse(d[k], dName);
                        }
                        else {
                            ary.push({
                                name: dName, // 字段名称
                                type_name: this.base_type_list[res] ? this.base_type_list[res].value : '', // 字段类型
                                type: this.base_type_list[res] ? this.base_type_list[res].key : '',
                                is_required: '0', // 是否必填
                                def: this.base_type_list[res] ? this.base_type_list[res].def : '', // 默认值
                                desc: '', // 字段描述
                            });
                        }

                    }
                }
                parse(data);
                this.sampleModal.data = ary;
                this.sampleModal.type = type;
                this.sampleModal.status = true;
            },

            /**
             * 分解获取form-data数据
             */
            resolveFormDataSample(type) {
                // key: '',
                // desc: '',
                // type: 'string', // string->text file->file
                // value: '',
                // file: ''
                let data=this.form_data.request.form_data_sample,
                    ary=[];
                for(let i = 0; i < data.length; i++) {
                   
                    ary.push({
                        name: data[i].key,
                        type_name: this.base_type_list[data[i].type].value,
                        type:  this.base_type_list[data[i].type].key,
                        is_required: '0', // 是否必填
                        def: this.base_type_list[data[i].type].def,
                        desc: data[i].desc// 字段描述
                    })
                }
                
                this.sampleModal.data = ary;
                this.sampleModal.type = type;
                this.sampleModal.status = true;
            },

            sampleModalSubmit() {
                let _this = this,
                    // 添加到request还是response 0>request 1>response
                    sampleType = this.sampleModal.type,
                    // request / response 字段数据
                    sampleData,
                    sampleModalData = this.sampleModal.data;
                // 赋值字段数据
                switch(sampleType) {
                    case 0: {
                        sampleData = this.form_data.request.filed;
                        break;
                    }
                    case 1: {
                        sampleData = this.form_data.response.filed;
                        break;
                    }
                    default: {
                        this.$Message.error('添加字段错误：无法找到添加类别，请重新操作！');
                        return;
                    }
                }

                if(sampleData.length) {
                    this.$Modal.confirm({
                        title: '系统提示',
                        content: '已有编辑的字段，请选择是覆盖已有字段还是追加到已有字段？',
                        okText: '点击追加',
                        cancelText: '点击覆盖',
                        // 覆盖
                        onCancel() {
                            // 添加到request
                            if(sampleType === 0) {
                                _this.form_data.request.filed = sampleModalData;
                            }
                            // 添加到response
                            else if(sampleType === 1){
                                _this.form_data.response.filed = sampleModalData;
                            }
                        },
                        onOk() {
                            // 添加到request
                            if(sampleType === 0) {
                                _this.form_data.request.filed = sampleModalData.concat(_this.form_data.request.filed || []);
                            }
                            // 添加到response
                            else if(sampleType === 1){
                                _this.form_data.response.filed = sampleModalData.concat(_this.form_data.response.filed || []);
                            }
                        }
                    })
                }
                else {
                    // 添加到request
                    if(sampleType === 0) {
                        this.form_data.request.filed = sampleModalData;
                    }
                    // 添加到response
                    else if(sampleType === 1){
                        this.form_data.response.filed = sampleModalData;
                    }
                }

                
            },

            /**
             * 保存API
             */
            saveAPI() {
                this.$refs['form_base'].validate().then((valid) =>{
                    if(valid) {
                        this.saveAPILoading = true;
                        
                        // 格式化要发送的数据 headers-》json request-》json response-》json
                        const data = this.$utils.deepCopy(this.form_data);
                        data.headers = JSON.stringify(this.headers);
                        data.request = JSON.stringify(data.request);
                        data.response = JSON.stringify(data.response);
                        data.project_id = this.project.id;
                        data.id = this.apiId;
                        
                        this.$http.post('/api/addProjectApi', data).then(result => {
                            this.$Message.success(result.msg);
                            this.$router.push({name: 'ApiIndex'});
                        })
                        .finally(() => this.saveAPILoading = false);

                    }
                    else {
                        this.$Message.error('表单验证失败，请有效填写！');
                    }
                })
            },

            /**
             * 删除API
             */
            delAPI(){
                if(this.apiId) {
                    const _this = this;
                    this.$Modal.confirm({
                        title: '系统提示',
                        content: '是否确认删除当前项目的API？',
                        onOk() {
                            // 开启删除按钮loading
                            _this.delAPILoading = true;
                            // axios delete传参?拼接
                            _this.$http.delete('/api/delProjectApi?id=' + _this.apiId).then(result =>{
                                _this.$Message.success(result.msg);
                                _this.$router.push({name: 'ApiIndex'});
                            })
                            .finally(() =>_this.delAPILoading = false);
                        }
                    });
                }
                else {
                    this.$Message.error('系统异常，请重试……');
                }
            }


        },

        watch: {
            /**
             * 请求头 
             */
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
            },
            /**
             * 表单form-data
             */
            'form_data_push_data.key'(val, oldVal) {
                if(val) {
                    const copy_obj = this.$utils.deepCopy(this.form_data_push_data);
                    this.form_data.request.form_data_sample.push(copy_obj);
                    this.$nextTick(() => {
                        this.form_data_push_data.key = '';
                        this.$refs[`form_data_sample_key_${this.form_data.request.form_data_sample.length-1}`][0].focus();
                    });
                }
            },
            'form_data_push_data.value'(val, oldVal) {
                if(val) {
                    const copy_obj = this.$utils.deepCopy(this.form_data_push_data);
                    this.form_data.request.form_data_sample.push(copy_obj);
                    this.$nextTick(() => {
                        this.form_data_push_data.value = '';
                        this.$refs[`form_data_sample_value_${this.form_data.request.form_data_sample.length-1}`][0].focus();
                    });
                }
            },
            // 'form_data_push_data.desc'(val, oldVal) {
            //     if(val) {
            //         const copy_obj = this.$utils.deepCopy(this.form_data_push_data);
            //         this.form_data.request.form_data_sample.push(copy_obj);
            //         this.$nextTick(() => {
            //             this.form_data_push_data.desc = '';
            //             this.$refs[`form_data_sample_desc_${this.form_data.request.form_data_sample.length-1}`][0].focus();
            //         });
            //     }
            // },
            'form_data_push_data.type'(val, oldVal) {
                if(val!='string') {
                    const copy_obj = this.$utils.deepCopy(this.form_data_push_data);
                    this.form_data.request.form_data_sample.push(copy_obj);
                    this.$nextTick(() => {
                        // 重置默认值 并且让key选中 this.$refs[`form_data_sample_key_${this.form_data.request.form_data_sample.length-1}`][0].focus();
                        this.form_data_push_data.type = 'string';
                        this.$refs[`form_data_sample_key_${this.form_data.request.form_data_sample.length-1}`][0].focus();
                    });
                }
            },

            //检测请求方式变更 清空示例和字段
            'form_data.request.request_type'(val, oldVal) {
                this.form_data.request.sample = '';
                this.form_data.request.form_data_sample = [];
                this.form_data.request.filed = [];
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
        border-right: 0;
        position: relative;
        margin-bottom: 20px;
    }
    .group-layout .group-title{
        position: absolute;
        font-size: 13px;
        line-height: 14px;
        top: -14px;
        left: 10px;
        padding: 0 5px;
        background: #fff;
        color: #2d8cf0;
    }
    /* .group-layout .group-title b{
        font-weight: 400;
        padding: 0 4px;
        border-radius: 3px;
        background: #2d8cf0;
        color: #fff;
    } */
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
    .sample-btn{
        position: absolute;
        left: -76px;
    }
    .sample-btn.btn-first{
        top: 32px;
    }
    .sample-btn.btn-second{
        top: 66px;
    }

    .api-content-url-btn{
        display: flex;
    }
</style>
<style>
    
</style>


