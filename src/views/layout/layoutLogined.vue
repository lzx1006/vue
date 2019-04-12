<template>
  <el-container>
    <!-- <el-header> -->
      <oheader></oheader>
    <!-- </el-header> -->
    <el-main>
      <section class="app-main">
        <transition name="fade" mode="out-in">
          <!-- <keep-alive :include="cachedViews"> -->
            <router-view></router-view>
          <!-- </keep-alive> -->
        </transition>
      </section>
    </el-main>
    <el-footer>
      <ofooter></ofooter>
    </el-footer>
  </el-container>
</template>

<script>
import oheader from './components/header'
import ofooter from './components/footer'
export default {
  components: { oheader, ofooter },
  data() {
    return {
      logined: true
    }
  },
  // beforeCreate() {
  //   if(this.$route.query.token) {
  //     let token = this.$route.query.token
  //   }
  // },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
