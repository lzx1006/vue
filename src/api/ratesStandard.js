import request from '@/utils/request'

/**
 * 汇率： 获取汇率
 */
export function getCurrencyTradeFee() {
  return request({
    url: '/api/CtcMemberAsset/getCurrencyTradeFee',
    method: 'post'
  })
}
