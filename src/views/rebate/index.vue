<template>
    <div id="rebate">
        <keep-alive>
            <router-view></router-view>    
        </keep-alive>
    </div>
</template>

<script>
export default {
    name:"Rebate",
    data(){
        return{
        
        }
    },
    methods:{
        // handleToggle(index){
        //   this.num==index;
        //   console.log(this.num)  
        // }  
    }
}
</script>

<style lang="scss" scoped>
    #rebate{
        width:100%;
        height:100%;
    }

</style>
