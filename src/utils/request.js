import axios from 'axios'
import qs from 'qs'
// import store from '@/store'
import Cookies from 'js-cookie'
import { MessageBox, Message } from 'element-ui'
import { LogOut } from '@/utils/utils'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (config.data) {
    if (window.localStorage.getItem('link_userInfo')) {
      let link_userInfo = window.localStorage.getItem('link_userInfo')
      link_userInfo = JSON.parse(link_userInfo)
      if (!config.data['token']) {
        config.data['token'] = link_userInfo.token
      }
    }
  } else { // 登录了，比如首页接口不用传参数的情况
    if (window.localStorage.getItem('link_userInfo')) {
      let link_userInfo = window.localStorage.getItem('link_userInfo')
      link_userInfo = JSON.parse(link_userInfo)
      config.data = {}
      config.data['token'] = link_userInfo.token
    }
  }

  if (!config.data) {
    config.data = {}
  }
  // console.log(Cookies.get('language'))
  if (!Cookies.get('language')) {
    config.data['lang'] = 'zn' // 默认语言
  } else {
    config.data['lang'] = Cookies.get('language')
  }
  config.data = config.data ? qs.stringify(config.data) : null
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// 返回拦截
service.interceptors.response.use(
  response => {
    // console.log(Cookies.get('language'))
    const res = response.data
    var sureStr = '确定'
    if (Cookies.get('language') === 'en') {
      sureStr = 'sure'
    }
    if (res.status && res.status !== 1000) {
      if (res.status === 1001) { // 超时状态
        MessageBox.alert(res.msg, '', {
          confirmButtonText: sureStr,
          center: true,
          showClose: false,
          callback: action => {
            LogOut()
          }
        })
        return
      }
      if (res.status === 1003) { // 超时状态
        MessageBox.alert(res.msg, '', {
          confirmButtonText: sureStr,
          center: true,
          showClose: false,
          callback: action => {
            LogOut()
          }
        })
        return
      }
      if (res.status === 1004) { // 账号已经在别处登陆，强制下线
        MessageBox.alert(res.msg, '', {
          confirmButtonText: sureStr,
          center: true,
          showClose: false,
          callback: action => {
            LogOut()
          }
        })
        return
      }
      if (res.status === 5009) { // 超时状态
        MessageBox.alert(res.msg, '', {
          confirmButtonText: sureStr,
          center: true,
          showClose: false,
          callback: action => {
            LogOut()
          }
        })
        return
      }
      if (res.status === 1005) { // token不能为空
        return
      }
      if (res.status === 4001) { // 参数错误，不予提示
        return
      }

      // 错误信息
      let resultMsg = ''
      if (res.msg) {
        resultMsg = res.msg
      }
      Message({ // 其它问题先弹错误信息
        message: resultMsg,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(response) // 报错给promise catch
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
