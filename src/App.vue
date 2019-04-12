<template>
  <div id="app">
    <router-view/>
    <!-- <customer-service></customer-service> -->
  </div>
</template>

<script>
import customerService from './components/customerService'
export default {
  components: { customerService },
  name: 'App'
}
</script>

<style lang="less">
 @import 'style/theme-blue/index.css';
 @import "style/app.less";
</style>
