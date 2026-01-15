(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"18d1decd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./blogs/iOS/20211018-binary.md?vue&type=template&id=79844700&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h3',{attrs:{"id":"原理"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#原理"}},[_vm._v("#")]),_vm._v(" 原理")]),_vm._v(" "),_c('p',[_vm._v("二进制重排就是通过更改符号的链接顺序，将启动时所执行的函数统一放到前面来链接，避免启动加载时出现过多的 "),_c('strong',[_vm._v("PageFault（缺页中断）")]),_vm._v("，从而提高启动速度。")]),_vm._v(" "),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"title"}),_c('ul',[_c('li',[_c('strong',[_vm._v("PageFault：当进程访问一个虚拟内存页而对应的物理内存页不存在时，就会触发一次 PageFault")]),_vm._v("，届时系统会暂停进程，加载一个物理内存页并载入内容，然后再把控制权重新交给进程。")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("页映射：虚拟内存页与物理内存页的映射")]),_vm._v("（64 位处理器每一页是 8kb）。我们都知道，程序经过编译链接后，每个符号都绑定了一个虚拟内存地址，按照偏移量分布在可执行文件中，在运行时只能通过映射来访问物理地址，这样进程之间就彻底隔离开了。")])])]),_c('img',{attrs:{"src":_vm.$withBase('/imgs/page.jpeg'),"alt":"mixureSecure","height":"500px"}}),_vm._v(" "),_c('p',[_vm._v("默认情况下，符号链接的顺序是按照编译的先后顺序来执行的，那么启动时所需要执行的函数可能分布在 N 个 Page 中，在加载时就会触发 N 个 PageFault。"),_c('br'),_vm._v("\n而重排的目的就是把启动时执行的函数放在前面链接，那么这些函数就集中在前面几个 Page 中，出现 PageFault 次数大大减少，从而缩减了启动时间。")]),_vm._v(" "),_c('h3',{attrs:{"id":"问题"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#问题"}},[_vm._v("#")]),_vm._v(" 问题")]),_vm._v(" "),_c('ol',[_c('li',[_vm._v("如何获取启动时用到的函数符号？")]),_vm._v(" "),_c('li',[_vm._v("如何把这些符号放在前面链接？")])]),_vm._v(" "),_c('p',[_vm._v("首先了解两个东西：Linkmap、order_file。")]),_vm._v(" "),_c('h3',{attrs:{"id":"linkmap"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#linkmap"}},[_vm._v("#")]),_vm._v(" Linkmap")]),_vm._v(" "),_c('p',[_vm._v("linkmap:是 iOS 编译过程的中间产物，记录了所有符号的布局。 在 xcode 的 Build Settings 里开启 Write Link Map File：Yes "),_c('br')]),_vm._v(" "),_c('img',{attrs:{"src":_vm.$withBase('/imgs/linkmap.png'),"alt":"mixureSecure"}}),_vm._v(" "),_c('p',[_vm._v("主要分为三个部分：")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Object files：编译后生成的文件列表。")]),_vm._v(" "),_c('li',[_vm._v("Sections：记录 Mach-O 各个段的地址范围。")]),_vm._v(" "),_c('li',[_vm._v("Symbols：按顺序记录每个符号的地址范围。")])]),_vm._v(" "),_c('p',[_vm._v("获取启动时的用到的函数：")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("扫描 linkmap 文件，获取+load 方法"),_c('code',[_vm._v("\"^\\+\\[.*\\ load\\]$\"")]),_vm._v("、c++静态初始化函数"),_c('code',[_vm._v("__DATA，__mod_init_func")]),_vm._v("。")]),_vm._v(" "),_c('li',[_vm._v("通过 "),_c('a',{attrs:{"href":"https://github.com/facebook/fishhook","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("fishhook"),_c('OutboundLink')],1),_vm._v(" hook "),_c('code',[_vm._v("objc_msgSend")]),_vm._v(" 函数，获取 OC 方法。")])]),_vm._v(" "),_c('h3',{attrs:{"id":"order-file"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#order-file"}},[_vm._v("#")]),_vm._v(" order_file")]),_vm._v(" "),_c('p',[_vm._v("order_file：是链接器的一个参数，链接时会把 order 文件中的符号按照顺序放在 section 的开始。在 xcode 的 Build Settings 里填写.order 的文件路径。\n"),_c('img',{attrs:{"src":_vm.$withBase('/imgs/order_file.png'),"alt":"mixureSecure"}}),_vm._v("\n这样就可以把启动时的函数符号放在前面链接了。")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"https://mp.weixin.qq.com/s?__biz=MzI1MzYzMjE0MQ==&mid=2247485101&idx=1&sn=abbbb6da1aba37a04047fc210363bcc9&scene=21#wechat_redirect","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("抖音二进制重排"),_c('OutboundLink')],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./blogs/iOS/20211018-binary.md?vue&type=template&id=79844700&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./blogs/iOS/20211018-binary.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var _20211018_binary = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);