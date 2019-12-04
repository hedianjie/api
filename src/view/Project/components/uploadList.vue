<template>
    <div class="upload-warpper">
        <div class="upload-list">
            <div class="upload-close">&times;</div>
            <div class="upload-type-pic">
                <img src="/static/img/xz.png" alt="">
            </div>
            <p class="upload-name">xz.png</p>
        </div>
        <div class="upload-list">
            <div class="upload-close">&times;</div>
            <div class="upload-type-pic">
                <img src="/static/img/xz.png" alt="">
            </div>
            <p class="upload-name">xz.png</p>
        </div>
        <div class="upload-list">
            <div class="upload-close">&times;</div>
            <div class="upload-type-pic">
                <img src="/static/img/xz.png" alt="">
            </div>
            <p class="upload-name">xz.png</p>
        </div>
        <div class="upload-list">
            <div class="upload-close">&times;</div>
            <div class="upload-type-pic">
                <img src="/static/img/xz.png" alt="">
            </div>
            <p class="upload-name">xz.png</p>
        </div>
        <div class="upload-list">
            <div class="upload-close">&times;</div>
            <div class="upload-type-pic">
                <img src="/static/img/xz.png" alt="">
                <!-- <Icon type="md-image" size="32"/> -->
            </div>
            <p class="upload-name">xz.png</p>
            <ProgressBar :value="value"></ProgressBar>
        </div>
    </div>
</template>
<script>
import ProgressBar from './progress.vue';
    export default {
        components: {ProgressBar},
        props: {
            
        },
        data() {
            return{
                value: 15
            }
        },
        watch: {
            value(val, oldVal) {
                console.log(val, oldVal)
            }
        },
    }
</script>
<style scoped>
    .upload-warpper{
        display: flex;
        flex-wrap: wrap;
        line-height: 1;
    }
    .upload-list{
        width: 130px;
        position: relative;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .upload-list .upload-close{
        position: absolute;
        width: 18px;
        height: 18px;
        right: 0;
        top: -5px;
        border: 1px solid #fff;
        background: #eee;
        color: #657180;
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        border-radius: 50%;
        transition: all .15s ease-in-out;
        cursor: pointer;
        text-align: center;
    }
    .upload-list .upload-close:hover{
        background: #ff6600;
        color: #fff;
    }

    .upload-list .upload-type-pic{
        width: 100%;
        text-align: center;
    }
    .upload-list .upload-type-pic img{
        display: inline-block;
        height: 40px;
        width: 40px;
    }
    .upload-list .upload-name{
        font-size: 12px;
        color: #657180;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow:hidden;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        line-height: 1.625;
    }
</style>
