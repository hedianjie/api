<template>
    <div class="api-warpper">
        <chat></chat>
        <!-- <div class="api-slidebar">
    
            <scroll-bar :style="{height: '100%'}">
    
                <div class="api-list active">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
                <div class="api-list">
    
                    <div class="api-list-status"></div>
    
                    <div class="api-list-content">
    
                        <div class="api-list-url">/api/login</div>
    
                        <div class="api-list-explain">登录获取权限</div>
    
                    </div>
    
                </div>
    
            </scroll-bar>
    
        </div>
        <div class="main">
            <scroll-bar :style="{height: '100%', padding: '10px'}">
                <div style="padding: 10px 0;">
                    <api-view></api-view>
                    <api-view></api-view>
                </div>
            </scroll-bar>
        </div> -->
    </div>
</template>
<script>
    // import scrollBar from '@/components/scrollBar.vue';
    // import apiView from "@/view/Api/components/apiView.vue";
    import Chat from '@/view/Project/components/chat.vue';
    export default {
        data() {
            return {}
        },
    
        components: {
            Chat
            // scrollBar,
            // apiView
        }
    }
</script>
<style scoped>
    /* .api-warpper {
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
    
     */
    
    .main {
    
        height: 100%;
    
    }
</style>

