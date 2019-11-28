<template>
    <div class="h-avatar-warpper">
        <div class="h-avatar-item"><Tooltip content="WEB前端：何殿杰"><span class="h-avatar" placement="top"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></span></Tooltip></div>
        <div class="h-avatar-item"><Tooltip content="WEB前端：何殿杰"><span class="h-avatar" placement="top"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></span></Tooltip></div>
        <div class="h-avatar-item"><Tooltip content="WEB前端：何殿杰"><span class="h-avatar" placement="top"><img src="https://dev-file.iviewui.com/avatar_default/avatar" alt=""></span></Tooltip></div>
    </div>
</template>
<script>
    export default {
        props: {
            list: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .h-avatar-warpper{
        display: flex;
        justify-items: center;
        line-height: 32px;
    }
    .h-avatar-warpper > * {
        line-height: 32px;
        height: 34px;
    }
    .h-avatar-item{
        margin-left: -8px;
    }
    .h-avatar-item:first-child{
        margin-left: 0;
    }
    .h-avatar{
        width: 34px;
        height: 34px;
        display: inline-block;
        border: 1px solid #fff;
        border-radius: 50%;
        overflow: hidden;
    }
    .h-avatar img{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>

