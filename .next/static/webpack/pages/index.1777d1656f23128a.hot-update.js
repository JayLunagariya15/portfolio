"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/Sidebar.js":
/*!*******************************!*\
  !*** ./src/layout/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Sidebar = ()=>{\n    _s();\n    const { navChange , nav , menus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__.TokyoContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"leftpart_inner w-full h-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo\",\n                    \"data-type\": \"image\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                className: \"font-poppins font-black text-[31px] tracking-[5px] text-black\",\n                                children: \"Jay Lunagariya\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu px-[0px] py-[50px] w-full float-left\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"transition_link m-0 list-none\",\n                        children: menus.map((menu)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"m-0 w-full float-left \".concat(menu.href == nav ? \"active\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black\",\n                                    href: \"#\".concat(menu.href),\n                                    onClick: ()=>navChange(menu.href),\n                                    children: menu.name\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, menu.id, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"copyright w-full float-left\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[15px] text-[#999] font-montserrat leading-[25px]\",\n                        children: [\n                            \"\\xa9 \",\n                            new Date().getFullYear(),\n                            \" Jay Lunagariya\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\layout\\\\Sidebar.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"ATY2jdfxTYWOwIfPJeJNRZ6z7NE=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUM7QUFDTztBQUUxQyxNQUFNRSxVQUFVLElBQU07O0lBQ3BCLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxJQUFHLEVBQUVDLE1BQUssRUFBRSxHQUFHTCxpREFBVUEsQ0FBQ0Msa0RBQVlBO0lBQ3pELHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7b0JBQU9DLGFBQVU7O3dCQUM3QjtzQ0FFRCw4REFBQ0M7NEJBQUVDLE1BQUs7c0NBQ04sNEVBQUNDO2dDQUFLSixXQUFVOzBDQUFnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3BGLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0s7d0JBQUdMLFdBQVU7a0NBQ1hGLE1BQU1RLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7Z0NBQUdSLFdBQVcseUJBQTBELE9BQWpDTyxLQUFLSixJQUFJLElBQUlOLE1BQU0sV0FBVyxFQUFFOzBDQUN0RSw0RUFBQ0s7b0NBQ0NGLFdBQVU7b0NBQ1ZHLE1BQU0sSUFBYyxPQUFWSSxLQUFLSixJQUFJO29DQUNuQk0sU0FBUyxJQUFNYixVQUFVVyxLQUFLSixJQUFJOzhDQUVqQ0ksS0FBS0csSUFBSTs7Ozs7OytCQU5tRUgsS0FBS0ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzhCQWM5Riw4REFBQ1o7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNZO3dCQUFFWixXQUFVOzs0QkFBeUQ7NEJBQ2pFLElBQUlhLE9BQU9DLFdBQVc7NEJBQUc7MENBQzVCLDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWI7R0E1Q01wQjtLQUFBQTtBQTZDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L1NpZGViYXIuanM/ZmY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRva3lvQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0XCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbmF2Q2hhbmdlLCBuYXYsIG1lbnVzIH0gPSB1c2VDb250ZXh0KFRva3lvQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdHBhcnQgdy1bNDUwcHhdIGgtWzEwMHZoXSBmaXhlZCBmbGV4IGl0ZW1zLWNlbnRlciB6LVsxMl0gcHgtWzEwMHB4XSBweS1bMHB4XSBiZy13aGl0ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRwYXJ0X2lubmVyIHctZnVsbCBoLWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBkYXRhLXR5cGU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgey8qIFlvdSBjYW4gdXNlIGltYWdlIG9yIHRleHQgYXMgbG9nby4gZGF0YS10eXBlIHZhbHVlcyBhcmU6IFwiaW1hZ2VcIiBhbmQgXCJ0ZXh0XCIgKi99XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1ibGFjayB0ZXh0LVszMXB4XSB0cmFja2luZy1bNXB4XSB0ZXh0LWJsYWNrXCI+SmF5IEx1bmFnYXJpeWE8L3RleHQ+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cIm1heC13LVsxNTBweF1cIiBzcmM9XCJhc3NldHMvaW1nL3BlcnNvbmFsL2xvZ29fYi5wbmdcIiBhbHQ9XCJhc3NldHMvaW1nL2xvZ28vZGFyay5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgZm9udC1ibGFjayB0ZXh0LVszMXB4XSB0cmFja2luZy1bNXB4XVwiPlRPS1lPPC9oMz4gKi99XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IHB4LVswcHhdIHB5LVs1MHB4XSB3LWZ1bGwgZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyYW5zaXRpb25fbGluayBtLTAgbGlzdC1ub25lXCI+XHJcbiAgICAgICAgICAgIHttZW51cy5tYXAoKG1lbnUpID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbS0wIHctZnVsbCBmbG9hdC1sZWZ0ICR7bWVudS5ocmVmID09IG5hdiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9IGtleT17bWVudS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjNzY3Njc2XSBjYXBpdGFsaXplIGlubGluZS1ibG9jayBmb250LW1lZGl1bSBmb250LW1vbnRzZXJyYXQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgIyR7bWVudS5ocmVmfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdkNoYW5nZShtZW51LmhyZWYpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIHB1dCBiZWxvdyBjb2RlIGhlcmUgd2l0aCA8ZGl2PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodCB3LWZ1bGwgZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gdGV4dC1bIzk5OV0gZm9udC1tb250c2VycmF0IGxlYWRpbmctWzI1cHhdXCI+XHJcbiAgICAgICAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEpheSBMdW5hZ2FyaXlhXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7LyogQ3JlYXRlZCBieXtcIiBcIn1cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1bIzc4Nzg3OF0gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmxhY2tcIiBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvdXNlci9Db2RlZWZseVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIENvZGVlZmx5XHJcbiAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlRva3lvQ29udGV4dCIsIlNpZGViYXIiLCJuYXZDaGFuZ2UiLCJuYXYiLCJtZW51cyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtdHlwZSIsImEiLCJocmVmIiwidGV4dCIsInVsIiwibWFwIiwibWVudSIsImxpIiwib25DbGljayIsIm5hbWUiLCJpZCIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Sidebar.js\n"));

/***/ })

});