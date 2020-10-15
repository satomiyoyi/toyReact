/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MyComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent, _Component);\n\n  var _super = _createSuper(MyComponent);\n\n  function MyComponent() {\n    var _this;\n\n    _classCallCheck(this, MyComponent);\n\n    _this = _super.call(this);\n    _this.state = {\n      a: 1,\n      b: 2\n    };\n    return _this;\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", {\n        id: \"a\"\n      }, \"my component\"), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n        onClick: function onClick() {\n          _this2.setState({\n            a: _this2.state.a++\n          });\n        }\n      }, \"click\"), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null, this.state.a.toString()), this.children);\n    }\n  }]);\n\n  return MyComponent;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar component = (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyComponent, {\n  id: \"d\"\n}, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null, \"abc\"), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null));\nwindow.a = (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.render)(component, document.body); // var body = document.getElementsByTagName('body')[0];\n// body.appendChild(window.a);\n\n//# sourceURL=webpack://toyReact/./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! namespace exports */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component,\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"render\": () => /* binding */ render\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol('renderToDom');\n\nvar ElementWraper = /*#__PURE__*/function () {\n  function ElementWraper(tagName) {\n    _classCallCheck(this, ElementWraper);\n\n    this.root = document.createElement(tagName);\n  }\n\n  _createClass(ElementWraper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // 如果属性为onClick 单独识别\n      // 绑定事件，建立监听方法\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        this.root.addEventListener(RegExp.$1.toLowerCase(), value);\n      } else {\n        this.root.setAttribute(name, value);\n      }\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(elem) {\n      var range = document.createRange();\n      range.setStart(this.root, this.root.childNodes.length);\n      range.setEnd(this.root, this.root.childNodes.length);\n      elem[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return ElementWraper;\n}();\n\nvar TextWraper = /*#__PURE__*/function () {\n  function TextWraper(content) {\n    _classCallCheck(this, TextWraper);\n\n    this.root = document.createTextNode(content);\n  }\n\n  _createClass(TextWraper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWraper;\n}(); // 组件基类\n\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    // 定义私有属性_root\n    this._root = null;\n    this.children = [];\n    this.props = Object.create(null);\n    this._range = null;\n    this.state = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    } // 打破root的思路使用range进行dom插入\n    // 私有方法\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      range.deleteContents();\n      range.insertNode(this.render().root);\n    } // // root属性获取方法\n    // get root() {\n    //     if (!this._root) {\n    //         // 子类获取root不得 会调用自身render方法\n    //         // render方法执行返回一段jsx语法 经过编译会自动调用createElement方法\n    //         // 如果createElement方法第一个参数为组件那么继续递归，直到找到第一个参数为tagName的情况为止\n    //         // 返回TextWraper 或者 ElementWraper类的实例为止\n    //         this._root = this.render().root;\n    //     }\n    //     return this._root;\n    // }\n\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      this._range.deleteContents();\n\n      this[RENDER_TO_DOM](this._range);\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      if (this.state === null || _typeof(this.state) !== 'object') {\n        this.state = newState;\n        this.rerender();\n        return;\n      }\n\n      var merge = function merge(oldState, newState) {\n        for (var item in oldState) {\n          if (oldState === null || _typeof(oldState) !== 'object') {\n            newState[item] = oldState[item];\n          } else {\n            merge(oldState[item], newState[item]);\n          }\n        }\n      };\n\n      merge(this.state, newState);\n      this.rerender();\n    }\n  }]);\n\n  return Component;\n}();\nfunction createElement(tag, attributes) {\n  var dom = null;\n\n  if (typeof tag === 'string') {\n    dom = new ElementWraper(tag);\n  } else {\n    dom = new tag();\n  }\n\n  for (var attr in attributes) {\n    dom.setAttribute(attr, attributes[attr]);\n  } // 递归插入元素（数组）\n\n\n  var insertChildren = function insertChildren(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        // 文本节点创建文本节点即可\n        if (typeof child === 'string') {\n          child = new TextWraper(child);\n        } // Component 实例children属性可能为数组 那么递归调用插入元素\n\n\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          insertChildren(child);\n        } // 如果非文节点，也非数组，那人为是TextWraper或者elementWraper实例执行appendChild操作\n        else {\n            dom.appendChild(child);\n          }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children);\n  return dom;\n}\nfunction render(component, parentComponent) {\n  // render 方法并不是只有appendChild一种情况，同时需要位置信息\n  // dom api中range api是跟位置相关的\n  // parentComponent.appendChild(component.root);\n  var range = document.createRange();\n  range.setStart(parentComponent, 0);\n  range.setEnd(parentComponent, parentComponent.childNodes.length);\n  component[RENDER_TO_DOM](range);\n}\n\n//# sourceURL=webpack://toyReact/./toy-react.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;