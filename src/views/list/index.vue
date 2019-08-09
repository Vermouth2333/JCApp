<template>
    <div id="list">
         <Nav></Nav>
        <List></List>
        <router-view></router-view>
    </div>
</template>


<script>

import Nav from "./components/nav.vue"
import List from "./components/list.vue"

export default {
    
    components: {
        Nav,
        List,
    },
   
    //https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.1&referer=2
}
</script>


<style lang="scss" scoped>

</style>
