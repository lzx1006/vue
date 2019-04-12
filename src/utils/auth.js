import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 0.05 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setAny(key, name) {
  return Cookies.set(key, name)
}

export function getAny(key) {
  return Cookies.get(key)
}

export function removeAny(key) {
  return Cookies.remove(key)
}
