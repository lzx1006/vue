webpackJsonp([40],{YChd:function(e,s){},ruS2:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("Dd8w"),i=t.n(o),l=t("vMJZ"),r={props:["dialogVisible"],data:function(){return{googleInfo:{},ruleForm:{pass_double:null},rules:{pass_double:[{required:!0,message:this.$t("errorTips.noGoogleCode"),trigger:"blur"}]},validCode:!0,validTip:this.$t("verifyCode.title"),questions:{}}},computed:{},created:function(){this.initGoogleInfo()},methods:{initGoogleInfo:function(){var e=this;Object(l.j)().then(function(s){if(1e3!==s.status)return e.$message.error(s.msg),!1;e.googleInfo=s.data}).catch(function(){})},handleCopySuccess:function(){this.$message.success(this.$t("errorTips.copySuccess"))},handleCopyError:function(){this.$message.error(this.$t("errorTips.copyError"))},handleCloseDialog:function(){this.$emit("closeDialog","googleCentifyDialogVisible")},handleAppLink:function(){window.location.href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"},handleGoogleLink:function(){window.location.href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"},phoneSubmit:function(e){var s=this;this.$refs[e].validate(function(e){if(!e)return!1;var t=i()({},s.ruleForm);Object(l.q)(t).then(function(e){if(1e3!==e.status)return s.$message.error(e.msg),!1;s.$message.success(s.$t("errorTips.googleCodeSuccess")),s.handleCloseDialog()}).catch(function(){})})}}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("el-dialog",{staticClass:"google-dialog",attrs:{title:e.$t("user.bindGoogleVerify.bindTitle"),visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleCloseDialog,width:"588px"},on:{"update:visible":function(s){e.dialogVisible=s}}},[t("div",[t("p",[e._v(e._s(e.$t("user.bindGoogleVerify.des.part1")))]),e._v(" "),t("div",{staticClass:"title"},[t("span",[e._v("1")]),e._v(e._s(e.$t("user.bindGoogleVerify.des.part2")))]),e._v(" "),t("p",[e._v(e._s(e.$t("user.bindGoogleVerify.des.part3")))]),e._v(" "),t("div",{staticClass:"clearfix download"},[t("el-button",{staticClass:"pull-left",attrs:{type:"primary"},on:{click:e.handleAppLink}},[t("img",{attrs:{src:"/static/images/apple.png",alt:""}}),e._v(" APP Stove")]),e._v(" "),t("el-button",{staticClass:"pull-left",attrs:{type:"primary"},on:{click:e.handleGoogleLink}},[t("img",{attrs:{src:"/static/images/google.png",alt:""}}),e._v(" Google Play")])],1),e._v(" "),t("div",{staticClass:"title"},[t("span",[e._v("2")]),e._v(e._s(e.$t("user.bindGoogleVerify.des.part4")))]),e._v(" "),t("div",[e._v(e._s(e.$t("user.bindGoogleVerify.des.part5")))]),e._v(" "),t("p",{staticClass:"c-red"},[e._v(e._s(e.$t("user.bindGoogleVerify.des.part6")))]),e._v(" "),t("div",{staticClass:"clearfix google-key"},[t("div",{staticClass:"pull-left"},[t("img",{staticClass:"google-code-a",attrs:{src:e.googleInfo.qr_code_url}})]),e._v(" "),t("div",{staticClass:"pull-left"},[t("p",[e._v(e._s(e.$t("user.bindGoogleVerify.des.part7")))]),e._v(" "),t("div",{staticClass:"clearfix"},[t("div",{staticClass:"key google-key-a pull-left "},[e._v(e._s(e.googleInfo.secret_key))]),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.googleInfo.secret_key,expression:"googleInfo.secret_key",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.handleCopySuccess,expression:"handleCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.handleCopyError,expression:"handleCopyError",arg:"error"}],staticClass:"pull-left violet-border-btn"},[e._v(e._s(e.$t("copy")))])],1)])]),e._v(" "),t("div",{staticClass:"title"},[t("span",[e._v("3")]),e._v(e._s(e.$t("user.bindGoogleVerify.des.part8")))]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{label:"",prop:"pass_double"}},[t("el-input",{model:{value:e.ruleForm.pass_double,callback:function(s){e.$set(e.ruleForm,"pass_double","string"==typeof s?s.trim():s)},expression:"ruleForm.pass_double"}})],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(s){e.phoneSubmit("ruleForm")}}},[e._v(e._s(e.$t("dialog.sure")))])],1)],1)])},staticRenderFns:[]};var n=t("VU/8")(r,a,!1,function(e){t("YChd")},"data-v-9196e758",null);s.default=n.exports}});