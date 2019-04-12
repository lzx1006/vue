import { removeToken } from '@/utils/auth'
/**
 * validate 字符串长度限制60
 */
export function strLonglimit(str) {
  const re = /^[0-9]{0,60}$/
  return re.test(str)
}

export function getLinkUserInfo(str) {
  if (window.localStorage.getItem('link_userInfo')) {
    let link_userInfo = window.localStorage.getItem('link_userInfo')
    link_userInfo = JSON.parse(link_userInfo)
    return link_userInfo[str]
  }
  return ''
}

export function LogOut() {
  if (window.localStorage.getItem('link_userInfo')) {
    window.localStorage.removeItem('link_userInfo')
    removeToken()
  }
  window.location.href = '#/login'
}

export function targetEnvironment() {
  const ENV = {
    ctc: {
      dev: 'http://localhost:8080/#',
      sit: 'http://192.169.1.210:7569/#',
      prod: 'https://crypto.hkcexp.com/#'
    },
    otc: {
      dev: 'http://localhost:1234/#',
      sit: 'http://192.169.1.210:7570/#',
      prod: 'https://otc.crypto.hkcexp.com/#'
    }
  }
  const currentHost = window.location.host
  // console.log('currentHost', currentHost)
  let target = null
  for (const property in ENV.ctc) {
    if (ENV.ctc[property].indexOf(currentHost) > -1) {
      target = ENV.otc[property]
    }
  }
  return target
}
