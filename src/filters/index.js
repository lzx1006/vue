/**
 * 转百分比，并保留两位小数
 * @param {*} val
 */
export function roundTwoPecent(val) {
  return (parseFloat(val) * 100).toFixed(2)
}

/**
 * 保留5位小数
 * @param {*} val
 */
export function roundFive(val) {
  return parseFloat(val).toFixed(5)
}

/**
 * 保留2位小数
 * @param {*} val
 */
export function roundTwo(val) {
  return parseFloat(val).toFixed(2)
}

/**
 * 保留6位小数
 * @param {*} val
 */
export function roundSix(val) {
  return parseFloat(val).toFixed(6)
}

/**
 * 转换时间
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function crypto(val) {
  if (!val) return ''
  let str = val
  let suffix = ''
  if (str.indexOf('@') >= 0) {
    str = val.split('@')[0]
    suffix = '@' + val.split('@')[1]
  }

  const head = str.slice(0, 3)
  let tail = ''

  if (str.length >= 7) {
    tail = str.slice(-4)
  }
  return `${head}****${tail}${suffix}`
}

export function cryptoTel(val, headNum = 2, tailNum = 3) {
  if (!val) return ''
  if (val.length < 4) return val // 不够长 例如假数据会报错
  const head = val.slice(0, headNum)
  const tail = val.slice(-tailNum)
  const star = new Array(val.length - (headNum + tailNum)).fill('*').join('')
  return `${head}${star}${tail}`
}

export const cryptoName = (val) => {
  return cryptoTel(val, 0, 1)
}
