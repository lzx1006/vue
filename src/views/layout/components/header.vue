<template>
  <div class="head">
   <div class="navigation container clearfix">
    <router-link class="logo pull-left" to="/"><img :src="$t('img.logoUrl')" alt="" /></router-link>
    <div>
      
    </div>
    <div class="menu1 pull-left">
     <ul class="clearfix">
      <li :class="{ active: active.isIndexActive }"><router-link to="/">{{ $t('navbar.index') }}</router-link></li>  
      <li :class="{ active: active.isFabiActive }"><router-link to="/tradeDetail">{{ $t('navbar.bibiTrade') }}</router-link></li>
      <li>
        <a :href="handleCrossEnvHref({
          path: '/trade'
        })">{{ $t('navbar.fabiTrade') }}</a>
      </li> 
      <li :class="{ active: active.isdownloadActive }"><router-link to="/downloadApp" v-text="$t('navbar.download')">下载客户端</router-link></li>
      <!-- <li :class="{ active: active.isGuideActive }"><router-link to="/guide">{{ $t('navbar.guide') }}</router-link></li> -->
     </ul>
    </div>
    <div class="menu2 pull-right" v-if="logined">
     <ul class="clearfix" @click="setMenuActive($event)">
      <li class="menu2-finace" :class="{active: active.isAssetActive}"><a href="javascript:void(0)"><span class="icon-asset"></span>&nbsp;{{ $t("navbar.asset.nav") }}&nbsp;<i class="el-icon-caret-bottom"></i></a>
       <ul class="second-menu2">
        <li>
          <router-link 
          :to="{ 
            path: '/assets',
            query: { tab: 'ctc'}
          }">{{ $t("navbar.asset.navItem1") }}</router-link>
        </li> 
        <li>
          <router-link 
          :to="{ 
            path: '/assets',
            query: { tab: 'otc'}
          }">{{ $t("navbar.asset.navItem2") }}</router-link>
        </li>
       </ul>
      </li>
      <li class="menu2-order" :class="{active: active.isOrderActive}"><a href="javascript:void(0)"><span class="icon-order"></span> &nbsp;{{ $t("navbar.order.nav") }}&nbsp;<i class="el-icon-caret-bottom"></i></a>
       <ul class="second-menu2">
        <li><router-link to="/order">{{ $t("navbar.order.navItem1") }}</router-link></li>
        <li>
          <a :href="handleCrossEnvHref({path: '/order/orderTrade'})">{{ $t("navbar.order.navItem2") }}</a>
        </li> 
       </ul>
      </li> 

       <li class="login show" :class="{active: active.isUserActive}"><a href="javascript:void(0)"><img :src="avatar || photoUrl" class="photo-img" />&nbsp;<span id="tel">{{ nickname || userphone || email || user_account }}</span>&nbsp;<i class="el-icon-caret-bottom"></i></a> 
       <ul class="second-menu2 person-menu2"> 
        <li><router-link to="/user/account">{{ $t("navbar.user.navItem1") }}</router-link></li>
        <li>
          <a :href="handleCrossEnvHref({path: '/order/orderAd'})">{{ $t("navbar.user.navItem2") }}</a>
        </li>
        <li>
          <a :href="handleCrossEnvHref({path: '/order/accredit'})">{{ $t("navbar.user.navItem3") }}</a>
        </li>
        <li>
          <a :href="handleCrossEnvHref({path: '/order/payway'})">{{ $t("navbar.user.navItem4") }}</a>
        </li>
        <li><router-link to="/invitation">{{ $t("navbar.user.navItem5") }}</router-link></li>
        <li><a href="javascript:void(0)" id="exit" @click="exit">{{ $t("navbar.user.navItem6") }}</a></li>
       </ul></li>
       <li><a href="javascript:void(0)" class="language">{{ localLang }}&nbsp;<i class="el-icon-caret-bottom"></i></a>
        <ul class="second-menu2">
          <li><a href="javascript:void(0)" @click="changeLanguage('zn')">{{ langObj['zn'] }}</a></li>
          <li><a href="javascript:void(0)" @click="changeLanguage('zh-hk')">{{ langObj['zh-hk'] }}</a></li>
          <li><a href="javascript:void(0)" @click="changeLanguage('en')">{{ langObj['en'] }}</a></li>
        </ul>
      </li> 
     </ul>
    </div>
    <div class="menu2 pull-right" v-else>
     <ul class="clearfix">
        <li class="login_init menu2-login"><router-link to="/login" v-text="$t('navbar.login')">登录</router-link> <div class="split"></div> </li> 
        <li class="login_init menu2-reg"><router-link to="/register" class="" v-text="$t('navbar.register')">注册</router-link></li>
        <li><a href="javascript:void(0)" class="language">{{ localLang }}&nbsp;<i class="el-icon-caret-bottom"></i></a>
          <ul class="second-menu2">
            <li><a href="javascript:void(0)" @click="changeLanguage('zn')">{{ langObj['zn'] }}</a></li>
            <li><a href="javascript:void(0)" @click="changeLanguage('zh-hk')">{{ langObj['zh-hk'] }}</a></li>
            <li><a href="javascript:void(0)" @click="changeLanguage('en')">{{ langObj['en'] }}</a></li>
          </ul>
        </li> 
     </ul>
    </div>
   </div> 
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import qs from 'qs'
  import { targetEnvironment } from '@/utils/utils'
  import { removeToken, getToken } from '@/utils/auth'
  import Cookies from 'js-cookie'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        user_account: '',
        photoUrl: '',
        logined: false,
        zhImgUrl: 'static/images/chinese.png',
        enImgUrl: 'static/images/English.png',
        localLang: '简中',
        ohterLang: '',
        href: targetEnvironment(),
        activeMenu: '法币交易',
        langObj: { 'zn': '简中', 'zh-hk': '繁中', 'en': 'EN' }
      }
    },
    computed: {
      ...mapGetters([
        'nickname',
        'userphone',
        'email',
        'avatar'
      ]),
      active: function() {
        return this.$store.state.active
      }
    },
    watch: {
      '$route': 'setMenuActive',
      bibiLogin: function(val) {
        this.logined = val
      }
    },
    mounted() {
      if (window.localStorage.getItem('link_userInfo') && getToken()) {
        let link_userInfo = window.localStorage.getItem('link_userInfo')
        link_userInfo = JSON.parse(link_userInfo)
        this.user_account = link_userInfo.nickname
        // link_userInfo
        // if (link_userInfo.nickname) {
        //   this.user_account = link_userInfo.nickname
        // } else if (link_userInfo.phone) {
        //   this.user_account = link_userInfo.phone.substr(0, 3) + '***' + link_userInfo.phone.substr(-4, 4)
        // } else {
        //   this.user_account = link_userInfo.email.substr(0, 3) + '***' + link_userInfo.email.substr(-4, 4)
        // }
        this.photoUrl = link_userInfo.head
        this.logined = true
      } else {
        if (window.localStorage.getItem('link_userInfo')) {
          window.localStorage.removeItem('link_userInfo')
        }
        this.logined = false
      }
      this.setMenuActive()
      this.languageGet()
    },
    methods: {
      handleCrossEnvHref(object) {
        const userInfo = window.localStorage.getItem('link_userInfo')
        const token = !userInfo ? '' : JSON.parse(userInfo).token
        if (!object) {
          if (!token) {
            return this.href + '?lang=' + this.$i18n.locale
          } else {
            return this.href + '/?lang=' + this.$i18n.locale + '&token=' + encodeURIComponent(token)
          }
        } else {
          const env = this.href
          const path = object.path
          const queryStr = qs.stringify(object.query)
          const query = queryStr ? '?' + queryStr : ''
          let href = env + path + query
          if (!token) {
            return href + '?lang=' + this.$i18n.locale
          } else {
            href = queryStr
              ? href + '&lang=' + this.$i18n.locale + '&token=' + encodeURIComponent(token)
              : href + '?lang=' + this.$i18n.locale + '&token=' + encodeURIComponent(token)
            // console.log('href', href)
            return href
          }
        }
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      languageGet() {
        this.localLang = this.langObj[this.$i18n.locale]
      },
      changeLanguage(lang) {
        Cookies.set('language', lang)
        this.localLang = this.langObj[lang]
        this.$i18n.locale = lang
        window.location.reload()
      },
      exit() {
        removeToken()
        window.localStorage.removeItem('link_userInfo')
        this.$router.push({ path: '/login', query: { redirect: this.$route.fullPath }})
      },
      setMenuActive() {
        if (this.$route.path.includes('/asset')) {
          this.$store.commit('activeSet', 'isAssetActive')
        }
        if (this.$route.path.includes('/order')) {
          this.$store.commit('activeSet', 'isOrderActive')
        }
        if (this.$route.path.includes('/user')) {
          this.$store.commit('activeSet', 'isUserActive')
        }
        if (this.$route.path.includes('/guide')) {
          this.$store.commit('activeSet', 'isGuideActive')
        }
        if (this.$route.path.includes('/downloadApp')) {
          this.$store.commit('activeSet', 'isdownloadActive')
        }
        if (this.$route.path === '/trade' || this.$route.path.includes('/tradeDetail')) {
          this.$store.commit('activeSet', 'isFabiActive')
        }
        if (this.$route.path === '/') {
          this.$store.commit('activeSet', 'isIndexActive')
        }
        if (this.$route.path.includes('/numberAsset')) {
          this.$store.commit('activeSet', '0')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .head{
    background: #20243f;
    background-size: 100% 100%;
    width: 100%;
    // height: 90px;
  }
  .navigation{
    color: white;
    line-height: 80px;
  }
  .navigation a{
    color: #90929f;
    font-size: 16px;
  }
  .navigation li.active a{
    color: white;
  }
  .navigation a:hover{
    color: white;
  }
  a.logo{
    display: inline-block;
    cursor: pointer;
    font-size: 23px;
    color: white;
    margin-right: 27px;
    font-weight: bold;
  }

  .logo img{
    // vertical-align: middle;
    float: left;
    margin-top: 12px;
  }
  .menu1 ul li{
    list-style: none;
    float: left;
    margin: 0 15px;
  }

  /*右侧导航样式*/
  .menu2>ul>li{
    float: left;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
  }
  .menu2>ul>li .photo-img{
    width: 22px;
    height: 22px;
    border-radius: 20px;
    display: inline-grid;
    vertical-align: middle;
  }
  .language{
    border: 1px solid #a6b9df;
    border-radius: 8px;
    padding: 5px 10px;
    display: inline-block;
    line-height: 20px;
  }
  .menu2 .glyphicon-triangle-bottom,
  .menu2 .glyphicon-menu-down{
    font-size: 10px;
  }
  ul.second-menu2 {
    position: absolute;
    background: white;
    right: 0;
    box-shadow: 0 2px 6px 2px #f3f3f4;
    z-index: 3;
    width: 130px;
    overflow: hidden;
    opacity: 0;
    transition: all .15s linear;
    visibility: hidden;
    top: 81px;
    z-index: 999999999;
  }
  .menu2>ul>li:hover>a{
    color: white;
  }
  .menu2>ul>li:hover ul.second-menu2{
    opacity: 1;
    visibility:visible;
  }
  ul.second-menu2 li{
    width: 130px;
    text-align: center;
    line-height: 40px;
    height: 40px;
  }
  ul.second-menu2 li a{
    color: #0d202b !important;
    width: 100%;
    display: inline-block;
    
  }
  ul.second-menu2 li a:hover{
    color: #1fa8f6 !important;
    background: rgba(31, 168, 246, .1);
  }

  .menu2-login,.menu2-reg{
    position: relative;
  }
  .menu2-reg{
    margin-left: 6px !important;
  }
  .menu2 .menu2-login a,
  .menu2 .menu2-reg a{
    display: inline-block;
    width: 55px;
    text-align: center;
    font-size: 14px;
  }
  .menu2-login .split{
    width: 1px;
    height: 16px;
    display: block;
    position: absolute;
    top: 33px;
    left: 54px;
    border-right: 1px solid #a28cc8;
  }
</style>
