<template>
    <div class="upload-warpper">

        <template v-for="(item, index) in uploadList" >
            <div :key="index" class="upload-list" :style="{width: width + 'px', height: height + 'px', lineHeight: height + 'px'}">
                <img class="upload-image" :src="item.url" alt="">
                <div v-if="item.progress == 100" class="upload-close" @click="delUploadUrl(index)">&times;</div>
                <div class="upload-opacity" :style="{width: width + 'px', height: height + 'px', lineHeight: height + 'px', opacity: (item.progress == 100 ? 0 : 1)}">
                    {{ item.progress }}%
                </div>
            </div>
        </template>

        <template v-if="multiple || !uploadList.length || uploadList.length < length">
            <div class="upload-list upload-button" :style="{width: width + 'px', height: height + 'px', lineHeight: height + 'px'}" @click="uploadchange">
                <input ref="file" type="file" @change="uploadChange">
                点击上传
            </div>
        </template>
        
        <div class="clear-both"></div>
    </div>
</template>
<script>
    export default {
        name: 'upload',

        props: {
            width: {
                type: [Number, String],
                default() {
                    return 100;
                }
            },
            height: {
                type: [Number, String],
                default() {
                    return 100;
                }
            },
            multiple: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            length: {
                type: [Number, String],
                default() {
                    return 1;
                }
            },
            value: {
                type: Array,
                default() {
                    return [];
                }
            }
        },

        data() {
            return {
                uploadList: []
            }
        },

        methods: {
            /**
             * 
             */
            uploadchange() {
                this.$refs.file.click();
            },
            
            /**
             * 图片更改上传图片
             */
            uploadChange() {
                const file = this.$refs.file.files[0];
                const momentUrl = window.URL.createObjectURL(file);

                this.uploadList.push({
                    url: momentUrl,
                    progress: 0,
                });

                this.startUpload(this.uploadList[this.uploadList.length - 1]);
            },

            /**
             * 开始上传
             */
            startUpload(item) {

                const time = setInterval(() => {
                    if(item.progress >= 98) {
                        clearTimeout(time);
                        return;
                    }
                    item.progress += 2;

                }, 30)

                /**
                 * 模拟请求
                 */
                setTimeout(() => {
                    item.url = 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                    item.progress = 100;
                    time ? clearTimeout(time) : null;
                    this.submit();
                }, 5000);
            },

            /**
             * 删除图片
             */
            delUploadUrl(index) {
                this.uploadList.splice(index, 1);
                this.submit();
            },

            /**
             * 提交图片
             */
            submit() {
                const ary = [];
                for(var i = 0 ; i < this.uploadList.length; i++) {
                    ary.push(this.uploadList[i].url);
                }
                this.$emit('input', ary);
            }
        },

        mounted() {
            const ary =  [];
            this.value.forEach(item => {
                ary.push({url: item, progress: 100})
            });
            this.uploadList = ary;
        },

        watch: {
            value(ary) {
                const list =  [];
                ary.forEach(item => {
                    list.push({url: item, progress: 100})
                });
                this.uploadList = list;
            }
        }
    }
</script>
<style scoped>
    .upload-warpper{
        display: inline-block;
        width: 100%;
    }
    .upload-list{
        position: relative;
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        border: 1px solid #dcdee2;
        border-radius: 6px;
        transition: all .15s linear;
        text-align: center;
        font-size: 12px;
        background: #f7f7f7;
        cursor: pointer;
        user-select:none;
        color: #999;
    }

    .upload-button:hover{
        border-color: #57a3f3;
        color: #57a3f3;
    }
    .upload-list input[type=file]{
        display: none;
    }

    .upload-list .upload-image{
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 6px;
    }
    .upload-list .upload-close{
        position: absolute;
        width: 24px;
        height: 24px;
        top: -12px;
        right: -12px;
        line-height: 22px;
        text-align: center;
        background: #ee613d;
        color: #fff;
        border-radius: 50%;
        border: 2px solid #fff;
        transition: all .15s linear;
        font-size: 20px;
        cursor: pointer;
        z-index: 2;
    }
    .upload-list .upload-close:hover{
        background: #ed4014;
    }

    .upload-list .upload-opacity{
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 6px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background: rgba(0,0,0,.6);
        opacity: 0;
        z-index: 1;
        transition: opacity .15s linear;
    }
</style>