import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementZhTWLocale from 'element-ui/lib/locale/lang/zh-TW'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import zhTWLocale from './zh-tw'

Vue.use(VueI18n)

const messages = {
  'en': {
    ...enLocale,
    ...elementEnLocale
  },
  'zn': {
    ...zhLocale,
    ...elementZhLocale
  },
  'zh-hk': {
    ...zhTWLocale,
    ...elementZhTWLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zn', // set locale
  messages // set locale messages
})

export default i18n
