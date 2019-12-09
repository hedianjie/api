<template>
    <div>
    <div class="view-container">

        <div class="view-header">
            <h4 class="view-title">基本信息</h4>
        </div>
 
        <Form ref="formInline" :model="formInline" :rules="ruleValidate" class="form-horizontal">

            <div class="col-md-4">

                <FormItem 
                    label="账号"
                    label-position="top"
                    prop="username"
                >
                    <Input v-model="formInline.username" type="text" placeholder="请输入账号" disabled/>
                </FormItem>
                
                <FormItem
                    label="昵称"
                    label-position="top"
                    prop="name"
                >
                    <Input v-model="formInline.name" type="text" placeholder="请输入昵称"/>
                </FormItem>

                <FormItem
                    label="年龄"
                    label-position="top"
                    prop="age"
                >
                    <Input v-model="formInline.age" type="text" placeholder="请输入年龄"/>
                </FormItem>

                <FormItem
                    label="手机号"
                    label-position="top"
                    prop="phone"
                >
                    <Input v-model="formInline.phone" type="text" placeholder="请输入手机号"/>
                </FormItem>

                <FormItem
                    label="邮箱"
                    label-position="top"
                    prop="email"
                >
                    <Input v-model="formInline.email" type="text" placeholder="请输入邮箱"/>
                </FormItem>

                <FormItem
                    label="性别"
                    label-position="top"
                    prop="sex"
                >
                    <RadioGroup v-model="formInline.sex">
                        <Radio label="1">男</Radio>
                        <Radio label="0">女</Radio>
                    </RadioGroup>
                </FormItem>

                
            </div>

            <div class="col-md-4 right-clumn">
                
                <FormItem
                    label="头像"
                    label-position="top"
                    prop="avatar"
                >
                    <Upload width="127" height="127" v-model="formInline.avatar"></Upload>
                </FormItem>

                <h2 class="line">修改密码<span class="tip"><Icon type="ios-alert" size="14"/> 如无需修改密码，可不填！</span></h2>

                <FormItem
                    label="密码"
                    label-position="top"
                    prop="pwd"
                >
                    <Input v-model="formInline.pwd" type="text" placeholder="请输入密码"/>
                </FormItem>

                <FormItem
                    label="确认密码"
                    label-position="top"
                    prop="confirm_pwd"
                >
                    <Input v-model="formInline.confirm_pwd" type="text" placeholder="请输入确认密码"/>
                </FormItem>

            </div>

        </Form>
        <div style="clear: both;">
            <Button type="primary">更新基本信息</Button>
        </div>
    </div>
    </div>
</template>
<script>
    import Upload from './components/upload.vue'
    export default {
        data() {
            return {
                formInline: {
                    username: 'hedianjie',
                    name: '桃李不言下自成蹊',
                    age: '11',
                    phone: '15567702010',
                    email: '1163486362@qq.com',
                    sex: '1',
                    avatar: ['https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'],
                    pwd: '',
                    confirm_pwd: '',
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '请输入用户名'}
                    ],
                    name: [
                        { required: true, message: '请输入用户名'}
                    ]
                }
            }
        },
        
        components: { Upload }
    }
</script>
<style scoped>
    /* h2.line{
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #dcdee2;
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis;
    } */
    .form-horizontal{
        padding-left: 10px;
        padding-right: 10px;
        overflow: hidden;
    }
    h2 .tip{
        margin-left: 10px;
        font-size: 12px;
        vertical-align: text-bottom;
        color: #999;
        font-weight: 400;
    }
    .view-header{
        padding: 10px;
    }

    .right-clumn{
        margin-left: 40px;
    }

    @media screen and (max-width: 991px){
        .right-clumn{
            margin-left: 0;
        }
    }
</style>
