<template>
    <div 
        class="scrollbar-warpper" 
        ref="scrollbarWarpper" 
        :style="viewStyles"><!-- 设置默认高度为总高度 -->
        <div 
            class="scrollbar-layout"
            v-show="isShow"
            >
            <div class="scrollbar-outset"></div>
            <div 
                @mousedown.stop="dragStrat" 
                :style="{height: barHeight + 'px', top: barTop + 'px'}" 
                ref="scrollbar" 
                class="scrollbar"></div>
        </div>
        <div 
            @mousewheel.stop="wheelEvent" 
            :style="{top: viewTop + 'px', 'padding-right': (isShow ? '10px': 0)}" 
            ref="viewContent" 
            class="view-content">
            <slot></slot>
        </div>
    </div>
    
</template>
<script>

export default {
    props: {
        styles: {
            type: Object,
            default() {
                return {};
            }
        },
    },

    computed: {
        // 可视窗口的style 主要用来区分height
        viewStyles() {
            let maxHeight, minHeight;
            
            // 如果prop的style传来了height 直接用height
            if(this.styles.height) {
                return this.styles;
            }
            // 如果传来了minheight 判断总高度有没有超过minheight
            // 如果超过用总高度的高度当height 如果没超过了 用min当总高度
            if(this.styles['minHeight'] || this.styles['min-height']){
                minHeight = (this.styles['minHeight'] || this.styles['min-height']).replace('px', '');
                if(this.scrollHeight < minHeight) {
                    return Object.assign({}, {height: minHeight + 'px'}, this.styles);
                }
                else {
                    return Object.assign({}, {height: this.scrollHeight + 'px'}, this.styles);
                }
            }
            // 如果传来了maxheight 判断总高度有没有超过maxheight
            // 如果没超过用总高度的高度当height 如果超过了 用max当总高度
            if(this.styles['maxHeight'] || this.styles['max-height']){
                maxHeight = (this.styles['maxHeight'] || this.styles['max-height']).replace('px', '');
                if(this.scrollHeight > maxHeight) {
                    return Object.assign({}, {height: maxHeight + 'px'}, this.styles);
                }
                else {
                    return Object.assign({}, {height: this.scrollHeight + 'px'}, this.styles);
                }
            }

            // 如果什么都没设置 默认与内容高度一致
            return Object.assign({}, {height: this.scrollHeight + 'px'}, this.styles);
        }
    },

    data() {
        return {
            scrollHeight: 0,    // 真实高度
            viewHeight:0,       // 可视区域高度
            viewTop:0,          // 滚动可视区域
            barTop: 0,          // 滚动滚动条
            barHeight: 0,       // 滚动条高度
            scale: 0,           // 比例 （viewHeight / scrollHeight）
            mouseTop: 0,        // 记录鼠标点下初始位置
            isShow: false,      // 是否显示
        } 
    },

    methods: {
        // 初始化 获取所有值
        init() {
            this.scrollHeight = this.$refs.viewContent.clientHeight;
            // 如果获取不到可视窗口的高度 则获取计算属性后的height 如果还获取不到 则默认可视窗口高度与总高度一致(高度与内容一致)
            this.viewHeight = this.$refs.scrollbarWarpper.clientHeight || this.viewStyles.height.replace('px', '') || this.scrollHeight;
            this.scale = this.viewHeight / this.scrollHeight; 
            this.barHeight = this.scale * this.viewHeight;
            // 如果可是区域不需要滚动条 隐藏
            if(this.scale < 1) {
                this.isShow = true;
                // 检测
                this.barTopTest();
                this.viewTopTest();

                // 重置barTop的top值与viewTop的top值比例相同
                this.barTop = -1 * this.scale * this.viewTop;
            }
            else{
                if(this.viewTop != 0) {
                    this.viewTop = 0;
                }
                if(this.barTop != 0) {
                    this.barTop = 0;
                }
                this.isShow = false;
            }
        },

        move(eventOrDistance, type) {
            let  
                // viewTop 与 barTop 运动方向相反 需要-1相乘
                viewTop,    // 视图窗口top
                barTop,     // 滚动条的top
                distance,    // 移动距离
                flag = isNaN(eventOrDistance) // true->事件对象 false->距离
            ;

            switch (type) {
                case 'view': {
                    distance = flag ? eventOrDistance.deltaY : eventOrDistance;
                    [viewTop, barTop] = [
                        this.viewTop - distance,
                        this.barTop - (-1 * distance * this.scale)
                    ]
                    break;
                }
                case 'scroll': {
                    distance = flag ? eventOrDistance.y - this.mouseTop : eventOrDistance;
                    [viewTop, barTop] = [
                        this.viewTop + (-1 * distance / this.scale),
                        this.barTop + distance
                    ];
                    break;
                }
            }

            [this.viewTop, this.barTop] = [viewTop, barTop]
        },

        barTopTest(val) {
            val = val || this.barTop;
            
            if(val <= 0){
                this.barTop = 0;
            }
            else if(val > (this.viewHeight - this.barHeight)) {
                this.barTop = this.viewHeight - this.barHeight;
            }
           
        },

        viewTopTest(val) {
            val = val || this.viewTop;

            if(val >= 0) {
                this.viewTop = 0;
            }
            else if(Math.abs(val) >= (this.scrollHeight - this.viewHeight)) {
                this.viewTop = -1 * (this.scrollHeight - this.viewHeight);
            }
           
        },

        // 鼠标滚动 判断鼠标滚动事件
        wheelEvent(event) {
            if(!this.isShow) return;
            this.move(event, 'view');
        },

        bindDragMove(){
            this.dragMove(arguments[0]);
        },
        bindDragEnd(){
            this.dragEnd(arguments[0]);
        },

        dragStrat(event) {
            const dom = this.$refs.scrollbar;
            this.mouseTop = event.y;
            document.addEventListener('mousemove', this.bindDragMove);
            document.addEventListener('mouseup', this.bindDragEnd);
            event.stopPropagation();
        },

        dragMove(event) {
            if(!this.isShow) return;
            this.move(event, 'scroll');
            this.mouseTop = event.y;
            event.stopPropagation();
        },

        dragEnd() {
            document.removeEventListener('mouseup', this.bindDragEnd);
            document.removeEventListener('mousemove', this.bindDragMove);
        }

    },
    beforeMount() {
        
    },
    mounted() {
        const _this = this;

        this.init();

        // 监听容器里面内容增加或者减少(仅限增加减少)
        const observer = new MutationObserver((mutationList)=>{
            if(_this.$refs.viewContent && (_this.$refs.viewContent.clientHeight != _this.scrollHeight || _this.viewHeight != _this.$refs.scrollbarWarpper.clientHeight)) {
                _this.init();
            }
            
        })
        .observe(this.$refs.scrollbarWarpper, {
            childList: true, // 是否子孙节点也观察
            subtree: true,  // 尽观察增加减少
            attributeFilter: ['style'],
            attributes: true,
            characterData: true
        });

        window.addEventListener('resize', () => {
            if(_this.$refs.viewContent && (_this.$refs.viewContent.clientHeight != _this.scrollHeight || _this.viewHeight != _this.$refs.scrollbarWarpper.clientHeight)) {
                _this.init.call(_this);
            }
        });
        
    },

    watch: {
        barTop(val, oldVal) {
            this.barTopTest(val);
        },

        viewTop(val, oldVal) {
            this.viewTopTest(val);
        }
    }
}
</script>
<style scoped>
.scrollbar-warpper{
    overflow: hidden;
    position: relative;
}
.view-content{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}
.scrollbar-layout{
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    z-index: 1;
    overflow: hidden;
}


    .scrollbar-outset{
        height: 100%;
        background: #ddd;
        border-radius: 4px;
        opacity: .32;
        height: 100%;
    }
    .scrollbar{
        position: absolute;
        background: #999;
        border-radius: 4px;
        height: 50px;
        top: 0;
        width: 8px;
    }
</style>


