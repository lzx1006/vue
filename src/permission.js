import router from './router'
import { Message } from 'element-ui'
import Cookies from 'js-cookie'
import { checkToken } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  const langRoute = to.query.lang
  const lang = langRoute || Cookies.get('language') || 'zn'

  // this.$i18n.locale = lang
  const title = {
    'zn': '币币交易',
    'zh-hk': '幣幣交易',
    'en': 'Token Trade'
  }
  document.title = title[lang]
  console.log(from)
  const tokenGot = to.query.token
  if (tokenGot) {
    checkToken({ token: tokenGot }).then(res => {
      if (res.status !== 1000) {
        Message.error(res.msg)
        return false
      }
      // console.log('autoLogin-res', res.data.token)
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
      if (window.localStorage.getItem('link_userInfo')) {
        window.localStorage.removeItem('link_userInfo')
      }
      window.localStorage.setItem('link_userInfo', userInfo)
      beforeEachRouter(to, from, next)
    }).catch(() => {
    })
  } else {
    beforeEachRouter(to, from, next)
  }
})

function beforeEachRouter(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!(window.localStorage.getItem('link_userInfo') && getToken())) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next(vm => {
        const langRoute = to.query.lang
        const lang = langRoute || Cookies.get('language') || 'zn'
        Cookies.set('language', lang)
        vm.$i18n.locale = lang
      })
    }
  } else {
    next(vm => {
      const langRoute = to.query.lang
      const lang = langRoute || Cookies.get('language') || 'zn'

      vm.$i18n.locale = lang
      Cookies.set('language', lang)
    })
  }
}
