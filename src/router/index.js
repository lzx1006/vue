import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'
import TradeLayout from '../views/layout/tradeLayout'
import OrderLayoutLogined from '../views/layout/orderLayoutLogined'
import AssetLayoutLogined from '../views/layout/assetLayoutLogined'
// import UserLayoutLogined from '../views/layout/userLayoutLogined'
import tradeDetailLayout from '../views/layout/tradeDetailLayout'

const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: _import('index/index'),
    name: 'index',
    meta: { title: '首页', requiresAuth: false }
  },
  {
    path: '/trade',
    component: TradeLayout,
    children: [
      {
        path: '',
        component: _import('trade/index'),
        name: 'trade',
        meta: { title: '交易', requiresAuth: false }
      }
    ]
  },
  {
    path: '/tradePlant',
    component: tradeDetailLayout,
    children: [
      {
        path: '',
        component: _import('tradePlant/index'),
        name: 'tradePlant',
        meta: { title: '', requiresAuth: false }
      }
    ]
  },
  {
    path: '/tradeDetail',
    component: tradeDetailLayout,
    children: [
      {
        path: '',
        component: _import('tradeDetail/index'),
        name: 'tradeDetail',
        meta: { title: '', requiresAuth: false }
      }
    ]
  },
  {
    path: '/login',
    component: _import('loginModule/login'),
    name: 'login',
    meta: { title: '登录', requiresAuth: false }
  },
  {
    path: '/register',
    component: _import('loginModule/register'),
    name: 'register',
    meta: { title: '注册', requiresAuth: false }
  },
  {
    path: '/registerSuccess',
    component: _import('loginModule/registerSuccess'),
    name: 'registerSuccess',
    meta: { title: '注册状态', requiresAuth: false }
  },
  {
    path: '/downloadApp',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('downloadApp/index'),
        name: 'downloadApp',
        meta: { title: '下载客户端', requiresAuth: false }
      }
    ]
  },
  // 资产管理-币币账户、OTC账户
  {
    path: '/assets',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('assets/index'),
        name: 'asset-account',
        meta: { title: '资产管理', requiresAuth: true }
      },
      {
        path: 'transdetail',
        component: _import('assets/detail'),
        name: 'transdetail',
        meta: { title: '交易明细', requiresAuth: true }
      }
    ]
  },
  {
    path: '/forgetPassword',
    component: _import('loginModule/forgetPassword'),
    name: 'forgetPassword',
    meta: { title: '忘记密码', requiresAuth: false }
  },
  {
    path: '/articleDetail',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('notice/articleDetail'),
        name: 'articleDetail',
        meta: { title: '公告详情', requiresAuth: false }
      }
    ]
  },
  {
    path: '/asset',
    component: AssetLayoutLogined,
    children: [
      {
        path: 'finace',
        component: _import('assetManage/finace'),
        name: 'finace',
        meta: { title: '财务中心', requiresAuth: true }
      },
      {
        path: 'transferIn',
        component: _import('assetManage/transferIn'),
        name: 'transferIn',
        meta: { title: '资产转入', requiresAuth: true }
      },
      {
        path: 'transferOut',
        component: _import('assetManage/transferOut'),
        name: 'transferOut',
        meta: { title: '资产转出', requiresAuth: true }
      }
    ]
  },
  {
    path: '/order',
    component: OrderLayoutLogined,
    redirect: '/order/orderCurrent',
    children: [
      {
        path: 'orderCurrent',
        component: _import('order/orderCurrent'),
        name: 'orderCurrent',
        meta: { title: '当前委托', requiresAuth: true }
      },
      {
        path: 'orderHistory',
        component: _import('order/orderHistory'),
        name: 'orderHistory',
        meta: { title: '历史委托', requiresAuth: true }
      },
      {
        path: 'orderComplete',
        component: _import('order/orderComplete'),
        name: 'orderComplete',
        meta: { title: '成交记录', requiresAuth: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'account',
        component: _import('user/account'),
        name: 'account',
        meta: { title: '账户安全', requiresAuth: true }
      },
      {
        path: 'centifyByPwd',
        component: _import('user/centifyByPwd'),
        name: 'centifyByPwd',
        meta: { title: '重置交易密码', requiresAuth: true }
      },
      {
        path: 'centifyByNumber',
        component: _import('user/centifyByNumber'),
        name: 'centifyByNumber',
        meta: { title: '重置交易密码', requiresAuth: true }
      },
      {
        path: 'centification',
        component: _import('user/centification'),
        name: 'centification',
        meta: { title: '实名认证', requiresAuth: true }
      },
      {
        path: 'centificationStatus',
        component: _import('user/centificationStatus'),
        name: 'centificationStatus',
        meta: { title: '实名认证状态', requiresAuth: true }
      },
      {
        path: 'inviteCode',
        component: _import('user/inviteCode'),
        name: 'inviteCode',
        meta: { title: '我的邀请码', requiresAuth: true }
        // meta: { title: '版本', msg: String(process.env.TIME), icon: 'version', noCache: true }
      }
    ]
  },
  {
    path: '/invitation',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('invitation/index'),
        name: 'invitation',
        meta: { title: '邀请好友', requiresAuth: true }
      }
    ]
  },
  // {
  //   path: '/setTradePwd',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: _import('invitation/index'),
  //       name: 'setTradePwd',
  //       meta: { title: '邀请好友', requiresAuth: true }
  //     }
  //   ]
  // },

  {
    path: '/guide',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('guide/index'),
        name: 'guide',
        meta: { title: '新手指南', requiresAuth: false }
      }
    ]
  },
  {
    path: '/proto',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('proto/index'),
        name: 'proto',
        meta: { title: '协议', requiresAuth: false }
      }
    ]
  },
  {
    path: '/notice',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('notice/index'),
        name: 'notice',
        meta: { title: '公告', requiresAuth: false }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('notice/about'),
        name: 'about',
        meta: { title: '关于我们', requiresAuth: false }
      }
    ]
  },
  {
    path: '/numberAsset',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('numberAsset/index'),
        name: 'numberAsset',
        meta: { title: '数字资产', requiresAuth: false }
      }
    ]
  },
  {
    path: '/ratesStandard',
    component: Layout,
    children: [
      {
        path: '',
        component: _import('ratesStandard/index'),
        name: 'ratesStandard',
        meta: { title: '费率标准', requiresAuth: false }
      }
    ]
  }
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRouterMap
})
