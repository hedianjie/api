<template>
    <div class="progress-warpper">
        <div class="progress">
            <div class="progress-line" :style="{width: value + '%'}"></div>
        </div>
        <div class="progress-size">{{value}}%</div>
    </div>
</template>
<script>
    export default {
        props: {
            // 进度
            value: {
                type: Number,
                default() {
                    return 10;
                }
            },
            // 是否完成后隐藏 默认是
            finish_hidden: {
                type: Boolean,
                default() {
                    return true;
                }
            },
            // timeout: {
            //     type: Number,
            //     default() {
            //         return 2;
            //     }
            // },
            // 是否开始进度条
            start: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                // 是否完成后隐藏
                hi: false,
            }
        },

        watch: {
            value(val) {
                this.$emit('on-change', val);
                this.$emit('input', val);
                if(val >= 100 && this.finish_hidden) {
                    this.hi = true;
                }
            }
        }
    }
</script>
<style scoped>
    .progress-warpper{
        display: flex;
        align-items: center;
        line-height: 1;
    }
    .progress{
        position: relative;
        flex: 1;
        height: 5px;
        border-radius: 5px;
        background: #f1f1f1;
        overflow: hidden;
    }
    .progress .progress-line{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: #00cc66;
    }
    .progress-size{
        font-size: 12px;
        margin-left: 5px;
    }
</style>
