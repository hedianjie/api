<template>
    <div class="main">
        <div class="view-header">
            <Select v-model="project_id" class="unborder-select-like-title" placeholder="搜索要查询的产品">
                <Option value="0">全部产品</Option>
                <Option value="1">接口管理平台</Option>
            </Select>
            <ul class="state-search-list">
                <li class="active">全部</li>
                <li>待开发</li>
                <li>开发中</li>
                <li>已完成</li>
            </ul>
        </div>

        <div class="container-warpper">
            <!-- <div class="group-line">
                <div class="group-title">接口管理平台</div>
            </div> -->
            <div class="group">
                <div class="group-header">
                    <Icon type="md-arrow-dropdown" size="26" class="m-r-5 color-sub"/>
                    <Icon type="md-list-box" size="26" class="m-r-5 color-thid-success"/>
                    <h4>接口管理系统</h4>
                </div>
                <div class="group-horizontal">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                </div>
                
                
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
            <div class="group">
                <div class="group-header">
                    <Icon type="md-arrow-dropdown" size="26" class="m-r-5 color-sub"/>
                    <Icon type="md-list-box" size="26" class="m-r-5 color-thid-success"/>
                    <h4>接口管理系统</h4>
                </div>
                <div class="group-horizontal">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group-horizontal">
                    <div class="col-md-3">
                        <div class="card start">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card start">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card satart">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card start">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card start">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card start">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <div class="m-r-5 version">版本：V2.1</div>
                                    <Tag color="blue">开发中</Tag>
                                </h4>
                                <div class="card-action">
                                    <Icon type="md-lock m-r-5" size="18"/>
                                    <Dropdown placement="bottom-end">
                                        <Icon type="ios-more" size="18"/>
                                        <DropdownMenu slot="list">
                                            <DropdownItem><span>编辑</span></DropdownItem>
                                            <DropdownItem><span>删除</span></DropdownItem>
                                            <DropdownItem><span>查看</span></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="m-b-10">预计时间：2019-22-22 ~ 2019-22-22</div>
                                <div class="flexable">
                                    <avatar-group></avatar-group>
                                    <span class="color-sub f-s-12"><Icon type="md-time" size="14" class="m-r-5"/>2019-11-11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
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
    import AvatarGroup from './components/avatarGroup.vue';
    export default {
        data() {
            return {
                project_id: '', 
            }
        },
        components: {AvatarGroup}
    }
</script>
<style scoped>
    .main-layout{
        padding: 10px;
    } 
    .main{
        padding: 10px;
        background: #fff;
        overflow: auto;
    }
    /* .view-header{
        margin: 0;
    } */
    .group .group-header{
        display: flex;
        align-items: center;
        padding: 10px 0;
    }
    .group .group-header h4{
        font-weight: 500;
        font-size: 16px;
    }
    .group-horizontal{
        overflow: hidden;
        /* padding-top: 10px;
        padding-bottom: 10px; */
        margin-right: -10px;
        /* margin-bottom: -10px; */

    }
    .group-horizontal .col-md-3{
        padding-right: 10px;
    }
    /* .group-line{
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
    } */

    .state-search-list{
        display: flex;
        align-items: center;
    }
    .state-search-list li{
        margin: 0 20px;
        list-style: square;
        cursor: pointer;
    }
    .state-search-list li.active{
        color: #5cadff;
    }

    .card{
        border: 1px solid #dcdee2;
        border-color: #e8eaec;
        border-left: 4px solid #f90;
        border-radius: 4px;
        padding: 12px 10px;
        transition: all .15s linear;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .card:hover{
        border-color: #eee;
        border-left: 4px solid #f90;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
    }
    .card.start{
        border-left: 4px solid #3399ff;
    }
    .card.start:hover{
        border-left: 4px solid #3399ff;
    }
    .card.wait{
        border-left: 4px solid #f90;
    }
    .card.wait:hover{
        border-left: 4px solid #f90;
    }
    .card.end{
        border-left: 4px solid rgb(238, 238, 238);
    }
    .card.wait:hover{
        border-left: 4px solid rgb(238, 238, 238);
    }
    .card .card-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

    }
    .card .card-header .card-title{
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
    }
    .card .card-header .card-title .version{
        line-height: 26px;
        letter-spacing: 2px;
    }
    .card-content .flexable{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
