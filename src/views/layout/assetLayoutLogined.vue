<template>
  <el-container>
    <oheader></oheader>
    <el-main>
      <section class="app-main">
        <div class="container">
          <div class="nav-bread">{{ $t("navBread.des") }}: > <router-link to="/"> {{ $t("navBread.index") }} </router-link> > <router-link to="/trade"> {{ $t("navBread.fabiTrade") }}  </router-link>> <router-link to="/asset/finace"> {{ $t("navBread.asset") }}  </router-link> > <router-link :to="navItem"> {{ navName }} </router-link></div>
          <div class="clearfix">
            <div class="navleft pull-left">
              <navleft :navItem="navItem" :navObj="navObj"></navleft>
            </div>
            <div class="r-content pull-right">
              <!-- <transition name="slide-fade" mode="out-in"> -->
                <router-view></router-view>
              <!-- </transition>  -->
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
          subMenu: this.$t('navBread.asset'),
          subMenuIconType: 0,
          subMenuIcon: 'icon-asset',
          subMenuIconImg: '',
          menuItemList: [
            {
              navItem: 'finace',
              navName: this.$t('navBread.finace')
            },
            {
              navItem: 'transferIn',
              navName: this.$t('navBread.plant')
            },
            {
              navItem: 'transferOut',
              navName: this.$t('navBread.tranfer')
            }
          ]
        }
      ]
    }
  },
  created() {
    this.stateChange()
    this.init()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'stateChange'
  },
  methods: {
    stateChange() {
      if (this.$route.name === 'finace') {
        this.navItem = 'finace'
        this.navName = this.$t('navBread.finace')
      }
      if (this.$route.name === 'transferIn') {
        this.navItem = 'transferIn'
        this.navName = this.$t('navBread.plant')
      }
      if (this.$route.name === 'transferOut') {
        this.navItem = 'transferOut'
        this.navName = this.$t('navBread.tranfer')
      }
    },
    init() {
    }
  }

}
</script>
<style lang="less" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  // .slide-fade-leave-active {
  //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // }
  .slide-fade-enter
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
