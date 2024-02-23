"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TokyoContext\": function() { return /* binding */ TokyoContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Create Context\nconst TokyoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Type\nconst type = {\n    NAV: \"NAV\",\n    ANIMATION: \"ANIMATION\",\n    MODAL: \"MODAL\",\n    SERVICEMODAL: \"SERVICEMODAL\",\n    NEWSMODAL: \"NEWSMODAL\",\n    PORTFOLIODETAILSMODAL: \"PORTFOLIODETAILSMODAL\"\n};\nconst { NAV , ANIMATION , MODAL , SERVICEMODAL , NEWSMODAL , PORTFOLIODETAILSMODAL  } = type;\n// Initial Value\nconst initialState = {\n    nav: \"home\",\n    animation: \"fadeInLeft\",\n    modal: false,\n    serviceModal: null,\n    newsModal: null,\n    portfolioDetailsModal: null,\n    menus: [\n        {\n            id: 1,\n            name: \"Home\",\n            href: \"home\"\n        },\n        {\n            id: 2,\n            name: \"about\",\n            href: \"about\"\n        },\n        {\n            id: 3,\n            name: \"service\",\n            href: \"service\"\n        },\n        // { id: 4, name: \"portfolio\", href: \"portfolio\" },\n        // { id: 5, name: \"news\", href: \"news\" },\n        {\n            id: 5,\n            name: \"pricing\",\n            href: \"pricing\"\n        },\n        {\n            id: 6,\n            name: \"contact\",\n            href: \"contact\"\n        }\n    ]\n};\n// Reducer\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case NAV:\n            return {\n                ...state,\n                nav: payload\n            };\n        case ANIMATION:\n            return {\n                ...state,\n                animation: payload\n            };\n        case MODAL:\n            return {\n                ...state,\n                modal: payload\n            };\n        case SERVICEMODAL:\n            return {\n                ...state,\n                serviceModal: payload\n            };\n        // case NEWSMODAL:\n        //   return {\n        //     ...state,\n        //     newsModal: payload,\n        //   };\n        // case PORTFOLIODETAILSMODAL:\n        //   return {\n        //     ...state,\n        //     portfolioDetailsModal: payload,\n        //   };\n        default:\n            return state;\n    }\n};\n// Watson State\nconst TokyoState = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const navChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NAV,\n            payload: value\n        });\n    }, []);\n    const animationChnage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: ANIMATION,\n            payload: value\n        });\n    }, []);\n    const modalToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: MODAL,\n            payload: value\n        });\n    }, []);\n    const setServiceModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: SERVICEMODAL,\n            payload: value\n        });\n    }, []);\n    const setNewsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NEWSMODAL,\n            payload: value\n        });\n    }, []);\n    const setPortfolioDetailsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PORTFOLIODETAILSMODAL,\n            payload: value\n        });\n    }, []);\n    const { nav , animation , modal , serviceModal , newsModal , portfolioDetailsModal , menus  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TokyoContext.Provider, {\n        value: {\n            menus,\n            nav,\n            navChange,\n            animation,\n            animationChnage,\n            modal,\n            modalToggle,\n            serviceModal,\n            setServiceModal,\n            newsModal,\n            setNewsModal,\n            portfolioDetailsModal,\n            setPortfolioDetailsModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\Context.js\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TokyoState, \"2ILuE+pV/5ND9j32ETHAsAUyudk=\");\n_c = TokyoState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokyoState);\n\nvar _c;\n$RefreshReg$(_c, \"TokyoState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQVdBLENBQUMsQ0FBQzZCLFFBQVU7UUFDdERGLFNBQVM7WUFDUHhCLE1BQU1NO1lBQ05lLFNBQVNLO1FBQ1g7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQ0psQixJQUFHLEVBQ0hDLFVBQVMsRUFDVEMsTUFBSyxFQUNMQyxhQUFZLEVBQ1pDLFVBQVMsRUFDVEMsc0JBQXFCLEVBQ3JCQyxNQUFLLEVBQ04sR0FBR0s7SUFDSixxQkFDRSw4REFBQ3BCLGFBQWFpQyxRQUFRO1FBQ3BCTixPQUFPO1lBQ0xaO1lBQ0FOO1lBQ0FpQjtZQUNBaEI7WUFDQWtCO1lBQ0FqQjtZQUNBa0I7WUFDQWpCO1lBQ0FrQjtZQUNBakI7WUFDQWtCO1lBQ0FqQjtZQUNBa0I7UUFDRjtrQkFFQ1I7Ozs7OztBQUdQO0dBekVNRDtLQUFBQTtBQTJFTiwrREFBZUEsVUFBVUEsRUFBQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db250ZXh0LmpzP2ViNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENyZWF0ZSBDb250ZXh0XHJcbmNvbnN0IFRva3lvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIFR5cGVcclxuY29uc3QgdHlwZSA9IHtcclxuICBOQVY6IFwiTkFWXCIsXHJcbiAgQU5JTUFUSU9OOiBcIkFOSU1BVElPTlwiLFxyXG4gIE1PREFMOiBcIk1PREFMXCIsXHJcbiAgU0VSVklDRU1PREFMOiBcIlNFUlZJQ0VNT0RBTFwiLFxyXG4gIE5FV1NNT0RBTDogXCJORVdTTU9EQUxcIixcclxuICBQT1JURk9MSU9ERVRBSUxTTU9EQUw6IFwiUE9SVEZPTElPREVUQUlMU01PREFMXCIsXHJcbn07XHJcbmNvbnN0IHtcclxuICBOQVYsXHJcbiAgQU5JTUFUSU9OLFxyXG4gIE1PREFMLFxyXG4gIFNFUlZJQ0VNT0RBTCxcclxuICBORVdTTU9EQUwsXHJcbiAgUE9SVEZPTElPREVUQUlMU01PREFMLFxyXG59ID0gdHlwZTtcclxuXHJcbi8vIEluaXRpYWwgVmFsdWVcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG5hdjogXCJob21lXCIsXHJcbiAgYW5pbWF0aW9uOiBcImZhZGVJbkxlZnRcIixcclxuICBtb2RhbDogZmFsc2UsXHJcbiAgc2VydmljZU1vZGFsOiBudWxsLFxyXG4gIG5ld3NNb2RhbDogbnVsbCxcclxuICBwb3J0Zm9saW9EZXRhaWxzTW9kYWw6IG51bGwsXHJcbiAgbWVudXM6IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiSG9tZVwiLCBocmVmOiBcImhvbWVcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJhYm91dFwiLCBocmVmOiBcImFib3V0XCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwic2VydmljZVwiLCBocmVmOiBcInNlcnZpY2VcIiB9LFxyXG4gICAgLy8geyBpZDogNCwgbmFtZTogXCJwb3J0Zm9saW9cIiwgaHJlZjogXCJwb3J0Zm9saW9cIiB9LFxyXG4gICAgLy8geyBpZDogNSwgbmFtZTogXCJuZXdzXCIsIGhyZWY6IFwibmV3c1wiIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiBcInByaWNpbmdcIiwgaHJlZjogXCJwcmljaW5nXCIgfSxcclxuICAgIHsgaWQ6IDYsIG5hbWU6IFwiY29udGFjdFwiLCBocmVmOiBcImNvbnRhY3RcIiB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG4vLyBSZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBOQVY6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmF2OiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBTklNQVRJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBNT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RhbDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VSVklDRU1PREFMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlcnZpY2VNb2RhbDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIC8vIGNhc2UgTkVXU01PREFMOlxyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgIG5ld3NNb2RhbDogcGF5bG9hZCxcclxuICAgIC8vICAgfTtcclxuICAgICAgLy8gY2FzZSBQT1JURk9MSU9ERVRBSUxTTU9EQUw6XHJcbiAgICAgIC8vICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgICAgcG9ydGZvbGlvRGV0YWlsc01vZGFsOiBwYXlsb2FkLFxyXG4gICAgICAvLyAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gV2F0c29uIFN0YXRlXHJcbmNvbnN0IFRva3lvU3RhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IG5hdkNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBOQVYsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhbmltYXRpb25DaG5hZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQU5JTUFUSU9OLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbW9kYWxUb2dnbGUgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTU9EQUwsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXRTZXJ2aWNlTW9kYWwgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VSVklDRU1PREFMLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzZXROZXdzTW9kYWwgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTkVXU01PREFMLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzZXRQb3J0Zm9saW9EZXRhaWxzTW9kYWwgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUE9SVEZPTElPREVUQUlMU01PREFMLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgbmF2LFxyXG4gICAgYW5pbWF0aW9uLFxyXG4gICAgbW9kYWwsXHJcbiAgICBzZXJ2aWNlTW9kYWwsXHJcbiAgICBuZXdzTW9kYWwsXHJcbiAgICBwb3J0Zm9saW9EZXRhaWxzTW9kYWwsXHJcbiAgICBtZW51cyxcclxuICB9ID0gc3RhdGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2t5b0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBtZW51cyxcclxuICAgICAgICBuYXYsXHJcbiAgICAgICAgbmF2Q2hhbmdlLFxyXG4gICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaG5hZ2UsXHJcbiAgICAgICAgbW9kYWwsXHJcbiAgICAgICAgbW9kYWxUb2dnbGUsXHJcbiAgICAgICAgc2VydmljZU1vZGFsLFxyXG4gICAgICAgIHNldFNlcnZpY2VNb2RhbCxcclxuICAgICAgICBuZXdzTW9kYWwsXHJcbiAgICAgICAgc2V0TmV3c01vZGFsLFxyXG4gICAgICAgIHBvcnRmb2xpb0RldGFpbHNNb2RhbCxcclxuICAgICAgICBzZXRQb3J0Zm9saW9EZXRhaWxzTW9kYWwsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVG9reW9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2t5b1N0YXRlO1xyXG5leHBvcnQgeyBUb2t5b0NvbnRleHQgfTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJUb2t5b0NvbnRleHQiLCJ0eXBlIiwiTkFWIiwiQU5JTUFUSU9OIiwiTU9EQUwiLCJTRVJWSUNFTU9EQUwiLCJORVdTTU9EQUwiLCJQT1JURk9MSU9ERVRBSUxTTU9EQUwiLCJpbml0aWFsU3RhdGUiLCJuYXYiLCJhbmltYXRpb24iLCJtb2RhbCIsInNlcnZpY2VNb2RhbCIsIm5ld3NNb2RhbCIsInBvcnRmb2xpb0RldGFpbHNNb2RhbCIsIm1lbnVzIiwiaWQiLCJuYW1lIiwiaHJlZiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJUb2t5b1N0YXRlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsIm5hdkNoYW5nZSIsInZhbHVlIiwiYW5pbWF0aW9uQ2huYWdlIiwibW9kYWxUb2dnbGUiLCJzZXRTZXJ2aWNlTW9kYWwiLCJzZXROZXdzTW9kYWwiLCJzZXRQb3J0Zm9saW9EZXRhaWxzTW9kYWwiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Context.js\n"));

/***/ })

});