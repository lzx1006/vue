import request from '@/utils/request'

/**
 * 订单管理： 我的订单列表
 * @param {*} data
 */
export function getmyOrderList(data) {
  return request({
    url: '/api/OtcOrders/myOrderList',
    method: 'post',
    data
  })
}

/**
 * 订单管理： 获取待处理订单消息
 * @param {*} data
 */
export function getNotHandleOrder(data) {
  return request({
    url: '/api/OtcOrders/getNotHandleOrder',
    method: 'post',
    data
  })
}

/**
 * 订单管理： 广告列标，包含查询条件
 * @param {*} data
 */
export function getmyAdList(data) {
  return request({
    url: '/api/Advertisement/myAdList',
    method: 'post',
    data
  })
}

/**
 * 订单管理： 启用/禁用
 * @param {*} data
 */
export function openORclose(data) {
  return request({
    url: '/api/Advertisement/openORclose',
    method: 'post',
    data
  })
}

/**
 * 订单管理： 删除
 * @param {*} data
 */
export function delAd(data) {
  return request({
    url: '/api/Advertisement/delAd',
    method: 'post',
    data
  })
}

// -----------------------------------------

/**
 * 订单管理： 获取币种信息
 * @param {*} data
 */
export function financeCenter() {
  return request({
    url: '/api/CtcMemberAsset/financeCenter',
    method: 'post'
  })
}

/**
 * 订单管理：委托记录列表
 * @param {*} data
 */
export function getEntrustTradeList(data) {
  return request({
    url: '/api/CtcMemberOrder/getEntrustTradeList',
    method: 'post',
    data
  })
}

/**
 * 订单管理：成交记录列表
 * @param {*} data
 */
export function getDealTradeList(data) {
  return request({
    url: '/api/CtcMemberOrder/getDealTradeList',
    method: 'post',
    data
  })
}
