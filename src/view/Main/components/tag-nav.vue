<template>
    <div class="tag-nav">
        <div class="btn-con left-btn" @click="handleScroll(240)">
            <Icon type="ios-arrow-back" size="18"/>
        </div>
        <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
            <div class="scroll-view" ref="scrollBody" :style="{left: tagBodyLeft + 'px'}">
                <template v-for="(item, index) in routerList">
                    <div
                        class="tag-list"
                        :key="index"
                        ref="tagsPageOpened"
                        :class="item.active ? 'active' : ''"
                        @click="jumpRouter(item.name)"
                    >
                        <span class="tag-icon"></span>
                        <span class="tag-text">{{item.realName}}</span>
                        <template v-if="item.name != 'HomeIndex'">
                            <span class="tag-close" @click.stop="delRouter(index)"><Icon type="ios-close" size="18"/></span>
                        </template>
                    
                    </div>
                </template>
            </div>
        </div>
        <div class="btn-con right-btn" @click="handleScroll(-240)">
            <Icon type="ios-arrow-forward" size="18"/>
        </div>
        <div class="btn-con close-con">
            <Dropdown placement="bottom-end">
                <Icon type="ios-close-circle-outline" size="18"/>
                <DropdownMenu slot="list">
                    <DropdownItem><span @click="closeAll">关闭所有</span></DropdownItem>
                    <DropdownItem><span @click="closeOther">关闭其他</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tagBodyLeft: 0
            }
        },

        computed: {
            routerList() {
                return this.$store.state.routerList;
            }
        },

        methods: {
            /**
             * 关闭链接
             */
            delRouter(index) {
                const next = this.routerList[index+1] || this.routerList[index-1];
                console.log(next)
                this.$store.commit('routerDelRouters', index);
                this.jumpRouter(next.name)
            },
            /**
             * 跳转连接
             */
            jumpRouter(name) {
                if(this.$route.name === name) {
                    return;
                }
                else {
                    console.log(name)
                    this.$router.push({name})
                }
            },
            /**
             * 关闭其他
             */
            closeOther() {
                this.$store.commit('routerDelRouterOther');
            },
            /**
             * 关闭所有
             */
            closeAll() {
                this.$store.commit('routerDelRoutersAll');
                // 跳回到首页
                this.jumpRouter('HomeIndex');
            },

            handleScroll(offset) {
                const outerWidth = this.$refs.scrollOuter.offsetWidth
                const bodyWidth = this.$refs.scrollBody.offsetWidth
                if (offset > 0) {
                    this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
                } else {
                    if (outerWidth < bodyWidth) {
                        if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
                            this.tagBodyLeft = this.tagBodyLeft
                        } else {
                            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
                        }
                    } else {
                        this.tagBodyLeft = 0
                    }
                }
            },
            handlescroll(e) {
                var type = e.type
                let delta = 0
                if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                    delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
                }
                this.handleScroll(delta)
            },
            moveToView (tag) {
                const outerWidth = this.$refs.scrollOuter.offsetWidth
                const bodyWidth = this.$refs.scrollBody.offsetWidth
                if (bodyWidth < outerWidth) {
                    this.tagBodyLeft = 0
                } else if (tag.offsetLeft < -this.tagBodyLeft) {
                    // 标签在可视区域左侧
                    this.tagBodyLeft = -tag.offsetLeft + 4
                } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
                    // 标签在可视区域
                    this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - 4)
                } else {
                    // 标签在可视区域右侧
                    this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - 4 - tag.offsetWidth))
                }
            },
            getTagElementByName (route) {
                this.$nextTick(() => {
                    this.refsTag = this.$refs.tagsPageOpened;
                    for(var i = 0 ; i < this.routerList.length; i++) {
                        const item = this.routerList[i];

                        if(item.name == route.name && route.path == item.url) {
                            this.moveToView(this.refsTag[i])
                        }

                    }
                })
            },

        },
        watch: {
            '$route' (to) {
                this.getTagElementByName(to)
            }
        },
        mounted () {
            setTimeout(() => {
                this.getTagElementByName(this.$route)
            }, 200)
        }


    }
</script>
<style scoped>
    .tag-nav{
        position: relative;
        padding-left: 28px;
        padding-right: 60px;
    }
    .tag-nav .btn-con{
        position: absolute;
        top: 0;
        width: 28px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        transition: color .15s linear;
    }
    .tag-nav .btn-con:hover{
        color: #57a3f3 !important;
    }
    .left-btn{
        left: 0;
    }
    .right-btn{
        right: 32px;
        border-right: 1px solid #f0f0f0;
    }
    .close-con{
        right: 0;
        width: 32px;
    }
    .scroll-outer{
        height: 40px;
        width: 100%;
        box-shadow: inset 0 0 3px 2px hsla(0,0%,39.2%,.1);
        background: #f0f0f0;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        position: relative;
        overflow: hidden;
    }
    .scroll-view{
        position: absolute;
        left: 0;
        top: 0;
        white-space:nowrap;
        padding-left: 4px;
        transition: left .3s ease;
    }
    .tag-list{
        display: inline-block;
        margin: 4px 4px 4px 0;
        border-radius: 3px;
        font-size: 12px;
        vertical-align: middle;
        opacity: 1;
        overflow: hidden;
        cursor: pointer;
        height: 32px;
        line-height: 32px;
        border: 1px solid #e8eaec!important;
        color: #515a6e!important;
        background: #fff!important;
        padding: 0 12px;
        user-select:none;
    }
    .tag-list .tag-icon{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        border-radius: 50%;
        background: #e8eaec;
        position: relative;
        top: 1px;
        transition: background .2s ease;
    }
    .tag-list .tag-text{
        color: #515a6e;
    }
    .tag-list .tag-text:hover{
        color: #888;
    }
    .tag-list.active .tag-icon{
        background: #2d8cf0;
    }
    .tag-list.active .tag-text{
        color: #2d8cf0;
    }
</style>
