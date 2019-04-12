import request from '@/utils/request'

/**
 * 个人中心：我的邀请码
 */
export function getUserInviteInfo() {
  return request({
    url: '/api/User/getUserInviteInfo',
    method: 'post'
  })
}

/**
 * 个人中心：我的邀请记录
 */
export function getUserInviteList(data) {
  return request({
    headers: {
      version: 'v100'
    },
    url: '/api/User/getUserInviteList',
    method: 'post',
    data
  })
}

/**
 * 我的收益记录
 */
export function getUserProfitList(data) {
  return request({
    url: '/api/User/getUserProfitList',
    method: 'post',
    data
  })
}

/**
 * 个人中心：实名认证--获取国家与证件选项
 */
export function getCountryAndCardType() {
  return request({
    url: '/api/MemberCenter/getCountryAndCardType',
    method: 'post'
  })
}

/**
 * 个人中心：实名认证--获取国家与证件选项--最新
 */
export function getCardTypeAndCountry() {
  return request({
    url: '/api/MemberCenter/getCardTypeAndCountry',
    method: 'post'
  })
}

/**
 * 个人中心：实名认证--获取实名认证审核中信息
 */
export function identityData() {
  return request({
    url: '/api/MemberCenter/identityData',
    method: 'post'
  })
}

/**
 * 个人中心：实名认证--重新验证
 */
export function identityCancel() {
  return request({
    url: '/api/MemberCenter/identityCancel',
    method: 'post'
  })
}

/**
 * 个人中心：账号安全--获取用户的支付方式
 */
export function getUserPayType() {
  return request({
    url: '/api/MemberCenter/getUserPayType',
    method: 'post'
  })
}

/**
 * 个人中心：账号安全--用户添加/修改支付方式
 */
export function setUserPayment(data) {
  return request({
    url: '/api/MemberCenter/setUserPayment',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全--获取用户相应的支付方式信息
 */
export function getUserPayInfo(data) {
  return request({
    url: '/api/MemberCenter/getUserPayInfo',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全--获取支持支付方式列表
 */
export function getOtcPayType() {
  return request({
    url: '/api/MemberCenter/getOtcPayType',
    method: 'post'
  })
}

/**
 * 个人中心：账号安全--获取用户基本信息
 */
export function userInfo() {
  return request({
    url: '/api/User/userInfo',
    method: 'post'
  })
}

/**
 * 个人中心：账号安全--上传用户头像
 */
export function uploadUserHead(data) {
  return request({
    url: '/api/User/uploadUserHead',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全--修改绑定手机号码/邮箱
 */
export function phoneORemailAuth(data) {
  return request({
    headers: {
      version: 'v100'
    },
    url: '/api/MemberCenter/editPhoneOrEmail',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全--修改绑定手机号码/邮箱
 */
export function bindPhoneOrEmail(data) {
  return request({
    url: '/api/MemberCenter/bindPhoneOrEmail',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全--获取安全问题
 */
export function safeQuestion() {
  return request({
    url: '/api/MemberCenter/safeQuestion',
    method: 'post'
  })
}

/**
 * 个人中心：账号安全--获取安全问题
 */
export function submitSafeQuestion(data) {
  return request({
    url: '/api/MemberCenter/submitSafeQuestion',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---谷歌验证初始化信息
 */
export function getSecretAndCode(data) {
  return request({
    url: '/api/MemberCenter/getSecretAndCode',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---开启谷歌验证
 */
export function openGoogleAuth(data) {
  return request({
    url: '/api/MemberCenter/openGoogleAuth',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---取消双重验证
 */
export function cancelGoogleAuth(data) {
  return request({
    url: '/api/MemberCenter/cancelGoogleAuth',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---重置双重验证
 */
export function reset_double_verify(data) {
  return request({
    url: '/api/MemberCenter/reset_double_verify',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---修改密码
 */
export function editPassword(data) {
  return request({
    url: '/api/User/editPassword',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---换一组安全问题
 */
export function anotherGroup() {
  return request({
    url: '/api/MemberCenter/anotherGroup',
    method: 'post'
  })
}

/**
 * 个人中心：账号安全---验证安全问题
 */
export function checkSafetyQuestion(data) {
  return request({
    url: '/api/MemberCenter/checkSafetyQuestion',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---重置交易密码
 */
export function resetPwdTrade(data) {
  return request({
    url: '/api/MemberCenter/resetPwdTrade',
    method: 'post',
    data
  })
}

/**
 * 个人中心：账号安全---昵称修改
 */
export function editNickname(data) {
  return request({
    url: '/api/User/editNickname',
    method: 'post',
    data
  })
}

/**
 * 个人中心：提交实名认证
 */
export function submitMemberIdentify(data) {
  return request({
    url: '/api/MemberCenter/submitMemberIdentify',
    method: 'post',
    data
  })
}

/**
 * 个人中心：验证token接口,获取用户信息
 */
export function checkToken(data = {}) {
  return request({
    url: '/api/MemberCenter/checkToken',
    method: 'post',
    data
  })
}

/**
 * 个人中心：重置交易密码前的身份校验
 */
export function checkUserAuth(data) {
  return request({
    url: '/api/MemberCenter/checkUserAuth',
    method: 'post',
    data
  })
}

/**
 * 个人中心：设置交易密码
 */
export function setPwdTradeV1(data) {
  return request({
    url: '/api/MemberCenter/setPwdTradeV1',
    method: 'post',
    data
  })
}

/**
 * 个人中心：设置交易性别
 */
export function editSex(data) {
  return request({
    url: '/api/User/editSex',
    method: 'post',
    data
  })
}
