webpackJsonp([49],{"AF/U":function(r,e){},DXqy:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("Dd8w"),s=t.n(o),i=t("E4LH"),a=t("UK/b"),l=t("NC6I"),u=t.n(l),n={data:function(){var r=this,e=function(e,t,o){""===t?o(new Error(r.$t("errorTips.withoutPwd"))):t.length<6?o(new Error(r.$t("errorTips.longPwd"))):Object(i.d)(t)?t.length>20?o(new Error(r.$t("errorTips.longLimitPwd"))):o():o(new Error(r.$t("errorTips.rulePwd")))},t=function(e,t,o){"phone"===r.activeName&&(""===t?o(new Error(r.$t("errorTips.withoutPhone"))):Object(i.c)(t)?o():o(new Error(r.$t("errorTips.phoneFormat")))),"email"===r.activeName&&(""===t?o(new Error(r.$t("errorTips.withoutEmail"))):Object(i.a)(t)?o():o(new Error(r.$t("errorTips.emailFormat"))))};return{proto:!1,activeName:"phone",ruleForm:{user_account:"",user_password:"",sms_verify:"",user_confirmpwd:""},ruleForm1:{user_account:"",user_password:"",sms_verify:"",user_confirmpwd:""},rules:{user_account:[{validator:t,trigger:"blur"}],user_password:[{validator:e,trigger:"blur"}],sms_verify:[{required:!0,message:this.$t("errorTips.withoutVerifyCode"),trigger:"blur"}],user_confirmpwd:[{validator:function(e,t,o){""===t?o(new Error(r.$t("errorTips.surePwd"))):t!==r.ruleForm.user_password?o(new Error(r.$t("errorTips.surePwdError"))):o()},trigger:"blur"},{required:!0,message:this.$t("errorTips.withoutSurePwd"),trigger:"blur"}]},rules1:{user_account:[{validator:t,trigger:"blur"}],user_password:[{validator:e,trigger:"blur"}],sms_verify:[{required:!0,message:this.$t("errorTips.withoutVerifyCode"),trigger:"blur"}],user_confirmpwd:[{validator:function(e,t,o){""===t?o(new Error(r.$t("errorTips.surePwd"))):t!==r.ruleForm1.user_password?o(new Error(r.$t("errorTips.surePwdError"))):o()},trigger:"blur"},{required:!0,message:this.$t("errorTips.withoutSurePwd"),trigger:"blur"}]},validCode:!0,validState:!0,validTip:this.$t("verifyCode.title"),validCode1:!0,validState1:!0,validTip1:this.$t("verifyCode.title")}},mounted:function(){document.body.className="bgWhite"},beforeRouteLeave:function(r,e,t){document.body.className="",t()},methods:{accountVerify:function(r){if("phone"===this.activeName){if(""===r)return this.$message.error(this.$t("errorTips.withoutPhone")),!1;if(!Object(i.c)(r))return this.$message.error(this.$t("errorTips.phoneFormat")),!1}if("email"===this.activeName){if(""===r)return this.$message.error(this.$t("errorTips.withoutEmail")),!1;if(!Object(i.a)(r))return this.$message.error(this.$t("errorTips.emailFormat")),!1}return!0},submitForm:function(r){var e=this;this.$refs[r].validate(function(r){if(!r)return!1;var t=void 0;"phone"===e.activeName?((t=s()({},e.ruleForm)).user_password=u()(e.ruleForm.user_password),t.user_confirmpwd=u()(e.ruleForm.user_confirmpwd)):((t=s()({},e.ruleForm1)).user_password=u()(e.ruleForm1.user_password),t.user_confirmpwd=u()(e.ruleForm1.user_confirmpwd)),Object(a.c)(t).then(function(r){if(1e3!==r.status)return e.$message.error(r.msg),!1;e.$confirm(e.$t("forgetPwd.tips.part1"),e.$t("forgetPwd.tips.title"),{confirmButtonText:e.$t("forgetPwd.tips.sure"),cancelButtonText:e.$t("forgetPwd.tips.cancle"),type:"success"}).then(function(){e.$router.push("/login")}).catch(function(){})}).catch(function(){})})},sendRequestSms:function(r){var e=this,t=void 0,o={},s="";"phone"===this.activeName?(s="phone",t=this.accountVerify(this.ruleForm.user_account),o.user_account=this.ruleForm.user_account):(s="email",t=this.accountVerify(this.ruleForm1.user_account),o.user_account=this.ruleForm1.user_account),o.request_type="reset",t&&(this.setTime(s),Object(a.d)(o).then(function(r){if(1e3!==r.status)return e.$message.error(r.msg),!1}).catch(function(){}))},setTime:function(r){if("phone"===r){var e=60;if(this.validCode){this.validCode=!1;var t=this,o=setInterval(function(){e--,t.validTip=e+t.$t("verifyCode.second"),0===e&&(clearInterval(o),t.validTip=t.$t("verifyCode.getAgain"),t.validCode=!0,t.validState=!0)},1e3);return o}}else{var s=60;if(this.validCode1){this.validCode1=!1;var i=this,a=setInterval(function(){s--,i.validTip1=s+i.$t("verifyCode.second"),0===s&&(clearInterval(a),i.validTip1=i.$t("verifyCode.getAgain"),i.validCode1=!0,i.validState1=!0)},1e3);return a}}}}},c={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"forget-pwd"},[t("header",[t("div",{staticClass:"navigation container clearfix"},[t("div",{staticClass:"pull-left"},[t("router-link",{staticClass:"logo",attrs:{to:"/"}},[t("img",{attrs:{src:"static/images/index/logo_02.png",alt:""}})]),r._v(" "),t("span",[r._v(r._s(r.$t("forgetPwd.nav.title")))])],1),r._v(" "),t("div",{staticClass:"menu2 pull-right"},[r._v("\n          "+r._s(r.$t("forgetPwd.des.part1"))),t("router-link",{staticClass:"menu2-login",attrs:{to:"/login"}},[r._v(r._s(r.$t("forgetPwd.des.part2")))]),t("span",{staticClass:"icon-back"}),r._v(" "),t("router-link",{staticClass:"back-index",attrs:{to:"/"}},[r._v(r._s(r.$t("forgetPwd.des.part3")))])],1)])]),r._v(" "),t("div",{staticClass:"form"},[t("el-tabs",{model:{value:r.activeName,callback:function(e){r.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:r.$t("forgetPwd.byPhone"),name:"phone"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:r.ruleForm,"status-icon":"",rules:r.rules,"label-width":"0"}},[t("el-form-item",{attrs:{prop:"user_account"}},[t("el-input",{attrs:{placeholder:r.$t("forgetPwd.placeholder.tel")},model:{value:r.ruleForm.user_account,callback:function(e){r.$set(r.ruleForm,"user_account","string"==typeof e?e.trim():e)},expression:"ruleForm.user_account"}})],1),r._v(" "),t("el-form-item",{staticClass:"verify",attrs:{prop:"sms_verify"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:r.$t("forgetPwd.placeholder.verifyCode")},model:{value:r.ruleForm.sms_verify,callback:function(e){r.$set(r.ruleForm,"sms_verify","string"==typeof e?e.trim():e)},expression:"ruleForm.sms_verify"}}),t("el-button",{staticClass:"get-verify",attrs:{disabled:!r.validCode},on:{click:function(e){r.sendRequestSms(e)}}},[r._v(r._s(r.validTip))])],1),r._v(" "),t("el-form-item",{attrs:{prop:"user_password"}},[t("el-input",{attrs:{type:"password",placeholder:r.$t("forgetPwd.placeholder.newPwd")},model:{value:r.ruleForm.user_password,callback:function(e){r.$set(r.ruleForm,"user_password","string"==typeof e?e.trim():e)},expression:"ruleForm.user_password"}})],1),r._v(" "),t("el-form-item",{attrs:{prop:"user_confirmpwd"}},[t("el-input",{attrs:{type:"password",placeholder:r.$t("forgetPwd.placeholder.confirmPwd")},nativeOn:{keyup:function(e){if(!("button"in e)&&r._k(e.keyCode,"enter",13,e.key,"Enter"))return null;r.submitForm("ruleForm")}},model:{value:r.ruleForm.user_confirmpwd,callback:function(e){r.$set(r.ruleForm,"user_confirmpwd","string"==typeof e?e.trim():e)},expression:"ruleForm.user_confirmpwd"}})],1),r._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){r.submitForm("ruleForm")}}},[r._v(r._s(r.$t("forgetPwd.submit")))])],1)],1)],1),r._v(" "),t("el-tab-pane",{attrs:{label:r.$t("forgetPwd.byEmail"),name:"email"}},[t("el-form",{ref:"ruleForm1",staticClass:"demo-ruleForm",attrs:{model:r.ruleForm1,"status-icon":"",rules:r.rules1,"label-width":"0"}},[t("el-form-item",{attrs:{prop:"user_account"}},[t("el-input",{attrs:{placeholder:r.$t("forgetPwd.placeholder.email")},model:{value:r.ruleForm1.user_account,callback:function(e){r.$set(r.ruleForm1,"user_account","string"==typeof e?e.trim():e)},expression:"ruleForm1.user_account"}})],1),r._v(" "),t("el-form-item",{staticClass:"verify",attrs:{prop:"sms_verify"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:r.$t("forgetPwd.placeholder.verifyCode")},model:{value:r.ruleForm1.sms_verify,callback:function(e){r.$set(r.ruleForm1,"sms_verify","string"==typeof e?e.trim():e)},expression:"ruleForm1.sms_verify"}}),t("el-button",{staticClass:"get-verify",attrs:{disabled:!r.validCode1},on:{click:function(e){r.sendRequestSms(e)}}},[r._v(r._s(r.validTip1))])],1),r._v(" "),t("el-form-item",{attrs:{prop:"user_password"}},[t("el-input",{attrs:{type:"password",placeholder:r.$t("forgetPwd.placeholder.newPwd")},model:{value:r.ruleForm1.user_password,callback:function(e){r.$set(r.ruleForm1,"user_password","string"==typeof e?e.trim():e)},expression:"ruleForm1.user_password"}})],1),r._v(" "),t("el-form-item",{attrs:{prop:"user_confirmpwd"}},[t("el-input",{attrs:{type:"password",placeholder:r.$t("forgetPwd.placeholder.confirmPwd")},nativeOn:{keyup:function(e){if(!("button"in e)&&r._k(e.keyCode,"enter",13,e.key,"Enter"))return null;r.submitForm("ruleForm1")}},model:{value:r.ruleForm1.user_confirmpwd,callback:function(e){r.$set(r.ruleForm1,"user_confirmpwd","string"==typeof e?e.trim():e)},expression:"ruleForm1.user_confirmpwd"}})],1),r._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){r.submitForm("ruleForm1")}}},[r._v(r._s(r.$t("forgetPwd.submit")))])],1)],1)],1)],1)],1),r._v(" "),t("footer",[t("div",{},[r._v("\n        "+r._s(r.$t("register.footer"))+"\n      ")])])])},staticRenderFns:[]};var d=t("VU/8")(n,c,!1,function(r){t("AF/U")},"data-v-68afa59a",null);e.default=d.exports}});