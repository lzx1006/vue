webpackJsonp([22],{CWyf:function(t,n){},nIEt:function(t,n){},qVou:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("vMJZ"),a=e("mw3O"),s=e.n(a),o={name:"export-excel",components:{},props:{action:String,Options:{}},data:function(){return{loading:!1}},mounted:function(){},methods:{handleExport:function(){var t=this.Options?"?"+s.a.stringify(this.Options):"";window.location.href=(this.action||this.$route.meta.download)+t}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("el-button",{attrs:{size:"small",loading:this.loading,disabled:!this.$route.meta.download&&!this.action,type:"primary"},on:{click:this.handleExport}},[this._v(this._s(this.$t("translateLang.user.text16")))])},staticRenderFns:[]},l=e("VU/8")(o,r,!1,null,null,null).exports,c=e("qorP"),v=e("lbHh"),u=e.n(v),_={name:"invitation",components:{ExportExcel:l},data:function(){return{options:[{label:"全部",value:"0"},{label:"生效中",value:"1"},{label:"已失效",value:"2"},{label:"已无效",value:"3"}],inviteInfo:{},inviteList:[],refundList:[],inviteOptions:{invite_status:"0",page:1,per_page_num:10},refundOptions:{page:1,per_page_num:10},exportOptions:{user_id:"",start_time:"",end_time:"",lang:u.a.get("language")||"zh"},time:[],totalCount1:0,totalCount2:0,pickerOptions:{disabledDate:function(t){var n=Date.now();return t.getTime()>n}}}},mounted:function(){this.getInfo(),this.getInviteRecord(),this.getRefundRecord()},methods:{getInfo:function(){var t=this;Object(i.k)().then(function(n){if(1e3!==n.status)return t.$message.error(n.msg),!1;t.inviteInfo=n.data,t.exportOptions.user_id=n.data.user_id}).catch(function(){})},getInviteRecord:function(){var t=this;Object(i.l)(this.inviteOptions).then(function(n){if(1e3!==n.status)return t.$message.error(n.msg),!1;t.inviteList=n.data.list,t.totalCount1=n.data.list_total}).catch(function(){})},getRefundRecord:function(){var t=this;Object(i.n)(this.refundOptions).then(function(n){if(1e3!==n.status)return t.$message.error(n.msg),!1;t.refundList=n.data.list,t.totalCount2=n.data.list_total}).catch(function(){})},showImg:function(t){var n='<img\n              src="'+t+'"\n               width="100%">';this.$alert(n,"",{dangerouslyUseHTMLString:!0,showConfirmButton:!1,closeOnClickModal:!0,customClass:"autobox"}).catch(function(){})},handleCopy:function(t,n){var e=this;Object(c.a)(t,n).then(function(){e.$message({message:e.$t("errorTips.copySuccess"),duration:1e3,type:"success"})}).catch(function(){e.$message({message:e.$t("errorTips.copyError"),duration:1e3,type:"warining"})})},timeChange:function(t){var n=t||["",""];n[1]-15552e6>n[0]?this.$message.error(this.$t("translateLang.invitation.error1")):(this.exportOptions.start_time=n[0]/1e3,this.exportOptions.end_time=n[1]/1e3)},handleSizeChange:function(t,n){this[n].page=t,this.getList(n)},handleCurrentChange:function(t,n){this[n].page=t,this.getList(n)},getList:function(t){switch(t){case"inviteOptions":this.getInviteRecord();break;case"refundOptions":this.getRefundRecord()}}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"invitation"},[e("div",{staticClass:"banner",class:t.$i18n.locale}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"myshare"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("translateLang.invitation.title1")))]),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("p",{staticClass:"label"},[t._v(t._s(t.$t("translateLang.invitation.label1")))]),t._v(" "),e("table",[e("tr",[e("td",[t._v(t._s(t.inviteInfo.invite_code))]),t._v(" "),e("td",{staticClass:"btn",attrs:{width:"120"}},[e("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"autopop",trigger:"click"}},[e("img",{attrs:{src:t.inviteInfo.invite_url_qrcode,alt:""}}),t._v(" "),e("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.$t("translateLang.invitation.btn1")))])])],1)])])]),t._v(" "),e("el-col",{attrs:{span:8}},[e("p",{staticClass:"label"},[t._v(t._s(t.$t("translateLang.invitation.label2")))]),t._v(" "),e("table",[e("tr",[e("td",[t._v(t._s(t.inviteInfo.invite_code))]),t._v(" "),e("td",{staticClass:"btn",attrs:{width:"120"},on:{click:function(n){t.handleCopy(t.inviteInfo.invite_code,n)}}},[e("span",[t._v(t._s(t.$t("translateLang.invitation.btn2")))])])])])]),t._v(" "),e("el-col",{attrs:{span:8}},[e("p",{staticClass:"label"},[t._v(t._s(t.$t("translateLang.invitation.label3")))]),t._v(" "),e("table",[e("tr",[e("td",[t._v(t._s(t.inviteInfo.invite_url))]),t._v(" "),e("td",{staticClass:"btn",attrs:{width:"120"},on:{click:function(n){t.handleCopy(t.inviteInfo.invite_url,n)}}},[e("span",[t._v(t._s(t.$t("translateLang.invitation.btn3")))])])])])])],1)],1),t._v(" "),e("div",{staticClass:"statistic"},[e("el-row",[e("el-col",{attrs:{span:8}},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("translateLang.invitation.title2")))]),t._v(" "),e("p",[e("span",{staticClass:"label"},[t._v(t._s(t.$t("translateLang.invitation.label4")))]),t._v(" "),e("span",[t._v(t._s(t.inviteInfo.invite_num)+" "+t._s(t.$t("translateLang.invitation.unit1")))])])]),t._v(" "),e("el-col",{attrs:{span:8}},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("translateLang.invitation.title3")))]),t._v(" "),e("p",[e("span",{staticClass:"label"},[t._v("USDT")]),t._v(" "),e("span",[t._v(t._s(t.inviteInfo.reward_num)+" USDT")])])]),t._v(" "),e("el-col",{attrs:{span:8}})],1)],1),t._v(" "),e("el-row",{staticClass:"nobg",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"invite-record"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("translateLang.invitation.title4")))]),t._v(" "),e("div",{staticClass:"search"},[e("el-select",{attrs:{size:"small"},on:{change:t.getInviteRecord},model:{value:t.inviteOptions.invite_status,callback:function(n){t.$set(t.inviteOptions,"invite_status",n)},expression:"inviteOptions.invite_status"}},t._l(t.options,function(n){return e("el-option",{key:n.value,attrs:{label:t.$t("inviteCode.status"+n.value),value:n.value}})}))],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.inviteList}},[e("el-table-column",{attrs:{label:t.$t("inviteCode.account")},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",[e("span",{staticClass:"nickname"},[t._v(t._s(n.row.invite_user_nickname))]),t._v(" "),e("span",[t._v(t._s(n.row.invite_user_account))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:t.$t("inviteCode.status")},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",[t._v(t._s(t.$t("inviteCode.status"+n.row.status)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"160",label:t.$t("inviteCode.regtime")},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"time"},[t._v(t._s(n.row.create_time))])]}}])})],1),t._v(" "),e("el-pagination",{attrs:{background:"","current-page":t.inviteOptions.page,"page-size":t.inviteOptions.per_page_num,layout:"prev, pager, next, jumper",total:t.totalCount1},on:{"size-change":function(n){return t.handleSizeChange(n,"inviteOptions")},"current-change":function(n){return t.handleSizeChange(n,"inviteOptions")},"update:currentPage":function(n){t.$set(t.inviteOptions,"page",n)}}})],1)]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"refund-record"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("translateLang.invitation.title5")))]),t._v(" "),e("div",{staticClass:"search"},[e("el-date-picker",{attrs:{"picker-options":t.pickerOptions,size:"small",type:"daterange","range-separator":"-","value-format":"timestamp","start-placeholder":t.$t("queryByTime.beginPlaceorder"),"end-placeholder":t.$t("queryByTime.endPlaceorder")},on:{change:t.timeChange},model:{value:t.time,callback:function(n){t.time=n},expression:"time"}}),t._v(" "),e("export-excel",{attrs:{action:"/api/User/ExportUserProfitList",Options:t.exportOptions}})],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.refundList}},[e("el-table-column",{attrs:{label:t.$t("inviteCode.account")},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",[e("span",{staticClass:"nickname"},[t._v(t._s(n.row.invite_user_nickname))]),t._v(" "),e("span",[t._v(t._s(n.row.invite_user_account))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:t.$t("inviteCode.refund")},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"time"},[t._v(t._s(n.row.rebate_num)+" USDT")])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"160",label:t.$t("inviteCode.tradetime")},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"time"},[t._v(t._s(t._f("parseTime")(n.row.rebate_time)))])]}}])})],1),t._v(" "),e("el-pagination",{attrs:{background:"","current-page":t.refundOptions.page,"page-size":t.refundOptions.per_page_num,layout:"prev, pager, next, jumper",total:t.totalCount2},on:{"size-change":function(n){return t.handleSizeChange(n,"refundOptions")},"current-change":function(n){return t.handleSizeChange(n,"refundOptions")},"update:currentPage":function(n){t.$set(t.refundOptions,"page",n)}}})],1)])],1),t._v(" "),e("div",{staticClass:"rules"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("translateLang.invitation.title6")))]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips1"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips2"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips3"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips4"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips5"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips6"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips7"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips8"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips9"))+"\n        ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.$t("translateLang.invitation.tips10"))+"\n        ")]),t._v(" "),e("p",{staticClass:"tips"},[t._v("\n          "+t._s(t.$t("translateLang.invitation.tips11"))+"\n        ")])])])],1)])},staticRenderFns:[]};var d=e("VU/8")(_,p,!1,function(t){e("nIEt"),e("CWyf")},"data-v-daabe3ac",null);n.default=d.exports}});
//# sourceMappingURL=22.2c8908c6a250f1f5418f.js.map