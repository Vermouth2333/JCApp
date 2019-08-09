<template>
    <div class="theatre">
        <Top></Top>
        <Content></Content>
    </div>
</template>


<script>
import Top from "./top/index.vue"
import Content from "./content/index.vue"
export default {
    name:"theatre",
    // props:["id","name"],
    components: {
        Top,
        Content
    }
}
</script>


<style>
    .theatre{
        height: 100% ;
    }
</style>