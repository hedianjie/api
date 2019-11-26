<template>
    <div class="main">
        <div class="search-form-warpper">
            <Form ref="search_form" inline :label-width="80">
                <FormItem label="产品名称">
                    <Input placeholder="产品名称搜索"/>
                </FormItem>
                <FormItem label="产品状态">
                    <Select>
                        <Option value="">-全部-</Option>
                    </Select>
                </FormItem>
                <FormItem label="开始时间">
                    <Input placeholder="开始时间搜索" type="date"/>
                </FormItem>
                <FormItem label="完成时间">
                    <Input placeholder="完成时间搜索" type="date"/>
                </FormItem>
                <FormItem label="创建人">
                    <Select>
                        <Option value="">-全部-</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" class="m-r-5" icon="md-search">搜索</Button><Button type="default" icon="md-refresh">重置</Button>
                </FormItem>
            </Form>
        </div>

        <div class="container-warpper">
            <table class="h-table table-unline" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>产品名称</th>
                        <th>产品状态</th>
                        <th>是否公开</th>
                        <th>预计完成时间</th>
                        <th>实际完成时间</th>
                        <th>创建人</th>
                        <th>创建时间</th>
                        <th>成员</th>
                        <th>版本</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>接口文档系统</td>
                        <td><Tag color="blue">进行中</Tag>
                        </td>
                        <td><Icon type="md-lock" size=16 class="m-r-5 v-a-m"/><span class="v-a-m">私密</span></td>
                        <td><Icon type="ios-clock-outline" size="16" class="m-r-5 v-a-m"/><span class="v-a-m">2015-9-11 23:23:23</span></td>
                        <td><Icon type="ios-clock-outline" size="16" class="m-r-5 v-a-m"/><span class="v-a-m">2015-9-11 23:23:23</span></td>
                        <td><span class="avatar avatar-xs avatar-round m-r-5 v-a-m"><img src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt=""></span><span class=" v-a-m">何殿杰</span></td>
                        <td><Icon type="ios-clock-outline v-a-m" size="16" class="m-r-5"/><span class=" v-a-m">2015-9-11 23:23:23</span></td>
                        <td></td>
                        <td>1.0.0</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>
<style scoped>
    .main{
        padding: 10px;
        /* background: #fff; */
    }
    .search-form-warpper{
        padding: 10px 15px;
        margin-bottom: 10px;
        background: #fff;
        border: 1px solid #dcdee2;
        border-radius: 3px;

    }
    .search-form-warpper .ivu-form-item{
        margin-bottom: 0;
        width: 250px;
    }
    .container-warpper{
        padding: 10px;
        background: #fff;
        border: 1px solid #dcdee2;
        border-radius: 3px;
    }

    .avatar{
        display: inline-block;
        border-radius: 6px;
        width: 40px;
        height: 40px;
        background: #ccc;
        overflow: hidden;
    }
    .avatar img{
        width: 100%;
        display: block;
        height: 100%;
    }
    .avatar.avatar-sm{
        width: 32px;
        height: 32px;
    }
    .avatar.avatar-xs{
        width: 28px;
        height: 28px;
    }
    .avatar.avatar-round{
        border-radius: 50%;
    }
    .h-table{
        border-right: 1px solid #dcdee2;
        border-top: 1px solid #dcdee2;
        width: 100%;
        text-align: center;
    }
    .h-table td .v-a-m{
        line-height: 0;
        display: inline-block;
        vertical-align: middle;
    }
    .h-table td,
    .h-table th{
        border-left: 1px solid #dcdee2;
        border-bottom: 1px solid #dcdee2;
        line-height: 32px;
        padding: 7px 12px;
    }
    .h-table th{
        background: #f7f7f7;
    }
    .h-table .td-after{
        width: 0;
        height: 32px;
        vertical-align: middle;
    }
    .h-table.table-unline{
        border-left: 1px solid #dcdee2;
    }
    .h-table.table-unline td,
    .h-table.table-unline th{
        border-left: none;
    }

    
</style>