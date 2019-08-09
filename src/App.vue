<template>
  <div id="app">
    <router-view></router-view>
    <TabBer v-if="this.$route.meta.flag"/>
    <loading/>
  </div>
</template>
<script>
import TabBer from "common/tabBer"
// import http from "utils/http.js"
import Loading from "lib/loading/index.js"
export default {
  name:"App",
  components:{
    TabBer,
    Loading
  },
  //  created(){
  //    http("get","/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.1&referer=2").then((data)=>{
  //      console.log(data)
  //    })
  //  }
}
</script>

<style lang="scss" scoped>

</style>


