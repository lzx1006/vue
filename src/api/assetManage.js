import request from '@/utils/request'

/**
 * 我的资产，资产明细
 */
export function getFinancialCenter() {
  return request({
    url: '/api/OtcTrade/financialCenter',
    method: 'post'
  })
}

/**
 * 资产管理： 资产明细
 * @param {*} data
 */
export function getFinancialDetailList(data) {
  return request({
    url: '/api/OtcTrade/financialDetail',
    method: 'post',
    data
  })
}

/**
 * 资产管理： 资产划转
 * @param {*} data
 */
export function platformTransfer(data) {
  return request({
    url: '/api/OtcTrade/platformTransfer',
    method: 'post',
    data
  })
}

/**
 * 资产管理： 资产划转记录
 * @param {*} data
 */
export function platformTransferLog(data) {
  return request({
    url: '/api/OtcTrade/platformTransferLog',
    method: 'post',
    data
  })
}

/**
 * 资产管理： 获取充值地址
 * @param {*} data
 */
export function getRechargeWalletAddress(data) {
  return request({
    url: '/api/OtcTrade/getRechargeWalletAddress',
    method: 'post',
    data
  })
}
// -----------------------------------------/

/**
 * 资产转入： 转入信息
 * @param {*} data
 */
export function assetTurnInTo(data) {
  return request({
    url: '/api/CtcMemberAsset/assetTurnInTo',
    method: 'post',
    data
  })
}

/**
 * 资产转入： 转入记录
 * @param {*} data
 */
export function assetTurnInList(data) {
  return request({
    url: '/api/CtcMemberAsset/assetTurnInList',
    method: 'post',
    data
  })
}

/**
 * 资产转出： 转出信息
 * @param {*} data
 */
export function assetTurnOutToInfo(data) {
  return request({
    url: '/api/CtcMemberAsset/assetTurnOutToInfo',
    method: 'post',
    data
  })
}

/**
 * 资产转出：确认转出
 * @param {*} data
 */
export function memberAssetOutTo(data) {
  return request({
    url: '/api/CtcMemberAsset/memberAssetOutTo',
    method: 'post',
    data
  })
}

/**
 * 资产转出：转出列表
 * @param {*} data
 */
export function assetTurnOutToList(data) {
  return request({
    url: '/api/CtcMemberAsset/assetTurnOutToList',
    method: 'post',
    data
  })
}

/**
 * 资产转出：撤销转出
 * @param {*} data
 */
export function cancelAssetTurnOut(data) {
  return request({
    url: '/api/CtcMemberAsset/cancelAssetTurnOut',
    method: 'post',
    data
  })
}
