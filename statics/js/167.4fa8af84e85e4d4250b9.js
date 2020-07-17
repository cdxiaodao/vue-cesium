(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{"/8wu":function(s,t,a){s.exports=a("F4dz")},F4dz:function(s,t,a){"use strict";a.r(t);var e=a("JFUb"),r=Object(e.a)({data:function(){return{appearance:{},geometryInstances:{},positions:[{lng:100.1340164450331,lat:31.05494287836128},{lng:108.08821010582645,lat:31.05494287836128}]}},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.geometryInstances=new t.GeometryInstance({geometry:new t.GroundPolylineGeometry({positions:t.Cartesian3.fromDegreesArray([100.1340164450331,32.05494287836128,108.08821010582645,32.097804071380715]),width:4}),id:"object returned when this instance is picked and to get/set per-instance attributes"}),this.appearance=new t.PolylineMaterialAppearance,a.camera.setView({destination:new t.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}})}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("GroundPolylinePrimitive")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载折线图元")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-primitive-polyline-ground",{attrs:{appearance:s.appearance,geometryInstances:s.geometryInstances}}),s._v(" "),a("vc-primitive-polyline-ground",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",[a("vc-geometry-polyline-ground",{attrs:{positions:s.positions,width:2}})],1)],1),s._v(" "),a("vc-provider-terrain-cesium"),s._v(" "),a("vc-layer-imagery",[a("vc-provider-imagery-mapbox",{attrs:{mapId:"mapbox.streets"}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-primitive-polyline-ground")]),this._v(" 组件用于加载贴地或 3DTiles 图元，只能通过几何体实例 "),t("code",{pre:!0},[this._v("vc-instance-geometry")]),this._v(" 加载 "),t("code",{pre:!0},[this._v("vc-geometry-polyline-ground")]),this._v("。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometryInstances")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometryInstances"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-mapbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapId")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mapbox.streets"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-mapbox")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.1340164450331")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.08821010582645")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".geometryInstances = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.GeometryInstance({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.GroundPolylineGeometry({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": Cesium.Cartesian3.fromDegreesArray([\n              "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.1340164450331")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32.05494287836128")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.08821010582645")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32.097804071380715")]),s._v("\n            ]),\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v("\n          }),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'object returned when this instance is picked and to get/set per-instance attributes'")]),s._v("\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineMaterialAppearance()\n        viewer.camera.setView({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1432246.8223880068")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5761224.588247942")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3297281.1889481535")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.20312220367255")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.9937536846355606")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.002443376981836387")]),s._v("\n          }\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("geometryInstances")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定用于渲染的几何体实例或者几何体实例集合。")])]),s._v(" "),a("tr",[a("td",[s._v("appearance")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元的外观参数。")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("interleave")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。")])]),s._v(" "),a("tr",[a("td",[s._v("releaseGeometryInstances")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否保留图元对几何体实例的输入，不保留可以节省内存。")])]),s._v(" "),a("tr",[a("td",[s._v("allowPicking")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。")])]),s._v(" "),a("tr",[a("td",[s._v("asynchronous")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元时异步加载还是同步加载。")])]),s._v(" "),a("tr",[a("td",[s._v("classificationType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是贴地形还是贴 3DTiles，还是两者都贴。 "),a("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("debugShowBoundingVolume")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否显示图元的边界球，用于调试使用。")])]),s._v(" "),a("tr",[a("td",[s._v("debugShowShadowVolume")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html"}},[this._v("GroundPolylinePrimitive")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=167.4fa8af84e85e4d4250b9.js.map