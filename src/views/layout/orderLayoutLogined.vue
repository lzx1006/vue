<template>
  <el-container>
    <oheader></oheader>
    <el-main>
      <section class="app-main">
        <div class="container">
          <div class="title">
            {{$t('order.title')}}
          </div>
          <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane :label="$t('order.menu1')"></el-tab-pane>
            <el-tab-pane :label="$t('order.menu2')"></el-tab-pane>
            <el-tab-pane :label="$t('order.menu3')"></el-tab-pane>
          </el-tabs>
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition> 
        </div>
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
import navleft from './components/leftNav.vue'
export default {
  components: { oheader, ofooter, navleft },
  data() {
    return {
      activeName: '0',
      pathList: ['orderCurrent', 'orderHistory', 'orderComplete']
    }
  },
  created() {
    const path = this.$route.name
    this.activeName = this.pathList.indexOf(path).toString()
  },
  methods: {
    handleTabClick(tab) {
      this.$router.replace({
        path: '/order/' + this.pathList[tab.index]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container{
  background: white;
  padding: 20px;
  margin-top: 20px;
  .title{
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 30px;
    border-bottom: 1px solid #ebecf1;
  }
}
// 统一重置子路由的表格 分页样式
/deep/ .el-tabs__header{
  margin-bottom: 0;
}
/deep/ .el-tabs__nav-wrap::after{
  background-color: transparent;
}
// /deep/ .el-table {
//   th{
//     // padding: 4px 0;
//   }
// }
/deep/ .el-pagination.is-background{
  margin-top: 30px;
  .btn-next,.btn-prev,.el-pager li{
    border-radius: 13px;
    min-width: 28px;
    min-height: 28px;
    background-color: transparent;
    border: solid 1px #e8e6e9;
  }
  .el-pager li{
    min-width: 29px;
    min-height: 28px;
    &:not(.disabled).active{
    background-color: transparent;
    border: solid 1px #1fa8f6;
    color: #1fa8f6;
  }
  }
}
</style>
