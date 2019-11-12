<template>
    <div @click="emit" ref="btn" class="h-button circle circle-hover" :class="theme + ' ' + (only ? 'only' : '')">
        <div ref="btnInner" class="btn-inner">
            <Icon v-if="icon" size="18" :type="icon" class="btn-icon"/>
            <div class="btn-slot"><slot></slot></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            // 图标
            icon: {
                type: String,
                default() {
                    return ''
                }
            },
            // 是否敞开
            only: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            
            circle: {
                type: Boolean,
                default() {
                    return true
                }
            },
            // 主题
            theme: {
                type: String,
                default(){
                    return 'default'
                }
            },
            hover: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            init() {
                this.$refs.btn.style.setProperty('--btnWidth', this.$refs.btnInner.clientWidth + 'px');
            },

            emit() {
                this.$emit('click');
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
<style scoped>
    .h-button{
        --btnWidth: auto;
    }
    .h-button{
        border: 1px solid #e3e8ee;
        border-radius: 16px;
        width: 32px;
        height: 32px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: width .2s ease-in-out;
        user-select: none;
    }
    .h-button .btn-inner{
        position: absolute;
        height: 30px;
        line-height: 30px;
        display: flex;
        align-items: center;
        left: 0;
        top: 0;
        white-space: nowrap;
    }
    .h-button .btn-inner .btn-icon{
        width: 30px;
        text-align: center;
    }

    .btn-icon + .btn-slot{
        padding-right: 12px;
    }

    .h-button:hover{
        width: var(--btnWidth);
    }
    .h-button.only{
        width: var(--btnWidth) !important;
    }


    .h-button.default{
        background: transparent;
        border: 1px solid #e3e8ee;
        color: #657180;
    }
    .h-button.default:hover{
        border: 1px solid #82868b;
        color: #333;
    }
    .h-button.default:active{
        color: #657180;
    }

    .h-button.white{
        border: 1px solid #cfd2d6;
        color: #e3e8ee;
    }
    .h-button.white:hover{
        border: 1px solid #82868b;
        color: #fff;
    }
    .h-button.white:active{
        border: 1px solid #cfd2d6;
        color: #e3e8ee;
    }

</style>