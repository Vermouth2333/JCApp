<template>
  <div id="app">
      <router-view></router-view> 
    <TabBar v-if="$route.meta.tabBar"/>
    <!-- <Loading/> -->
  </div>
</template>
<script>
import TabBar from "common/tabBar"
export default {
  name:"App",
  components:{
    TabBar,

  },
}
</script>

<style lang="scss" scoped>

</style>

