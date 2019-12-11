<template>
    <div class="main">
        <div class="container">
            <div class="view-header">
                <h4 class="view-title">测试管理</h4>
            </div>
            <div class="search-form-warpper">
                <Form class="form-horizontal" :label-width="75" inline>
                        <FormItem label="产品：">
                            <Select></Select>
                        </FormItem>
                        <FormItem label="版本：">
                            <Select></Select>
                        </FormItem>
                        <FormItem label="测试等级：">
                            <Select></Select>
                        </FormItem>
                        <FormItem label="测试状态：">
                            <RadioGroup>
                                <Radio label="0">全部</Radio>
                                <Radio label="1">未开始</Radio>
                                <Radio label="2">进行中</Radio>
                                <Radio label="3">已完成</Radio>
                            </RadioGroup>
                        </FormItem>
                        
                        <div class="pull-right m-b-10">
                            <Button icon="ios-search" type="primary">搜索</Button>
                            <Button icon="ios-refresh" type="warngin">重置</Button>
                        </div>
                </Form>
            </div>


            <div class="container-warpper">
                <table class="h-table" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>产品</th>
                            <th>版本</th>
                            <th>测试等级</th>
                            <th>预计发布时间</th>
                            <th>提交时间</th>
                            <th>当前状态</th>
                            <th>排期</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Badge dot><b>接口管理系统</b></Badge></td>
                            <td><span class="color-primary">V2.10.1</span></td>
                            <td><Tag color="error">非常紧急</Tag></td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Tag type="dot" color="error">未开始</Tag></td>
                            <td>
                                <p>预计开始：<Icon type="md-time"/> 2019-11-11</p>
                                <p>预计结束：<Icon type="md-time"/> 2019-11-11</p>
                            </td>
                            <td>
                                <!-- <Tooltip content="未创建测试计划，请先创建测试计划"><Button icon="ios-add">创建测试计划</Button></Tooltip> -->
                                <Button type="primary" icon="ios-information-circle-outline">测试详情</Button>
                            </td>
                        </tr>
                        <tr>
                            <td><b>接口管理系统</b></td>
                            <td><span class="color-primary">V2.10.1</span></td>
                            <td><Tag color="error">非常紧急</Tag></td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Tag type="dot" color="primary">进行中</Tag></td>
                            <td>
                                <span class="color-sub">未创建测试计划……</span>
                                <!-- <p>预计开始：<Icon type="md-time"/> 2019-11-11</p>
                                <p>预计结束：<Icon type="md-time"/> 2019-11-11</p> -->
                            </td>
                            <td>
                                <Tooltip content="点击创建测试计划"><Button icon="ios-add">创建测试计划</Button></Tooltip>
                                <!-- <Button type="primary" icon="ios-information-circle-outline">测试详情</Button> -->
                            </td>
                        </tr>
                        <tr>
                            <td><b>接口管理系统</b></td>
                            <td><span class="color-primary">V2.10.1</span></td>
                            <td><Tag color="error">非常紧急</Tag></td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Tag type="dot" color="primary">进行中</Tag></td>
                            <td>
                                <p>预计开始：<Icon type="md-time"/> 2019-11-11</p>
                                <p>预计结束：<Icon type="md-time"/> 2019-11-11</p>
                            </td>
                            <td>
                                <!-- <Tooltip content="未创建测试计划，请先创建测试计划"><Button icon="ios-add">创建测试计划</Button></Tooltip> -->
                                <Button type="primary" icon="ios-information-circle-outline">测试详情</Button>
                            </td>
                        </tr>
                        <tr>
                            <td><b>接口管理系统</b></td>
                            <td><span class="color-primary">V2.10.1</span></td>
                            <td><Tag color="error">非常紧急</Tag></td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Icon type="md-time"/> 2019-11-11</td>
                            <td><Tag type="dot" color="success">已完成</Tag></td>
                            <td>
                                <p>预计开始：<Icon type="md-time"/> 2019-11-11</p>
                                <p>预计结束：<Icon type="md-time"/> 2019-11-11</p>
                            </td>
                            <td>
                                <Tooltip content="未创建测试计划，请先创建测试计划"><Button icon="ios-add">创建测试计划</Button></Tooltip>
                                <!-- <Button type="primary" icon="ios-information-circle-outline">测试详情</Button> -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container{
        background: #fff;
        min-height: 100%;
        padding: 10px;
    }

    .main{
        padding: 10px;
        height: 100%;
    }
    .search-form-warpper{
        margin-bottom: 10px;
        background: #fff;
        border-bottom: 1px solid #dcdee2;

    }
    .search-form-warpper .ivu-form-item{
        margin-bottom: 10px;
        min-width: 250px;
    }
    .form-horizontal{
        overflow: hidden;
    }
    .flex-content{
        display: flex;
        align-items: center;
    }
    .h-table{
        width: 100%;
    }
    .h-table th,
    .h-table td{
        text-align: left;   
        padding: 10px 12px;
        border-bottom: 1px solid #dcdee2;
    }
    .table-avatar{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
        margin-right: 5px;
    }
    .table-avatar img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .form-horizontal{
        overflow: hidden;
    }
</style>
    
</style>
