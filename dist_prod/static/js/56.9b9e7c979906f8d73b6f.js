webpackJsonp([56],{"m/nK":function(t,e){},svxx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),s=a("mvHQ"),i=a.n(s),c=a("1zv/"),d=a("dI99"),l=a("qHo1"),o={components:{kLine:d.default,deepLine:l.default},data:function(){return{kEchart:null,deepEchart:null,timeType:"min1",ws:null,kLineShow:!0,tradeDataGetInterval:null,kData:{},deepData:{}}},created:function(){this.initWebsoketLink(),this.initDeepData()},beforeRouteLeave:function(t,e,a){clearInterval(this.tradeDataGetInterval),this.ws.close(),a()},beforeDestroy:function(){this.tradeDataGetInterval&&clearInterval(this.tradeDataGetInterval),this.ws.close()},methods:{splitData:function(t){for(var e=[],a=[],n=0;n<t.length;n++)e.push(t[n].splice(0,1)[0]),a.push(t[n]);return{categoryData:e,values:a}},sendData:function(){var t={trade_area_id:this.$route.query.trade_area_id,currency_id:this.$route.query.currency_id,time_type:this.timeType,request_type:"kline"};1===this.ws.readyState&&this.ws.send(i()(t))},kBtnChange:function(t){var e=(t=t||window.event).target||t.srcElement;if("span"===e.nodeName.toLowerCase()){this.timeType=e.dataset.type,this.sendData();var a=document.querySelectorAll(".k-echart-btn span"),n=void 0;for(n=0;n<a.length;n++)a[n].classList.remove("active");e.classList.add("active")}},kbtnClick:function(t){(t.target||t.srcElement).classList.add("active"),document.querySelector("#echart-tap-deep").classList.remove("active"),this.kLineShow=!0,document.querySelector(".deep-echart-container").classList.add("hidden"),document.querySelector(".k-echart-container").classList.remove("hidden"),document.querySelector(".k-echart-btn").classList.remove("hidden")},initDeepData:function(){var t=this,e={currency_trade_id:this.$route.query.trade_area_id,currency_id:this.$route.query.currency_id};Object(c.e)(e).then(function(e){if(1e3!==e.status)return!1;t.deepData=r()({},e.data)}).catch(function(){})},deepbtnClick:function(t){document.querySelector(".deep-echart-container").classList.remove("hidden"),document.querySelector(".k-echart-container").classList.add("hidden"),document.querySelector(".k-echart-btn").classList.add("hidden"),(t.target||t.srcElement).classList.add("active"),document.querySelector("#echart-tap-k").classList.remove("active"),this.$refs.deepechart.initEchart(),this.$refs.deepechart.renderEchart(),this.kLineShow=!1},initWebsoketLink:function(){this.ws=new WebSocket(this.$store.state.tradeUrl);var t=this;this.ws.onopen=function(){t.sendData(),t.tradeDataGetInterval=window.setInterval(function(){t.sendData()},8e3)},this.ws.onmessage=function(e){var a=JSON.parse(e.data).data,n=t.splitData(a);t.kData=r()({},n);var s=t.kData.values,i=s[s.length-1];document.querySelector(".tooltip-open").innerHTML=i[0],document.querySelector(".tooltip-high").innerHTML=i[2],document.querySelector(".tooltip-low").innerHTML=i[3],document.querySelector(".tooltip-close").innerHTML=i[1]}}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kline"},[a("div",{staticClass:"clearfix btn-group"},[t.kLineShow?a("div",[a("div",{staticClass:"pull-left separate"},[t._v(t._s(t.$t("translateLang.tradeDetail.text10")))]),t._v(" "),a("p",{staticClass:"k-echart-btn pull-left",on:{click:function(e){t.kBtnChange(e)}}},[a("span",{staticClass:"active",attrs:{"data-type":"min1"}},[t._v("1"+t._s(t.$t("translateLang.tradeDetail.text11")))]),t._v(" "),a("span",{attrs:{"data-type":"min15"}},[t._v("15"+t._s(t.$t("translateLang.tradeDetail.text11")))]),t._v(" "),a("span",{attrs:{"data-type":"min30"}},[t._v("30"+t._s(t.$t("translateLang.tradeDetail.text11")))]),t._v(" "),a("span",{attrs:{"data-type":"hou1"}},[t._v("1"+t._s(t.$t("translateLang.tradeDetail.text12")))]),t._v(" "),a("span",{attrs:{"data-type":"hou2"}},[t._v("2"+t._s(t.$t("translateLang.tradeDetail.text12")))]),t._v(" "),a("span",{attrs:{"data-type":"hou4"}},[t._v("4"+t._s(t.$t("translateLang.tradeDetail.text12")))]),t._v(" "),a("span",{attrs:{"data-type":"hou6"}},[t._v("6"+t._s(t.$t("translateLang.tradeDetail.text12")))]),t._v(" "),a("span",{attrs:{"data-type":"hou12"}},[t._v("12"+t._s(t.$t("translateLang.tradeDetail.text12")))]),t._v(" "),a("span",{attrs:{"data-type":"days"}},[t._v("1"+t._s(t.$t("translateLang.tradeDetail.text13")))]),t._v(" "),a("span",{attrs:{"data-type":"week"}},[t._v("1"+t._s(t.$t("translateLang.tradeDetail.text14")))]),t._v(" "),a("span",{attrs:{"data-type":"month"}},[t._v("1"+t._s(t.$t("translateLang.tradeDetail.text15")))])])]):t._e(),t._v(" "),a("div",{staticClass:"echart-tap pull-right clearfix"},[a("span",{staticClass:"pull-left active",attrs:{id:"echart-tap-k"},on:{click:function(e){t.kbtnClick(e)}}},[t._v(t._s(t.$t("translateLang.tradeDetail.text17")))]),t._v(" "),a("span",{staticClass:"pull-right",attrs:{id:"echart-tap-deep"},on:{click:function(e){t.deepbtnClick(e)}}},[t._v(t._s(t.$t("translateLang.tradeDetail.text18")))])])]),t._v(" "),a("k-line",{attrs:{data:t.kData}}),t._v(" "),a("div",{staticClass:"deep-echart-container hidden"},[t.deepData?a("deep-line",{ref:"deepechart",attrs:{data:t.deepData}}):t._e()],1)],1)},staticRenderFns:[]};var p=a("VU/8")(o,u,!1,function(t){a("m/nK")},"data-v-54658779",null);e.default=p.exports}});