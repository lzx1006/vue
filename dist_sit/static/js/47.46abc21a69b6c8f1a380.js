webpackJsonp([47],{"8AxK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("vMJZ"),n=a("f7Zq"),r=a("akC1"),o=a("YJVU"),c={name:"asset-table",components:{Action1:n.default,Action2:r.default,Action3:o.default},props:{data:{type:Array,default:function(){return[]}},currentSwitch:{type:Number}},computed:{currentComponent:function(){return 2===this.currentAction?r.default:this.currentAction>2?o.default:n.default}},watch:{currentSwitch:function(t){this.currentRow=null}},data:function(){return{currentRow:null,currentAction:1,userInfo:{}}},methods:{handleAction:function(t,e){var a=this;Object(s.z)().then(function(s){return 1e3===s.status&&(a.userInfo=s.data,1!==a.userInfo.status?(a.$message({message:a.$t("translateLang.tradeDetail.text71"),duration:1500,type:"error"}),!1):"1"!==a.userInfo.is_pwdtrade_exists.toString()?(a.$message({message:a.$t("translateLang.tradeDetail.text72"),duration:1500,type:"error"}),!1):(a.currentRow=t,void(a.currentAction=e)))}).catch(function(){})},handleRefresh:function(t){this.$emit("refresh",t)},handleToTransDetail:function(t){this.$router.push({path:"/assets/transdetail",query:{currency_id:t.currency_id,currency_mark:t.currency_mark,type:"ctc"}})},handleToTransaction:function(t){this.$router.push({path:"/tradeDetail",query:{trade_area_id:t.trade_area_id,currency_id:t.currency_id,trade_currency_name:t.trade_currency_name,trade_currency_mark:t.trade_currency_mark}})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"asset-table"},[a("ul",{staticClass:"table-head"},[a("li",{staticClass:"col first"},[t._v(t._s(t.$t("assets.bottom.table.head.text1")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text2")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text3")))]),t._v(" "),a("li",{staticClass:"col"},[t._v(t._s(t.$t("assets.bottom.table.head.text4")))]),t._v(" "),a("li",{staticClass:"col last"},[t._v(t._s(t.$t("assets.bottom.table.head.text5")))])]),t._v(" "),0!==t.data.length?a("div",{staticClass:"table-body"},t._l(t.data,function(e,s){return a("div",{key:e.currency_id,staticClass:"row"},[a("ul",{staticClass:"item"},[a("li",{staticClass:"grid first"},[t._v(t._s(e.currency_mark))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.count))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.num))]),t._v(" "),a("li",{staticClass:"grid"},[t._v(t._s(e.forzen_num))]),t._v(" "),a("li",{staticClass:"grid last"},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,1)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text1")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,2)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text2")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.handleAction(s,3)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text3")))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleToTransDetail(e)}}},[t._v(t._s(t.$t("assets.bottom.table.row.text4")))]),t._v(" "),a("el-dropdown",{staticClass:"ml8"},[a("span",{staticClass:"el-dropdown-link"},[a("el-button",{attrs:{type:"text"}},[t._v(t._s(t.$t("assets.bottom.table.row.text5")))])],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(e.couple_info,function(e){return a("el-dropdown-item",{key:e.trade_area_id,nativeOn:{click:function(a){t.handleToTransaction(e)}}},[t._v(t._s(e.couple_name))])}))],1)],1)]),t._v(" "),t.currentRow===s?a(t.currentComponent,{tag:"component",staticClass:"slots",attrs:{id:e.currency_id,currency:e.currency_mark,number:e.num,leastNum:e.least_recharge_num,type:"ctc"},on:{refresh:t.handleRefresh}}):t._e()],1)})):a("div",{staticClass:"no-result"},[t._v("\n    "+t._s(t.$t("assets.bottom.noresult"))+"\n  ")])])},staticRenderFns:[]};var l=a("VU/8")(c,i,!1,function(t){a("Sr1D")},"data-v-6c55859e",null);e.default=l.exports},Sr1D:function(t,e){}});
//# sourceMappingURL=47.46abc21a69b6c8f1a380.js.map