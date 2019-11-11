<template>
    <div class="api-content">
        <!-- api地址 -->
        <div class="api-content-url">
            <h2 class="color-primary">接口：/api/login</h2>
            <div class="api-content-url-btn">
                <HButton icon="ios-create" class="m-r-5">编辑</HButton>
                <HButton icon="ios-trash">删除</HButton>
            </div>
        </div>
        <!-- 华丽分割线 -->
        <div class="api-content-line"></div>
        <!-- api概述 -->
        <div class="api-content-explain">概述：获取登录权限</div>
        <!-- api methods -->
        <div class="api-content-methods">方式：【GET】</div>
        <!-- 调用接口字段解释 -->
        <div class="api-content-flex">
            <div class="api-content-flex-label">参数：</div>
            <table class="api-content-flex-content api-content-parameter-table" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <td>字段</td>
                        <td>说明</td>
                        <td>类型</td>
                        <td>必填</td>
                        <td>默认值</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>username</td>
                        <td>用户账号</td>
                        <td>[<span class="color-primary">String</span>]</td>
                        <td><span class="color-error">true</span></td>
                        <!-- color-disabled -->
                        <td>''</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 调用接口示例 -->
        <div class="api-content-flex">
            <div class="api-content-flex-label">
                <span>示例：</span>
                <br/>
                <a title="复制示例" class="api-example-copy api-btn-default" href="javascript:void(0);">
                    <Icon type="ios-copy" size="28" />
                </a>
            </div>
            <div class="api-content-flex-content api-content-parameter-example">
                <div class="api-example-show-all">
                    <Icon type="ios-reorder" />
                </div>
                <scroll-bar :styles="{'max-height': '200px'}">
                    <div class="api-example">
                    </div>
                </scroll-bar>
            </div>
        </div>
        <!-- 返回接口字段解释 -->
        <div class="api-content-flex">
            <div class="api-content-flex-label">返回：</div>
            <table class="api-content-flex-content api-content-parameter-table" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <td>字段</td>
                        <td>说明</td>
                        <td>类型</td>
                        <td>必填</td>
                        <td>默认值</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>username</td>
                        <td>用户账号</td>
                        <td>[<span class="color-primary">String</span>]</td>
                        <td><span class="color-error">true</span></td>
                        <!-- color-disabled -->
                        <td>''</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 返回接口示例 -->
        <div class="api-content-flex">
            <div class="api-content-flex-label">
                <span>示例：</span>
                <br/>
                <a title="复制示例" class="api-example-copy api-btn-default" href="javascript:void(0);">
                    <Icon type="ios-copy" size="28" />
                </a>
            </div>
            <div class="api-content-flex-content api-content-parameter-example">
                <div class="api-example-show-all">
                    <Icon type="ios-reorder" />
                </div>
                <scroll-bar :styles="{'max-height': '200px'}">
                    <div class="api-example">
                    </div>
                </scroll-bar>
            </div>
        </div>
    </div>
</template>
<script>
    // import scrollBar from '@/components/scrollBar.vue'
    export default {
        data() {
            return {}
        },
        // components: {scrollBar}
    }
</script>
<style scoped>
h2{
    font-weight: 400;
}
.api-content {
    margin: 0 10px;
    padding: 10px;
    margin-bottom: 40px;
    color: #657180;
    background: #fff;
    border: 1px solid #e3e8ee;
    border-radius: 3px;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \\5FAE\8F6F\96C5\9ED1, Arial, sans-serif;
}

.api-content-line {
    width: 100%;
    height: 0px;
    border-top: 1px solid #e3e8ee
}

.api-content:last-child {
    margin-bottom: 0;
}

.api-content-url {
    /* font-size: 26px; */
    margin: 10px 0;
    margin-top: 0;
    font-weight: 400;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between
}
.api-content-url-btn{
    display: flex;
}
.api-content-flex {
    display: flex;
}

.api-content-flex-content {
    flex: 1;
}

.api-content-parameter-table {
    border-left: 1px solid #e3e8ee;
    border-top: 1px solid #e3e8ee;
    border-right: none;
    border-bottom: none;
    line-height: 1.625;
    background: #fff;
    overflow: hidden;
    border-radius: 3px;
}

.api-content-parameter-table thead {
    font-weight: 400;
    color: #464c5b;
    background: #f5f7f9;
}

.api-content-parameter-table td {
    min-height: 48px;
    padding: 8px 16px;
    text-align: center;
    border-right: 1px solid #e3e8ee;
    border-bottom: 1px solid #e3e8ee;
    border-left: none;
    border-top: none;
}

.api-content-parameter-example {
    background: #fff;
    border: 1px solid #e3e8ee;
    border-radius: 3px;
    padding-bottom: 15px;
    position: relative;
}

.api-example {
    padding: 8px 16px;
}

a.api-btn-default {
    user-select:none;
    color: #657180;
    transition: color .1s linear;
}

a.api-btn-default:hover {
    color: #858b92;
}

a.api-btn-default:active {
    color: #657180;
}

.api-example-show-all {
    position: absolute;
    bottom: 0;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    left: 0;
    width: 100%;
    border-top: 1px solid #e3e8ee;
    background: #f5f7f9;
    cursor: pointer;
}

.api-content-line,
.api-content-explain,
.api-content-methods,
.api-content-flex {
    margin-bottom: 12px;
}
</style>
