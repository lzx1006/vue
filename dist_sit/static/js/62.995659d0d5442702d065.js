webpackJsonp([62],{QiqC:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Gu7T"),r=e.n(i),n=e("ZgGv"),s=e("TIfe"),c=e("gyMJ"),d={components:{tradeTable:n.default},data:function(){return{tradeList:[],activeName:"",trade_area_id:0,trade_area_cate_id:0,typeId:0,searchContent:"",tradeAreaList:[],areaActive:0,coinActive:0,ops:{vuescroll:{mode:"slide",sizeStrategy:"percent",detectResize:!0},scrollPanel:{initialScrollY:!1,initialScrollX:!0,scrollingX:!0,scrollingY:!1,speed:100},rail:{background:"#131625",size:"3px",specifyBorderRadius:!1,gutterOfEnds:"0px",gutterOfSide:"0px",keepShow:!0},bar:{showDelay:200,onlyShowBarOnScroll:!0,keepShow:!1,background:"#363e65",opacity:1,size:"3px",hoverStyle:!1}}}},created:function(){this.initTrade()},methods:{initTrade:function(){var t=this,a={};if(window.localStorage.getItem("link_userInfo")&&Object(s.a)()){var e=window.localStorage.getItem("link_userInfo");e=JSON.parse(e),a.user_id=e.uid}Object(c.b)(a).then(function(a){if(1e3!==a.status)return!1;t.tradeList=[].concat(r()(a.data)),t.typeId=a.data[0].trade_area_cate_id,t.tradeAreaList=a.data[0].trade_area_list,t.trade_area_id=a.data[0].trade_area_list[0].trade_area_id}).catch(function(){})},handleAreaClick:function(t,a,e){this.areaActive=e,this.coinActive=0,this.tradeAreaList=a,0!==a.length&&(this.trade_area_id=a[0].trade_area_id),this.typeId=t},handleClick:function(t,a){this.coinActive=a,this.trade_area_id=t}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"trade"},[e("div",[e("div",{staticClass:"invited"},[e("h1",[t._v(t._s(t.$t("translateLang.tradeDetail.text51")))]),t._v(" "),e("h5",[t._v(t._s(t.$t("translateLang.tradeDetail.text52")))]),t._v(" "),e("router-link",{staticClass:"invited-btn",attrs:{to:"/invitation",tag:"div"}},[t._v(t._s(t.$t("translateLang.tradeDetail.text53")))])],1),t._v(" "),e("div",{staticClass:"trade-content"},[e("div",{staticClass:"clearfix search-box"},[e("div",{staticClass:"search-label"},[t._v(t._s(t.$t("translateLang.tradeDetail.text54")))]),t._v(" "),e("div",{staticClass:"search"},[e("el-input",{attrs:{placeholder:""},model:{value:t.searchContent,callback:function(a){t.searchContent=a},expression:"searchContent"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)]),t._v(" "),e("div",{staticClass:"flow-container"},[e("vue-scroll",{attrs:{ops:t.ops}},[e("div",{staticClass:"trade-area-tap trade-coin-tap"},t._l(t.tradeList,function(a,i){return e("div",{key:a.trade_area_cate_id},[e("p",{staticClass:"currency",class:{active:t.areaActive===i},on:{click:function(e){t.handleAreaClick(a.trade_area_cate_id,a.trade_area_list,i)}}},[t._v("\n                "+t._s(a.area_cate_name)+"\n              ")])])}))])],1),t._v(" "),e("div",[e("div",{staticClass:"trade-coin-tap trade-area-coin-tap"},t._l(t.tradeAreaList,function(a,i){return e("div",{key:a.trade_area_id},[e("p",{staticClass:"currency",class:{active:t.coinActive===i},on:{click:function(e){t.handleClick(a.trade_area_id,i)}}},[t._v("\n              "+t._s(a.currency_mark)+"\n            ")])])}))])]),t._v(" "),e("trade-table",{attrs:{id:t.trade_area_id,typeId:t.typeId,searchContent:t.searchContent},on:{initTrade:t.initTrade}})],1)])},staticRenderFns:[]};var o=e("VU/8")(d,l,!1,function(t){e("uIm2")},"data-v-352f77b7",null);a.default=o.exports},uIm2:function(t,a){}});
//# sourceMappingURL=62.995659d0d5442702d065.js.map