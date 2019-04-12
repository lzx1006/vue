import request from '@/utils/request'

/**
 *  获取注册协议
 */
export function getAgreementContent(data) {
  return request({
    url: '/api/Login/getAgreementContent',
    method: 'post',
    data
  })
}

/**
 *  获取所有协议分类
 */
export function getAgreementCate() {
  return request({
    url: '/api/Login/getAgreementCate',
    method: 'post'
  })
}

/**
 * 新手指南，获取新闻公告详情
 */
export function getArticleById(data) {
  return request({
    url: '/api/Article/getArticleById',
    method: 'post',
    data
  })
}

/**
 *  获取所有公告分类
 */
export function getCates() {
  return request({
    url: '/api/Article/getCates',
    method: 'post'
  })
}

/**
 *  获取所有公告分类
 */
export function getArticleList(data) {
  return request({
    url: '/api/Article/getArticleList',
    method: 'post',
    data
  })
}

/**
 *  关于我们
 */
export function getAboutDetail() {
  return request({
    url: '/api/About/index',
    method: 'post'
  })
}
