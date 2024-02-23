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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TokyoContext\": function() { return /* binding */ TokyoContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Create Context\nconst TokyoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Type\nconst type = {\n    NAV: \"NAV\",\n    ANIMATION: \"ANIMATION\",\n    MODAL: \"MODAL\",\n    SERVICEMODAL: \"SERVICEMODAL\",\n    NEWSMODAL: \"NEWSMODAL\",\n    PORTFOLIODETAILSMODAL: \"PORTFOLIODETAILSMODAL\"\n};\nconst { NAV , ANIMATION , MODAL , SERVICEMODAL , PRICEMODAL , NEWSMODAL , PORTFOLIODETAILSMODAL  } = type;\n// Initial Value\nconst initialState = {\n    nav: \"home\",\n    animation: \"fadeInLeft\",\n    modal: false,\n    serviceModal: null,\n    priceModal: null,\n    newsModal: null,\n    portfolioDetailsModal: null,\n    menus: [\n        {\n            id: 1,\n            name: \"Home\",\n            href: \"home\"\n        },\n        {\n            id: 2,\n            name: \"about\",\n            href: \"about\"\n        },\n        {\n            id: 3,\n            name: \"service\",\n            href: \"service\"\n        },\n        // { id: 4, name: \"portfolio\", href: \"portfolio\" },\n        // { id: 5, name: \"news\", href: \"news\" },\n        {\n            id: 5,\n            name: \"pricing\",\n            href: \"pricing\"\n        },\n        {\n            id: 6,\n            name: \"contact\",\n            href: \"contact\"\n        }\n    ]\n};\n// Reducer\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case NAV:\n            return {\n                ...state,\n                nav: payload\n            };\n        case ANIMATION:\n            return {\n                ...state,\n                animation: payload\n            };\n        case MODAL:\n            return {\n                ...state,\n                modal: payload\n            };\n        case SERVICEMODAL:\n            return {\n                ...state,\n                serviceModal: payload\n            };\n        case PRICEMODAL:\n            return {\n                ...state,\n                priceModal: payload\n            };\n        // case NEWSMODAL:\n        //   return {\n        //     ...state,\n        //     newsModal: payload,\n        //   };\n        // case PORTFOLIODETAILSMODAL:\n        //   return {\n        //     ...state,\n        //     portfolioDetailsModal: payload,\n        //   };\n        default:\n            return state;\n    }\n};\n// Watson State\nconst TokyoState = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const navChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NAV,\n            payload: value\n        });\n    }, []);\n    const animationChnage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: ANIMATION,\n            payload: value\n        });\n    }, []);\n    const modalToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: MODAL,\n            payload: value\n        });\n    }, []);\n    const setServiceModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: SERVICEMODAL,\n            payload: value\n        });\n    }, []);\n    const setPriceModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PRICEMODAL,\n            payload: value\n        });\n    });\n    const setNewsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NEWSMODAL,\n            payload: value\n        });\n    }, []);\n    const setPortfolioDetailsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PORTFOLIODETAILSMODAL,\n            payload: value\n        });\n    }, []);\n    const { nav , animation , modal , serviceModal , newsModal , portfolioDetailsModal , menus  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TokyoContext.Provider, {\n        value: {\n            menus,\n            nav,\n            navChange,\n            animation,\n            animationChnage,\n            modal,\n            modalToggle,\n            serviceModal,\n            setServiceModal,\n            newsModal,\n            setNewsModal,\n            portfolioDetailsModal,\n            setPortfolioDetailsModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\Context.js\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TokyoState, \"NRKE7inls3zNFiN8NH+0eoW+xM0=\");\n_c = TokyoState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokyoState);\n\nvar _c;\n$RefreshReg$(_c, \"TokyoState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMrQixRQUFVO1FBQzNDRixTQUFTO1lBQ1AxQixNQUFNTztZQUNOZ0IsU0FBU0s7UUFDWDtJQUNGO0lBQ0EsTUFBTUssZUFBZXBDLGtEQUFXQSxDQUFDLENBQUMrQixRQUFVO1FBQzFDRixTQUFTO1lBQ1AxQixNQUFNSztZQUNOa0IsU0FBU0s7UUFDWDtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1NLDJCQUEyQnJDLGtEQUFXQSxDQUFDLENBQUMrQixRQUFVO1FBQ3RERixTQUFTO1lBQ1AxQixNQUFNTTtZQUNOaUIsU0FBU0s7UUFDWDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU0sRUFDSm5CLElBQUcsRUFDSEMsVUFBUyxFQUNUQyxNQUFLLEVBQ0xDLGFBQVksRUFDWkUsVUFBUyxFQUNUQyxzQkFBcUIsRUFDckJDLE1BQUssRUFDTixHQUFHSztJQUNKLHFCQUNFLDhEQUFDdEIsYUFBYW9DLFFBQVE7UUFDcEJQLE9BQU87WUFDTFo7WUFDQVA7WUFDQWtCO1lBQ0FqQjtZQUNBbUI7WUFDQWxCO1lBQ0FtQjtZQUNBbEI7WUFDQW1CO1lBQ0FqQjtZQUNBbUI7WUFDQWxCO1lBQ0FtQjtRQUNGO2tCQUVDVDs7Ozs7O0FBR1A7R0EvRU1EO0tBQUFBO0FBaUZOLCtEQUFlQSxVQUFVQSxFQUFDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRleHQuanM/ZWI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gQ3JlYXRlIENvbnRleHRcclxuY29uc3QgVG9reW9Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gVHlwZVxyXG5jb25zdCB0eXBlID0ge1xyXG4gIE5BVjogXCJOQVZcIixcclxuICBBTklNQVRJT046IFwiQU5JTUFUSU9OXCIsXHJcbiAgTU9EQUw6IFwiTU9EQUxcIixcclxuICBTRVJWSUNFTU9EQUw6IFwiU0VSVklDRU1PREFMXCIsXHJcbiAgTkVXU01PREFMOiBcIk5FV1NNT0RBTFwiLFxyXG4gIFBPUlRGT0xJT0RFVEFJTFNNT0RBTDogXCJQT1JURk9MSU9ERVRBSUxTTU9EQUxcIixcclxufTtcclxuY29uc3Qge1xyXG4gIE5BVixcclxuICBBTklNQVRJT04sXHJcbiAgTU9EQUwsXHJcbiAgU0VSVklDRU1PREFMLFxyXG4gIFBSSUNFTU9EQUwsXHJcbiAgTkVXU01PREFMLFxyXG4gIFBPUlRGT0xJT0RFVEFJTFNNT0RBTCxcclxufSA9IHR5cGU7XHJcblxyXG4vLyBJbml0aWFsIFZhbHVlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBuYXY6IFwiaG9tZVwiLFxyXG4gIGFuaW1hdGlvbjogXCJmYWRlSW5MZWZ0XCIsXHJcbiAgbW9kYWw6IGZhbHNlLFxyXG4gIHNlcnZpY2VNb2RhbDogbnVsbCxcclxuICBwcmljZU1vZGFsOiBudWxsLFxyXG4gIG5ld3NNb2RhbDogbnVsbCxcclxuICBwb3J0Zm9saW9EZXRhaWxzTW9kYWw6IG51bGwsXHJcbiAgbWVudXM6IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiSG9tZVwiLCBocmVmOiBcImhvbWVcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJhYm91dFwiLCBocmVmOiBcImFib3V0XCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwic2VydmljZVwiLCBocmVmOiBcInNlcnZpY2VcIiB9LFxyXG4gICAgLy8geyBpZDogNCwgbmFtZTogXCJwb3J0Zm9saW9cIiwgaHJlZjogXCJwb3J0Zm9saW9cIiB9LFxyXG4gICAgLy8geyBpZDogNSwgbmFtZTogXCJuZXdzXCIsIGhyZWY6IFwibmV3c1wiIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiBcInByaWNpbmdcIiwgaHJlZjogXCJwcmljaW5nXCIgfSxcclxuICAgIHsgaWQ6IDYsIG5hbWU6IFwiY29udGFjdFwiLCBocmVmOiBcImNvbnRhY3RcIiB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG4vLyBSZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBOQVY6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmF2OiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBTklNQVRJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBNT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RhbDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VSVklDRU1PREFMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlcnZpY2VNb2RhbDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgUFJJQ0VNT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcmljZU1vZGFsOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgLy8gY2FzZSBORVdTTU9EQUw6XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgbmV3c01vZGFsOiBwYXlsb2FkLFxyXG4gICAgLy8gICB9O1xyXG4gICAgICAvLyBjYXNlIFBPUlRGT0xJT0RFVEFJTFNNT0RBTDpcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgICBwb3J0Zm9saW9EZXRhaWxzTW9kYWw6IHBheWxvYWQsXHJcbiAgICAgIC8vICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBXYXRzb24gU3RhdGVcclxuY29uc3QgVG9reW9TdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgbmF2Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5BVixcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbkNobmFnZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBTklNQVRJT04sXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBtb2RhbFRvZ2dsZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldFNlcnZpY2VNb2RhbCA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVJWSUNFTU9EQUwsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHNldFByaWNlTW9kYWwgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUFJJQ0VNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgY29uc3Qgc2V0TmV3c01vZGFsID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5FV1NNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc2V0UG9ydGZvbGlvRGV0YWlsc01vZGFsID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFBPUlRGT0xJT0RFVEFJTFNNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIG5hdixcclxuICAgIGFuaW1hdGlvbixcclxuICAgIG1vZGFsLFxyXG4gICAgc2VydmljZU1vZGFsLFxyXG4gICAgbmV3c01vZGFsLFxyXG4gICAgcG9ydGZvbGlvRGV0YWlsc01vZGFsLFxyXG4gICAgbWVudXMsXHJcbiAgfSA9IHN0YXRlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9reW9Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgbWVudXMsXHJcbiAgICAgICAgbmF2LFxyXG4gICAgICAgIG5hdkNoYW5nZSxcclxuICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2huYWdlLFxyXG4gICAgICAgIG1vZGFsLFxyXG4gICAgICAgIG1vZGFsVG9nZ2xlLFxyXG4gICAgICAgIHNlcnZpY2VNb2RhbCxcclxuICAgICAgICBzZXRTZXJ2aWNlTW9kYWwsXHJcbiAgICAgICAgbmV3c01vZGFsLFxyXG4gICAgICAgIHNldE5ld3NNb2RhbCxcclxuICAgICAgICBwb3J0Zm9saW9EZXRhaWxzTW9kYWwsXHJcbiAgICAgICAgc2V0UG9ydGZvbGlvRGV0YWlsc01vZGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Rva3lvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9reW9TdGF0ZTtcclxuZXhwb3J0IHsgVG9reW9Db250ZXh0IH07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwiVG9reW9Db250ZXh0IiwidHlwZSIsIk5BViIsIkFOSU1BVElPTiIsIk1PREFMIiwiU0VSVklDRU1PREFMIiwiTkVXU01PREFMIiwiUE9SVEZPTElPREVUQUlMU01PREFMIiwiUFJJQ0VNT0RBTCIsImluaXRpYWxTdGF0ZSIsIm5hdiIsImFuaW1hdGlvbiIsIm1vZGFsIiwic2VydmljZU1vZGFsIiwicHJpY2VNb2RhbCIsIm5ld3NNb2RhbCIsInBvcnRmb2xpb0RldGFpbHNNb2RhbCIsIm1lbnVzIiwiaWQiLCJuYW1lIiwiaHJlZiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJUb2t5b1N0YXRlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsIm5hdkNoYW5nZSIsInZhbHVlIiwiYW5pbWF0aW9uQ2huYWdlIiwibW9kYWxUb2dnbGUiLCJzZXRTZXJ2aWNlTW9kYWwiLCJzZXRQcmljZU1vZGFsIiwic2V0TmV3c01vZGFsIiwic2V0UG9ydGZvbGlvRGV0YWlsc01vZGFsIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Context.js\n"));

/***/ })

});