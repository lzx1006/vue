webpackJsonp([30],{"c7x+":function(t,a){},gWcu:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Gu7T"),n=e.n(r),c=e("lbHh"),s=e.n(c),i=e("fksm"),_={data:function(){return{selectList:[],intoBTC:0,lang:s.a.get("language")}},created:function(){this.getSelectList()},methods:{getSelectList:function(){var t=this;Object(i.a)().then(function(a){1e3!==a.status&&t.$message.error(a.msg),t.selectList=[].concat(n()(a.data.normal_currency)),t.intoBTC=a.data.convert_price}).catch(function(){})}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"finace"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("finace.part1"))+": "),e("span",[t._v(t._s(t.intoBTC)+"BTC")])]),t._v(" "),e("table",{staticClass:"table pulbic-table",attrs:{id:"financeTable"}},[e("thead",[e("tr",[e("td",[t._v(t._s(t.$t("finace.part2")))]),t._v(" "),e("td",[t._v(t._s(t.$t("finace.part3")))]),t._v(" "),e("td",[t._v(t._s(t.$t("finace.part4")))]),t._v(" "),e("td",[t._v(t._s(t.$t("finace.part5")))]),t._v(" "),e("td",[t._v(t._s(t.$t("finace.part6")))]),t._v(" "),"en"==t.lang?e("td",{staticStyle:{width:"240px","text-align":"center"}},[t._v(t._s(t.$t("finace.part7")))]):e("td",{staticStyle:{width:"180px","text-align":"center"}},[t._v(t._s(t.$t("finace.part7")))])])]),t._v(" "),e("tbody",t._l(t.selectList,function(a){return e("tr",{key:a.id,staticClass:"odd",attrs:{role:"row"}},[e("td",[e("img",{attrs:{src:a.currency_logo,alt:"coin logo"}}),e("p",{staticClass:"coin-name"},[t._v(t._s(a.currency_mark))])]),t._v(" "),e("td",[t._v(t._s(a.num))]),e("td",[t._v(t._s(a.forzen_num))]),e("td",[t._v(t._s(a.count))]),e("td",[t._v(t._s(a.convert_price))]),t._v(" "),e("td",[e("div",{staticClass:" finace-btn"},[1==a.is_allow_recharge?e("div",{staticStyle:{"margin-left":"0"}},[e("router-link",{staticClass:"normal",attrs:{to:{path:"transferIn",query:{currency_id:a.currency_id}}}},[t._v(t._s(t.$t("finace.part8")))])],1):t._e(),t._v(" "),1==a.is_allow_tibi?e("div",{staticClass:" "},[e("router-link",{staticClass:"normal",attrs:{to:{path:"transferOut",query:{currency_id:a.currency_id}}}},[t._v(t._s(t.$t("finace.part10")))])],1):t._e(),t._v(" "),a.couple_info.length?e("div",{staticClass:"trade-btn"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.$t("finace.part9")))]),e("ul",{staticClass:"second-menu2"},t._l(a.couple_info,function(a){return e("li",{key:a.id},[e("router-link",{staticClass:"normal",attrs:{tag:"a",to:{path:"/tradeDetail",query:{trade_area_id:a.trade_area_id,currency_id:a.currency_id,trade_currency_name:a.trade_currency_name,trade_currency_mark:a.trade_currency_mark}}}},[t._v(t._s(a.couple_name))])],1)}))]):t._e()])])])}))])])},staticRenderFns:[]};var d=e("VU/8")(_,l,!1,function(t){e("c7x+"),e("vZI9")},"data-v-5150f9c4",null);a.default=d.exports},vZI9:function(t,a){}});
//# sourceMappingURL=30.6df3e0af6e5cadc834fc.js.map