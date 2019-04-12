import request from '@/utils/request'

/**
 * 币币账户
 */
export function getCtcFinancialCenter() {
  return request({
    url: '/api/CtcMemberAsset/financeCenter',
    method: 'post'
  })
}

/**
 * OTC账户
 */
export function getOtcFinancialCenter() {
  return request({
    url: '/api/OtcTrade/financialCenter',
    method: 'post'
  })
}

/**
 * 获取币币账户充值地址
 */
export function getCtcAddress(data) {
  return request({
    url: '/api/CtcMemberAsset/assetTurnInTo',
    method: 'post',
    data
  })
}

/**
 * 获取OTC账户充值地址
 */
export function getOtcAddress(data) {
  return request({
    url: '/api/OtcTrade/getRechargeWalletAddress',
    method: 'post',
    data
  })
}

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
 * 币币账户提币
 */
export function memberAssetOutTo(data) {
  return request({
    url: 'api/CtcMemberAsset/memberAssetOutTo',
    method: 'post',
    data
  })
}

/**
 * 币币账户提币-最小提币数量(最低转出金额)
 */
export function getCurrencyMinTibiNum(data) {
  return request({
    url: 'api/CtcMemberAsset/getCurrencyMinTibiNum',
    method: 'post',
    data
  })
}

/**
 * 资产划转
 */
export function platformTransfer(data) {
  return request({
    url: 'api/OtcTrade/platformTransfer',
    method: 'post',
    data
  })
}
