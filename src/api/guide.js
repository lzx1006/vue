import request from '@/utils/request'

/**
 * 新手指南，指南分类
 */
export function getGuideSide() {
  return request({
    url: '/api/Guide/getGuideSide',
    method: 'post'
  })
}

/**
 * 新手指南，指南详情内容
 */
export function guideContent(data) {
  return request({
    url: '/api/Guide/guideContent',
    method: 'post',
    data
  })
}
