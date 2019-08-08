<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <TabBer v-if="$route.meta.tabBar"/>
  </div>
</template>
<script>
import TabBer from "common/tabBer"
export default {
  name:"App",
  components:{
    TabBer,

  },
}
</script>

<style lang="scss" scoped>
  #app{height:100%;}
</style>

