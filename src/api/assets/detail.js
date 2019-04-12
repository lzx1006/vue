import request from '@/utils/request'

/**
 * 获取法币或者币币的上线币种
 */
export function getCtcOrOtcCurrency(data) {
  return request({
    url: 'api/CtcMemberAsset/getCtcOrOtcCurrency',
    method: 'post',
    data
  })
}

/**
 * 交易明细
 */
export function tradeDetail(data) {
  return request({
    url: 'api/TradeCenter/tradeDetail',
    method: 'post',
    data
  })
}
