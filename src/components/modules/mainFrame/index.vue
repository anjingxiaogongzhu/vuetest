<template>
  <div class="mainFrame">
      <head-nav></head-nav>
      <sider-nav></sider-nav>
      <router-view id="mainContent"></router-view>
  </div>
</template>
<script>
    import { headNav, siderNav } from '@/components/common/'
    export default {
        data() {
            return {

            }
        },
        components:{
            headNav,
            siderNav
        }
    }
</script>
<style lang="scss" scoped>
  #mainContent {
    margin-top: 100px;
    margin-left: 150px;
    position: relative;
  }
</style>

