<template>
    <div class="main-warpper">
        <div class="main">
            <div class="position-header">
                <div class="view-header">
                    <h4 class="view-title">
                        <a href="javascript: history.back(-1)"><Icon type="ios-arrow-back" class="m-r-5" size="18"/>返回</a>
                    </h4>
                </div>
            </div>
            
            <!-- 左侧显示产品版本详细 -->
            <div class="left-side">
                <div class="info-title">
                    <h4><span class="text">接口管理系统</span><Tag color="primary">V2.1.1</Tag></h4>
                    <div class="info-title-action">
                        <!-- <SwitchComponent size="small" v-model="s_witch"/> -->
                        <Icon type="md-lock" size="18"/>
                        <span class="m-l-5 f-s-16">私密</span>
                    </div>
                </div>
                <div class="form-horizontal">
                    <div class="form-group">
                        <div class="label"><Icon type="ios-cube-outline" size="16" class="m-r-10"></Icon>产品介绍</div>
                        <div class="form-control">	
使用 ViewUI（iView）时，可以进行全局配置组件的一些属性。 组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。 组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。 组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</div>
                    </div>
                     <div class="form-group">
                        <div class="label"><Icon type="ios-person-outline" size="16" class="m-r-10"></Icon>版本创建人</div>
                        <div class="form-control">何殿杰</div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-time-outline" size="16" class="m-r-10"></Icon>创建时间</div>
                        <div class="form-control">2015-11-11</div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-pricetags-outline" size="16" class="m-r-10"></Icon>开发周期</div>
                        <div class="form-control">预计：2015-11-11 至 2015-11-12</div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-folder-outline" size="16" class="m-r-10"/>文件</div>
                        <div class="form-contorl"><UploadList></UploadList></div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-people-outline" size="16" class="m-r-10"></Icon>参与者</div>
                        <div class="form-control avatar">
                            <div class="avatar-group">
                                <!-- <span class="avatar-close">&times;</span> -->
                                <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                                <p>WEB前端 何殿杰</p>
                            </div>
                            <div class="avatar-group">
                                <!-- <span class="avatar-close">&times;</span> -->
                                <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                                <p>WEB前端 何殿杰</p>
                            </div>
                            <div class="avatar-group">
                                <!-- <span class="avatar-close">&times;</span> -->
                                <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                                <p>WEB前端 何殿杰</p>
                            </div>
                            <div class="avatar-group">
                                <!-- <span class="avatar-close">&times;</span> -->
                                <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                                <p>WEB前端 何殿杰</p>
                            </div>
                            <div class="avatar-group">
                                <!-- <span class="avatar-close">&times;</span> -->
                                <img src="https://dev-file.iviewui.com/avatar_default/avatar" alt="">
                                <p>WEB前端 何殿杰</p>
                            </div>
                            <!-- <div class="avatar-group add">
                                <div class="add-avatar">
                                    <Icon type="md-add" size="22"/>
                                    <span>邀请参与</span>
                                </div>
                            </div> -->
                            <div class="clear-both"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-list-box-outline" size="16" class="m-r-10"/>版本负责内容</div>
                        <div class="form-control func">
                            <div class="func-group">
                                <table cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td width="30">1、</td>
                                            <td><div class="func-content">使用 ViewUI（iView）时，可以进行全局配置组件的一些属性。

组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</div></td>
                                            <td width="70"></td>
                                        </tr>
                                        <tr>
                                            <td width="30">1、</td>
                                            <td><div class="func-content">使用 ViewUI（iView）时，可以进行全局配置组件的一些属性。

组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</div></td>
                                            <td width="70"></td>
                                        </tr>
                                        <tr class="disabled">
                                            <td width="30">1、</td>
                                            <td><div class="func-content">使用 ViewUI（iView）时，可以进行全局配置组件的一些属性。

组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</div></td>
                                            <td width="70"></td>
                                        </tr>
                                        <tr>
                                            <td width="30">1、</td>
                                            <td><div class="func-content">使用 ViewUI（iView）时，可以进行全局配置组件的一些属性。

组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</div></td>
                                            <td width="70"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右侧显示消息通知 -->
            <div class="right-side">
                <div class="btn-groups">
                    <div class="btn-list">
                        <div class="btn-info">
                            <div><Icon type="md-build" size="18"/></div>
                            <p>编辑当前版本</p>
                        </div>
                    </div>
                    <div class="btn-list">
                        <div class="btn-info">
                            <div><Icon type="md-trash" size="18"/></div>
                            <p>删除当前版本</p>
                        </div>
                    </div>
                    <div class="btn-list">
                        <router-link :to="{name: 'ApiIndex'}" class="btn-info">
                            <div><Icon type="md-code-working" size="18"/></div>
                            <p>接口数量：<span class="color-error">69</span></p>
                        </router-link>
                    </div>
                    <div class="btn-list">
                        <div class="btn-info">
                            <div><Icon type="md-play" size="18"/></div>
                            <p>开始当前版本</p>
                        </div>
                    </div>
                    <div class="btn-list">
                        <div class="btn-info">
                            <div><Icon type="md-checkmark-circle" size="18"/></div>
                            <p>完成当前版本</p>
                        </div>
                    </div>
                    
                </div>
                <chat></chat>
            </div>
            <version-modal></version-modal>
        </div>
    </div>
</template>
<script>
    import Chat from './components/chat.vue'
    import VersionModal from './components/versionModal.vue'
    import UploadList from './components/uploadList.vue'
    export default {
        data() {
            return {
                s_witch: true
            }
        },
        components: {Chat, VersionModal, UploadList}
    }
</script>
<style scoped>
    .main-warpper{
        padding: 10px;
        height: 100%;
    }
    .main{
        position: relative;
        background: #fff;
        height: 100%;
        padding-top: 50px;
        overflow: hidden;
    }
    .position-header{
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        /* padding: 0 10px; */
    }
    .position-header .view-header{
        padding-left: 10px;
        padding-right: 10px;
    }
    .left-side,
    .right-side{
        height: 100%;
        padding: 10px;
        float: left;
    }
    .left-side{
        padding-left: 20px;
        padding-right: 20px;
        width: 66.6666666666%;
        border-right: 1px solid #dcdee2;
        overflow: auto;

    }
    .right-side{
        width: 33.3333333333%;
        padding: 0;
        padding-top: 210px;
        position: relative;
    }
    


    .info-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        margin: 10px 0;
        line-height: 1;
    }
    .info-title h4{
        font-size: 18px;
        font-weight: 500;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        display: flex;
        align-items: center;

    }
    .info-title h4 .text{
        /* line-height: 1; */
        display: inline-block;
        margin-right: 5px;
        font-weight: bold;
        letter-spacing: 2px;

    }
    .info-title-action{
        display: flex;
        align-items: center;
    }
    .info-title-action > * {
        display: inline-block;
    }

    .form-group{
        position: relative;
        padding-left: 130px;
        line-height: 1;
        margin-bottom: 15px;
        font-size: 14px;
        min-height: auto;
    }
    .form-group .label{
        font-size: 14px;
        color: #8892a0;
        line-height: 1.625;
    }
    .form-group .form-control{
        line-height: 1.625;
    }
    /* .form-group .form-control.avatar{
        margin-bottom: -15px;
    } */
    /* .form-group .form-control.func{
        border: 1px dashed #dcdee2;

    } */
    .form-group .avatar-group{
        position: relative;
        width: 130px;
        margin-right: 10px;
        margin-bottom: 10px;
        text-align: center;
        float: left;
        height: 71px;
    }
    .form-group .avatar-group .avatar-close{
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
    .form-group .avatar-group img{
        width: 45px;
        height: 45px;
        display: inline-block;
        border-radius: 50%;
    }
    .form-group .avatar-group .avatar-close:hover{
        background: #ff6600;
        color: #fff;
    }
    .form-group .avatar-group p{
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .form-group .avatar-group.add{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #3399ff;
        color: #3399ff;
        cursor: pointer;
        user-select: none;
    }
    .form-group .avatar-group.add .add-avatar{
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .func-group table{
        border: none;
        width: 100%;
        text-align: left;
        vertical-align: top;

    }
    .func-group table td{
        vertical-align: top;
        padding: 5px;
    }
    .func-group table .func-content{
        border-bottom: 1px solid #dcdee2;
        padding-bottom: 5px;
    }
    .func-group table tr.disabled{
        color: #c3cbd6 !important;
    }

    .right-side .btn-groups{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 210px;
    }

    .right-side .btn-groups .btn-list{
        border-right: 1px solid #dcdee2;
        border-bottom: 1px solid #dcdee2;
        width: 25%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        transition: color .15s linear;
        cursor: pointer;
    }
    .right-side .btn-groups .btn-list .btn-info{
        color: inherit;
    }
    .right-side .btn-groups .btn-list:hover .btn-info{
        color: #3399ff;
        
    }
    .right-side .btn-groups .btn-list:hover{
        background: #f7f7f7;
        box-shadow: 0 0 10px #ddd inset;
    }
    .right-side .btn-list .btn-info{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    .right-side .btn-list .btn-info > p{
        margin-top:5px;
    }
    /* .right-side  */

    

    
    /* .right-side .chat-box .chat-title .actions */

</style>

