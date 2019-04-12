import request from '@/utils/request'

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
