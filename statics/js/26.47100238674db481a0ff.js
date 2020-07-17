(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"9y0t":function(e,t,s){e.exports=s("eIgg")},eIgg:function(e,t,s){"use strict";s.r(t);var r=s("eVuF"),a=s.n(r),n={data:function(){return{description:"Hello Vue Cesium",model1:{},label1:{},position1:{lng:114,lat:40,height:1},uri1:"./statics/SampleData/models/GroundVehicle/GroundVehicle.glb"}},mounted:function(){a.a.all([this.$refs.label.createPromise,this.$refs.model.createPromise]).then((function(e){e[0].viewer.zoomTo(e[0].viewer.entities)}))},methods:{ready:function(e){e.Cesium,e.viewer}}},v=s("JFUb"),_=Object(v.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("ModelGraphics")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-entity",{attrs:{position:e.position1,description:e.description,model:e.model1,label:e.label1},on:{"update:model":function(t){e.model1=t},"update:label":function(t){e.label1=t}}},[s("vc-graphics-label",{ref:"label",attrs:{text:"Hello Vue Cesium",font:"20px sans-serif"}}),e._v(" "),s("vc-graphics-model",{ref:"model",attrs:{uri:e.uri1}})],1)],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),s("hr")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-graphics-model")]),this._v(" component is used to load a 3D model based on glTF. Need to be used as a subcomponent of "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Load ModelGraphics with "),t("code",{pre:!0},[this._v("vc-graphics-model")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-entity")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":position")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"position1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":description")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"description"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":model.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"model1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":label.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"label1"')]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-graphics-label")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"label"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Hello Vue Cesium"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("font")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"20px sans-serif"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-graphics-label")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-graphics-model")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"model"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":uri")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"uri1"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-graphics-model")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-entity")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("description")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Hello Vue Cesium'")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("model1")]),e._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label1")]),e._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("position1")]),e._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("114.0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("40.0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("height")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1.0")]),e._v(" },\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("uri1")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'./statics/SampleData/models/GroundVehicle/GroundVehicle.glb'")]),e._v("\n      }\n    },\n    mounted() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Promise")]),e._v(".all(["),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$refs.label.createPromise, "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$refs.model.createPromise]).then("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("instances")]),e._v(") =>")]),e._v(" {\n        instances["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("].viewer.zoomTo(instances["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("].viewer.entities)\n      })\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("show")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A boolean Property specifying the visibility of the model.")])]),e._v(" "),s("tr",[s("td",[e._v("uri")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A string or Resource Property specifying the URI of the glTF asset.")])]),e._v(" "),s("tr",[s("td",[e._v("scale")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A numeric Property specifying a uniform linear scale.")])]),e._v(" "),s("tr",[s("td",[e._v("minimumPixelSize")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom.")])]),e._v(" "),s("tr",[s("td",[e._v("maximumScale")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The maximum scale size of a model. An upper limit for minimumPixelSize.")])]),e._v(" "),s("tr",[s("td",[e._v("incrementallyLoadTextures")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determine if textures may continue to stream in after the model is loaded.")])]),e._v(" "),s("tr",[s("td",[e._v("runAnimations")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A boolean Property specifying if glTF animations specified in the model should be started.")])]),e._v(" "),s("tr",[s("td",[e._v("clampAnimations")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes.")])]),e._v(" "),s("tr",[s("td",[e._v("shadows")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("1")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" An enum Property specifying whether the model casts or receives shadows from each light source. "),s("strong",[e._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),e._v(" "),s("tr",[s("td",[e._v("heightReference")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A Property specifying what the height is relative to. "),s("strong",[e._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),e._v(" "),s("tr",[s("td",[e._v("silhouetteColor")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("'RED'")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A Property specifying the Color of the silhouette.")])]),e._v(" "),s("tr",[s("td",[e._v("silhouetteSize")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A numeric Property specifying the size of the silhouette in pixels.")])]),e._v(" "),s("tr",[s("td",[e._v("color")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("'WHITE'")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A Property specifying the Color that blends with the model's rendered color.")])]),e._v(" "),s("tr",[s("td",[e._v("colorBlendMode")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" An enum Property specifying how the color blends with the model. "),s("strong",[e._v("HIGHLIGHT: 0, REPLACE: 1, MIX: 2")])])]),e._v(" "),s("tr",[s("td",[e._v("colorBlendAmount")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.5")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.")])]),e._v(" "),s("tr",[s("td",[e._v("imageBasedLightingFactor")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("{x: 1.0, y: 1.0}")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A property specifying the contribution from diffuse and specular image-based lighting.")])]),e._v(" "),s("tr",[s("td",[e._v("lightColor")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A property specifying the light color to use when shading the model. The default sun light color will be used when undefined.")])]),e._v(" "),s("tr",[s("td",[e._v("distanceDisplayCondition")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A NearFarScalar Property used to set pixelOffset based on distance from the camera.A Property specifying at what distance from the camera that this model will be displayed. "),s("strong",[e._v("structure: { near: number, far: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("nodeTransformations")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node's existing transformation as specified in the glTF, and does not replace the node's existing transformation. "),s("strong",[e._v("structure:{translation: {x: number, y: number, z: number}, rotation: {x: number, y: number, z: number, w: number}, scale:{x: number, y: number, z: number}}")])])]),e._v(" "),s("tr",[s("td",[e._v("articulations")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.")])]),e._v(" "),s("tr",[s("td",[e._v("clippingPlanes")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A property specifying the ClippingPlaneCollection used to selectively disable rendering the model.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html"}},[this._v("ModelGraphics")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),s("tr",[s("td",[e._v("definitionChanged")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);t.default=_.exports}}]);
//# sourceMappingURL=26.47100238674db481a0ff.js.map