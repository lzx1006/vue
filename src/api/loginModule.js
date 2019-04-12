import request from '@/utils/request'

/**
 * 发送短信/邮箱验证码
 */
export function sendRequestSms(data) {
  return request({
    url: 'api/Login/sendRequestSms',
    method: 'post',
    data
  })
}

/**
 * 登录
 */
export function login(data) {
  return request({
    url: '/api/Login/login',
    method: 'post',
    data
  })
}

/**
 * 注册
 */
export function submitRegister(data) {
  return request({
    url: '/api/Login/submitRegister',
    method: 'post',
    data
  })
}

/**
 * 忘记密码
 */
export function resetPassword(data) {
  return request({
    url: '/api/User/resetPassword',
    method: 'post',
    data
  })
}

/**
 * 获取国际编码区号
 */
export function getInternationalSmsCode() {
  return request({
    url: '/api/Login/getInternationalSmsCode',
    method: 'post'
  })
}
