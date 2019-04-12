<template>
  <div class="login">
    <!--导航内容开始-->
		<header>
			<div class="navigation container clearfix">
				<a class="logo pull-left" href=""><img src="static/images/index/logo_02.png" alt="" /></a>
			 
				<div class="menu2 pull-right">
					<span class="icon-back"></span> <a href="">{{ $t('login.nav.back') }}</a>
				</div>
			</div>
		</header>
		<!--导航内容结束-->
		
		<div class="login-content wrapper">
			<div class="container clearfix">
				<div class="pull-left login-content-des">
          <p>{{ $t('login.des1.part1') }}</p>
          <p> <router-link to="/register">{{ $t('login.des1.part3') }}</router-link>{{ $t('login.des1.part4') }}</p>
					<!-- <h1>{{ $t('login.des1.part1') }}&nbsp;{{ $t('login.des1.part2') }}</h1>
					<p><span class="glyphicon glyphicon-triangle-right"></span> <router-link to="/register">{{ $t('login.des1.part3') }}</router-link>， {{ $t('login.des1.part4') }}  <span class="glyphicon glyphicon-triangle-left"></span></p> -->
				</div>
				
				<div class="pull-right login-content-form">
					<h3 v-text="$t('login.title')"></h3>
          <el-form :model="loginForm" status-icon :rules="loginFormRules" ref="loginForm" label-width="0" class="demo-ruleForm">
            <el-form-item prop="userName">
              <i class="icon-account inside"></i>
              <el-input v-model.trim="loginForm.userName" :placeholder="$t('login.usernamePlaceholder')" v-focus></el-input>
            </el-form-item>
            <el-form-item  prop="password">
              <i class="icon-password inside"></i>
              <el-input type="password" v-model.trim="loginForm.password"  :placeholder="$t('login.passwordPlaceholder')"  @keyup.enter.native="submitForm('loginForm')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.prevent="submitForm('loginForm')" v-text="$t('login.toLogin')">{{ $t('login.toLogin') }}</el-button>
            </el-form-item>
          </el-form>
          <div class="form-group no-account clearfix">
            <p class="pull-left">{{ $t('login.des2.part1') }}<router-link to="/register" class="register">{{ $t('login.des2.part2') }}</router-link></p>
            <router-link to="/forgetPassword" class="forgot-password pull-right">{{ $t('login.des2.part3') }}</router-link>
          </div>
				</div>
			</div>
		</div>
		
		<footer v-text="$t('login.footer.copyright')">
			<!-- 2018-中非国际数字资产交易所 -->
		</footer>
  </div>
</template>
<script>
  import { setToken } from '@/utils/auth'
  import { loginPwd, Email, nationNumber } from '@/utils/validate'
  import { login } from '@/api/loginModule'
  import md5 from 'js-md5'
  // import { getmyAdList, openORclose, delAd } from '@/api/orderManage'
  export default {
    data() {
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('errorTips.withoutPwd')))
        } else {
          if (!loginPwd(value)) { // 密码必需大于等于6位 必需是数字与英文的混合
            // 错误提示
            callback(new Error(this.$t('errorTips.notSuitRulePwd')))
          }
          callback()
        }
      }
      const validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('errorTips.withoutAccount')))
        } else {
          if (nationNumber(value) || Email(value)) {
            callback()
          } else {
            callback(new Error(this.$t('errorTips.notSuitRuleAccount')))
          }
          callback()
        }
      }
      return {
        historyUrl: '',
        loginForm: {
          userName: '',
          password: ''
        },
        loginFormRules: {
          userName: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      }
    },
    mounted() {
      document.body.className = 'bgWhite'
    },
    directives: {
      focus: {
        inserted: function(el) {
          el.focus()
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      document.body.className = ''
      next()
    },
    beforeRouteEnter(to, from, next) {
      console.log('进入路由名称：')
      console.log(from)
      next(vm => {
        vm.historyUrl = from.fullPath
      })
    },
    methods: {
      formatName(val) {
        if (!val || val.length <= 4) return val
        const result = val.substr(0, 3) + '***' + val.substr(-4, 4)
        return result
      },
      returnBack() { // 登录路由恢复
        // const path = this.$route.query.redirect
        console.log(this.historyUrl)
        const url = this.historyUrl
        this.historyUrl = url.split('&token')[0]
        console.log(this.historyUrl)

        if (this.historyUrl.includes('register') || this.historyUrl.includes('login')) {
          this.$router.push({ path: '/' })
          return
        }

        if (this.historyUrl) {
          this.$router.push(this.historyUrl)
        } else {
          this.$router.push({ path: '/' })
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const data = {}
            data.user_account = this.loginForm.userName
            data.user_password = md5(this.loginForm.password)
            console.log(data)
            // const _this = this
            login(data).then(res => {
              console.log('res', res)
              if (res.status !== 1000) {
                this.$message.error(res.msg)
              } else {
                setToken(res.data.token)
                const userInfo = JSON.stringify({
                  'uid': res.data.id,
                  'token': res.data.token,
                  'user_account': res.data.nickname, // 登录帐号
                  'nickname': res.data.nickname,
                  'head': res.data.head,
                  'email': res.data.email,
                  'phone': res.data.phone
                })
                window.localStorage.setItem('link_userInfo', userInfo)
                const userinfoObj = JSON.parse(userInfo)
                this.$store.commit('SET_LOGIN', true)
                this.$store.commit('SET_USER_AVATAR', userinfoObj.head)
                if (userinfoObj.nickname) this.$store.commit('SET_USER_NICKNAME', userinfoObj.nickname)
                if (userinfoObj.phone) this.$store.commit('SET_USER_PHONE', this.formatName(userinfoObj.phone))
                if (userinfoObj.email) this.$store.commit('SET_USER_EMAIL', this.formatName(userinfoObj.email))
                this.returnBack()
              }
            }).catch(() => {
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
 header{
    background: white;
    width: 100%;
    height: 90px;
  }
  .navigation{
    color: white;
    line-height: 90px;
  }
  .navigation a{
    color: #998cbf;
    font-size: 16px;
  }
  .navigation a.active{
    color: white;
  }
  .navigation a:hover{
    color: white;
  }

  .logo img{
    margin: 24px 10px 24px 0;
  }
  .menu1 ul li{
    list-style: none;
    float: left;
    margin: 0 25px;
  }

  a.logo,
  a.logo:hover{
    color: #2f3032;
  }
  .navigation .menu2 span{
    color: #a4a2a8;
    font-size: 18px;
    margin-right: 5px;
  }
  .navigation .menu2 a{
    color: #2f3032;
    font-size: 14px;
  }
  .navigation .menu2 a:hover{
    text-decoration: underline;
  }


  /*登录内容区*/
  .login-content{
    width: 100%;
    padding: 50px 0;
    background: url(/static/images/login_register/login_banner.png) no-repeat;
    background-position: center center;
    background-size: cover;
    color: white;
  }
  .login-content .login-content-des{
    padding-top: 20px;
    width: 710px;
    font-size: 18px;
  }
  .login-content .login-content-des p{
    font-size: 18px;
    text-align: left;
    padding-left: 120px;
    margin-bottom: 0px;
  }
  .login-content .login-content-des p a{
    color: white;
  }
  .login-content .login-content-des p a:hover{
    text-decoration: underline;
  }
  .login-content .login-content-form{
    width: 280px;
    border-radius: 5px;
    background: white;
    color: #4e5053;
    padding: 0px 20px;
    margin-top: 55px;
    margin-bottom: 45px;
  }
  .login-content .login-content-form h3{
    font-size: 18px;
    margin: 0;
    line-height: 57px;
    font-weight: normal;
  }
  .el-button--primary{
    width: 100%;
    margin-top: 10px;
  }
  .btn-purple .badge {
    color: #8c6ad9;
    background-color: #fff;
  }
  footer{
    text-align: center;
    color: #94969b;
    margin-top: 35px;
    font-size: 12px;
  }
  .no-account, .no-account .forgot-password {
    color: #4e5053;
    font-size: 12px;
  }
  .no-account .register {
    color: #1fa8f6;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .icon{
    position: absolute;
    left: 10px;
    top: 3px;
  }
  .inside{
    position: absolute;
    left: 15px;
    top: 0px;
    z-index: 999;
    line-height: 41px;
    color: rgba(188, 192, 212, 0.5);
  }
  /deep/ .el-input__inner{
    padding: 0 33px;
  }
</style>