<template>
    <div class="main">
        <div class="view-header">
            <Select v-model="project_id" class="unborder-select-like-title">
                <Option value="">全部产品</Option>
                <Option value="1">接口管理平台</Option>
            </Select>
        </div>

        <div class="container-warpper">
            <!-- <div class="group-line">
                <div class="group-title">接口管理平台</div>
            </div> -->
            <div class="group-container">
                <!--
                    产品名
                    介绍
                    *版本
                    功能点
                    当前状态
                    私有/公开
                    创建人
                    创建时间
                    负责成员
                    预计完成时间
                    实际完成时间
                    API数量
                    -->
            </div>
        </div>
         
    </div>
    
</template>
<script>
    export default {
        data() {
            return {
                project_id: '1', 
            }
        }
    }
</script>
<style scoped>
    .main-layout{
        padding: 10px;
    } 
    .main{
        padding: 10px;
        background: #fff;
    }

    .group-line{
        position: relative;
        border-top: 1px solid #dcdee2;
        padding-top: 17px;
        margin-top: 27px;
    }
    .group-line .group-title{
        position: absolute;
        padding: 0 6px;
        line-height: 1;
        font-size: 16px;
        color: #17233d;
        left: 5%;
        top: -8px;
        background: #fff;
    }
    
    
</style>
<style type="text/css">
    /** 更改标题下的select样式 **/
    .unborder-select-like-title{
        width: auto !important;
    }
    .unborder-select-like-title .ivu-select-selection{
        border: none !important;
        box-shadow: none !important;
    }
    .unborder-select-like-title .ivu-select-selected-value,
    .unborder-select-like-title .ivu-select-placeholder{
        padding-right: 28px !important;
        font-size: 16px !important;
    }
</style>
