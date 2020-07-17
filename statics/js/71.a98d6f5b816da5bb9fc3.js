(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"5HAo":function(e,s,t){e.exports=t("VxOm")},VxOm:function(e,s,t){"use strict";t.r(s);var r=t("JFUb"),a=Object(r.a)({data:function(){return{fragmentShader:"\n        uniform sampler2D colorTexture;\n        varying vec2 v_textureCoordinates;\n        float hash(float x){\n          return fract(sin(x*23.3)*13.13);\n        }\n        void main(void){\n          float time = czm_frameNumber / 60.0;\n          vec2 resolution = czm_viewport.zw;\n          vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n          vec3 c=vec3(.6,.7,.8);\n          float a=-.4;\n          float si=sin(a),co=cos(a);\n          uv*=mat2(co,-si,si,co);\n          uv*=length(uv+vec2(0,4.9))*.3+1.;\n          float v=1.-sin(hash(floor(uv.x*100.))*2.);\n          float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n          c*=v*b;\n          gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n        }  "}},methods:{ready:function(e){this.cesiumInstance=e;var s=this.cesiumInstance;s.Cesium,s.viewer}}},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("PostProcessStage")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Example")]),e._v(" "),t("h3",[e._v("Load a PostProcessStage")]),e._v(" "),t("h4",[e._v("Preview")]),e._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:e.ready}},[t("vc-stage-process-post",{attrs:{fragmentShader:e.fragmentShader}})],1)],1)]],2),e._v(" "),t("h4",[e._v("Code")]),e._v(" "),e._m(1),e._v(" "),t("h2",[e._v("Instance Properties")]),e._v(" "),e._m(2),e._v(" "),t("hr"),e._v(" "),t("h2",[e._v("Event")]),e._v(" "),e._m(3),e._v(" "),t("hr")],1)}),[function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-stage-process-post")]),this._v(" component is used to run a post-process stage on either the texture rendered by the scene or the output of a previous post-process stage.")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-stage-process-post")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":fragmentShader")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"fragmentShader"')]),e._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-stage-process-post")]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"actionscript"}},[e._v("\n  export "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        fragmentShader: `\n          uniform sampler2D colorTexture;\n          varying vec2 v_textureCoordinates;\n          float hash(float x){\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" fract(sin(x*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("23.3")]),e._v(")*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("13.13")]),e._v(");\n          }\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("void")]),e._v(" main("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("void")]),e._v("){\n            float time = czm_frameNumber / "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("60.0")]),e._v(";\n            vec2 resolution = czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2.")]),e._v("-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 c=vec3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v(".6")]),e._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v(".7")]),e._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v(".8")]),e._v(");\n            float a="),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-.4")]),e._v(";\n            float si=sin(a),co=cos(a);\n            uv*=mat2(co,-si,si,co);\n            uv*=length(uv+vec2("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("4.9")]),e._v("))*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v(".3")]),e._v("+"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1.")]),e._v(";\n            float v="),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1.")]),e._v("-sin(hash(floor(uv.x*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("100.")]),e._v("))*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2.")]),e._v(");\n            float b=clamp(abs(sin("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20.")]),e._v("*time*v+uv.y*("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("5.")]),e._v("/("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2.")]),e._v("+v))))"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-.95")]),e._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.")]),e._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1.")]),e._v(")*"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20.")]),e._v(";\n            c*=v*b;\n            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v("), "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.5")]),e._v(");\n          }  `\n      }\n    },\n    methods: {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".cesiumInstance = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".cesiumInstance\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),e._v(" "),t("th",[e._v("type")]),e._v(" "),t("th",[e._v("default")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("fragmentShader")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("required")]),e._v(" The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture.")])]),e._v(" "),t("tr",[t("td",[e._v("uniforms")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" An object whose properties will be used to set the shaders uniforms.")])]),e._v(" "),t("tr",[t("td",[e._v("textureScale")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("1.0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport.")])]),e._v(" "),t("tr",[t("td",[e._v("forcePowerOfTwo")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions.")])]),e._v(" "),t("tr",[t("td",[e._v("sampleMode")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" How to sample the input color texture. "),t("strong",[e._v("{NEAREST: 0, LINEAR: 1}")])])]),e._v(" "),t("tr",[t("td",[e._v("pixelFormat")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The color pixel format of the output texture.")])]),e._v(" "),t("tr",[t("td",[e._v("pixelDatatype")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The pixel data type of the output texture.")])]),e._v(" "),t("tr",[t("td",[e._v("clearColor")]),e._v(" "),t("td",[e._v("Object|Array|String")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("BLACK")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The color to clear the output texture to.")])]),e._v(" "),t("tr",[t("td",[e._v("scissorRectangle")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The rectangle to use for the scissor test.")])]),e._v(" "),t("tr",[t("td",[e._v("name")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated.")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),e._v(" "),t("th",[e._v("parameter")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("ready")]),e._v(" "),t("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),t("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);s.default=a.exports}}]);
//# sourceMappingURL=71.a98d6f5b816da5bb9fc3.js.map