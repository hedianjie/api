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
                        <SwitchComponent size="small" v-model="s_witch"/>
                        <span class="m-l-5 f-s-16">私密</span>
                    </div>
                </div>
                <div class="form-horizontal">
                    <div class="form-group">
                        <div class="label"><Icon type="ios-cube-outline" size="16" class="m-r-10"></Icon>产品介绍</div>
                        <div class="form-control">预计开始时间：2015-11-11 至 预计结束时间：2015-11-12</div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-pricetags-outline" size="16" class="m-r-10"></Icon>开发周期</div>
                        <div class="form-control">预计开始时间：2015-11-11 至 预计结束时间：2015-11-12</div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-person-outline" size="16" class="m-r-10"></Icon>创建人</div>
                        <div class="form-control">何殿杰</div>
                    </div>
                    <div class="form-group">
                        <div class="label"><Icon type="ios-people-outline" size="16" class="m-r-10"></Icon>参与者</div>
                        <div class="form-control avatar" style="margin-bottom:-15px">
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
                                    <span>邀请参与</span>
                                </div>
                            </div>
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
                                            <td>1、</td>
                                            <td><Input type="textarea"/></td>
                                            <td></td>
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

            </div>
        </div>
    </div>
</template>
<script>
    import AvatarGroup from './components/avatarGroup.vue';
    export default {
        data() {
            return {
                s_witch: true
            }
        },
        components: {AvatarGroup}
    }
</script>
<style scoped>
    .main-warpper{
        padding: 10px;
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
        padding: 0 10px;
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
    .form-group .form-control.avatar{
        margin-bottom: -15px;
    }
    /* .form-group .form-control.func{
        border: 1px dashed #dcdee2;

    } */
    .form-group .avatar-group{
        position: relative;
        width: 130px;
        margin-right: 15px;
        margin-bottom: 15px;
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

</style>
