<template>
  <el-container>
    <!-- <el-header> -->
      <oheader></oheader>
    <!-- </el-header> -->
    <el-main>
      <section class="app-main">
        <div class="container">
          <div class="nav-bread">{{ $t("navBread.des") }}: > <router-link to="/"> {{ $t("navBread.index") }} </router-link> > <router-link to="/trade"> {{ $t("navBread.fabiTrade") }} </router-link>> <router-link to="/user/account"> {{ $t("navBread.user") }} </router-link> > <router-link :to="navItem"> {{ navName }} </router-link></div>
          <div class="clearfix">
            <div class="navleft pull-left">
              <navleft :navItem="navItem" :navObj="navObj"></navleft>
            </div>
            <div class="r-content pull-right">
              <transition name="fade" mode="out-in">
              <!-- <keep-alive :include="cachedViews"> -->
                  <router-view></router-view>
                <!-- </keep-alive> -->
              </transition> 
            </div>
          </div>
          
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
      navItem: '',
      navName: '',
      logined: true,
      navObj: [
        {
          subMenu: this.$t('navBread.user'),
          subMenuIconType: 0,
          subMenuIcon: 'icon-person',
          subMenuIconImg: '',
          menuItemList: [
            {
              navItem: 'account',
              navName: this.$t('navBread.accountSafe')
            },
            {
              navItem: 'centification',
              navName: this.$t('navBread.centification')
            },
            {
              navItem: 'inviteCode',
              navName: this.$t('navBread.inviteCode')
            }
          ]
        }
      ]
    }
  },
  created() {
    this.stateChange()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'stateChange'
  },
  methods: {
    stateChange() {
      if (this.$route.name === 'account') {
        this.navItem = 'account'
        this.navName = this.$t('navBread.accountSafe')
      }
      if (this.$route.name === 'centification') {
        this.navItem = 'centification'
        this.navName = this.$t('navBread.centification')
      }
      if (this.$route.name === 'inviteCode') {
        this.navItem = 'inviteCode'
        this.navName = this.$t('navBread.inviteCode')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .navleft{
    width: 213px;
  }
  
  .r-content{
    width: 967px;
  }
</style>
