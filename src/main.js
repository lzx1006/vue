// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import './icons' // icon
import './directive/scroll' // icon
import vuescroll from 'vuescroll'
import ECharts from 'vue-echarts/components/ECharts'
import 'vuescroll/dist/vuescroll.css'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'
import VueClipboard from 'vue-clipboard2'

import './permission' // 鉴权

Vue.use(vuescroll)
Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)
// Vue.component('v-icon', Icon)
/* eslint-disable no-new */
import * as filters from './filters'
Object.keys(filters).forEach(element => {
  Vue.filter(element, filters[element])
})
import i18n from './lang'
import locale from 'element-ui/lib/locale'
locale.i18n((key, value) => i18n.t(key, value))

new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
