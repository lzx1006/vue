import request from '@/utils/request'

/**
 * 数字资产：获取上线的数字资产
 */
export function getAllAsset() {
  return request({
    url: '/api/CtcMemberAsset/getAllAsset',
    method: 'post'
  })
}

// /**
//  * 新手指南，指南详情内容
//  */
// export function guideContent(data) {
//   return request({
//     url: '/api/Guide/guideContent',
//     method: 'post',
//     data
//   })
// }
