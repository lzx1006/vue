import request from '@/utils/request'

/**
 * 获取币种信息
 */
export function getCurrencyTradeInfo(data) {
  return request({
    url: '/api/TradeCenter/getCurrencyTradeInfo',
    method: 'post',
    data
  })
}

/**
 * 获取币种列表
 */
export function getTradeCurrencys(data) {
  return request({
    url: '/api/TradeCenter/getTradeCurrencys',
    method: 'post',
    data
  })
}

/**
 * 获取深度图数据
 */
export function getTradeDepthTrend(data) {
  return request({
    url: '/api/TradeCenter/getTradeDepthTrend',
    method: 'post',
    data
  })
}

/**
 * 购买
 */
export function tradeBuyOption(data) {
  return request({
    url: '/api/TradeCenter/tradeBuyOption',
    method: 'post',
    data
  })
}

/**
 * 出售
 */
export function tradeSellOption(data) {
  return request({
    url: '/api/TradeCenter/tradeSellOption',
    method: 'post',
    data
  })
}

/**
 * 获取我的挂单
 */
export function getUnableTradeList(data) {
  return request({
    url: '/api/TradeCenter/getUnableTradeList',
    method: 'post',
    data
  })
}

/**
 * 获取我的挂单 --撤销操作
 */
export function entrustCancelOption(data) {
  return request({
    url: '/api/CtcMemberOrder/entrustCancelOption',
    method: 'post',
    data
  })
}

/**
 * 获取详细的币种资料
 */
export function getCurrencyIntroduce(data) {
  return request({
    url: '/api/TradeCenter/getCurrencyIntroduce',
    method: 'post',
    data
  })
}

/**
 * 收藏
 */
export function optionalCollect(data) {
  return request({
    url: '/api/TradeCenter/optionalCollect',
    method: 'post',
    data
  })
}
