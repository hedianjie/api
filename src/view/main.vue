<template>
    <div style="height: 100%">
        <div class="layout-header"></div>
        <div class="layout-slidebar">
            <div class="slidebar-toolbar">
                <div class="auth-avatar"><img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" alt=""></div>
                <HButton theme="white" :only="true" icon="md-add">新建项目</HButton>
            </div>
            <scroll-bar :styles="{height: '100%'}">
                
                <div class="slidebar-list">
                    <span class="project-icon"><Icon type="ios-arrow-forward" size="16"/></span>
                    <span class="project-text"> WMS物流仓储系统</span>
                    <span class="project-operate"><Icon type="ios-trash" size="18"/></span>
                </div>
             
            </scroll-bar>
        </div>
        <div class="layout-main">
            <router-view class="container"></router-view>
        </div>
        <!-- <div class="layout-footer"></div> -->
    </div>
</template>
<script>
    // import scrollBar from '@/components/scrollbar';
    export default {
        // components: {scrollBar}
    }
</script>
<style scoped>
.layout-header{
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    background: red;
    /* z-index: 1; */
}
.layout-main{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-left: 250px;
    background: #f5f7f9;
}
/* .layout-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-top: 1px solid #eee;
    background: red;
} */

.layout-slidebar{
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    padding-top: 50px;
    border-right: 1px solid #39435c;
    z-index: 1;
    background: #39435c;
}
.container{
    overflow: auto;
}

.layout-slidebar .slidebar-toolbar{
    background: #283744;
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
.layout-slidebar .slidebar-toolbar .auth-avatar{
    width: 38px;
    height: 38px;
    overflow: hidden;
    border-radius: 50%;
}

 .slidebar-list{
    color: #ddd;
    font-size: 14px;
    line-height: 46px;
    padding-left: 10px;
    padding-right: 43px;
    word-break: break-all;
    overflow: hidden;
    position: relative;
}
 .slidebar-list .project-icon{
    margin-right: 5px;
    display: inline-block;
}
 .slidebar-list .project-operate{
    position: absolute;
    right: 13px;
    width: 24px;
    height: 24px;
    top: 11px;
    text-align: center;
    line-height: 24px;
    /* color: #ed4014; */
    border: 1px solid transparent;
    transition: all .2s linear;
    cursor: pointer;
}
 .slidebar-list .project-operate:hover{
    color:#ddd ;
    background: #ed4014;
    border: 1px solid #ddd;
}


</style>
