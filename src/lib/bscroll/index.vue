<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Ver-BScroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            pullDownRefresh:true
        })
    },
    methods:{
        //下拉刷新加载数据
        handlepullingDown(callback){
            this.scroll.on("pullingDown",()=>{
                callback();
            })
        },
        //下拉刷新加载数据完毕通知better-scroll
        handlefinishPullDown(){
            //数据已加载
            this.scroll.finishPullDown();
            //重新甲酸better-scroll  当DOM结构发生变化时务必调用确保滚动的效果正常
            this.scroll.refresh();
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        height: 100%;
    }
</style>
