export default {
  img: {
    logoUrl: 'static/images/index/logo.png',
    logoBottomUrl: 'static/images/index/logo_bottom.png'
  },
  // 导航
  navbar: {
    index: '首页',
    user: {
      nav: '',
      navItem1: '用户中心',
      navItem2: '我的广告',
      navItem6: '退出'
    },
    login: '登录',
    register: '注册'
  },
  // 底部内容
  footer: {
    service: '服务',
    serviceInformation: '服务资讯',
    ecology: 'HKCEXP 生态',
    tool: '工具',
    downloadAPP: '客户端下载',
    help: '帮助中心',
    numberAsset: '数字资产介绍',
    about: '公司简介',
    aboutUs: '关于我们',
    proto: '服务条款',
    announcement: '公告',
    contactUs: '联系我们'
  },
  customerServiceDialog: {
    onlineServie: '在线客服',
    closeDialog: '关闭聊天'
  },
  // 错误提示
  errorTips: {
    withoutPwd: '密码不能为空',
    longPwd: '密码长度不小于6位',
    longLimitPwd: '密码长度不大于20位',
    rulePwd: '密码由字母、数字、特殊字符最少两种组合,6-20位',
    notSuitRulePwd: '密码为字母数字特殊字符最少2种组合，至少6位',
    withoutAccount: '手机号/邮箱不能为空',
    notSuitRuleAccount: '手机号/邮箱格式不正确',
    withoutPhone: '手机号码不能为空',
    phoneFormat: '手机号码格式不正确',
    withoutEmail: '邮箱不能为空',
    emailFormat: '邮箱格式不正确',
    surePwd: '请再次输入密码',
    surePwdError: '两次输入密码不一致',
    withoutVerifyCode: '验证码不能为空',

    bindEmailSuccess: '邮箱绑定成功！',
    bindPhoneSuccess: '手机号码绑定成功！',
    withoutSurePwd: '确认密码不能为空',
    noGoogleCode: '谷歌验证码不能为空',
    noNickname: '昵称不能为空',
    nicknameSuccess: '昵称修改成功',
    googleCodeSuccess: '谷歌验证绑定成功',
    withoutProto: '请勾选用户协议',
    // 复制相关
    copySuccess: '复制成功!',
    copyError: '复制失败！',
    formatError: '输入值格式不正确！',
    tradePwdError: '交易密码必须为6位纯数字！',
    tradePwdRule: '请输入6位纯数字',
    noTradePwd: '交易密码不能为空',
    withoutBindPhone: '请先在账户安全绑定手机号码！',
    noZhifubao: '支付宝账号不能为空！',
    notSuitZhifubao: '支付宝账号格式不正确！',
    noUsername: '姓名不能为空',
    noWeixinAccount: '微信账号不能为空',
    nocredicard: '银行卡账号不能为空',
    noBankAccount: '开户银行不能为空',
    moBranch: '开户支行不能为空',
    noCodePhoto: '请上传二维码照片！',
    operateSuccess: '操作成功！',
    emailModifySuccess: '邮箱修改成功！',
    bindPhoneFist: '请先在账户安全绑定手机号码！'
  },
  dialog: {
    title: '提示',
    sure: '确定',
    modify: '修改',
    cancle: '取消',
    submit: '提交'
  },
  // 获取验证码相关
  verifyCode: {
    title: '获取验证码',
    second: '秒',
    getAgain: '重新获取'
  },
  form: {
    tradePwd: '交易密码:',
    tradePwdPlaceholder: '请输入您的交易密码',
    phone: '手机号码:',
    phonePlaceholder: '请输入您的手机号码',
    email: '邮箱号码:',
    emailPlaceholder: '请输入您的邮箱号码',
    phoneVerifyCode: '短信验证码:',
    verifyCode: '验证码:',
    verifyCodePlaceholder: '验证码',
    nickname: '昵称:',
    nicknamePlaceholder: '请输入您的昵称',
    submit: '提交'
  },
  // 登录
  login: {
    nav: {
      back: '返回首页'
    },
    des1: {
      part1: '温馨提示:数字资产是创新的投资产品，价格波动较大，具有较高的投资风险，请投资前对数字资产充分认知，理性判断自己的投资能力，审慎做出投资决策',
      part3: '',
      part4: ''
    },
    title: '欢迎登录',
    usernamePlaceholder: '手机号/邮箱',
    passwordPlaceholder: '登录密码',
    toLogin: '登录',
    des2: {
      part1: '没有账号？',
      part2: '立即注册',
      part3: '忘记密码'
    },
    footer: {
      copyright: '2018-HKCEXP数字资产交易所'
    }
  },
  // 注册
  register: {
    nav: {
      title: '欢迎注册'
    },
    des: {
      part1: '已有账号？',
      part2: '立即登录',
      part3: '返回首页'
    },
    regWays: {
      byPhone: '手机注册',
      buEmail: '邮箱注册'
    },
    placeholder: {
      tel: '请输入手机号',
      email: '请输入邮箱',
      verifyCode: '验证码',
      pwd: '请输入登录密码',
      confirmPwd: '请确认登录密码',
      inviteCode: '邀请码 无可不填'
    },
    tips: {
      phone: '作为用户登录, 请填写常用手机号码',
      email: '作为用户登录, 请填写常用邮箱号码',
      pwd: '6-20个字符，字母、数字、特殊字符最少2种组合，不能有空格和中文'
    },
    title: '注册',
    footer: '2018-HKCEXP数字资产交易所'
  },
  // 忘记密码页
  forgetPwd: {
    nav: {
      title: '找回密码'
    },
    des: {
      part1: '已有账号？',
      part2: '立即登录',
      part3: '返回首页'
    },
    byPhone: '通过手机',
    byEmail: '通过邮箱',
    submit: '提交',
    placeholder: {
      newPwd: '请输入新密码',
      tel: '请输入手机号',
      email: '请输入邮箱',
      verifyCode: '验证码',
      pwd: '请输入登录密码',
      confirmPwd: '请确认登录密码',
      inviteCode: '邀请码 无可不填'
    },
    tips: {
      part1: '找回密码成功,是否跳转到登录页?',
      title: '提示',
      sure: '确定',
      cancle: '取消'
    }
  },
  
}
