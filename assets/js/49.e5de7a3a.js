(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"18d1decd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./blogs/iOS/20210914-link.md?vue&type=template&id=2d3c993c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h3',{attrs:{"id":"简要"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#简要"}},[_vm._v("#")]),_vm._v(" 简要")]),_vm._v(" "),_c('p',[_vm._v("总体过程：预编译->编译->汇编->链接。"),_c('br'),_vm._v("\n编译生成"),_c('code',[_vm._v(".o")]),_vm._v(" 的二进制目标文件，链接合并所有"),_c('code',[_vm._v(".o")]),_vm._v(" 文件并把符号绑定到虚拟内存地址上。")]),_vm._v(" "),_c('h3',{attrs:{"id":"编译"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#编译"}},[_vm._v("#")]),_vm._v(" 编译")]),_vm._v(" "),_c('ol',[_c('li',[_vm._v("预编译\n"),_c('ul',[_c('li',[_vm._v("删除所有注释。")]),_vm._v(" "),_c('li',[_vm._v("删除"),_c('code',[_vm._v("#define")]),_vm._v("，并展开所有的宏定义。")]),_vm._v(" "),_c('li',[_vm._v("处理条件编译指令："),_c('code',[_vm._v("#if")]),_vm._v("、"),_c('code',[_vm._v("#ifdef")]),_vm._v("、"),_c('code',[_vm._v("#elif")]),_vm._v("，"),_c('code',[_vm._v("#else")]),_vm._v("、"),_c('code',[_vm._v("#endif")]),_vm._v("。")]),_vm._v(" "),_c('li',[_vm._v("展开"),_c('code',[_vm._v("#include")]),_vm._v("、"),_c('code',[_vm._v("#import")]),_vm._v("引入的头文件。")])])]),_vm._v(" "),_c('li',[_vm._v("编译\n"),_c('ul',[_c('li',[_vm._v("词法分析，从左往右逐行扫描源程序的字符，将代码切分成 "),_c('code',[_vm._v("Token")]),_vm._v("（词法单元，最小单位的字符或字符组合）。")]),_vm._v(" "),_c('li',[_vm._v("语法分析，将输出的"),_c('code',[_vm._v("Token")]),_vm._v("组合成语义，并根据节点构建"),_c('code',[_vm._v("AST")]),_vm._v("（抽象语法树）。")]),_vm._v(" "),_c('li',[_vm._v("静态分析，对代码进行错误检查，比如类型未定义、类型不匹配等问题。")]),_vm._v(" "),_c('li',[_vm._v("生成中间代码，通过"),_c('code',[_vm._v("AST")]),_vm._v("生成"),_c('code',[_vm._v("IR")]),_vm._v("（一种更接近机器码的语言，与平台无关，可以生成适合不同平台的机器码）。")]),_vm._v(" "),_c('li',[_vm._v("生成汇编代码，将中间代码生成依赖具体机器的汇编代码，得到"),_c('code',[_vm._v(".s")]),_vm._v("汇编文件。")])])]),_vm._v(" "),_c('li',[_vm._v("汇编\n"),_c('ul',[_c('li',[_vm._v("将"),_c('code',[_vm._v(".s")]),_vm._v("的汇编代码翻译成机器指令，得到"),_c('code',[_vm._v(".o")]),_vm._v("目标文件，即二进制文件。")])])])]),_vm._v(" "),_c('h3',{attrs:{"id":"链接"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#链接"}},[_vm._v("#")]),_vm._v(" 链接")]),_vm._v(" "),_c('ol',[_c('li',[_vm._v("合并所有"),_c('code',[_vm._v(".o")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("合并各个段，"),_c('code',[_vm._v(".text")]),_vm._v("(代码段)、"),_c('code',[_vm._v(".data")]),_vm._v("(已初始化的全局静态变量)、"),_c('code',[_vm._v(".bss")]),_vm._v("(未初始化的全局静态变量)、"),_c('code',[_vm._v(".symbal")]),_vm._v("(符号表)、"),_c('code',[_vm._v("section table")]),_vm._v("(段表)。")]),_vm._v(" "),_c('li',[_vm._v("符号解析，符号表合并之后进行符号解析，所有对符号的引用都要找到该符号定义的地方，常见错误：符号未定义、符号重定义。")])])]),_vm._v(" "),_c('li',[_vm._v("符号重定位\n"),_c('ul',[_c('li',[_vm._v("符号解析成功后，会进行符号重定位，即"),_c('strong',[_vm._v("给所有符号分配虚拟内存地址")]),_vm._v("（动态链接在启动时分配）。")])])])]),_vm._v(" "),_c('h3',{attrs:{"id":"扩展"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#扩展"}},[_vm._v("#")]),_vm._v(" 扩展")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("链接方式\n"),_c('ul',[_c('li',[_vm._v("静态链接：也就是编译链接，会把编译生成的"),_c('code',[_vm._v(".o")]),_vm._v(" 目标文件合并成一个 "),_c('code',[_vm._v("Mach-O")]),_vm._v(" 可执行文件，并载入"),_c('code',[_vm._v(".app")]),_vm._v(" 包中。")]),_vm._v(" "),_c('li',[_vm._v("动态链接：在程序启动时，加载 dyld 来做符号重定位，动态库没有复制到可执行文件中。")])])]),_vm._v(" "),_c('li',[_vm._v("死代码剥离\n"),_c('ul',[_c('li',[_vm._v("静态链接器有一个 "),_c('code',[_vm._v("Dead Code Stripping")]),_vm._v(" 功能，默认会清理 C C++ Swift 中的无用函数，以 main 函数为源头，跟随每个引用做标记，没有标记上的就会自动去除，但是对 OC 无效，因为 OC 是动态调用的，所以一般静态库要比动态库包要小一些。")])])]),_vm._v(" "),_c('li',[_vm._v("偏移地址\n"),_c('ul',[_c('li',[_vm._v("函数在编译链接后得到的可执行文件中，就确定了其函数地址的偏移量，偏移量是固定的，而可执行文件每次加载到内存中的首地址是变化的，那么运行时函数指针地址就是 offset+Mach-O 文件在内存中的首地址。")])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./blogs/iOS/20210914-link.md?vue&type=template&id=2d3c993c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./blogs/iOS/20210914-link.md

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

/* harmony default export */ var _20210914_link = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);