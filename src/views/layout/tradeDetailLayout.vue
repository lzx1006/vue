<template>
  <el-container>
    <oheader></oheader>
    <el-main>
      <section class="app-main">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
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
import ofooter from './components/footerBlack'
export default {
  components: { oheader, ofooter },
  data() {
    return {
      logined: false
    }
  },
  created() {
    if (window.localStorage.getItem('link_userInfo')) {
      this.logined = true
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
