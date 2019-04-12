export default {
  img: {
    logoUrl: 'static/images/index/logo.png',
    logoBottomUrl: 'static/images/index/logo_bottom.png'
  },
  // 导航
  navbar: {
    index: 'HOME',
    bibiTrade: 'Token Trade',
    fabiTrade: 'OTC',
    guide: 'HELP',
    download: 'GCX Wallet',
    asset: {
      nav: 'Asset',
      navItem1: 'Token Trade',
      navItem2: 'OTC Account'
    },
    order: {
      nav: 'Order',
      navItem1: 'Token Orders',
      navItem2: 'OTC Orders'
    },
    user: {
      nav: '',
      navItem1: 'Account',
      navItem2: 'My Ads',
      navItem3: 'Trusted',
      navItem4: 'Payment',
      navItem5: 'Invite',
      navItem6: 'Logout'
    },
    login: 'Log in',
    register: 'Sign up'
  },
  // 底部内容
  footer: {
    copyright: '2018-hkcexp Crypto Exchange Platform',
    service: 'Service',
    serviceInformation: 'Service Info',
    ecology: 'hkcexp Eco',
    tool: 'Tools',
    downloadAPP: 'APP Download',
    help: 'Help',
    numberAsset: 'Token Info',
    about: 'Company Profile',
    aboutUs: 'About Us',
    proto: 'Terms of Service',
    announcement: 'Notice',
    contactUs: 'Contact Us'
  },
  customerServiceDialog: {
    onlineServie: 'Online Chat',
    closeDialog: 'Close'
  },
  // 错误提示
  errorTips: {
    withoutPwd: 'Password cannot be empty',
    longPwd: 'must be more than 6 chars',
    longLimitPwd: 'must be less than 20 chars',
    rulePwd: 'Password must be 6-20 chars combined with letters, digits and special characters',
    notSuitRulePwd: 'Password must be combined with letters and special characters and more than 6 chars',
    withoutAccount: 'Mobile/Emain cannot be empty',
    notSuitRuleAccount: 'Incorrect Mobile/Email format',
    withoutPhone: 'Mobile cannot be empty',
    phoneFormat: 'Incorrect mobile format',
    withoutEmail: 'Email cannot be empty',
    emailFormat: 'Incorrect email format',
    surePwd: 'Please type in password again',
    surePwdError: 'Passwords do not match',
    withoutVerifyCode: 'Verify Code cannot be empty',

    bindEmailSuccess: 'Email is bound',
    bindPhoneSuccess: 'Mobile is bound',
    withoutSurePwd: 'Password cannot be empty',
    noGoogleCode: 'Google code cannot be empty',
    noNickname: 'Nickname cannot be empty',
    nicknameSuccess: 'Nickname is modified',
    googleCodeSuccess: 'Google Authenticator is bound',
    withoutProto: 'Please agree the user agreement',
    // 复制相关
    copySuccess: 'Copied!',
    copyError: 'Copy failed！',
    formatError: 'Wrong fomat！',
    tradePwdError: 'TX pass must be 6 digit numbers！',
    tradePwdRule: 'Please type in 6 digit numbers',
    noTradePwd: 'TX pass cannot be empty',
    withoutBindPhone: 'Please bind mobile first！',
    noZhifubao: 'Alipay account cannot be empty！',
    notSuitZhifubao: 'Wrong Alipay format！',
    noUsername: 'Name cannot be empty',
    noWeixinAccount: 'Wechat cannot be empty',
    nocredicard: 'Bank card cannot be empty',
    noBankAccount: 'Bank account cannot be empty',
    moBranch: 'Branch cannot be empty',
    noCodePhoto: 'Please upload qrcode',
    operateSuccess: 'Succeeded!',
    emailModifySuccess: 'Email has been modified!',
    bindPhoneFist: 'Please bind mobile first!'
  },
  dialog: {
    title: 'Notice',
    sure: 'Ok',
    modify: 'Edit',
    cancle: 'Cancel',
    submit: 'Submit'
  },
  // 获取验证码相关
  verifyCode: {
    title: 'Send Code',
    second: 's',
    getAgain: 'Resend'
  },
  form: {
    tradePwd: 'Transaction Pass:',
    tradePwdPlaceholder: 'Please enter your transaction pass',
    phone: 'Mobile Number:',
    phonePlaceholder: 'Please enter your mobile phone number',
    email: 'Mailbox Number:',
    emailPlaceholder: 'Please enter your mailbox number',
    phoneVerifyCode: 'Message code:',
    verifyCode: 'Verify Code:',
    verifyCodePlaceholder: 'Verify Code',
    nickname: 'Nickname:',
    nicknamePlaceholder: 'Please enter nickname',
    submit: 'Submit'
  },
  // 登录
  login: {
    nav: {
      back: 'Home'
    },
    des1: {
      part1: 'Tips:Crypto assets are a new type of investment. The price can fluctuate wildly with high risk. Please invest wisely.',
      part3: '',
      part4: ''
    },
    title: 'Welcome',
    usernamePlaceholder: 'Mobile/E-mail',
    passwordPlaceholder: 'login password',
    toLogin: 'Log in',
    des2: {
      part1: 'No Account？',
      part2: 'Register Now',
      part3: 'Forget Passowrd'
    },
    footer: {
      copyright: '2018-HKCEXP digital assets exchange'
    }
  },
  // 注册
  register: {
    nav: {
      title: 'Welcome'
    },
    des: {
      part1: 'Already has a account？',
      part2: 'Log in',
      part3: 'Home'
    },
    regWays: {
      byPhone: 'Mobile Register',
      buEmail: 'E-mail Register'
    },
    placeholder: {
      tel: 'Please enter mobile number',
      email: 'Please enter email',
      verifyCode: 'Verify Code',
      pwd: 'Please enter password',
      confirmPwd: 'Confirm login password',
      inviteCode: 'Invitation code, leave empty if not available'
    },
    proto: {
      part1: 'Read and Agree',
      part2: '《HKCEXP Terms of Service》'
    },
    tips: {
      phone: 'Please fill in the commonly used mobile phone number',
      email: 'Please fill in the commonly used mailbox number',
      pwd: '6-20 characters, at least 2 combinations of letters, Numbers and special characters, no Spaces or Chinese characters'
    },
    title: 'Sign Up',
    footer: '2018-HKCEXP digital assets exchange'
  },
  // 忘记密码页
  forgetPwd: {
    nav: {
      title: 'Retrieve password'
    },
    des: {
      part1: 'Already has a account？',
      part2: 'Log in',
      part3: 'Home'
    },
    byPhone: 'By mobile phone',
    byEmail: 'By e-mail',
    submit: 'Submit',
    placeholder: {
      newPwd: 'Please enter your new password',
      tel: 'Please enter your mobile phone number',
      email: 'Please enter your mailbox number',
      verifyCode: 'Verify Code',
      pwd: 'Please enter your login password',
      confirmPwd: 'Confirm login password',
      inviteCode: 'Invitation code, leave empty if not available'
    },
    tips: {
      part1: 'Password retrieved, go back to home page?',
      title: 'Tips',
      sure: 'Ok',
      cancle: 'Cancle'
    }
  },
  // 注册成功页
  registerSuccess: {
    des: {
      regStatu: 'Registered successfully！',
      desDeatil: 'Welcome to HKCEXP digital assets exchange'
    },
    toIndex: 'Home page',
    step: {
      centification: {
        title: 'Verify ID Now',
        des: 'Add bank card, transfer the function such as digital asset to need real name attestation to pass ability to operate'
      },
      safe: {
        title: 'Set your security question',
        des: 'Please set the security question before setting TX Pass'
      },
      setPwd: {
        title: 'Set transaction password',
        des: 'Password to be entered when trading, digital asset transfer'
      }
    }
  },
  // 面包屑导航
  navBread: {
    des: 'Location',
    index: 'Home',
    fabiTrade: 'Token Trade',
    bibiTrade: 'OTC Trade',
    tradeDetail: 'Trade Details',
    asset: 'Asset Management',
    finace: 'Financial Center',
    plant: 'Deposit',
    transfer: 'Withdraw',
    order: 'Orders',
    myOrder: 'Order History',
    myAd: 'Completed Orders',
    guide: 'Help',
    numberAsset: 'Digital asset',
    announcement: 'Notice',
    about: 'About Us',
    user: 'Account',
    accountSafe: 'Security',
    centification: 'ID Verification',
    inviteCode: 'Exclusive invitation code',
    proto: 'Agreement'
  },
  // 时间查询
  queryByTime: {
    beginPlaceorder: 'Start',
    endPlaceorder: 'End',
    to: 'to',
    query: 'Search'
  },
  orderStatus: {
    waitePay: 'Not paid',
    hadPay: 'Paid',
    completed: 'Completed',
    appeal: 'Appealed',
    all: 'All',
    evalation: 'Commented'
  },
  // 资产管理 - 币币账户+OTC账户+交易明细
  assets: {
    top: {
      text1: 'Total Assets:',
      text2: 'Token Account:',
      text3: 'OTC Account:',
      text4: 'Token Account supports withdraw and deposit;OTC Account supports deposit;Token Account and OTC Account can transfer asstes freely'
    },
    bottom: {
      tab1: 'Token Account',
      tab2: 'OTC Account',
      table: {
        head: {
          text1: 'Token',
          text2: 'Total',
          text3: 'Available',
          text4: 'Frozen',
          text5: 'Action'
        },
        row: {
          text1: 'Deposit',
          text2: 'Withdraw',
          text3: 'Transfer',
          text4: 'Details',
          text5: 'Trade'
        }
      },
      noresult: 'N/A'
    },
    validate: {
      text1: 'Please enter withdraw address',
      text2: 'Please enter the correct withdraw address',
      text3: 'Please enter an amount greater than 0',
      text4: 'Withdraw amount must be digit numbers.',
      text5: 'Please enter the TX Pass',
      text6: 'Please enter verify code',
      text7: 'TX pass must be 6 digits numbers',
      text8: 'Verify code must be 6 digits numbers',
      text9: 'Please enter an amount greater than 0'
    },
    slots: {
      tips: {
        text1: 'Tips:',
        text2: 'Transaction Pass',
        text3: 'Please enter the TX Pass',
        text4: 'Confirm',
        text5: 'Succeeded',
        text6: 'Succeeded',
        text7: 'Copied',
        text8: 'Copy Failed',
        text9: 'Verification',
        text10: 'Message Code',
        text11: 'Please enter message code',
        text12: 'Get code',
        text13: 's',
        text14: 'Verify code is sent'
      },
      action1: {
        text1: 'Deposit',
        text2: 'Deposit Address:',
        text3: '%currency% addresses can only be deposited with %currency% assets,and any non-%currency% assets that are deposited to the %currency% address will not be retrievable.',
        text4: 'Deposit %currency% address requires 1 network confirmation to complete the transaction.',
        text5: 'The minimum deposit amount is:',
        text6: '%currency%，we will not process %currency% deposit requests less than this amount.',
        text7: 'QR code',
        text8: 'Wallet Error',
        text9: 'Copy'
      },
      action2: {
        text1: 'Withdraw',
        text2: '*Withdraw address:',
        text3: 'Please enter withdraw address',
        text4: '*Withdraw Amount:',
        text5: 'Please enter the withdraw amount of the tokens',
        text6: 'All',
        text7: 'optional:',
        text8: 'Please type the note for this withdraw (optional)',
        text9: 'Confirm',
        text10: 'Minium:',
        text11: '%currency% Handling Fee:',
        text12: '%currency%，To process the transfer, the handling fee will be adjusted accordingly',
        text13: '%currency% can only be sent to the %currency% address，if sent to a non-%currency% address, the assets can be lost',
        text14: 'Withdraw will be reviewed first. In processing means the transfer is under review. Completed transfers can be viewed under details.',
        text15: 'Transfers within the platform will be processed immediatelly; the amount over the free allowance will be charged with the same handling fee.'
      },
      action3: {
        text1: 'Transfer',
        text2: 'Transfer Amount:',
        text3: 'Please enter the transfer amount of the tokens',
        text4: 'All',
        text5: 'Transfer',
        text6: 'Transfers between Token account and OTC account are free and immediate.'
      }
    },
    transDetail: {
      title: {
        text1: 'Token Trade Details',
        text2: 'OTC Trade Details'
      },
      search: {
        text1: 'Token',
        text2: 'Date',
        text3: 'Month'
      },
      tab: {
        text1: 'All',
        text2: 'Buy',
        text3: 'Sell',
        text4: 'Transfer In',
        text5: 'Transfer Out',
        text6: 'Transfer'
      },
      tbody: {
        typeFilter: {
          text1: 'Transfer In',
          text2: 'Transfer Out',
          text3: 'Transfer',
          text4: 'Buy',
          text5: 'Sell',
          text6: 'Data abnormal'
        },
        remarkFilter: {
          text1: 'N/A'
        },
        inStatusFilter: {
          text1: 'in Processing',
          text2: 'Succeeded',
          text3: 'Cancelled'
        },
        outStatusFilter: {
          text1: 'in Processing',
          text2: 'Succeeded',
          text3: 'Cancelled',
          text4: 'Rejected'
        },
        transTypeFilter: {
          text1: 'Token to OTC',
          text2: 'OTC to Token'
        },
        orderStatusFilter: {
          ctc: {
            text1: 'Cancel',
            text2: 'Placed',
            text3: 'Partially Completed',
            text4: 'Completed'
          },
          otc: {
            text1: 'Commented',
            text2: 'Data Abnormal',
            text3: 'Not Paid',
            text4: 'Paid',
            text5: 'Completed',
            text6: 'Cancelled',
            text7: 'Appealed',
            text8: 'Appeal Ended',
            text9: 'Cancel',
            text10: 'Cancelled',
            text11: 'Expired'
          }
        }
      },
      thead: {
        table1: {
          text1: 'Created on',
          text2: 'Token',
          text3: 'Type',
          text4: 'Amount',
          text5: 'Note'
        },
        table2: {
          text1: 'Created on',
          text2: 'Token',
          text3: 'Amount',
          text4: 'Handling Fee',
          text5: 'Deposit Address',
          text6: 'Note'
        },
        table3: {
          text1: 'Created on',
          text2: 'Token',
          text3: 'Amount',
          text4: 'Handling Fee',
          text5: 'Withdraw address',
          text6: 'Note'
        },
        table4: {
          text1: 'Created on',
          text2: 'Token',
          text3: 'Paid',
          text4: 'Received',
          text5: 'Confirmed',
          text6: 'ID',
          text7: 'Status',
          text8: 'Note'
        },
        table5: {
          text1: 'Created on',
          text2: 'Token',
          text3: 'Withdraw',
          text4: 'Received',
          text5: 'ID',
          text6: 'Address',
          text7: 'Status'
        },
        table6: {
          text1: 'Created on',
          text2: 'Token',
          text3: 'Type',
          text4: 'Amount',
          text5: 'ID',
          text6: 'Status'
        }
      }
    }
  },
  // 资产--财务中心页
  finace: {
    part1: 'Total Assets',
    part2: 'Token',
    part3: 'Available',
    part4: 'Frozen',
    part5: 'Total',
    part6: 'Total（BTC）',
    part7: 'Action',
    part8: 'Transfer In',
    part9: 'Trade',
    part10: 'Transfer Out',
    in: {
      part1: 'Deposit:',
      part2: 'Available',
      part3: 'Frozen',
      part4: 'This is your wallet address, please transfer your ',
      part5: 'to this address',
      part6: 'Copy',
      part7: 'Address',
      part8: 'Note:',
      part9: '1 The deposit is executed automatically,',
      part10: 'after the transfer is confirmed by two network nodes, the assets will be deposited to your account.',
      part11: 'This is your unique deposit addresss, you can do multiple transfers at the same time.',
      part12: 'History',
      part13: 'Date',
      part14: 'ID',
      part15: 'Received',
      part16: 'Confirmed',
      part17: 'Sent on',
      part18: 'Status',
      part19: 'in Processing',
      part20: 'successfully',
      part21: 'cancelled'
    },
    out: {
      part1: 'withdraw',
      part2: 'Available',
      part3: 'Frozen',
      part4: 'Address:',
      part5: 'Please enter wallet address',
      part6: 'Amount:',
      part7: 'Handling Fee:',
      part8: 'Received:',
      part9: 'Confirm',
      part10: 'Note:',
      part11: '1 For security reasons,',
      part12: 'The withdraw need to be reviewd, we will procee your withdraw as soon as possible.',
      part13: '2 To speed up the the withdraw procedure, ',
      part14: '3 The handling fee for withdraw is ',
      part15: 'History',
      part16: 'Date',
      part17: 'ID',
      part18: 'Address',
      part19: 'Amount',
      part20: 'Received',
      part21: 'Status',

      part22: 'in Processing',
      part23: 'Succeeded',
      part24: 'Cancelled',
      part25: 'Failed',
      part26: 'Action',
      part27: 'Cancel',
      part28: 'Wallet address cannot be empty',
      part29: 'Operation failed!',
      part30: 'Cancelled!',
      part31: 'our platform will pay for the fee. But due to unstable network the withdraw can be slow, please be patient.'
    }
  },
  // 资产--平台内划转 转出中有用到，暂留
  plant: {
    title: 'Platform Transfer',
    form: {
      direction: 'Type:',
      fabiTobibi: 'OTC account to Token account',
      bibiTofabi: 'Token account to OTC account',
      coin: 'Token:',
      coinPlaceholder: 'Please choose a token',
      quantity: 'Transfer Amount:',
      quantityPlaceholder: 'Please enter the Transfer Amount',
      pwd: 'Transaction Pass:',
      pwdPlaceholder: 'Please enter your transaction pass',
      verifyCode: 'Message Verification:',
      verifyCodePlaceholder: 'Verify Code',
      googleVerifyCode: 'Google authenticator code:',
      googleVerifyCodePlaceholder: 'Please enter the Google authenticator code',
      sureTransfer: 'Confirm',
      quantityAvailable: 'Available'
    },
    // 平台内划转表单提示
    tips: {
      num: 'Amount cannot be empty',
      verifyCode: 'Verify code cannot be empty',
      tradePwd: 'TX Pass cannot be empty',
      tradeCoin: 'Token cannot be empty',
      googleVerify: 'Google authenticator code cannot be empty',
      transferSuccess: 'Transfer Completed!'
    },
    talbe: {
      part1: 'Date',
      part2: 'ID',
      part3: 'Type',
      part4: 'Token',
      part5: 'Transfer Amount',
      part6: 'Status'
    }
  },
  // 订单管理-- 我的订单
  order: {
    title: 'Token Trade',
    detail: 'Details',
    // 状态
    status: {
      '-1': 'cancelled',
      0: 'Placed',
      1: 'Partially Completed',
      2: 'completed'
    },
    // 成交详情的表格
    detail1: {
      col1: 'Date',
      col2: 'Pairs',
      col3: 'Type',
      col4: 'Price',
      col5: 'Amount',
      col6: 'Volume',
      col7: 'Handling Fee'
    },
    menu1: 'Order List',
    table1: {
      col1: 'Date',
      col2: 'Pairs',
      col3: 'Type',
      col4: 'Price',
      col5: 'Amount',
      col6: 'Total',
      col7: 'Completed',
      col8: 'Total',
      col9: 'Not Completed',
      col10: 'Action'
    },
    menu2: 'Order History',
    table2: {
      col1: 'Date',
      col2: 'Pairs',
      col3: 'Type',
      col4: 'Price',
      col5: 'Amount',
      col6: 'Total',
      col7: 'Completed',
      col8: 'Average',
      col9: 'Completed',
      col10: 'Status',
      col11: 'Action'
    },
    menu3: 'Completed Orders',
    table3: {
      col1: 'Date',
      col2: 'Pairs',
      col3: 'Type',
      col4: 'Price',
      col5: 'Amount',
      col6: 'Volume',
      col7: 'Handling Fee'
    },
    cancelboxTitle: 'Cancel Entrust',
    cancelboxContent: `
    <p style="color:#fe5c5c;font-size:16px">Are you sure cancel the order?</p>
    <p>Rules: cancellation will cancel the remaining outstanding part of the number of entrustment.</p>
    `,
    cancle: 'I Think',
    sure: 'Confirm'
  },
  myOrder: {
    part1: 'Completed Orders:',
    part2: 'All',
    part3: 'Date',
    part4: 'Buy/Sell',
    part5: 'Buy',
    part6: 'Sell',
    part7: 'Price',
    part8: 'Volume',
    part9: 'Amount',
    part10: 'Handling Fee',
    part12: 'Operation Failed!',
    part13: 'Cancelled!'
  },
  myTrade: {
    part1: 'Price',
    part2: 'Amount',
    part3: 'Volume',
    part4: 'Unsettled',
    part5: 'Status',
    part6: 'Partially Completed',
    part7: 'Completed',
    part8: 'Cancelled',
    part9: 'Not Completed',
    part10: 'Cancel',
    part11: 'Action',
    part12: 'Operation Failed!',
    part13: 'Cancelled'
  },

  numberAsset: {
    toTrade: 'Trade'
  },
  announcement: {
    link: 'Source'
  },
  about: {
    contactWays: 'Contact'
  },
  // 个人中心-- 账户安全
  user: {
    information: 'Basic Info',
    account: 'Account',
    modifyPhoto: 'Modify Portrait',
    safeCentify: 'Security Center',
    nickname: 'Nickname',
    modify: 'Modify',
    tel: 'Mobile',
    unbind1: 'unbounded',
    telTips: 'Used for password recovery',
    tobind: 'Bind',

    email: 'E-mai',
    safeQuestion: 'Security Questions',
    safeQuestionTips: 'Used for settings and TX Pass modify',
    unSet: 'Set',
    toSet: 'Set',
    hadSet: 'Done',
    googleCenfity: 'Google Authentication',
    googleCenfityTips: 'Used for asset trade and withdraw',
    unCentification: 'Not Verified',
    toCentify: 'Verify',
    hadCentify: 'Verified',
    unbind: 'Unbind',
    loginPwd: 'Login password',
    tradePwd: 'Transaction Pass',
    tradePwdTips: 'Used for asset trading and withdraw',
    payways: 'Payment Method',
    paywaysTips: 'Please use your verified account. Your payment methods will be show to others during the trading procedure.',
    addPayways: 'Add a Payment',
    modifyPayways: 'Modify Payment',
    pleaseSelect: 'Please Choose',

    tips: {
      unsetPwd: 'Please set TX Pass first!',
      unsetSafeQuestion: 'Please set security questions first!',
      modifyphotoSuccess: 'Modify portrait successfully!'
    },
    addPayWayDialog: {
      name: 'Name:',
      namePlaceholder: 'Please enter your name',
      weixinPlaceholder: 'Please enter your wechat account',
      weixin: 'Wechat:',
      code: 'QR code:',
      codeTips: 'Please upload your wechat pay QR code to receive money',
      tradePwd: 'TX Pass:',
      tradePwdPlaceholder: 'Please enter your TX Pass',
      zhifubao: 'Alipay:',
      zhifubaoPlaceholder: 'Please enter your Alipay account',
      zhifubaoCodeTips: 'Please upload your Alipay QR code to receive money',
      bank: 'Bank:',
      bankPlaceholder: 'Please enter the bank name',
      bankBranch: 'Branch:',
      bankBranchPlaceholder: 'Please enter the branch name',
      bankAccount: 'Card No.:',
      bankAccountPlaceholder: 'Please enter your bank card number'
    },
    bindEmailDialog: {
      title: 'Email Bind',
      email: 'Email:',
      emailPlaceholder: 'Please enter your email address',
      code: 'Email verification code:'
    },
    bindPhoneDialog: {
      title: 'Mobile Bind',
      tradePwd: 'TX Pass:',
      tradePwdPlaceholder: 'Please enter your TX Pass',
      phone: ' Mobile:',
      phonePlaceholder: 'Please enter your mobile phone number',
      code: 'Mobile Verify Code:',
      codePlaceholder: 'Please enter your verification code'

    },
    bindGoogleVerify: {
      bindTitle: 'GA Bind',
      googleVerifycode: 'Google Authenticator code:',
      unbind: 'unbind',
      forgetVeriycode: 'Forget password?',
      reVerify: 'Redo',
      tradePwd: 'TX Pass:',
      reset: 'Reset GA',
      unbindSuccess: 'Unbind Succeeded！',
      reSetSuccess: 'Reset Succeeded!',
      des: {
        part1: 'Google Authenticator is a dynamic password tool that works like SMS dynamic verification. A dynamic verification code is generated every 30s after binding, and the verification code can be used for security verification of operations such as login, withdrawal, and modification of security settings.',
        part2: 'Download Google Authenticator APP',
        part3: 'iOS users log in to the App Store to search for "Authenticator" downloads.Android users log in to the app store or use the mobile browser to search for "Google Authenticator" downloads.',
        part4: 'Add the key in the Google validator and back it up,',
        part5: 'Open the Google validator, scan the qr code below or manually enter the following key to add the authentication token.',
        part6: 'The key is used to retrieve the Google verifier when the phone is replaced or lost. Please make sure to save the following key backup before binding',
        part7: 'The key is used to retrieve the Google verifier, please keep it in a safe place',
        part8: 'Please enter the 6 digits of your Google Authenticator'
      }
    },
    modifyEmailDialog: {
      title: 'Change Email',
      tips: 'Please enter a new email address and the TX Pass to modify email'
    },
    modifyPhoneDialog: {
      title: 'Change Mobile',
      tips: 'Please enter a new mobile number and the TX Pass to modify mobile.'
    },
    nicknameDialogModify: {
      title: 'Change Nickname'
    },
    modifwd: {
      title: 'Change Password',
      old: 'Old password',
      confirm: 'Confirm new login password',
      new: 'New password',
      tips: {
        noold: 'Please enter your old login password',
        nonew: 'Please enter your new login password',
        nocomfirm: 'The password confirm cannot be empty',
        modifySuccess: 'Password Changed!'
      }
    },
    safeCenfity: {
      title: 'Set transaction password',
      title2: 'Change transaction password',
      confirm: 'Confirm password',
      setPwd: 'Set password:',
      newpwd: 'New password:',
      tips: {
        part1: 'Cannot remember?',
        part2: 'Change',
        part3: 'Cannot be empty',
        part4: 'Verified!',
        part5: 'TX Pass is set!'
      }
    },
    setSafeQuestion: {
      title: 'Security Questions',
      tips: 'Security question is used for reset TX Pass, please remember and do not loss the questions.',
      question: 'Question:',
      answer: 'Answer:',
      tips1: 'Please choose a question',
      tips2: 'Please enter the answer',
      tips3: 'Security question is set successfully!',
      tips4: 'Security Question Changed!'
    }
  },
  // 实名认证
  centification: {
    title: 'ID Verification',
    nation: 'Country:',
    nationPlaceholder: 'Please choose counrty',
    certificate: 'ID Type:',
    certificatePlaceholder: 'Please choose an ID type',
    name: 'Legal Name:',
    nametips: 'The legal name cannot be changed after set and must be same as the withdraw account',
    certificateNumber: 'ID No.:',
    certificateNumberPlaceholder: 'ID No. cannot be modified after set',
    certificatePhoto: 'ID Photo:',
    certificatePhotoTips1: 'ID Front',
    certificatePhotoTips2: 'ID Back',
    certificatePhotoTips3: 'ID hold in hand',
    centificationStatus1: 'ID Verified',
    centificationStatus2: 'Verification failed',
    centificationStatus3: 'In Processing',
    userInfo: 'User Info',
    userInfo1: 'Legal Name: ',
    userInfo2: 'ID Type: ',
    userInfo3: 'ID No.: ',
    userInfo4: 'Verified on: ',
    recentify: 'Redo',
    reason: 'View reasson',
    reasonTitle: 'Fail pass',
    message1: 'Please enter legal name',
    message2: 'Please choose ID type',
    message3: 'Please enter ID No.',
    message4: 'Please enter message verify code',
    message5: 'Please choose country',
    message6: 'Please upload ID photo',
    message7: 'The file size must be less than 2MB!',
    tips: 'Tips:',
    tips1: '1、All information on the certificate is clearly visible, must be able to see the number.',
    tips2: '2、Photos should be bareheaded, no makeup is recommended, and the facial features of the person holding the certificate can be clearly seen.',
    tips3: '3、The contents of the photos are authentic and valid, and no modification is allowed.',
    tips4: '4、Fingers should not block identification information.'
  },
  inviteCode: {
    title: 'My Invitation',
    myInviteCode: 'Exclusive invitation code:',
    myInviteLink: 'Your invitation link',
    inviteFriend: 'Scan QR code to invite friend',
    rule: {
      title: 'Rules:',
      part1: '1 coming soon',
      part2: '2 coming soon',
      part3: '2 coming soon'
    },
    inviteNum: 'Total Invites',
    reword: 'Rewards',
    record: 'Records',
    time: 'Date',
    regtime: 'Date',
    tradetime: 'Date',
    account: 'Username/Account',
    refund: 'Income',
    status: 'Status',
    status0: 'All',
    status1: 'Valid',
    status2: 'Expired',
    status3: 'Not Valid',
    success: 'Successful',
    error: 'Failed'
  },

  // 首页
  index: {
    part1: 'Efficient, Stable',
    part2: 'In the implementation of this platform, the memory database technology is directly used to operate shared memory. The operations of placing orders, withdrawing orders and real-time transactions can be completed in 1.2 microseconds.',
    part4: 'Safe, Reliable',
    part5: 'Using Kerberos SSO to separate authentication and authorization, passwords can\'t be stolen through network sniffers and users represented by simulated tickets are not allowed. Customize the Linux kernel and use SYNproxy to identify valid access and reject attacking access.',
    part7: 'Diversity',
    part8: 'Provide one-stop experience in fiat currency trading, token trading, and leverage trading.',

    part14: 'Trade Market',
    part15: 'Token',
    part16: 'Last Price',
    part17: '24H Amount',
    part18: '24H Volume',
    part19: 'Change',
    part20: 'Trend（3 Days）'

  },
  tradeDetail: {
    coin: 'Token Info',
    buy: {
      part1: 'Buy',
      part2: 'Available',
      part3: 'Best Price',
      part4: 'Bid Price',
      part5: 'Maximum',
      part6: 'Amount',
      part7: 'Ratio:',
      part8: 'Total',
      part9: 'Handling Fee:',
      part10: 'Buy',
      part12: 'The pirce cannot be empty or 0',
      part13: 'Please enter the correct format!',
      part14: 'The price cannot be more than your available!',
      part15: 'The amount cannot be empty or 0',
      part16: 'The amount format is incorrect!',
      part17: 'The bid amount cannot be more than available amount!',
      part18: 'Bid Succeeded!',
      part19: 'Please enter the transaction pass',
      part20: 'Please enter the google verification code'
    },
    info: {
      part1: 'Token Info',
      part2: 'More',
      part3: 'Info',
      part4: 'Details',
      part5: 'Release Date:',
      part6: 'Total Issuance:',
      part7: 'Total Circulation:',
      part8: 'Block Time:',
      part9: 'Block Reward:',
      part10: 'Website:'
    },
    coin1: 'Please choose token',
    chart: {
      part1: 'Price:',
      part2: 'Total',
      part3: 'Price',
      part4: 'Amount',
      part5: 'O',
      part6: 'H',
      part7: 'L',
      part8: 'C',
      part9: 'Open:',
      part10: 'Close:',

      part12: 'Highest:',
      part13: 'Lowest:',
      part14: 'Date',
      part15: 'Price',

      part16: 'K-line',
      part17: 'Depth',
      part18: 'Total Bid',
      part19: 'Total Ask',
      part20: '5 mins',
      part21: '15 mins',
      part22: '30 mins',
      part23: '1 hour',
      part24: '8 hours',
      part25: '1 day'
    },
    myOrder: {
      part1: 'My Orders',
      part2: 'More',
      part3: 'Date',
      part4: 'Type',
      part5: 'Price',
      part6: 'Amount',
      part7: 'Amount',
      part8: 'Not Completed',
      part9: 'Action',
      part10: 'Sell',
      part11: 'Buy',
      part12: 'Cancel',
      part13: 'No records!',
      part14: 'Operation Failed',
      part15: 'Cancel successfully!'
    },
    newList: {
      part1: 'Last Price',
      part2: 'More orders',
      part3: 'Buy/Sell',
      part4: 'Price',
      part5: 'Amount',
      part6: 'Total',
      part7: 'Sell',
      part8: 'Buy'
    },
    newPriceTable: {
      part1: 'Real-time Transaction',
      part2: 'More',
      part3: 'Date',
      part4: 'Type',
      part5: 'Price',
      part6: 'Amount',
      part7: 'Volume'
    },
    sell: {
      part1: 'Sell',
      part2: 'Available',
      part3: 'Best Price',
      part4: 'Sell Price',
      part5: 'Maximum',
      part6: 'Amount',
      part7: 'Ratio:',
      part8: 'Total',
      part9: 'Handling Fee',
      part10: 'Sell',
      part12: 'The price cannot be empty or 0',
      part13: 'Please enter a correct price!',
      part14: 'The price cannot be more than your available tokens!',
      part15: 'The amount cannot be empty or 0',
      part16: 'The amount format is incorrect!',
      part17: 'The sell amount cannot be more than available amount!',
      part18: 'Sell successfully!'
    },
    header: {
      part1: 'Highest',
      part2: 'Lowest',
      part3: 'Buy one',
      part4: 'Sell one',
      part5: 'Completed',
      part6: 'Total'
    }
  },
  tradePlant: {
    part1: 'Buy',
    part2: 'Buy Price',
    part3: 'Amount',
    part4: 'Total',
    part5: 'Buy',

    part6: 'Sell',
    part7: 'Sell Price',
    part8: 'Amount',
    part9: 'Total',
    part10: 'Sell'
  },
  loginStatu: {
    part1: ',Please log in again',
    part2: 'Account is forced offline, because it is signed in at other place',
    part3: 'Account is locked, please contact system administrator to unlock.'
  },
  download: {
    part1: 'Browse the market, smooth trading, fingertips',
    part2: 'Cover IOS, Android, Windows, Mac multiple platforms, support full business functions',
    part3: 'Mobile phone scan QR code download APP',
    index: {
      part1: `GCX wallet is developed for GCX coin which is the HKCEXP platform coin. GCX wallet can store many crypto currencies other than GCX and is able to transfer assets between different blockchain systems. The private key of GCX wallet is managed by users. With the safe isolation and data encryption, GCX wallet can keep users assets safe and give the users following privilege: `,
      part2: 'Discount on handling fee on HKCEXP and enjoy priority in participating new products issuing.',
      part3: 'Each quarter HKCEXP will buy back and burn GCX coins with 20% platform net profit.',
      part4: 'The owner of GCX can use the token to redeem all kinds of services and enjoy discounts within the ecosystem. '
    }
  },
  copy: 'Copy',
  tradePwd: {
    part1: 'Please choose verification',
    part2: 'For security reasons, please choose a verification method',
    part3: 'by Password',
    part4: 'by Message Verify Code and ID No.',

    part5: 'Reset TX Pass',

    part6: 'ID Verify',
    part7: 'Completed',
    part8: 'Next',
    part9: 'Total',
    part10: 'Congrates! TX Pass has been reset！',
    part11: 'Set new TX Pass:',
    part12: 'Please enter 6 digits, no repeating or continuous',
    part13: 'Confirm new TX Pass:',
    part14: 'Please confirm TX Pass',
    part15: 'TX Pass cannot be a repeating or continuous six digit number',
    withoutNumber: 'ID No. cannot be empty',
    oldTradePwd: 'Please enter old TX Pass'
  },
  add: {
    cancleOrder: 'Are you sure to cancel the order?',
    open: 'Open: ',
    close: 'Close: ',
    hight: 'Highest: ',
    low: 'Lowest: ',
    time: 'Date: ',
    inviteCode: 'Invitation code'
  },
  // 升级所有新增功能页的文案，以src/views目录下的第一级目录为区分-20190128
  translateLang: {
    index: {
      text1: 'Global OTC Market',
      text2: 'Safe and Reliable OTC platform',
      text3: 'Transaction:',
      text4: 'Thumbs Up:',
      text5: 'Trust:',
      text6: 'Payment:',
      text7: 'Limit:',
      text8: 'Amount:',
      text9: 'Price:',
      text10: 'Buy',
      text11: 'Sell',
      text12: 'Global Leading Digital Assets Financial Service',
      text13: 'Provide More Efficient and Accurate Data Analysis Service',
      text14: 'Browse the market, smooth trading, fingertips',
      text15: 'Provide Full Functions for iOS, Android and Windows',
      text16: 'Global Token Trade Market',
      text17: 'Support Multiple Token Trade',
      text18: 'Search'
    },
    tradeDetail: {
      text1: 'Price',
      text2: 'Amount',
      text3: 'Total',
      text4: 'Buy',
      text5: 'Sell',
      text6: 'Buy price cannot be less than 90% or more than 110% of the last price',
      text7: 'Buy in with the best price',
      text8: 'Limt price cannot be more than 110% of the market price',
      text9: 'Token Intro',
      text10: 'Index',
      text11: 'Minute',
      text12: 'Hour',
      text13: 'Day',
      text14: 'Week',
      text15: 'Month',
      text16: 'Day',
      text17: 'K-line',
      text18: 'Depth',
      text19: 'History',
      text20: 'Collapse',
      text21: 'Date',
      text22: 'Trade',
      text23: 'Type',
      text24: 'Total',
      text25: 'Volume',
      text26: 'Average',
      text27: 'Volume',
      text28: 'Status',
      text29: 'Details',
      text30: 'Orders',
      text31: 'Partially Completed',
      text32: 'Completed',
      text33: 'Cancel',
      text34: 'Orders',
      text35: 'Volume',
      text36: 'Not Completed',
      text37: 'Buy/Sell',
      text38: 'Details',
      text39: 'Price',
      text40: 'Amount',
      text41: 'More',
      text42: 'Price',
      text43: 'Please enter TX Pass',
      text44: 'TX Pass',
      text45: 'OK',
      text46: 'N/A',
      text47: 'Price',
      text48: 'Amount',
      text49: 'Sell at best market price',
      text50: 'Limit price cannot be lower than 90% of market price',
      text51: 'High Reward for Token Trading',
      text52: 'Invite Friends for High Commission',
      text53: 'Invite Now',
      text54: 'Trade Market',
      text55: 'Change',
      text56: 'High',
      text57: 'Low',
      text58: 'Market',
      text59: 'Last Price',
      text60: 'Limit Price',
      text61: 'Market Price',
      text71: 'Please finish ID verification first！',
      text72: 'Please set TX Pass first！',
      text73: 'Please log in first!',
      text74: 'Cancel successfully!',
      text75: 'Add successfully!',
      text76: 'Buy price should not be empty',
      text77: 'Buy price should be greater than 0',
      text78: 'Sell price should not be empty',
      text79: 'Sell price should be greater than 0'
    },
    tradePlant: {
      text1: 'Total',
      text2: 'Token Trade',
      text3: 'Buy/Sell'
    },
    user: {
      text1: 'Verify Code:',
      text2: 'ID No.:',
      text3: 'Please enter a verified ID',
      text4: 'Please enter an ID No.',
      text5: 'Mobile',
      text6: 'Verified!',
      text7: 'Account Security',
      text8: 'ID Verification:',
      text9: 'Once ID verification is done, it cannot be modified or cancelled',
      text10: 'Not Verified',
      text11: 'Verify',
      text12: 'Verifying',
      text13: 'Verified',
      text14: 'View',
      text15: 'Verified',
      text16: 'Export',
      text17: 'Verify Failed'
    },
    invitation: {
      title1: 'Sharing Method',
      title2: 'Total Invites',
      title3: 'Commission',
      title4: 'Records',
      title5: 'Commission History',
      title6: 'Rules',
      label1: 'Invitation QR Code',
      label2: 'Invitation Code',
      label3: 'Invitation Link',
      label4: 'Total Invites',
      btn1: 'Show QR code',
      btn2: 'Copy Invite Code',
      btn3: 'Copy Invite Link',
      unit1: 'Friends',
      tips1: '1、Each handling fee from the invited friends will reward a commission.',
      tips2: '2、The commission will go into your USDT account and the ratio is 30%.',
      tips3: '3、The inviter will receive USDT as commission when invitee complete a transaction.',
      tips4: '4、The invitation commission is settled every day and transfered into account the next day.',
      tips5: '5、The invitation commission has a expire date of 90 days. After 90 days the inviter will not receive any commission form the inviteee.',
      tips6: '6、The system will get the latest USDT price to settle the commission.',
      tips7: '7、The monthly top list shows the data from the last month.',
      tips8: '8、The settlement time for each day is 00:00. The transfers will be completed before 22:00.',
      tips9: '9、The commission does not include deposit and withdraw.',
      tips10: '10、If invitee has broken the system rules, the inviter\'s commission will become invalid.',
      tips11: 'Please follow the hkcexp offcial notice. hkcexp reserves all rights of final interpretation.',
      error1: 'The history records are only kept for 6 month'
      // 表格部分用原来的inviteCode
    }
  },
  modifySex: {
    part1: 'Set gender',
    part2: 'male',
    part3: 'female',
    part4: 'secure',
    part5: 'Sex settings are successful! ',
    part6: 'Gender',
    part7: 'location'
  },
  canleDang: {
    part1: 'Undo delegate',
    part2: 'Are you sure you want to cancel the order? ',
    part3: 'Cancel rule: After cancellation, the remaining unsold part of the order will be revoked. ',
    part4: 'I think again',
    part5: 'Confirm Undo'
  },
  ratesStandard: {
    part1: 'transaction pair',
    part2: 'Limit order',
    part3: 'Market order',
    part4: 'Rate'
  }
}
