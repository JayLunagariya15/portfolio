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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TokyoContext\": function() { return /* binding */ TokyoContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Create Context\nconst TokyoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Type\nconst type = {\n    NAV: \"NAV\",\n    ANIMATION: \"ANIMATION\",\n    MODAL: \"MODAL\",\n    SERVICEMODAL: \"SERVICEMODAL\",\n    PRICEMODAL: \"PRICEMODAL\",\n    NEWSMODAL: \"NEWSMODAL\",\n    PORTFOLIODETAILSMODAL: \"PORTFOLIODETAILSMODAL\"\n};\nconst { NAV , ANIMATION , MODAL , SERVICEMODAL , PRICEMODAL , NEWSMODAL , PORTFOLIODETAILSMODAL  } = type;\n// Initial Value\nconst initialState = {\n    nav: \"home\",\n    animation: \"fadeInLeft\",\n    modal: false,\n    serviceModal: null,\n    priceModal: null,\n    newsModal: null,\n    portfolioDetailsModal: null,\n    menus: [\n        {\n            id: 1,\n            name: \"Home\",\n            href: \"home\"\n        },\n        {\n            id: 2,\n            name: \"about\",\n            href: \"about\"\n        },\n        {\n            id: 3,\n            name: \"service\",\n            href: \"service\"\n        },\n        // { id: 4, name: \"portfolio\", href: \"portfolio\" },\n        // { id: 5, name: \"news\", href: \"news\" },\n        {\n            id: 7,\n            name: \"pricing\",\n            href: \"pricing\"\n        },\n        {\n            id: 6,\n            name: \"contact\",\n            href: \"contact\"\n        }\n    ]\n};\n// Reducer\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case NAV:\n            return {\n                ...state,\n                nav: payload\n            };\n        case ANIMATION:\n            return {\n                ...state,\n                animation: payload\n            };\n        case MODAL:\n            return {\n                ...state,\n                modal: payload\n            };\n        case SERVICEMODAL:\n            return {\n                ...state,\n                serviceModal: payload\n            };\n        case PRICEMODAL:\n            return {\n                ...state,\n                priceModal: payload\n            };\n        // case NEWSMODAL:\n        //   return {\n        //     ...state,\n        //     newsModal: payload,\n        //   };\n        // case PORTFOLIODETAILSMODAL:\n        //   return {\n        //     ...state,\n        //     portfolioDetailsModal: payload,\n        //   };\n        default:\n            return state;\n    }\n};\n// Watson State\nconst TokyoState = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const navChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NAV,\n            payload: value\n        });\n    }, []);\n    const animationChnage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: ANIMATION,\n            payload: value\n        });\n    }, []);\n    const modalToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: MODAL,\n            payload: value\n        });\n    }, []);\n    const setServiceModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: SERVICEMODAL,\n            payload: value\n        });\n    }, []);\n    const setPriceModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PRICEMODAL,\n            payload: value\n        });\n    });\n    const setNewsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NEWSMODAL,\n            payload: value\n        });\n    }, []);\n    const setPortfolioDetailsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PORTFOLIODETAILSMODAL,\n            payload: value\n        });\n    }, []);\n    const { nav , animation , modal , serviceModal , priceModal , newsModal , portfolioDetailsModal , menus  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TokyoContext.Provider, {\n        value: {\n            menus,\n            nav,\n            navChange,\n            animation,\n            animationChnage,\n            modal,\n            modalToggle,\n            serviceModal,\n            setServiceModal,\n            priceModal,\n            setPriceModal,\n            newsModal,\n            setNewsModal,\n            portfolioDetailsModal,\n            setPortfolioDetailsModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\Context.js\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TokyoState, \"NRKE7inls3zNFiN8NH+0eoW+xM0=\");\n_c = TokyoState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokyoState);\n\nvar _c;\n$RefreshReg$(_c, \"TokyoState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXQSxDQUFDLENBQUMrQixRQUFVO1FBQzNDRixTQUFTO1lBQ1AxQixNQUFNSztZQUNOa0IsU0FBU0s7UUFDWDtJQUNGO0lBQ0EsTUFBTUssZUFBZXBDLGtEQUFXQSxDQUFDLENBQUMrQixRQUFVO1FBQzFDRixTQUFTO1lBQ1AxQixNQUFNTTtZQUNOaUIsU0FBU0s7UUFDWDtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1NLDJCQUEyQnJDLGtEQUFXQSxDQUFDLENBQUMrQixRQUFVO1FBQ3RERixTQUFTO1lBQ1AxQixNQUFNTztZQUNOZ0IsU0FBU0s7UUFDWDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU0sRUFDSm5CLElBQUcsRUFDSEMsVUFBUyxFQUNUQyxNQUFLLEVBQ0xDLGFBQVksRUFDWkMsV0FBVSxFQUNWQyxVQUFTLEVBQ1RDLHNCQUFxQixFQUNyQkMsTUFBSyxFQUNOLEdBQUdLO0lBQ0oscUJBQ0UsOERBQUN0QixhQUFhb0MsUUFBUTtRQUNwQlAsT0FBTztZQUNMWjtZQUNBUDtZQUNBa0I7WUFDQWpCO1lBQ0FtQjtZQUNBbEI7WUFDQW1CO1lBQ0FsQjtZQUNBbUI7WUFDQWxCO1lBQ0FtQjtZQUNBbEI7WUFDQW1CO1lBQ0FsQjtZQUNBbUI7UUFDRjtrQkFFQ1Q7Ozs7OztBQUdQO0dBbEZNRDtLQUFBQTtBQW9GTiwrREFBZUEsVUFBVUEsRUFBQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db250ZXh0LmpzP2ViNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENyZWF0ZSBDb250ZXh0XHJcbmNvbnN0IFRva3lvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIFR5cGVcclxuY29uc3QgdHlwZSA9IHtcclxuICBOQVY6IFwiTkFWXCIsXHJcbiAgQU5JTUFUSU9OOiBcIkFOSU1BVElPTlwiLFxyXG4gIE1PREFMOiBcIk1PREFMXCIsXHJcbiAgU0VSVklDRU1PREFMOiBcIlNFUlZJQ0VNT0RBTFwiLFxyXG4gIFBSSUNFTU9EQUw6IFwiUFJJQ0VNT0RBTFwiLFxyXG4gIE5FV1NNT0RBTDogXCJORVdTTU9EQUxcIixcclxuICBQT1JURk9MSU9ERVRBSUxTTU9EQUw6IFwiUE9SVEZPTElPREVUQUlMU01PREFMXCIsXHJcbn07XHJcbmNvbnN0IHtcclxuICBOQVYsXHJcbiAgQU5JTUFUSU9OLFxyXG4gIE1PREFMLFxyXG4gIFNFUlZJQ0VNT0RBTCxcclxuICBQUklDRU1PREFMLFxyXG4gIE5FV1NNT0RBTCxcclxuICBQT1JURk9MSU9ERVRBSUxTTU9EQUwsXHJcbn0gPSB0eXBlO1xyXG5cclxuLy8gSW5pdGlhbCBWYWx1ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbmF2OiBcImhvbWVcIixcclxuICBhbmltYXRpb246IFwiZmFkZUluTGVmdFwiLFxyXG4gIG1vZGFsOiBmYWxzZSxcclxuICBzZXJ2aWNlTW9kYWw6IG51bGwsXHJcbiAgcHJpY2VNb2RhbDogbnVsbCxcclxuICBuZXdzTW9kYWw6IG51bGwsXHJcbiAgcG9ydGZvbGlvRGV0YWlsc01vZGFsOiBudWxsLFxyXG4gIG1lbnVzOiBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkhvbWVcIiwgaHJlZjogXCJob21lXCIgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiYWJvdXRcIiwgaHJlZjogXCJhYm91dFwiIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiBcInNlcnZpY2VcIiwgaHJlZjogXCJzZXJ2aWNlXCIgfSxcclxuICAgIC8vIHsgaWQ6IDQsIG5hbWU6IFwicG9ydGZvbGlvXCIsIGhyZWY6IFwicG9ydGZvbGlvXCIgfSxcclxuICAgIC8vIHsgaWQ6IDUsIG5hbWU6IFwibmV3c1wiLCBocmVmOiBcIm5ld3NcIiB9LFxyXG4gICAgeyBpZDogNywgbmFtZTogXCJwcmljaW5nXCIsIGhyZWY6IFwicHJpY2luZ1wiIH0sXHJcbiAgICB7IGlkOiA2LCBuYW1lOiBcImNvbnRhY3RcIiwgaHJlZjogXCJjb250YWN0XCIgfSxcclxuICBdLFxyXG59O1xyXG5cclxuLy8gUmVkdWNlclxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTkFWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdjogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQU5JTUFUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTU9EQUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kYWw6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFUlZJQ0VNT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXJ2aWNlTW9kYWw6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFBSSUNFTU9EQUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJpY2VNb2RhbDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIC8vIGNhc2UgTkVXU01PREFMOlxyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgIG5ld3NNb2RhbDogcGF5bG9hZCxcclxuICAgIC8vICAgfTtcclxuICAgIC8vIGNhc2UgUE9SVEZPTElPREVUQUlMU01PREFMOlxyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgIHBvcnRmb2xpb0RldGFpbHNNb2RhbDogcGF5bG9hZCxcclxuICAgIC8vICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBXYXRzb24gU3RhdGVcclxuY29uc3QgVG9reW9TdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgbmF2Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5BVixcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbkNobmFnZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBTklNQVRJT04sXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBtb2RhbFRvZ2dsZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldFNlcnZpY2VNb2RhbCA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVJWSUNFTU9EQUwsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHNldFByaWNlTW9kYWwgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUFJJQ0VNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgY29uc3Qgc2V0TmV3c01vZGFsID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5FV1NNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc2V0UG9ydGZvbGlvRGV0YWlsc01vZGFsID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFBPUlRGT0xJT0RFVEFJTFNNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIG5hdixcclxuICAgIGFuaW1hdGlvbixcclxuICAgIG1vZGFsLFxyXG4gICAgc2VydmljZU1vZGFsLFxyXG4gICAgcHJpY2VNb2RhbCxcclxuICAgIG5ld3NNb2RhbCxcclxuICAgIHBvcnRmb2xpb0RldGFpbHNNb2RhbCxcclxuICAgIG1lbnVzLFxyXG4gIH0gPSBzdGF0ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRva3lvQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIG1lbnVzLFxyXG4gICAgICAgIG5hdixcclxuICAgICAgICBuYXZDaGFuZ2UsXHJcbiAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNobmFnZSxcclxuICAgICAgICBtb2RhbCxcclxuICAgICAgICBtb2RhbFRvZ2dsZSxcclxuICAgICAgICBzZXJ2aWNlTW9kYWwsXHJcbiAgICAgICAgc2V0U2VydmljZU1vZGFsLFxyXG4gICAgICAgIHByaWNlTW9kYWwsXHJcbiAgICAgICAgc2V0UHJpY2VNb2RhbCxcclxuICAgICAgICBuZXdzTW9kYWwsXHJcbiAgICAgICAgc2V0TmV3c01vZGFsLFxyXG4gICAgICAgIHBvcnRmb2xpb0RldGFpbHNNb2RhbCxcclxuICAgICAgICBzZXRQb3J0Zm9saW9EZXRhaWxzTW9kYWwsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVG9reW9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2t5b1N0YXRlO1xyXG5leHBvcnQgeyBUb2t5b0NvbnRleHQgfTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJUb2t5b0NvbnRleHQiLCJ0eXBlIiwiTkFWIiwiQU5JTUFUSU9OIiwiTU9EQUwiLCJTRVJWSUNFTU9EQUwiLCJQUklDRU1PREFMIiwiTkVXU01PREFMIiwiUE9SVEZPTElPREVUQUlMU01PREFMIiwiaW5pdGlhbFN0YXRlIiwibmF2IiwiYW5pbWF0aW9uIiwibW9kYWwiLCJzZXJ2aWNlTW9kYWwiLCJwcmljZU1vZGFsIiwibmV3c01vZGFsIiwicG9ydGZvbGlvRGV0YWlsc01vZGFsIiwibWVudXMiLCJpZCIsIm5hbWUiLCJocmVmIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIlRva3lvU3RhdGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwibmF2Q2hhbmdlIiwidmFsdWUiLCJhbmltYXRpb25DaG5hZ2UiLCJtb2RhbFRvZ2dsZSIsInNldFNlcnZpY2VNb2RhbCIsInNldFByaWNlTW9kYWwiLCJzZXROZXdzTW9kYWwiLCJzZXRQb3J0Zm9saW9EZXRhaWxzTW9kYWwiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Context.js\n"));

/***/ })

});