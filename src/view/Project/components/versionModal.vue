<template>
    <Modal
        :width="700"
        v-model="modal1"
        title="接口管理系统"
    >
        <Form :label-width="85">
            <FormItem label="产品简介">
                <div class="auto-line-height desc">使用 ViewUI（iView）时，可以进行全局配置组件的一些属性。 组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。 组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。 组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</div>
            </FormItem>
            <FormItem label="版本号">
                <Input  :style="{width: '300px'}"/>
                <p class="color-sub auto-line-height m-t-5">上一版本为<span class="color-primary">V2.11.1</span>，当前版本不能低于上一版本</p>        
            </FormItem>
            <FormItem label="开发周期">
                <DatePicker :style="{width: '300px'}" split-panels type="daterange" placeholder="请选择开发周期"></DatePicker>
            </FormItem>
            <FormItem label="文件上传">
                <UploadList></UploadList>
            </FormItem>
            
            <FormItem label="参与者">
                <div class="avatar">
                    <div class="avatar-group">
                        <span class="avatar-close">&times;</span>
                        <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                        <p>WEB前端 何殿杰</p>
                    </div>
                    <div class="avatar-group">
                        <span class="avatar-close">&times;</span>
                        <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                        <p>WEB前端 何殿杰</p>
                    </div>
                    <div class="avatar-group">
                        <span class="avatar-close">&times;</span>
                        <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                        <p>WEB前端 何殿杰</p>
                    </div>
                    <div class="avatar-group">
                        <span class="avatar-close">&times;</span>
                        <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                        <p>WEB前端 何殿杰</p>
                    </div>
                    <div class="avatar-group">
                        <span class="avatar-close">&times;</span>
                        <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                        <p>WEB前端 何殿杰</p>
                    </div>
                    <div class="avatar-group add">
                        <div class="add-avatar">
                            <Icon type="md-add" size="22"/>
                            <span class="auto-line-height">邀请参与</span>
                        </div>
                    </div>
                    <div class="clear-both"></div>
                </div>
            </FormItem>
            <FormItem label="版本负责内容">
                <table class="table auto-line-height" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td>
                                <div><Editor v-model="content"></Editor></div>
                                <div v-if="false" v-html="content"></div>
                            </td>
                            <td class="btn-group">
                                <template>
                                    <Tooltip placement="top-start" content="编辑"><Icon size="22" class="color-primary" type="ios-create"/></Tooltip>
                                    <Tooltip placement="top" content="删除"><Icon size="22" class="color-error" type="ios-trash"/></Tooltip>
                                </template>

                                <template v-if="false">
                                    <Tooltip placement="top-start" content="确定"><Icon size="22" class="color-success" type="ios-checkmark"/></Tooltip>
                                    <Tooltip placement="top" content="取消"><Icon size="22" class="color-657180" type="ios-close"/></Tooltip>
                                </template>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div><Editor v-model="content"></Editor></div>
                                <div v-if="false" v-html="content"></div>
                            </td>
                            <td class="btn-group">
                                <template>
                                    <Tooltip placement="top-start" content="编辑"><Icon size="22" class="color-primary" type="ios-create"/></Tooltip>
                                    <Tooltip placement="top" content="删除"><Icon size="22" class="color-error" type="ios-trash"/></Tooltip>
                                </template>

                                <template v-if="false">
                                    <Tooltip placement="top-start" content="确定"><Icon size="22" class="color-success" type="ios-checkmark"/></Tooltip>
                                    <Tooltip placement="top" content="取消"><Icon size="22" class="color-657180" type="ios-close"/></Tooltip>
                                </template>
                            </td>
                        </tr>
                        <tr>
                            <td class="add-content">
                                <div><Icon type="md-add" size="14" class="m-r-5"/>添加版本内容</div>
                            </td>
                            <td class="add-content"></td>
                        </tr>
                    </tbody>
                </table>
                
            </FormItem>
        </Form>
    </Modal>
</template>
<script>
import Editor from './editor.vue';
import UploadList from './uploadList.vue'
export default {
    data() {
        return {
            modal1: true,
            content: '12345<br/>上山打老虎'
        }
    },
    components: { Editor ,UploadList}
}
</script>

<style scoped>
.auto-line-height{
    line-height: 1.625;
}
.desc{
    padding-top: 6px;
}
.table{
    width: 100%;
}
.table td{
    vertical-align: top;
    padding: 10px 0;
    border-bottom: 1px solid #dcdee2;
}
.table .btn-group{
    width: 68px;
    white-space: nowrap;
    padding: 10px;
}
.table .btn-group > * {
    cursor: pointer;
}
.table .add-content{
    border-bottom: 0;
}
.table .add-content div{
    padding: 5px 0;
    text-align: center;
    border: 1px dashed #3399ff;
    color: #3399ff;
    font-size: 12px;
    cursor: pointer;
}
    .avatar .avatar-group{
        position: relative;
        width: 130px;
        margin-right: 10px;
        margin-bottom: 10px;
        text-align: center;
        float: left;
        height: 60px;
    }
    .avatar .avatar-group .avatar-close{
        position: absolute;
        width: 18px;
        height: 18px;
        right: 0;
        top: -5px;
        border: 1px solid #fff;
        background: #eee;
        color: #657180;
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        border-radius: 50%;
        transition: all .15s ease-in-out;
        cursor: pointer;
        text-align: center;
    }
    .avatar .avatar-group img{
        width: 36px;
        height: 36px;
        display: inline-block;
        border-radius: 50%;
    }
    .avatar .avatar-group .avatar-close:hover{
        background: #ff6600;
        color: #fff;
    }
    .avatar .avatar-group p{
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1
    }
    .avatar .avatar-group.add{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #3399ff;
        color: #3399ff;
        cursor: pointer;
        user-select: none;
    }
    .avatar .avatar-group.add .add-avatar{
        text-align: center;
        display: flex;
        flex-direction: column;
    }
</style>


