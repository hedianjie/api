<template>
    <div class="main">
        <div class="search-form-warpper">
            <Form class="form-horizontal" :label-width="85" inline>
                    <FormItem label="用户名：">
                        <Input/>
                    </FormItem>
                    <FormItem label="账号：">
                        <Input/>
                    </FormItem>
                    <FormItem label="所在部门：">
                        <Select></Select>
                    </FormItem>
                    <FormItem class="pull-right">
                        <Button icon="ios-search" type="primary">搜索</Button>
                        <Button icon="ios-refresh" type="warngin">重置</Button>
                    </FormItem>
            </Form>
        </div>
        <div class="container-warpper">
            <table class="h-table" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>账号</th>
                        <th>所属部门</th>
                        <th>标签</th>
                        <th>电话</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="flex-content">
                                <span class="table-avatar"><img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" alt=""></span>
                                <span>何殿杰</span>
                            </div>
                        </td>
                        <td>hedianjie</td>
                        <td><Tag type="border" color="primary">华南项目组</Tag></td>
                        <td><Tag color="primary" size="small">web前端开发</Tag></td>
                        <td><Icon type="md-call"/> 15567702010</td>
                        <td><Icon type="md-time"/> 2019-11-11 11:11:11</td>
                        <td>
                            <Button icon="md-create" type="primary">编辑</Button>
                            <Button icon="ios-trash">删除</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex-content">
                                <span class="table-avatar"><img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" alt=""></span>
                                <span>何殿杰</span>
                            </div>
                        </td>
                        <td>hedianjie</td>
                        <td><Tag type="border" color="primary">华南项目组</Tag></td>
                        <td><Tag color="primary" size="small">web前端开发</Tag></td>
                        <td><Icon type="md-call"/> 15567702010</td>
                        <td><Icon type="md-time"/> 2019-11-11 11:11:11</td>
                        <td>
                            <Button icon="md-create" type="primary">编辑</Button>
                            <Button icon="ios-trash">删除</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex-content">
                                <span class="table-avatar"><img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" alt=""></span>
                                <span>何殿杰</span>
                            </div>
                        </td>
                        <td>hedianjie</td>
                        <td><Tag type="border" color="primary">华南项目组</Tag></td>
                        <td><Tag color="primary" size="small">web前端开发</Tag></td>
                        <td><Icon type="md-call"/> 15567702010</td>
                        <td><Icon type="md-time"/> 2019-11-11 11:11:11</td>
                        <td>
                            <Button icon="md-create" type="primary">编辑</Button>
                            <Button icon="ios-trash">删除</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
    .main{
        padding: 10px;
    }
    .search-form-warpper{
        margin-bottom: 10px;
        background: #fff;
        border-bottom: 1px solid #dcdee2;

    }
    .search-form-warpper .ivu-form-item{
        margin-bottom: 10px;
        width: 250px;
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
</style>
