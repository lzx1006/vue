webpackJsonp([13],{"6p8/":function(e,t){},rU9r:function(e,t){},s0Lu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("Dd8w"),s=r.n(o),a=r("UK/b"),i=r("vMJZ"),n=r("E4LH"),c={props:["dialogVisible"],data:function(){var e=this;return{phoneForm:{sms_verify:"",user_account:"",code_area:"",card_num:"",require_type:2},smsCodeList:[],phoneFormRules:{sms_verify:[{required:!0,message:this.$t("errorTips.withoutVerifyCode"),trigger:"blur"}],user_account:[{required:!0,validator:function(t,r,o){""===r?o(new Error(e.$t("errorTips.withoutPhone"))):Object(n.c)(r)?o():o(new Error(e.$t("errorTips.phoneFormat")))},trigger:"blur"}],card_num:[{required:!0,message:this.$t("translateLang.user.text4"),trigger:"blur"}]},validCode:!0,validTip:this.$t("verifyCode.title")}},computed:{},created:function(){this.handleGetInternationalSmsCode()},methods:{handleGetInternationalSmsCode:function(){var e=this;Object(a.a)().then(function(t){if(1e3!==t.status)return e.$message.error(t.msg),!1;e.smsCodeList=t.data,e.smsCodeList.unshift(t.data[t.data.length-1]),e.smsCodeList.pop(),e.phoneForm.code_area="+"+e.smsCodeList[0].code_area}).catch(function(){})},handleCloseDialog:function(){this.$emit("closeDialog","modifyPhoneDialogVisible")},phoneSubmit:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return!1;var o=s()({},t.phoneForm);t[e].code_area&&(o.code_area=t[e].code_area.substring(1)),Object(i.r)(o).then(function(e){if(1e3!==e.status)return t.$message.error(e.msg),!1;t.$message.success("修改成功！"),t.$emit("getUserInfo"),t.handleCloseDialog()}).catch(function(){})})},handleSendRequestSms:function(e){var t=this;if(!this.phoneForm.user_account)return this.$message.error(this.$t("errorTips.withoutPhone")),!1;if(!Object(n.c)(this.phoneForm.user_account))return this.$message.error(this.$t("errorTips.phoneFormat")),!1;var r={};r.user_account=this.phoneForm.user_account,r.request_type="edit",r.code_area=this.phoneForm.code_area.substring(1),Object(a.d)(r).then(function(e){if(1e3!==e.status)return t.$message.error(e.msg),!1;t.setTime()}).catch(function(){})},setTime:function(){var e=60;if(this.validCode){this.validCode=!1;var t=this,r=setInterval(function(){e--,t.validTip=e+t.$t("verifyCode.second"),0===e&&(clearInterval(r),t.validTip=t.$t("verifyCode.getAgain"),t.validCode=!0)},1e3);return r}}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"mdphone-dialog",attrs:{title:e.$t("user.modifyPhoneDialog.title"),visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleCloseDialog,width:"580px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"phoneForm",attrs:{model:e.phoneForm,rules:e.phoneFormRules,"label-width":"180px"}},[r("el-form-item",{attrs:{label:e.$t("translateLang.user.text2"),prop:"card_num"}},[r("el-input",{attrs:{label:e.$t("translateLang.user.text3")},model:{value:e.phoneForm.card_num,callback:function(t){e.$set(e.phoneForm,"card_num","string"==typeof t?t.trim():t)},expression:"phoneForm.card_num"}})],1),e._v(" "),r("el-form-item",{staticClass:"phone-account",attrs:{prop:"user_account",label:e.$t("form.phone")}},[r("el-select",{staticClass:"phone-code-area",model:{value:e.phoneForm.code_area,callback:function(t){e.$set(e.phoneForm,"code_area",t)},expression:"phoneForm.code_area"}},e._l(e.smsCodeList,function(t){return r("el-option",{key:t.code_id,attrs:{value:"+"+t.code_area}},[r("div",{staticClass:"clearfix code-area"},[r("div",{staticClass:"pull-left area"},[e._v(e._s(t.nation_cn))]),r("div",{staticClass:"pull-right"},[e._v("+"+e._s(t.code_area))])])])})),e._v(" "),r("el-input",{staticClass:"phone-num",model:{value:e.phoneForm.user_account,callback:function(t){e.$set(e.phoneForm,"user_account","string"==typeof t?t.trim():t)},expression:"phoneForm.user_account"}})],1),e._v(" "),r("el-form-item",{staticClass:"verify",attrs:{label:e.$t("form.verifyCode"),prop:"sms_verify"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:e.$t("form.verifyCodePlaceholder")},model:{value:e.phoneForm.sms_verify,callback:function(t){e.$set(e.phoneForm,"sms_verify","string"==typeof t?t.trim():t)},expression:"phoneForm.sms_verify"}}),r("el-button",{staticClass:"get-verify",attrs:{disabled:!e.validCode},on:{click:function(t){e.handleSendRequestSms(t)}}},[e._v(e._s(e.validTip))])],1),e._v(" "),r("div",{staticClass:"btn-group appeal-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.phoneSubmit("phoneForm")}}},[e._v(e._s(e.$t("dialog.modify")))])],1)],1)],1)},staticRenderFns:[]};var u=r("VU/8")(c,l,!1,function(e){r("rU9r"),r("6p8/"),r("v591")},"data-v-38c4cc82",null);t.default=u.exports},v591:function(e,t){}});