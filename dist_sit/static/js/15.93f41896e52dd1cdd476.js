webpackJsonp([15,64],{"+2Yq":function(t,e){},"35bE":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav guide-nav"},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:24}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.navItem,router:!1},on:{open:t.handleOpen,close:t.handleClose}},t._l(t.navObj,function(e){return n("el-submenu",{key:e.id,attrs:{index:e.name}},[n("template",{slot:"title"},[n("span",{on:{click:function(n){t.$emit("getArticleListContent",e.id,e.name)}}},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.child,function(e){return n("el-submenu",{key:e.id,attrs:{index:e.name}},[n("template",{slot:"title"},[n("span",{on:{click:function(n){t.$emit("getArticleListContent",e.id,e.name)}}},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.child,function(e){return n("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(n){t.$emit("getArticleListContent",e.id,e.name)}}},[t._v(t._s(e.name))])})],2)})],2)}))],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")({props:["navItem","navObj"],methods:{handleOpen:function(t,e){},handleClose:function(t,e){}}},a,!1,function(t){n("+2Yq")},null,null);e.default=i.exports},FxGV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),s=n("Gu7T"),l=n.n(s),o=n("auNG"),c={components:{navleft:n("35bE").default},data:function(){return{navItem:"",navName:"",navObj:[],title:"",id:0,contentList:[],pageOptions:{per_page_num:10,page:1},previousDisable:!0,nextDisable:!0,totalCount:0}},created:function(){this.init()},methods:{init:function(){var t=this;Object(o.f)().then(function(e){if(1e3!==e.status)return t.$message.error(e.msg),!1;t.navObj=[].concat(l()(e.data)),t.navObj.length>0&&(t.navItem=e.data[0].name,t.navName=e.data[0].name,t.getArticleListContent(t.navObj[0].id,t.navName))}).catch(function(){})},handleToPre:function(){this.pageOptions.page-1>=1&&(this.pageOptions.page=this.pageOptions.page--,this.getArticleListContentPage(this.id),this.nextDisable=!1,1===this.pageOptions.page&&(this.previousDisable=!0))},handleToNext:function(){this.pageOptions.page+1<parseInt(this.totalCount/this.pageOptions.per_page_num)&&(this.pageOptions.page=this.pageOptions.page++,this.getArticleListContentPage(this.id),this.previousDisable=!1,this.pageOptions.page===parseInt(this.totalCount/this.pageOptions.per_page_num)&&(this.nextDisable=!0))},getArticleListContent:function(t,e){var n=this,a=i()({},this.pageOptions);a.cate_id=t,Object(o.e)(a).then(function(a){if(n.navName=e,1e3!==a.status)return!1;n.id=t,n.contentList=a.data.article_list,n.totalCount=a.data.page_count,n.totalCount>n.pageOptions.per_page_num?(n.nextDisable=!1,n.previousDisable=!0):(n.nextDisable=!0,n.previousDisable=!0)}).catch(function(){})},getArticleListContentPage:function(t){var e=this,n=i()({},this.pageOptions);n.cate_id=t,Object(o.e)(n).then(function(t){if(1e3!==t.status)return!1;e.contentList=t.data.article_list}).catch(function(){})},handleGuideRouter:function(){window.location.reload()},handleToDetail:function(t){this.$router.push({name:"articleDetail",query:{id:t}})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guide container"},[n("div",{staticClass:"nav-bread"},[t._v(t._s(t.$t("navBread.des"))+": > "),n("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("navBread.index"))+" ")]),t._v(" > "),n("router-link",{attrs:{to:"/trade"}},[t._v(" "+t._s(t.$t("navBread.fabiTrade"))+" ")]),t._v("> "),n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.handleGuideRouter}},[t._v(" "+t._s(t.$t("navBread.announcement"))+" ")]),t._v(" > "),n("a",{attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(t.navName)+" ")])],1),t._v(" "),n("div",{staticClass:"clearfix"},[n("div",{staticClass:"navleft pull-left"},[n("navleft",{attrs:{navItem:t.navItem,navObj:t.navObj},on:{getArticleListContent:t.getArticleListContent}})],1),t._v(" "),n("div",{staticClass:"r-content pull-right"},[n("div",{staticClass:"notice-title",attrs:{id:"notice-title"},domProps:{innerHTML:t._s(t.navName)}}),t._v(" "),n("div",{attrs:{id:"notice-content"}},[n("ul",{staticClass:"notice-content"},t._l(t.contentList,function(e){return n("li",{key:e.id,staticClass:"clearfix",on:{click:function(n){t.handleToDetail(e.id)}}},[n("div",{staticClass:"pull-left"},[n("img",{staticClass:"notice-img",attrs:{src:e.image_path,alt:""}})]),n("div",{staticClass:"pull-right notice-detail"},[n("div",{staticClass:"clearfix"},[n("h4",{staticClass:"pull-left"},[t._v(t._s(e.title))]),n("div",{staticClass:"pull-right notice-detail-from"},[t._v("来源："+t._s(e.source)+"  "),n("span",{staticClass:"time"},[t._v("时间：  "+t._s(e.create_time))])])]),n("div",{staticClass:"notice-detail-content"},[t._v(" "+t._s(e.content))])])])})),t._v(" "),t.contentList.length>10?n("div",{staticClass:"link-page"},[n("el-button",{attrs:{type:"primary",disabled:t.previousDisable},on:{click:t.handleToPre}},[n("span",{staticClass:"el-icon-arrow-left"})]),t._v(" "),n("el-button",{attrs:{type:"primary",disabled:t.nextDisable},on:{click:t.handleToNext}},[n("span",{staticClass:"el-icon-arrow-right"})])],1):t._e()])])])])},staticRenderFns:[]};var u=n("VU/8")(c,r,!1,function(t){n("a6sR")},"data-v-77974cf1",null);e.default=u.exports},a6sR:function(t,e){}});
//# sourceMappingURL=15.93f41896e52dd1cdd476.js.map