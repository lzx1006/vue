import axios from 'axios'
// import store from '@/store'
import { MessageBox, Message } from 'element-ui'
import resMessage from '@/utils/resMessage'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://192.169.1.11:8080/', // api的base_url
  baseURL: process.env.BASE_API,
  timeout: 10000 // request timeout
})

function typeCheck(obj) {
  return Object.prototype.toString.call(obj)
}

// 请求拦截
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'multipart/form-data'
  const formData = new window.FormData()
  console.log(config.data)
  if (config.data) {
    Object.keys(config.data).forEach(key => {
      const item = config.data[key]
      // alert(typeCheck(item))
      if (typeCheck(item) === '[object Object]') {
        // alert(key)
        formData.append(key, item.raw, item.name)
      } else {
        formData.append(key, item)
      }
    })
  }
  config.data = formData
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// 返回拦截
service.interceptors.response.use(
  response => {
    console.log(response)
    const res = response.data
    if (res.status && res.status !== 1000) {
      if (res.status === 1001) { // 超时状态
        MessageBox.alert(resMessage[res.status] + ' ，请重新登录', '', {
          confirmButtonText: '确定',
          center: true,
          showClose: false,
          callback: action => {
            // this.$router.push('/login')
          }
        })
        return
      }
      if (res.status === 1003) { // 超时状态
        MessageBox.alert(resMessage[res.status] + ' ，请重新登录', '', {
          confirmButtonText: '确定',
          center: true,
          showClose: false,
          callback: action => {
            // this.$router.push('/login')
          }
        })
        return
      }
      if (res.status === 1004) { // 超时状态
        MessageBox.alert(' 账号已在别处登录,已强制下线', '', {
          confirmButtonText: '确定',
          center: true,
          showClose: false,
          callback: action => {
            // this.$router.push('/login')
          }
        })
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
