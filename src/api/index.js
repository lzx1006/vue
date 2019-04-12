import request from '@/utils/request'

/**
 * 首页：获取所有的交易区
 */
export function getAllTradeArea() {
  return request({
    url: '/api/TradeCenter/getAllTradeArea',
    method: 'post'
  })
}

/**
 * 首页：跑马灯效果，公告列表
 */
export function getArticleList(data) {
  return request({
    url: '/api/ArticleApp/getArticleDetailList',
    method: 'post'
  })
}

/**
 * 首页：获取banner列表
 */
export function getBannerList() {
  return request({
    url: '/api/Banner/bannerList',
    method: 'post'
  })
}

/**
 * 首页：获取APP下载链接
 */
export function getAppDownLoad() {
  return request({
    url: '/api/Login/getAppDownLoad',
    method: 'post'
  })
}

/**
 * 首页：获取otc推荐列表
 */
export function getRecommendAdList() {
  return request({
    url: '/api/Advertisement/getRecommendAdList',
    method: 'post'
  })
}

/**
 * 首页：获取所有交易区分类数据
 */
export function getAllTradeAreaCateList(data) {
  return request({
    url: '/api/TradeCenter/getAllTradeAreaCateList',
    method: 'post',
    data
  })
}

/**
 * 首页：获取钱包APP下载链接
 */
export function getWalletAppDownLoad() {
  return request({
    url: '/api/Login/getWalletAppDownLoad',
    method: 'post'
  })
}
