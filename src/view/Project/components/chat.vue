<template>
    <div class="chat-box">
        <div class="chat-title">
            <h4><Icon type="ios-chatbubbles-outline" size="16" class="m-r-5"/>版本沟通聊天室</h4>
            <avatar-group></avatar-group>
        </div>
        <div class="chat-container">
            <div class="chat-user-warpper">
                <ul>
                    
                
                    <li class="chat-user-list active">
                        <div class="chat-user-avatar"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></div>
                        <div class="chat-user-content">
                            <div class="chat-user-name">
                                <!-- <span></span> -->
                                <span class="tag primary">群组</span>
                                <Badge :count="1100"></Badge>
                            </div>
                            <div class="chat-user-status">
                                <span class="name">群组聊天室</span>
                            </div>
                        </div>
                    </li>
                    <li class="chat-user-list">
                        <div class="chat-user-avatar"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></div>
                        <div class="chat-user-content">
                            <div class="chat-user-name">
                                <span class="tag primary">WEB前端</span>
                                <Badge :count="1100"></Badge>
                            </div>
                            <div class="chat-user-status">
                                <span class="name">何殿杰</span>
                            </div>
                        </div>
                    </li>
                    <li class="chat-user-list">
                        <div class="chat-user-avatar"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></div>
                        <div class="chat-user-content">
                            <div class="chat-user-name">
                                <span class="tag primary">WEB前端</span>
                                <Badge :count="1"></Badge>
                            </div>
                            <div class="chat-user-status">
                                <span class="name">何殿杰</span>
                            </div>
                        </div>
                    </li>
                    <li class="chat-user-list">
                        <div class="chat-user-avatar"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></div>
                        <div class="chat-user-content">
                            <div class="chat-user-name">
                                <span class="tag primary">WEB前端</span>
                                <Badge :count="1100"></Badge>
                            </div>
                            <div class="chat-user-status">
                                <div class="name">一个无法成为前端的小渣渣</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chat-view-warpper">
                <div class="chat-view-title">群组聊天</div>
                <div class="chat-view-container">
                    <ul>
                        <!-- 聊天左侧样式 -->
                        <li class="chat-left-side">
                            <div class="user-avatar"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></div>
                            <div class="user-content">
                                <div class="user-title">
                                    <span class="tag primary">WEB前端</span><span>何殿杰</span>
                                </div>
                                <div class="content">1231231212312312123123121231231212312312</div>
                                <div class="send-time">2019-11-11 11:11:11</div>
                            </div>
                        </li>
                        <!-- 聊天右侧样式 -->
                        <li class="chat-right-side">
                            <div class="user-avatar"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></div>
                            <div class="user-content">
                                <div class="user-title">
                                    <!-- 注意右侧样式 因为float right 名字在前 -->
                                    <span>何殿杰</span><span class="tag primary">WEB前端</span>
                                </div>
                                <div class="content">1231231212312312123123121231231212312312</div>
                                <div class="send-time">2019-11-11 11:11:11</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="chat-view-input-warpper">
                    <!-- 发送图片上传附件 -->
                    <div class="func-group">
                        <div class="func-btn">
                            <input type="file">
                            <Icon type="md-image" size="22"/>
                        </div>
                        <div class="func-btn">
                            <input type="file">
                            <Icon type="md-folder" size="22"/>
                        </div>
                    </div>
                    
                    <Input type="textarea" class="chat-view-input" placeholder="输入聊天内容"/>

                    <!-- 发送按钮 -->
                    <div class="submit-group">
                        <span class="f-s-12 color-sub">按control+Enter即可发送信息</span>
                        <Button type="success" icon="md-send">发送</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AvatarGroup from './avatarGroup.vue';
export default {
    data() {
        return {}
    },
    components: {AvatarGroup}
}
</script>

<style scoped>
    .chat-box{
        border-top: 1px solid #dcdee2;
        height: 100%;
        position: relative;
        padding-top: 38px;
        border-right: 1px solid #dcdee2;
        /* border-bottom: 1px solid #dcdee2; */
    }
    .chat-box .chat-title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 38px;
        border-bottom: 1px solid #dcdee2;
    }
    .chat-box .chat-title h4{
        font-weight: 400;
        font-size: 16px;
    }

    .chat-box .chat-container{
        display: flex;
        height: 100%;
    }
    /** 人员列表 **/
    .chat-box .chat-container .chat-user-warpper{
        width: 170px;
        height: 100%;
        border-right: 1px solid #dcdee2;
        overflow: hidden;
    }
    .chat-box .chat-container .chat-user-warpper ul,
    .chat-box .chat-container .chat-view-warpper .chat-view-container ul{
        overflow-y: scroll;
        margin-right: -18px;
        height: 100%;
    }
    .chat-box .chat-container .chat-user-warpper ul li,
    .chat-box .chat-container .chat-view-warpper .chat-view-container ul li{
        list-style: none;
    }
    .chat-box .chat-container .chat-user-warpper .chat-user-list{
        padding: 10px 5px;
        padding-left: 42px;
        position: relative;
        border-bottom: 1px solid #dcdee2;
        /* display: flex; */
        /* align-items: center; */
        overflow: hidden;
    }
    .chat-box .chat-container .chat-user-warpper .chat-user-list .chat-user-content{
        /* flex: 1; */
        width: 100%;
    }
    .chat-box .chat-container .chat-user-warpper .chat-user-list .chat-user-avatar{
        position: absolute;
        top: 14px;
        left: 5px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        /* margin-right: 5px; */
        /* flex-shrink: 0; */
    }
    .chat-box .chat-container .chat-user-warpper .chat-user-list .chat-user-avatar img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .chat-box .chat-container .chat-user-warpper .chat-user-list .chat-user-name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        line-height: 1;
        height: 20px;
     }
    .chat-box .chat-container .chat-user-warpper .chat-user-list .name{
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
    }
    .chat-box .chat-container .chat-user-warpper .chat-user-list.active{
        background: #e7eeee;
    }
     /** 聊天室 **/
    .chat-box .chat-container .chat-view-warpper{
        height: 100%;
        flex: 1;
        padding-top: 34px;
        padding-bottom: 170px;
        position: relative;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-title{
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 1px solid #dcdee2;
        width: 100%;
        height: 34px;
        line-height: 24px;
        padding: 5px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper{
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        border-top: 1px solid #dcdee2;
        height: 170px;
        padding-top: 30px;
        padding-bottom: 40px;
    }
    /** 聊天功能 **/
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper .func-group{
        position: absolute;
        height: 30px;
        width: 100%;
        top: 0;
        left: 0;
        border-bottom: 1px solid #dcdee2;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper .func-group .func-btn{
        margin-right: 10px;
        position: relative;
        transition: color .15s linear;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper .func-group .func-btn input[type=file]{
        position: absolute;top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper .func-group .func-btn:hover{
        color: #3399ff;
    }
    /** 发送 **/
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper .submit-group{
        position: absolute;
        width: 100%;
        height: 40px;
        bottom: 0;
        left: 0;
        border-top: 1px solid #dcdee2;
        border-bottom: 1px solid #dcdee2;   
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-input-warpper .chat-view-input{
        height: 100%;
        width: 100%;
        border: none;
    }

    .chat-box .chat-container .chat-view-warpper .chat-view-container{
        padding: 5px 0;
        margin: 0 5px;
        height: 100%;
        overflow: hidden;
    }
    /* .chat-box .chat-container .chat-view-warpper .chat-view-container ul{
        overflow-y: scroll;
        margin-right: -18px;
        height: 100%;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container ul li{
        list-style: none;
    } */
    .chat-box .chat-container .chat-view-warpper .chat-view-container .user-avatar{
        position: absolute;
        width: 32px;
        height: 32px;
        top: 0;
        border-radius: 50%;
        overflow: hidden;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .user-avatar img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .user-title{
        position: relative;
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 1;
        margin-bottom: 5px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .content{
        padding: 5px;
        /* width: 80%; */
        border-radius: 6px;
        word-break: break-all;
        font-size: 13px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .send-time{
        color: #9ea7b4;
        font-size: 12px;
        margin-top: 3px;
        line-height: 1;
        transform: scale(.85)
    }
    .chat-box .chat-container .tag{
        padding: 2px 4px;
        color: #fff;
        border-radius: 3px;
        transform: scale(.88);
    }
    .tag.primary{
        background: #3399ff
    }
    .tag.yellow{
        background: #ff9900;
    }
    .tag.green{
        background: #8dd84b;
    }
    .tag.black{
        background: #464c5b;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side,
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side{
        position: relative;
        margin-top: 10px;
        width: 80%;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side{
        float: left;
        padding-left: 47px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .user-title,
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .content,
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .send-time{
        float: left;
        clear: both;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .user-avatar{
        left: 0;
    }
    
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .user-content .content{
        background: #fff;
        border: 1px solid #dcdee2;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .tag{
        transform-origin: left center;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-left-side .user-content .send-time{
        transform-origin: left center;
    }

    

    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side{
        float: right;
        padding-right: 47px;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .user-title,
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .content,
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .send-time{
        float: right;
        clear: both;
    }
    
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .user-avatar{
        right: 0;
    }
    
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .user-content .content{
        background: #b2e281;
        border: 1px solid #b2e281;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .tag{
        transform-origin: right center;
    }
    .chat-box .chat-container .chat-view-warpper .chat-view-container .chat-right-side .user-content .send-time{
        transform-origin: right center;
    }
</style>

