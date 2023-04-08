(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f68f"],{b407:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this;s._self._c;return s._m(0)},n=[function(){var s=this,e=s._self._c;return e("div",[e("h1",[s._v("Start")]),e("h2",[s._v("Installation")]),e("blockquote",[e("p",[s._v("Things to note before version 0.2.0:")])]),e("pre",{staticClass:"hljs"},[e("code",[s._v("npm i simple-mind-map\n")])]),e("p",[e("code",[s._v("0.2.0")]),s._v(" Notes for previous versions:")]),e("blockquote",[e("p",[s._v("Note: This project is directly published in source code form and has not been packaged. If compilation fails, a Vue CLI-created project can add the following configuration to the vue.config.js file to allow babel-loader to compile this dependency:")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n  "),e("span",{staticClass:"hljs-attr"},[s._v("transpileDependencies")]),s._v(": ["),e("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map"')]),s._v("],\n};\n")])]),e("p",[s._v("Other projects should modify the packaging configuration as needed.")])]),e("h2",[s._v("Usage")]),e("blockquote",[e("p",[s._v("The "),e("code",[s._v("web")]),s._v(" directory of this repository provides a complete project based on "),e("code",[s._v("Vue2")]),s._v(". If you encounter any doubts about using it, you can refer to the implementation of this project.")])]),e("blockquote",[e("p",[s._v("To learn about its use in other frameworks, you can refer to the following unofficial implementations:")]),e("p",[s._v("1."),e("a",{attrs:{href:"https://github.com/huangyuanyin/hyy-vue3-mindMap"}},[s._v("https://github.com/huangyuanyin/hyy-vue3-mindMap")]),s._v(": A mind map based on Vue3.2+ElementPlus.")])]),e("p",[s._v("Firstly, provide a container element with a width and height not equal to 0:")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"mindMapContainer"')]),s._v(">")]),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])]),e("p",[s._v("Also, set the "),e("code",[s._v("CSS")]),s._v(" style again:")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-selector-id"},[s._v("#mindMapContainer")]),s._v(" * {\n  "),e("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),e("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")])]),e("p",[s._v("Then introduce the "),e("code",[s._v("simple-mind-map")]),s._v(" library and create an instance:")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),e("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map"')]),s._v(";\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" mindMap = "),e("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" MindMap({\n  "),e("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),e("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),e("span",{staticClass:"hljs-string"},[s._v("'mindMapContainer'")]),s._v("),\n  "),e("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": {\n    "),e("span",{staticClass:"hljs-string"},[s._v('"data"')]),s._v(": {\n        "),e("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"Root Node"')]),s._v("\n    },\n    "),e("span",{staticClass:"hljs-string"},[s._v('"children"')]),s._v(": []\n  }\n});\n")])]),e("p",[s._v("This will result in a mind map.")]),e("p",[s._v("If you want to implement a complete mind map, you usually need to develop some UI interfaces to achieve more functions through the interfaces provided by the "),e("code",[s._v("simple-mind-map")]),s._v(" library.")]),e("p",[e("code",[s._v("simple-mind-map")]),s._v(" supports rich configurations, events, commands, and some additional plugin extensions. Read the subsequent documentation to learn more.")]),e("p",[s._v("The non-packaged 'ES' module is introduced by default, and only contains core functions, not unregistered plugin content, which can effectively reduce the size. However, you need to configure the "),e("code",[s._v("babel")]),s._v(" compilation "),e("code",[s._v("simple mind-map")]),s._v(" in your project to prevent some newer "),e("code",[s._v("js")]),s._v(" syntax some browsers not supporting it.")]),e("p",[s._v("If you need a file in the format of "),e("code",[s._v("umd")]),s._v(" module, such as "),e("code",[s._v("CDN")]),s._v(" in the browser, Then you can find the "),e("code",[s._v("simpleMindMap.umd.min.js")]),s._v(" file and "),e("code",[s._v("simpleMindMap.css")]),s._v(" file in the "),e("code",[s._v("/simple-mind-map/dist/")]),s._v(" directory, copy it to your project, and then import it into the page:")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"simpleMindMap.css"')]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("scr")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"simpleMindMap.umd.min.js"')]),s._v(">")]),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),e("p",[s._v("A global variable "),e("code",[s._v("window.simpleMindMap")]),s._v(" will be created.")]),e("p",[s._v("The disadvantage of this method is that it will contain all the content, including the plugins you have not registered, so the overall volume will be relatively large.")]),e("p",[s._v("（v0.5.4+）If you want to use the "),e("code",[s._v("ES")]),s._v(" module directly on the browser side, you can find the "),e("code",[s._v("simpleMindMap.esm.js")]),s._v(" and "),e("code",[s._v("simpleMindMap.esm.css")]),s._v(" files in the "),e("code",[s._v("/simple-mind-map/dist/")]),s._v(" directory.")]),e("h2",[s._v("Development")]),e("p",[s._v("If you only use library, you don't need to read this section.")]),e("h3",[s._v("Local Development")]),e("pre",{staticClass:"hljs"},[e("code",[s._v("git "),e("span",{staticClass:"hljs-built_in"},[s._v("clone")]),s._v(" https://github.com/wanglin2/mind-map.git\n"),e("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" simple-mind-map\nnpm i\nnpm link\n"),e("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" ..\n"),e("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm i\nnpm link simple-mind-map\nnpm run serve\n")])]),e("h3",[s._v("Packaging the Library")]),e("p",[s._v("Since version "),e("code",[s._v("0.2.0")]),s._v(", we have added support for packaging the core library simple-mind-map. This uses the same packaging tool as the sample project web.")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm run buildLibrary\n")])]),e("p",[s._v("The "),e("code",[s._v("package.json")]),s._v(" file in the "),e("code",[s._v("simple-mind-map")]),s._v(" library provides two export fields:")]),e("pre",{staticClass:"hljs"},[e("code",[s._v("{\n  "),e("span",{staticClass:"hljs-attr"},[s._v('"module"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"index.js"')]),s._v(",\n  "),e("span",{staticClass:"hljs-attr"},[s._v('"main"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"./dist/simpleMindMap.umd.min.js"')]),s._v("\n}\n")])]),e("p",[s._v("Environments that support the "),e("code",[s._v("module")]),s._v(" field will use "),e("code",[s._v("index.js")]),s._v(" as the entry point, otherwise the packed "),e("code",[s._v("simpleMindMap.umd.min.js")]),s._v(" will be used as the entry point.")]),e("h3",[s._v("Compile the doc")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web \nnpm run buildDoc\n")])]),e("h3",[s._v("Packaging the Demo")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm run build\n")])]),e("p",[s._v("The "),e("code",[s._v("index.html")]),s._v(" file will be automatically moved to the root directory.")]),e("h2",[s._v("Problems")]),e("h3",[s._v("Error when using in Vite, indicating xml-js dependency error")]),e("p",[s._v("Solution: use the following import method:")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),e("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map/dist/simpleMindMap.umd.min"')]),s._v(";\n")])]),e("p",[s._v("The "),e("code",[s._v("simple-mind-map")]),s._v(" package provides the unpacked entry field "),e("code",[s._v("module")]),s._v(", and the "),e("code",[s._v("xml-js")]),s._v(" package dependency needs to import the package in the "),e("code",[s._v("node")]),s._v(" environment. Therefore, it cannot be obtained in "),e("code",[s._v("Vite")]),s._v(" and an error will be reported. Therefore, specify the import of the packed entry, and all relevant packages are packed into the product, so there will be no error.")]),e("p",[s._v("If you need to do further development, that is, you must use the unpacked code, and if you do not need to parse the "),e("code",[s._v("xmind")]),s._v(" file, you can remove the "),e("code",[s._v("xmind")]),s._v(" module. If you need it, you can try using other libraries to parse "),e("code",[s._v("xml")]),s._v(" to "),e("code",[s._v("json")]),s._v(".")]),e("h3",[s._v("Error "),e("code",[s._v("Getting bbox of element \"text\" is not possible: TypeError: Cannot read properties of undefined (reading 'apply')")])]),e("p",[s._v("The reason is that the installed version of "),e("code",[s._v("@svgdotjs/svg.js")]),s._v(" is too high. You can manually reduce it to the version of "),e("code",[s._v("3.0.16")]),s._v(".")])])}],i={},o=i,l=t("2877"),v=Object(l["a"])(o,a,n,!1,null,null,null);e["default"]=v.exports}}]);