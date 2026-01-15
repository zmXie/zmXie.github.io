(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_style_index_0_id_08862138_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(522);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_style_index_0_id_08862138_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_style_index_0_id_08862138_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue-demi/lib/index.esm.js
var index_esm = __webpack_require__(155);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuepress-theme-reco/global-components/Badge.vue?vue&type=script&lang=js&

/* harmony default export */ var Badgevue_type_script_lang_js_ = (Object(index_esm["b" /* defineComponent */])({
  functional: true,
  props: {
    type: {
      type: String,
      "default": 'tip'
    },
    text: String,
    vertical: {
      type: String,
      "default": 'top'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        slots = _ref.slots;
    return h('span', {
      "class": ['badge', props.type],
      style: {
        verticalAlign: props.vertical
      }
    }, props.text || slots()["default"]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuepress-theme-reco/global-components/Badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_components_Badgevue_type_script_lang_js_ = (Badgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuepress-theme-reco/global-components/Badge.vue?vue&type=style&index=0&id=08862138&lang=stylus&scoped=true&
var Badgevue_type_style_index_0_id_08862138_lang_stylus_scoped_true_ = __webpack_require__(566);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/vuepress-theme-reco/global-components/Badge.vue
var render, staticRenderFns





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_components_Badgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "08862138",
  null
  
)

/* harmony default export */ var Badge = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);