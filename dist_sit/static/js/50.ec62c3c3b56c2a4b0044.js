webpackJsonp([50],{ddXE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),r=n("auNG"),s={name:"articleDetail",data:function(){return{detail:{}}},mounted:function(){this.initProto()},methods:{initProto:function(){var t=this,e={},n=this.$route.query.id;e.id=n,Object(r.d)(e).then(function(e){if(1e3!==e.status)return t.$message.error(e.msg),!1;t.detail=i()({},e.data)}).catch(function(){})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articleDetail container"},[n("div",{staticClass:"nav-bread"},[t._v(t._s(t.$t("navBread.des"))+": > "),n("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("navBread.index"))+" ")]),t._v(" > "),n("router-link",{attrs:{to:"/trade"}},[t._v(" "+t._s(t.$t("navBread.fabiTrade"))+" ")]),t._v(" > "),n("router-link",{attrs:{to:"/"}},[t._v("  "+t._s(t.$t("navBread.announcement"))+" ")])],1),t._v(" "),n("div",{staticClass:"nd-content container"},[n("h4",{attrs:{id:"nd-title"}},[t._v(t._s(t.detail.title))]),t._v(" "),n("p",{attrs:{id:"nd-link"}},[t._v(t._s(t.$t("announcement.link"))+"： "+t._s(t.detail.source)+" "),n("span",{staticClass:"time",attrs:{id:"nd-time"}},[t._v(t._s(t.detail.create_time))])]),t._v(" "),n("div",{staticClass:"nd-content-detail user-proto",attrs:{id:"user-proto"},domProps:{innerHTML:t._s(t.detail.content)}})])])},staticRenderFns:[]};var o=n("VU/8")(s,d,!1,function(t){n("vZtG")},"data-v-645efbe3",null);e.default=o.exports},vZtG:function(t,e){}});
//# sourceMappingURL=50.ec62c3c3b56c2a4b0044.js.map