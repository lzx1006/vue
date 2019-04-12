<template>
  <el-container>
      <oheader v-if="show"></oheader>
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
  import { setToken } from '@/utils/auth'
  import oheader from './components/header'
  import ofooter from './components/footer'
  import { checkToken } from '@/api/user'
  export default {
    components: { oheader, ofooter },
    data() {
      return {
        logined: false,
        show: false
      }
    },
    created() {
      if (this.$route.query.token) {
        // this.getUserInfo(this.$route.query.token)
      } else {
        this.show = true
      }
      if (window.localStorage.getItem('link_userInfo')) {
        this.logined = true
      }
    },
    methods: {
      getUserInfo(token) {
        const data = {}
        data.token = token
        console.log('token-----------', data)
        checkToken(data).then(res => {
          if (res.status !== 1000) {
            this.$message.error(res.msg)
            return false
          }
          console.log(res.data)
          setToken(res.data.token)
          this.logined = true
          const userInfo = JSON.stringify({
            'uid': res.data.id,
            'token': res.data.token,
            'user_account': res.data.nickname, // 登录帐号
            'nickname': res.data.nickname,
            'head': res.data.head,
            'email': res.data.email,
            'phone': res.data.phone
          })
          if (window.localStorage.getItem('link_userInfo')) {
            window.localStorage.removeItem('link_userInfo')
          }
          window.localStorage.setItem('link_userInfo', userInfo)
          this.show = true
        }).catch(() => {
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
