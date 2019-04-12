import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// websocket链接地址
const host = window.location.host
const websocketUrl = (host.indexOf('210') > -1 || host.indexOf('localhost') > -1)
  ? 'ws://192.169.1.210:8787' : 'wss://trda.crypto.hkcexp.com'

const store = new Vuex.Store({
  state: {
    token: '',
    photoUrl: '',
    phone: '',
    tradeUrl: websocketUrl,
    active: {
      isIndexActive: false,
      isFabiActive: false,
      isGuideActive: false,
      isAssetActive: false,
      isOrderActive: false,
      isUserActive: false,
      isdownloadActive: false
    },
    trade_currency_name: '',
    tradeDetail: {
      trade_area_id: 1,
      currency_id: 0,
      currency_mark: '',
      currency_name: ''
    },
    nickname: '',
    userphone: '',
    email: '',
    avatar: '',
    is_login: false
  },
  mutations: {
    increment(state, payload) {
      state.token = payload.token
      state.nav = payload.nav
      state.photoUrl = payload.photoUrl
      state.phone = payload.phone
    },
    activeSet(state, str) {
      for (const key in state.active) {
        if (state.active.hasOwnProperty(key)) {
          state.active[key] = false
        }
      }
      if (str !== '0') {
        state.active[str] = true
      }
    },
    setTradeDetail(state, payload) {
      state.tradeDetail.trade_area_id = payload.trade_area_id
      state.tradeDetail.currency_id = payload.currency_id
      state.tradeDetail.currency_mark = payload.currency_mark
      state.tradeDetail.currency_name = payload.currency_name
    },
    setTradeName(state, payload) {
      state.trade_currency_name = payload
    },
    SET_USER_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USER_NICKNAME: (state, nickname) => {
      state.nickname = nickname
    },
    SET_USER_PHONE: (state, userphone) => {
      state.userphone = userphone
    },
    SET_USER_EMAIL: (state, email) => {
      state.email = email
    },
    SET_LOGIN: (state, loginstatus) => {
      state.is_login = loginstatus
    }
  },
  getters: {
    nickname: state => state.nickname,
    userphone: state => state.userphone,
    email: state => state.email,
    avatar: state => state.avatar
  }
})

export default store
