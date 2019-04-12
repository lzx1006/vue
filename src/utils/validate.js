/**
 * Created by jiachenpan on 16/11/18.
 */

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 大小写字母+数字*/ // 主要用于护照
export function validatAlphabetsNumber(str) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(str)
}
/**
 * validate email
 * @param str
 * @returns {boolean}
 */
export function Email(str) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(str)
}

/**
 * validate Idcard
 * @param str
 * @returns {boolean}
 */
export function Idcard(str) {
  const re = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return re.test(str)
}

/**
 * validate Phone
 * @param str
 * @returns {boolean}
 */
export function Phone(str) {
  const re = /^[0-9]{6,11}$/
  return re.test(str)
}

/**
 * validate 正浮点
 * @param str
 * @returns {boolean}
 */
export function Pfp(str) {
  const re = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
  return re.test(str)
}

/**
 * validate 正整数 非零
 * @param str
 * @returns {boolean}
 */
export function Pinteger(str) {
  const re = /^[1-9]\d*$/
  return re.test(str)
}

/**
 * validate 国际号码6-11位正整数
 * @param str
 * @returns {boolean}
 */
export function nationNumber(str) {
  const re = /^[0-9]{6,11}$/
  return re.test(str)
}

/**
 * validate 字母 数字 特殊字符 最少2种组合，不能有空格和中文，6-20位
 */
export function loginPwd(str) {
  const re = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/
  return re.test(str)
}

/**
 * validate 6位交易密码
 */
export function sixNumber(str) {
  const re = /^[0-9]{6}$/
  return re.test(str)
}

/**
 * validate 交易密码不能是重复连续的六位数字
 */
export function tradePwd(str) {
  // const re = /^(?=\\d+)(?!([\\d])\\1{5})[\\d]{6}$/
  const arr = ['000000', '111111', '222222', '333333', '444444',
    '555555', '666666', '777777', '888888', '999999',
    '012345', '123456', '234567', '345678', '456789',
    '987654', '876543', '765432', '654321', '543210']
  let flag = true
  arr.forEach(item => {
    if (item === str) {
      flag = false
      return
    }
  })
  return flag
}

/**
 * validate 字符串长度限制50
 */
export function strLonglimit(str) {
  const re = /^.{0,50}$/
  return re.test(str)
}

/**
 * validate 字符串长度限制240
 */
export function strLonglimit1(str) {
  const re = /^.{0,240}$/
  return re.test(str)
}

/**
 * validate 只能输入小数或正整数
 */
export function numberTest(str) {
  const re = /^[0-9]([0-9]|\.)*$/
  return re.test(str)
}
