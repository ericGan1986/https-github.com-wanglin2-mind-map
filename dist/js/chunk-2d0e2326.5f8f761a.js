(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2326"],{"7e57":function(s,a,t){"use strict";t.r(a);var n=function(){var s=this;s._self._c;return s._m(0)},_=[function(){var s=this,a=s._self._c;return a("div",[a("h1",[s._v("开始")]),a("h2",[s._v("安装")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("npm i simple-mind-map\n")])]),a("p",[a("code",[s._v("0.2.0")]),s._v("版本之前的注意事项：")]),a("blockquote",[a("p",[s._v("注意：本项目为源码直接发布，并未进行打包，如果出现编译失败的情况，Vue CLI创建的项目可以在vue.config.js文件中增加如下配置来让babel-loader编译本依赖：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n     "),a("span",{staticClass:"hljs-attr"},[s._v("transpileDependencies")]),s._v(": ["),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map'")]),s._v("]\n}\n")])]),a("p",[s._v("其他项目请自行修改打包配置。")])]),a("h2",[s._v("使用")]),a("blockquote",[a("p",[s._v("本仓库的"),a("code",[s._v("web")]),s._v("目录提供了一个基于"),a("code",[s._v("Vue2")]),s._v("的完整项目，如果你遇到了一些使用上的疑惑，可以参考该项目的实现。")])]),a("blockquote",[a("p",[s._v("想要了解在其他框架中的使用，你可以参考以下这些非官方的实现：")]),a("p",[s._v("1."),a("a",{attrs:{href:"https://github.com/huangyuanyin/hyy-vue3-mindMap"}},[s._v("https://github.com/huangyuanyin/hyy-vue3-mindMap")]),s._v("：一个基于 Vue3.2 +ElementPlus的思维导图。")])]),a("p",[s._v("首先提供一个宽高不为0的容器元素：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"mindMapContainer"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])]),a("p",[s._v("另外再设置一下"),a("code",[s._v("css")]),s._v("样式：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-selector-id"},[s._v("#mindMapContainer")]),s._v(" * {\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")])]),a("p",[s._v("然后引入"),a("code",[s._v("simple-mind-map")]),s._v("库，创建一个实例：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map"')]),s._v(";\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" mindMap = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" MindMap({\n  "),a("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),a("span",{staticClass:"hljs-string"},[s._v("'mindMapContainer'")]),s._v("),\n  "),a("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": {\n    "),a("span",{staticClass:"hljs-string"},[s._v('"data"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"根节点"')]),s._v("\n    },\n    "),a("span",{staticClass:"hljs-string"},[s._v('"children"')]),s._v(": []\n  }\n});\n")])]),a("p",[s._v("这样即可得一个思维导图。")]),a("p",[s._v("如果你想要实现一个完整思维导图，那么通常你需要开发一些ui界面，通过"),a("code",[s._v("simple-mind-map")]),s._v("库提供的接口来实现更多功能。")]),a("p",[a("code",[s._v("simple-mind-map")]),s._v("支持丰富的配置、事件、命令，以及一些额外的插件扩展，阅读后续的文档来了解更多吧。")]),a("p",[s._v("默认引入的是未打包的"),a("code",[s._v("ES")]),s._v("模块，且只包含核心功能，不包含未注册的插件内容，能有效减小体积，不过你需要在你的项目中配置"),a("code",[s._v("babel")]),s._v("编译"),a("code",[s._v("simple-mind-map")]),s._v("，防止一些较新的"),a("code",[s._v("js")]),s._v("语法部分浏览器不支持。")]),a("p",[s._v("如果你需要"),a("code",[s._v("umd")]),s._v("模块格式的文件，比如以"),a("code",[s._v("CDN")]),s._v("的方式在浏览器上使用，那么你可以从"),a("code",[s._v("/simple-mind-map/dist/")]),s._v("目录中找到"),a("code",[s._v("simpleMindMap.umd.min.js")]),s._v("文件和"),a("code",[s._v("simpleMindMap.css")]),s._v("文件，复制到你的项目中，然后在页面中引入：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"simpleMindMap.css"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scr")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"simpleMindMap.umd.min.js"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("p",[s._v("会创建一个全局变量"),a("code",[s._v("window.simpleMindMap")]),s._v("。")]),a("p",[s._v("这种方式的缺点是会包含所有的内容，包括你没有注册的插件，所以整体体积会比较大。")]),a("p",[s._v("（v0.5.4+）如果你想直接在浏览器端通过"),a("code",[s._v("ES")]),s._v("模块的方式来使用，你可以在"),a("code",[s._v("/simple-mind-map/dist/")]),s._v("目录中找到"),a("code",[s._v("simpleMindMap.esm.js")]),s._v("和"),a("code",[s._v("simpleMindMap.esm.css")]),s._v("文件。")]),a("h2",[s._v("开发")]),a("p",[s._v("如果你只是使用库的话可以不用阅读此小节。")]),a("h3",[s._v("本地开发")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("git "),a("span",{staticClass:"hljs-built_in"},[s._v("clone")]),s._v(" https://github.com/wanglin2/mind-map.git\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" simple-mind-map\nnpm i\nnpm link\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" ..\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm i\nnpm link simple-mind-map\nnpm run serve\n")])]),a("h3",[s._v("打包库")]),a("p",[s._v("自"),a("code",[s._v("0.2.0")]),s._v("版本开始增加了对核心库"),a("code",[s._v("simple-mind-map")]),s._v("的打包，复用了示例项目"),a("code",[s._v("web")]),s._v("的打包工具。")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm run buildLibrary\n")])]),a("p",[a("code",[s._v("simple-mind-map")]),s._v("库的"),a("code",[s._v("package.json")]),s._v("文件提供了两个导出字段：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("{\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"module"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"index.js"')]),s._v(",\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"main"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"./dist/simpleMindMap.umd.min.js"')]),s._v(",\n}\n")])]),a("p",[s._v("支持"),a("code",[s._v("module")]),s._v("字段的环境会以"),a("code",[s._v("index.js")]),s._v("为入口，否则会以打包后的"),a("code",[s._v("simpleMindMap.umd.min.js")]),s._v("为入口。")]),a("h3",[s._v("编译文档")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web \nnpm run buildDoc\n")])]),a("h3",[s._v("打包demo")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm run build\n")])]),a("p",[s._v("会自动把"),a("code",[s._v("index.html")]),s._v("移动到根目录。")]),a("h2",[s._v("问题")]),a("h3",[s._v("1.在Vite中使用报错，提示xml-js依赖出错")]),a("p",[s._v("解决方法：使用如下引入方式：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map/dist/simpleMindMap.umd.min"')]),s._v("\n")])]),a("p",[a("code",[s._v("simple-mind-map")]),s._v("包提供未打包的入口字段"),a("code",[s._v("module")]),s._v("，依赖的"),a("code",[s._v("xml-js")]),s._v("包需要引入"),a("code",[s._v("node")]),s._v("环境下的包，所以在"),a("code",[s._v("Vite")]),s._v("中获取不到会报错，所以指定引入打包后的入口，相关包都已打包进产物，所以不会报错。")]),a("p",[s._v("如果需要二次开发，也就是必须要使用未打包代码的话，如果你不需要解析"),a("code",[s._v("xmind")]),s._v("文件的话，可以去除"),a("code",[s._v("xmind")]),s._v("模块，如果需要的话那么可以尝试换成其他的解析"),a("code",[s._v("xml")]),s._v("为"),a("code",[s._v("json")]),s._v("的库。")]),a("h3",[s._v("2.报错"),a("code",[s._v("Getting bbox of element \"text\" is not possible: TypeError: Cannot read properties of undefined (reading 'apply')")])]),a("p",[s._v("原因为安装的"),a("code",[s._v("@svgdotjs/svg.js")]),s._v("版本太高，手动降到"),a("code",[s._v("3.0.16")]),s._v("版本即可。")])])}],v={},i=v,l=t("2877"),e=Object(l["a"])(i,n,_,!1,null,null,null);a["default"]=e.exports}}]);