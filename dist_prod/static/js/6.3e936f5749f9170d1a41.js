webpackJsonp([6,47,72],{"4NrL":function(t,e){},"8AxK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("vMJZ"),n=a("f7Zq"),c=a("akC1"),r=a("YJVU"),o={name:"asset-table",components:{Action1:n.default,Action2:c.default,Action3:r.default},props:{data:{type:Array,default:function(){return[]}},currentSwitch:{type:Number}},computed:{currentComponent:function(){return 2===this.currentAction?c.default:this.currentAction>2?r.default:n.default}},watch:{currentSwitch:function(t){this.currentRow=null}},data:function(){return{currentRow:null,currentAction:1,userInfo:{}}},methods:{handleAction:function(t,e){var a=this;Object(s.z)().then(function(s){return 1e3===s.status&&(a.userInfo=s.data,1!==a.userInfo.status?(a.$message({message:a.$t("translateLang.tradeDetail.text71"),duration:1500,type:"error"}),!1):"1"!==a.userInfo.is_pwdtrade_exists.toString()?(a.$message({message:a.$t("translateLang.tradeDetail.text72"),duration:1500,type:"error"}),!1):(a.currentRow=t,void(a.currentAction=e)))}).catch(function(){})},handleRefresh:function(t){this.$emit("refresh",t)},handleToTransDetail:function(t){this.$router.push({path:"/assets/transdetail",query:{currency_id:t.currency_id,currency_mark:t.currency_mark,type:"ctc"}})},handleToTransaction:function(t){this.$router.push({path:"/tradeDetail",query:{trade_area_id:t.trade_area_id,currency_id:t.currency_id,trade_currency_name:t.trade_currency_name,trade_currency_mark:t.trade_currency_mark}})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"asset-table"},[a("ul",{staticClass:"table-head"},[a("li",{staticClass:"col first"},[t._v(t._s(t.$t("assets.bottom.table.head.text1")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text2")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text3")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text4")))]),t._v(" "),a("li",{staticClass:"col last"},[t._v(t._s(t.$t("assets.bottom.table.head.text5")))])]),t._v(" "),0!==t.data.length?a("div",{staticClass:"table-body"},t._l(t.data,function(e,s){return a("div",{key:e.currency_id,staticClass:"row"},[a("ul",{staticClass:"item"},[a("li",{staticClass:"grid first"},[t._v(t._s(e.currency_mark))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.count))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.num))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.forzen_num))]),t._v(" "),a("li",{staticClass:"grid last"},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,1)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text1")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,2)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text2")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,3)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text3")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleToTransDetail(e)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text4")))]),t._v(" "),a("el-dropdown",{staticClass:"ml8"},[a("span",{staticClass:"el-dropdown-link"},[a("el-button",{attrs:{type:"text"}},[t._v(t._s(t.$t("assets.bottom.table.row.text5")))])],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(e.couple_info,function(e){return a("el-dropdown-item",{key:e.trade_area_id,nativeOn:{click:function(a){t.handleToTransaction(e)}}},[t._v(t._s(e.couple_name))])}))],1)],1)]),t._v(" "),t.currentRow===s?a(t.currentComponent,{tag:"component",staticClass:"slots",attrs:{id:e.currency_id,currency:e.currency_mark,number:e.num,leastNum:e.least_recharge_num,type:"ctc"},on:{refresh:t.handleRefresh}}):t._e()],1)})):a("div",{staticClass:"no-result"},[t._v("\n    "+t._s(t.$t("assets.bottom.noresult"))+"\n  ")])])},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("Sr1D")},"data-v-6c55859e",null);e.default=l.exports},"D+nI":function(t,e){},Emg2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("t5Wj"),n=a("8AxK"),c=a("LRf2"),r={name:"asset-account",components:{CtcAssetTable:n.default,OtcAssetTable:c.default},data:function(){return{loading:!1,assetTotal:null,assetPrice:null,ctcTotal:null,ctcPrice:null,otcTotal:null,otcPrice:null,activeName:this.$route.query.tab?this.$route.query.tab:"ctc",ctcListData:[],otcListData:[],currentSwitch:1,refreshType:""}},watch:{$route:function(t){this.activeName="ctc"===t.query.tab?"ctc":"otc",this.getInfo()}},mounted:function(){this.getInfo()},methods:{handleRefresh:function(t){this.refreshType=t,"otc"===this.refreshType?this.getOtc():this.getCtc()},getInfo:function(){"otc"===this.$route.query.tab?this.getOtc():this.getCtc()},getCtc:function(){var t=this;this.loading=!0,Object(s.b)().then(function(e){t.loading=!1,t.ctcTotal=e.data.convert_price,t.ctcPrice=e.data.convert_cny,t.otcTotal=e.data.otc_convert_price,t.otcPrice=e.data.otc_convert_cny,t.assetTotal=e.data.all_convert_price,t.assetPrice=e.data.all_convert_cny,t.ctcListData=e.data.normal_currency}).catch(function(){})},getOtc:function(){var t=this;this.loading=!0,Object(s.e)().then(function(e){t.loading=!1,t.otcTotal=e.data.convert_price,t.otcPrice=e.data.price_cny,t.ctcTotal=e.data.ctc_convert_price,t.ctcPrice=e.data.ctc_price_cny,t.assetTotal=e.data.all_convert_price,t.assetPrice=e.data.all_convert_cny,t.otcListData=e.data.list}).catch(function(){})},handleTabClick:function(t,e){this.$router.replace({path:this.$route.path,query:{tab:t.name}}),this.currentSwitch++}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"asset-account"},[a("div",{staticClass:"auto-box"},[a("div",{staticClass:"top"},[a("div",{staticClass:"total"},[t._v(t._s(t.$t("assets.top.text1"))),a("span",{staticClass:"highlight"},[t._v(t._s(t.assetTotal)+" BTC")]),t._v(" "),a("span",{staticClass:"small"},[t._v("≈ "+t._s(t.assetPrice)+" CNY")])]),t._v(" "),a("div",{staticClass:"parts"},[a("span",{staticClass:"part-1"},[t._v("\n          "+t._s(t.$t("assets.top.text2"))),a("span",{staticClass:"highlight"},[t._v(t._s(t.ctcTotal)+" BTC")]),t._v(" ≈ "+t._s(t.ctcPrice)+" CNY\n        ")]),t._v(" "),a("span",{staticClass:"part-2"},[t._v("\n          "+t._s(t.$t("assets.top.text3"))),a("span",{staticClass:"highlight"},[t._v(t._s(t.otcTotal)+" BTC")]),t._v(" ≈ "+t._s(t.otcPrice)+" CNY\n        ")])]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(t.$t("assets.top.text4")))])]),t._v(" "),a("div",{staticClass:"bottom"},[a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:t.$t("assets.bottom.tab1"),name:"ctc"}},[a("ctc-asset-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.ctcListData,currentSwitch:t.currentSwitch},on:{refresh:t.handleRefresh}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("assets.bottom.tab2"),name:"otc"}},[a("otc-asset-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.otcListData,currentSwitch:t.currentSwitch},on:{refresh:t.handleRefresh}})],1)],1)],1)])])},staticRenderFns:[]};var i=a("VU/8")(r,o,!1,function(t){a("4NrL")},"data-v-0ebf07b6",null);e.default=i.exports},LRf2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("oAV5"),n=a("vMJZ"),c=a("f7Zq"),r=a("akC1"),o=a("YJVU"),i={name:"otc-asset-table",components:{Action1:c.default,Action2:r.default,Action3:o.default},props:{data:{type:Array,default:function(){return[]}},currentSwitch:{type:Number}},computed:{currentComponent:function(){return 2===this.currentAction?r.default:this.currentAction>2?o.default:c.default}},watch:{currentSwitch:function(t){this.currentRow=null}},data:function(){return{currentRow:null,currentAction:1,userInfo:{}}},methods:{handleAction:function(t,e){var a=this;Object(n.z)().then(function(s){return 1e3===s.status&&(a.userInfo=s.data,1!==a.userInfo.status?(a.$message({message:a.$t("translateLang.tradeDetail.text71"),duration:1500,type:"error"}),!1):"1"!==a.userInfo.is_pwdtrade_exists.toString()?(a.$message({message:a.$t("translateLang.tradeDetail.text72"),duration:1500,type:"error"}),!1):(a.currentRow=t,void(a.currentAction=e)))}).catch(function(){})},handleRefresh:function(t){this.$emit("refresh",t)},handleToTransDetail:function(t){this.$router.push({path:"/assets/transdetail",query:{currency_id:t.currency_id,currency_mark:t.currency_mark,type:"otc"}})},handleToTransaction:function(t){window.location.href=Object(s.c)()+"/trade/?id="+t.currency_id}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"otc-asset-table"},[a("ul",{staticClass:"table-head"},[a("li",{staticClass:"col first"},[t._v(t._s(t.$t("assets.bottom.table.head.text1")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text2")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text3")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text4")))]),t._v(" "),a("li",{staticClass:"col last"},[t._v(t._s(t.$t("assets.bottom.table.head.text5")))])]),t._v(" "),0!==t.data.length?a("div",{staticClass:"table-body"},t._l(t.data,function(e,s){return a("div",{key:e.currency_id,staticClass:"row"},[a("ul",{staticClass:"item"},[a("li",{staticClass:"grid first"},[t._v(t._s(e.currency_mark))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.otc_total_num))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.otc_num))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.otc_forzen_num))]),t._v(" "),a("li",{staticClass:"grid last"},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,1)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text1")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,3)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text3")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleToTransDetail(e)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text4")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleToTransaction(e)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text5")))])],1)]),t._v(" "),t.currentRow===s?a(t.currentComponent,{tag:"component",staticClass:"slots",attrs:{id:e.currency_id,currency:e.currency_mark,number:e.otc_num,leastNum:e.least_recharge_num,type:"otc"},on:{refresh:t.handleRefresh}}):t._e()],1)})):a("div",{staticClass:"no-result"},[t._v("\n    "+t._s(t.$t("assets.bottom.noresult"))+"\n  ")])])},staticRenderFns:[]};var u=a("VU/8")(i,l,!1,function(t){a("D+nI")},"data-v-16a6f15a",null);e.default=u.exports},Sr1D:function(t,e){}});