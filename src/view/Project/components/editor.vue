<template>
    <div class="editor-warpper">
        <div class="text" ref="editor"></div>
    </div>
</template>
<script>
    import Editor from 'wangeditor';
    import 'wangeditor/release/wangeditor.min.css'

    export default {
        name : 'Editor',
        props: {
            value: {
                type: String,
                default: ''
            },
            /**
             * 绑定的值的类型, enum: ['html', 'text']
             */
            valueType: {
                type: String,
                default: 'html',
                // validator: (val) => {
                //     return oneOf(val, ['html', 'text'])
                // }
            },
            /**
             * @description 设置change事件触发时间间隔
             */
            changeInterval: {
                type: Number,
                default: 200
            },
            /**
             * @description 是否开启本地存储
             */
            cache: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                editor: null
            }
        },
        methods: {
            setHtml (val) {
                this.editor.txt.html(val)
            }
        },
        mounted() {
            this.editor = new Editor(this.$refs.editor)
            this.editor.customConfig.onchange = (html) => {
                let text = this.editor.txt.text()
                if (this.cache) localStorage.editorCache = html
                this.$emit('input', html)
                this.$emit('on-change', html)
            }
            this.editor.customConfig.onchangeTimeout = this.changeInterval;
            this.editor.customConfig.uploadImgShowBase64 = true;
            this.editor.customConfig.uploadImgMaxSize = 1 * 1024*1024;
            this.editor.customConfig.menus = [
                'bold', 'fontSize', 'italic', 'underline', 'strikeThrough', 'foreColor',
                'backColor', 'link', 'code'
            ]
            // create这个方法一定要在所有配置项之后调用
            this.editor.create()
            // 如果本地有存储加载本地存储内容
            let html = this.value // || localStorage.editorCache
            if (html) this.editor.txt.html(html)
        },
        watch: {
            value(val, oldVal) {
                this.setHtml(val);
            }
        }
        
    }
</script>
<style scoped>
    .editor-warpper{
        line-height: 1.5;
    }
    
    
</style>
<style>
    .w-e-text-container{
        height: 100px !important;
    }
</style>