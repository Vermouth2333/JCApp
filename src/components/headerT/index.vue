<template>
    <div>
        <header>
            <span>&lt;</span>
            <span>{{title}}</span>
            <span>···</span>
        </header>
    </div>
</template>

<script>
export default {
    name: "HeaderT",
    props:{
        title:{
            type:String,
            default:"演出详情"
        }
    },
}
</script>

<style scoped>
header {
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background:rgba(0,0,0,0);
    z-index: 12;
    top: 0;
}
header > span {
    display: block;
    font-size: 0.18rem;
    text-align: center;
}
header > span:nth-child(2){
    color:#fff;
    font-weight: 700;
}
header > span:nth-child(1),
header > span:nth-child(3) {
    width: 12.8%;
    height: 100%;
    line-height: 0.44rem;
}
</style>
