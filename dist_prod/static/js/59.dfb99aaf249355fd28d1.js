webpackJsonp([59],{ReaA:function(t,e){},"d/SJ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"transaction-detail-table-2",components:{},props:{data:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{type:function(t){return t<0||t>3?this.$t("assets.transDetail.tbody.typeFilter.text6"):[this.$t("assets.transDetail.tbody.typeFilter.text1"),this.$t("assets.transDetail.tbody.typeFilter.text2"),this.$t("assets.transDetail.tbody.typeFilter.text3")][t-1]},orderType:function(t){return t<0||t>1?this.$t("assets.transDetail.tbody.typeFilter.text6"):[this.$t("assets.transDetail.tbody.typeFilter.text4"),this.$t("assets.transDetail.tbody.typeFilter.text5")][t]},remark:function(t){return t||this.$t("assets.transDetail.tbody.remarkFilter.text1")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transaction-detail-table-2"},[a("el-table",{attrs:{data:t.data,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"create_time_full",label:t.$t("assets.transDetail.thead.table2.text1")}}),t._v(" "),a("el-table-column",{attrs:{prop:"currency_mark",label:t.$t("assets.transDetail.thead.table2.text2")}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("assets.transDetail.thead.table2.text3")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.actual)+" "+t._s(e.row.currency_mark)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("assets.transDetail.thead.table2.text4")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.fee)+" "+t._s(e.row.currency_mark)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:t.$t("assets.transDetail.thead.table2.text6")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.remark(e.row.remarks))+"\n      ")]}}])})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,r,!1,function(t){a("ReaA")},"data-v-4465091a",null);e.default=l.exports}});