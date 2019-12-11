<template>
    <div class="main">
        <div class="search-form-warpper">
            <Form class="form-horizontal" :label-width="85" inline>
                    <FormItem label="部门名称：">
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
                        <th>部门名称</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>华南项目组</td>
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
