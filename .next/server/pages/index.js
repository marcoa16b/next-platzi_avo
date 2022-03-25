"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HomePage = ()=>{\n    const [productList, setProductList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        window.fetch('/api/avo').then((response)=>response.json()\n        ).then(({ data , length  })=>{\n            setProductList(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Platzi and Next.js!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\50684\\\\Documents\\\\Platzi\\\\Curso de Next js\\\\next-platzi_avo\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            productList.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: product.image\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\50684\\\\Documents\\\\Platzi\\\\Curso de Next js\\\\next-platzi_avo\\\\pages\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\50684\\\\Documents\\\\Platzi\\\\Curso de Next js\\\\next-platzi_avo\\\\pages\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBR3pCLEtBQUssQ0FBQ0MsUUFBUSxPQUFTLENBQUM7SUFDdEIsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsSUFBSUgscURBQWMsQ0FBVyxDQUFDLENBQUM7SUFFakVBLHNEQUFlLEtBQU8sQ0FBQztRQUNyQk0sTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBVSxXQUN0QkMsSUFBSSxFQUFDQyxRQUFRLEdBQUlBLFFBQVEsQ0FBQ0MsSUFBSTtVQUM5QkYsSUFBSSxFQUFFLENBQUNHLENBQUFBLElBQUksR0FBRUMsTUFBTSxHQUFDLEdBQUssQ0FBQztZQUN6QlQsY0FBYyxDQUFDUSxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxNQUFNLDZFQUNIRSxDQUFHOzt3RkFDREEsQ0FBRzswQkFBQyxDQUFtQjs7Ozs7O1lBQ3ZCWCxXQUFXLENBQUNZLEdBQUcsRUFBQ0MsT0FBTywrRUFDckJGLENBQUc7OEJBQUVFLE9BQU8sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OztBQUkzQixDQUFDO0FBRUQsaUVBQWVmLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBsYXR6aV9hdm8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPFRQcm9kdWN0PihbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuZmV0Y2goJy9hcGkvYXZvJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHtkYXRhLCBsZW5ndGh9KSA9PiB7XG4gICAgICBzZXRQcm9kdWN0TGlzdChkYXRhKTtcbiAgICB9KVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5QbGF0emkgYW5kIE5leHQuanMhPC9kaXY+XG4gICAgICB7cHJvZHVjdExpc3QubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICA8ZGl2Pntwcm9kdWN0LmltYWdlfTwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWVQYWdlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();