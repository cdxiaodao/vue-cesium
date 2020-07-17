(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{"5NSg":function(s,a,t){s.exports=t("n/+j")},"n/+j":function(s,a,t){"use strict";t.r(a);var r=t("ln6h"),e=t.n(r),v=t("Wa2I"),n=t.n(v),l={data:function(){return{values:[],lngs:[],lats:[],breaks:[.1,10,25,50,100,250,500],colors:["#A5F38D","#3DB93F","#63B8F9","#0002E2","#FA00FA","#7F0140"]}},methods:{ready:function(s){var a,t,r,v,l,_;return e.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return this.cesiumInstance=s,a=this.cesiumInstance,t=a.Cesium,a.viewer,p.next=4,e.a.awrap(t.Resource.fetchJson({url:"./statics/SampleData/weather/guilin.json"}));case 4:r=p.sent,v=[],l=[],_=[],r.reduce((function(s,a){v.push(n()(a.lon)),l.push(n()(a.lat)),_.push(n()(a.value))}),[]),this.lngs=v,this.lats=l,this.values=_;case 12:case"end":return p.stop()}}),null,this)},subReady:function(s){s.Cesium;var a=s.viewer;s.cesiumObject;a.zoomTo(a.dataSources.get(0))}}},_=t("JFUb"),p=Object(_.a)(l,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("克里金插值色斑图")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加热力图到场景")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[0!==s.values.length?t("vc-kriging-map",{attrs:{breaks:s.breaks,values:s.values,lngs:s.lngs,lats:s.lats,colors:s.colors,clipCoords:"./statics/SampleData/shp/guilin.json"},on:{ready:s.subReady}}):s._e(),s._v(" "),t("vc-provider-terrain-cesium")],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-kriging-map")]),this._v(" 组件用于加载克里金插值色斑图，基于 "),a("code",{pre:!0},[this._v("kriging.js")]),this._v(" 和 "),a("code",{pre:!0},[this._v("turf.js")]),this._v(" 实现。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-kriging-map")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"values.length !== 0"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":breaks")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"breaks"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":values")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"values"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":lngs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lngs"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":lats")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lats"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":colors")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"colors"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clipCoords")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/shp/guilin.json"')]),s._v("\n        >")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-kriging-map")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("values")]),s._v(": [],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lngs")]),s._v(": [],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lats")]),s._v(": [],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("breaks")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("250")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colors")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A5F38D'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3DB93F'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#63B8F9'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#0002E2'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FA00FA'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#7F0140'")]),s._v("]\n        }\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" ready(cesiumInstance) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" data = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("await")]),s._v(" Cesium.Resource.fetchJson({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/weather/guilin.json'")]),s._v(" })\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" lngs = []\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" lats = []\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" values = []\n          data.reduce("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("pre, cur")]),s._v(") =>")]),s._v(" {\n            lngs.push("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("parseFloat")]),s._v("(cur.lon))\n            lats.push("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("parseFloat")]),s._v("(cur.lat))\n            values.push("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("parseFloat")]),s._v("(cur.value))\n          }, [])\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lngs = lngs\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lats = lats\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".values = values\n        },\n        subReady({ Cesium, viewer, cesiumObject }) {\n          viewer.zoomTo(viewer.dataSources.get("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("))\n        }\n      }\n    }\n  ")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v("\n>")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("krigingModel")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("'exponential'")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定克里金模型名字，取 'gaussian', 'spherical', 'exponential'。")])]),s._v(" "),t("tr",[t("td",[s._v("krigingSigma2")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定克里金插值 sigma 参数。")])]),s._v(" "),t("tr",[t("td",[s._v("krigingAlpha")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定克里金插值 alpha 参数。")])]),s._v(" "),t("tr",[t("td",[s._v("colors")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图分段颜色数组。")])]),s._v(" "),t("tr",[t("td",[s._v("breaks")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图分段数组。")])]),s._v(" "),t("tr",[t("td",[s._v("clipCoords")]),s._v(" "),t("td",[s._v("Array|String")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("[]")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图裁剪的坐标数组或 json 文件地址。")])]),s._v(" "),t("tr",[t("td",[s._v("show")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图是否显示。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject }")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])])])])}],!1,null,null,null);a.default=p.exports}}]);
//# sourceMappingURL=183.232cffc43572ed526905.js.map