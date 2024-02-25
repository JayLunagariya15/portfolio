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

/***/ "./src/components/service/ServiceItems.js":
/*!************************************************!*\
  !*** ./src/components/service/ServiceItems.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/Context */ \"./src/Context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst services = [\n    {\n        id: 1,\n        name: \"Web Development Services\",\n        text: [\n            \"Welcome to my Web Development Services! I Embrace the perfect fusion of innovation and functionality as I craft compelling digital experiences. As a proficient MERN stack developer, my expertise lies in MongoDB, Express.js, React.js, and Node.js – the pillars of modern web development. My skills ensure the creation of robust and responsive web applications that redefine user interactions. Harness the power of cutting-edge technology with me and let your digital presence thrive!\"\n        ],\n        // image: \"assets/img/news/1.jpg\",\n        video: \"assets/img/news/web.mp4\"\n    },\n    {\n        id: 2,\n        name: \"WordPress Development\",\n        text: [\n            \"Passionate WordPress developer skilled in custom theme creation, plugin development, and e-commerce solutions using WooCommerce. With a focus on responsive design and performance optimization, I bring expertise to WordPress development. Proficient in HTML, CSS, JavaScript, and PHP, I leverage the latest WordPress technologies for seamless development. Let's collaborate to transform your ideas into visually appealing and functional WordPress websites. Explore my portfolio for a glimpse into my expertise.\"\n        ],\n        image: \"assets/img/news/2.jpg\"\n    },\n    {\n        id: 3,\n        name: \"eCommerce Development\",\n        text: [\n            \"Dedicated to e-commerce development, I specialize in creating robust and user-friendly online stores using WordPress and MERN Stack. From customizing themes to integrating payment gateways, I bring a tailored approach to each project. My expertise includes optimizing product catalogs, ensuring responsive design, and enhancing overall performance for a seamless shopping experience. Let's transform your e-commerce vision into reality—explore my portfolio for successful online store projects that showcase my commitment to delivering high-quality and visually appealing e-commerce solutions.\"\n        ],\n        image: \"assets/img/news/3.jpg\"\n    }\n];\nconst ServiceItems = ()=>{\n    _s();\n    const { setServiceModal , modalToggle , modal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_Context__WEBPACK_IMPORTED_MODULE_1__.TokyoContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"list w-full h-auto clear-both float-left\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"ml-[-40px] list-none flex flex-wrap\",\n            children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mb-[40px] w-1/3 pl-[40px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300\",\n                                children: service.id <= 9 ? \"0\".concat(service.id) : service.id\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"title font-bold text-black text-[18px] mb-[15px]\",\n                                children: service.name\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text\",\n                                children: [\n                                    service.text[0].slice(0, 70),\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tokyo_tm_read_more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    onClick: ()=>{\n                                        modalToggle(true);\n                                        setServiceModal(service);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Read More\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"tokyo_tm_full_link\",\n                                href: \"#\",\n                                onClick: ()=>{\n                                    modalToggle(true);\n                                    setServiceModal(service);\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"popup_service_image opacity-0 invisible hidden absolute z-[-111]\",\n                                src: service.image,\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"popup_service_image opacity-0 invisible hidden absolute z-[-111]\",\n                                src: service.video,\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined)\n                }, service.id, false, {\n                    fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Versai\\\\portfolio\\\\0x9-personal-website-main\\\\src\\\\components\\\\service\\\\ServiceItems.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ServiceItems, \"trhFCUTbrCZPykZifd0hCfOyuAo=\");\n_c = ServiceItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceItems);\nvar _c;\n$RefreshReg$(_c, \"ServiceItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL1NlcnZpY2VJdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNWO0FBRW5DLE1BQU1FLFdBQVc7SUFDZjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtZQUNKO1NBR0Q7UUFDRCxrQ0FBa0M7UUFDbENDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1lBQ0o7U0FHRDtRQUNERSxPQUFPO0lBQ1Q7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtZQUNKO1NBR0Q7UUFDREUsT0FBTztJQUNUO0NBK0JEO0FBQ0QsTUFBTUMsZUFBZSxJQUFNOztJQUN6QixNQUFNLEVBQUVDLGdCQUFlLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdWLGlEQUFVQSxDQUFDRCxzREFBWUE7SUFDdkUscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUdELFdBQVU7c0JBQ1hYLFNBQVNhLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0M7b0JBQUdKLFdBQVU7OEJBQ1osNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0s7Z0NBQUtMLFdBQVU7MENBQ2JHLFFBQVFiLEVBQUUsSUFBSSxJQUFJLElBQWUsT0FBWGEsUUFBUWIsRUFBRSxJQUFLYSxRQUFRYixFQUFFOzs7Ozs7MENBRWxELDhEQUFDZ0I7Z0NBQUdOLFdBQVU7MENBQW9ERyxRQUFRWixJQUFJOzs7Ozs7MENBQzlFLDhEQUFDZ0I7Z0NBQUVQLFdBQVU7O29DQUFRRyxRQUFRWCxJQUFJLENBQUMsRUFBRSxDQUFDZ0IsS0FBSyxDQUFDLEdBQUc7b0NBQUk7Ozs7Ozs7MENBQ2xELDhEQUFDVDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1M7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVMsSUFBTTt3Q0FDYmQsWUFBWSxJQUFJO3dDQUNoQkQsZ0JBQWdCTztvQ0FDbEI7OENBRUEsNEVBQUNFO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdWLDhEQUFDSTtnQ0FDQ1QsV0FBVTtnQ0FDVlUsTUFBSztnQ0FDTEMsU0FBUyxJQUFNO29DQUNiZCxZQUFZLElBQUk7b0NBQ2hCRCxnQkFBZ0JPO2dDQUNsQjs7Ozs7OzBDQUdGLDhEQUFDUztnQ0FBSVosV0FBVTtnQ0FBbUVhLEtBQUtWLFFBQVFULEtBQUs7Z0NBQUVvQixLQUFJOzs7Ozs7MENBQzFHLDhEQUFDRjtnQ0FBSVosV0FBVTtnQ0FBbUVhLEtBQUtWLFFBQVFWLEtBQUs7Z0NBQUVxQixLQUFJOzs7Ozs7Ozs7Ozs7bUJBNUIvRFgsUUFBUWIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBbUNuRTtHQXpDTUs7S0FBQUE7QUEwQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZS9TZXJ2aWNlSXRlbXMuanM/MGI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2t5b0NvbnRleHQgfSBmcm9tIFwiQC9zcmMvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiV2ViIERldmVsb3BtZW50IFNlcnZpY2VzXCIsXHJcbiAgICB0ZXh0OiBbXHJcbiAgICAgIFwiV2VsY29tZSB0byBteSBXZWIgRGV2ZWxvcG1lbnQgU2VydmljZXMhIEkgRW1icmFjZSB0aGUgcGVyZmVjdCBmdXNpb24gb2YgaW5ub3ZhdGlvbiBhbmQgZnVuY3Rpb25hbGl0eSBhcyBJIGNyYWZ0IGNvbXBlbGxpbmcgZGlnaXRhbCBleHBlcmllbmNlcy4gQXMgYSBwcm9maWNpZW50IE1FUk4gc3RhY2sgZGV2ZWxvcGVyLCBteSBleHBlcnRpc2UgbGllcyBpbiBNb25nb0RCLCBFeHByZXNzLmpzLCBSZWFjdC5qcywgYW5kIE5vZGUuanMg4oCTIHRoZSBwaWxsYXJzIG9mIG1vZGVybiB3ZWIgZGV2ZWxvcG1lbnQuIE15IHNraWxscyBlbnN1cmUgdGhlIGNyZWF0aW9uIG9mIHJvYnVzdCBhbmQgcmVzcG9uc2l2ZSB3ZWIgYXBwbGljYXRpb25zIHRoYXQgcmVkZWZpbmUgdXNlciBpbnRlcmFjdGlvbnMuIEhhcm5lc3MgdGhlIHBvd2VyIG9mIGN1dHRpbmctZWRnZSB0ZWNobm9sb2d5IHdpdGggbWUgYW5kIGxldCB5b3VyIGRpZ2l0YWwgcHJlc2VuY2UgdGhyaXZlIVwiLFxyXG4gICAgICAvLyBcIkluIGNvbnRlbnQgbWFuYWdlbWVudCwgSSBicmluZyBleHBlcnRpc2UgdG8gV29yZFByZXNzIGRldmVsb3BtZW50LCB0YWlsb3Jpbmcgd2Vic2l0ZXMgZm9yIHBlcnNvbmFsIGJsb2dzLCBidXNpbmVzcyBzaXRlcywgb3IgZS1jb21tZXJjZS4gQ29tbWl0dGVkIHRvIGRlbGl2ZXJpbmcgdXNlci1mcmllbmRseSBhbmQgdmlzdWFsbHkgY29tcGVsbGluZyBvbmxpbmUgcHJlc2VuY2UsIG15IHByb2ZpY2llbmN5IGVuc3VyZXMgYSBkeW5hbWljIGFuZCBjdXN0b21pemVkIGFwcHJvYWNoLiBMZXQncyBjb2xsYWJvcmF0ZSBmb3IgYSBkaWdpdGFsIHNwYWNlIHRoYXQgcmVzb25hdGVzIGFuZCBhY2hpZXZlcyB5b3VyIG9ubGluZSBvYmplY3RpdmVzLlwiLFxyXG4gICAgICAvLyBcIlRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHkgcmVldmFsdWF0aW5nIHRoZWlyIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzbyBwYXJ0bmVyaW5nIHdpdGggS3J5cHRpYyBIYXNoLCB0aGUgd2ViIGRlc2lnbiBhZ2VuY3kgdGhhdOKAmXMgZHJpdmVuIG1vcmUgdGhhbiAkMi40IGJpbGxpb24gaW4gcmV2ZW51ZSBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkcyB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYSBjdXN0b20gd2Vic2l0ZSB0aGF0IGRyaXZlcyBzYWxlcyBmb3IgeW91ciB1bmlxdWUgYnVzaW5lc3MuXCIsXHJcbiAgICBdLFxyXG4gICAgLy8gaW1hZ2U6IFwiYXNzZXRzL2ltZy9uZXdzLzEuanBnXCIsXHJcbiAgICB2aWRlbzogXCJhc3NldHMvaW1nL25ld3Mvd2ViLm1wNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIldvcmRQcmVzcyBEZXZlbG9wbWVudFwiLFxyXG4gICAgdGV4dDogW1xyXG4gICAgICBcIlBhc3Npb25hdGUgV29yZFByZXNzIGRldmVsb3BlciBza2lsbGVkIGluIGN1c3RvbSB0aGVtZSBjcmVhdGlvbiwgcGx1Z2luIGRldmVsb3BtZW50LCBhbmQgZS1jb21tZXJjZSBzb2x1dGlvbnMgdXNpbmcgV29vQ29tbWVyY2UuIFdpdGggYSBmb2N1cyBvbiByZXNwb25zaXZlIGRlc2lnbiBhbmQgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLCBJIGJyaW5nIGV4cGVydGlzZSB0byBXb3JkUHJlc3MgZGV2ZWxvcG1lbnQuIFByb2ZpY2llbnQgaW4gSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgUEhQLCBJIGxldmVyYWdlIHRoZSBsYXRlc3QgV29yZFByZXNzIHRlY2hub2xvZ2llcyBmb3Igc2VhbWxlc3MgZGV2ZWxvcG1lbnQuIExldCdzIGNvbGxhYm9yYXRlIHRvIHRyYW5zZm9ybSB5b3VyIGlkZWFzIGludG8gdmlzdWFsbHkgYXBwZWFsaW5nIGFuZCBmdW5jdGlvbmFsIFdvcmRQcmVzcyB3ZWJzaXRlcy4gRXhwbG9yZSBteSBwb3J0Zm9saW8gZm9yIGEgZ2xpbXBzZSBpbnRvIG15IGV4cGVydGlzZS5cIixcclxuICAgICAgLy8gXCJJbiB0b2RheeKAmXMgZGlnaXRhbCB3b3JsZCwgeW91ciB3ZWJzaXRlIGlzIHRoZSBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXIgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYSB1c2Vy4oCZcyBmaXJzdCBpbXByZXNzaW9uIHJlbGF0ZXMgdG8gd2ViIGRlc2lnbi4gSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW4gaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cIixcclxuICAgICAgLy8gXCJUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5IHJlZXZhbHVhdGluZyB0aGVpciB3ZWJzaXRl4oCZcyBkZXNpZ24gYnV0IGFsc28gcGFydG5lcmluZyB3aXRoIEtyeXB0aWMgSGFzaCwgdGhlIHdlYiBkZXNpZ24gYWdlbmN5IHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWUgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHMgdW5kZXIgb3VyIGJlbHQsIHdlJ3JlIGNvbmZpZGVudCB3ZSBjYW4gZGVzaWduIGEgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlIGJ1c2luZXNzLlwiLFxyXG4gICAgXSxcclxuICAgIGltYWdlOiBcImFzc2V0cy9pbWcvbmV3cy8yLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcImVDb21tZXJjZSBEZXZlbG9wbWVudFwiLFxyXG4gICAgdGV4dDogW1xyXG4gICAgICBcIkRlZGljYXRlZCB0byBlLWNvbW1lcmNlIGRldmVsb3BtZW50LCBJIHNwZWNpYWxpemUgaW4gY3JlYXRpbmcgcm9idXN0IGFuZCB1c2VyLWZyaWVuZGx5IG9ubGluZSBzdG9yZXMgdXNpbmcgV29yZFByZXNzIGFuZCBNRVJOIFN0YWNrLiBGcm9tIGN1c3RvbWl6aW5nIHRoZW1lcyB0byBpbnRlZ3JhdGluZyBwYXltZW50IGdhdGV3YXlzLCBJIGJyaW5nIGEgdGFpbG9yZWQgYXBwcm9hY2ggdG8gZWFjaCBwcm9qZWN0LiBNeSBleHBlcnRpc2UgaW5jbHVkZXMgb3B0aW1pemluZyBwcm9kdWN0IGNhdGFsb2dzLCBlbnN1cmluZyByZXNwb25zaXZlIGRlc2lnbiwgYW5kIGVuaGFuY2luZyBvdmVyYWxsIHBlcmZvcm1hbmNlIGZvciBhIHNlYW1sZXNzIHNob3BwaW5nIGV4cGVyaWVuY2UuIExldCdzIHRyYW5zZm9ybSB5b3VyIGUtY29tbWVyY2UgdmlzaW9uIGludG8gcmVhbGl0eeKAlGV4cGxvcmUgbXkgcG9ydGZvbGlvIGZvciBzdWNjZXNzZnVsIG9ubGluZSBzdG9yZSBwcm9qZWN0cyB0aGF0IHNob3djYXNlIG15IGNvbW1pdG1lbnQgdG8gZGVsaXZlcmluZyBoaWdoLXF1YWxpdHkgYW5kIHZpc3VhbGx5IGFwcGVhbGluZyBlLWNvbW1lcmNlIHNvbHV0aW9ucy5cIixcclxuICAgICAgLy8gXCJJbiB0b2RheeKAmXMgZGlnaXRhbCB3b3JsZCwgeW91ciB3ZWJzaXRlIGlzIHRoZSBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXIgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYSB1c2Vy4oCZcyBmaXJzdCBpbXByZXNzaW9uIHJlbGF0ZXMgdG8gd2ViIGRlc2lnbi4gSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW4gaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cIixcclxuICAgICAgLy8gXCJUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5IHJlZXZhbHVhdGluZyB0aGVpciB3ZWJzaXRl4oCZcyBkZXNpZ24gYnV0IGFsc28gcGFydG5lcmluZyB3aXRoIEtyeXB0aWMgSGFzaCwgdGhlIHdlYiBkZXNpZ24gYWdlbmN5IHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWUgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHMgdW5kZXIgb3VyIGJlbHQsIHdlJ3JlIGNvbmZpZGVudCB3ZSBjYW4gZGVzaWduIGEgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlIGJ1c2luZXNzLlwiLFxyXG4gICAgXSxcclxuICAgIGltYWdlOiBcImFzc2V0cy9pbWcvbmV3cy8zLmpwZ1wiLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDQsXHJcbiAgLy8gICBuYW1lOiBcIkxpdmUgQ2hhdFwiLFxyXG4gIC8vICAgdGV4dDogW1xyXG4gIC8vICAgICBcIktyeXB0aWMgSGFzaCBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhbiBhd2FyZC13aW5uaW5nIGRlc2lnbiB0ZWFtIHRoYXQgY3JlYXRlcyBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdCBjYXB0dXJlIHlvdXIgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmQgbWF4aW1pemUgeW91ciByZXZlbnVlIHRvIGhlbHAgZ3JvdyB5b3VyIGJ1c2luZXNzIGFuZCBhY2hpZXZlIHlvdXIgZ29hbHMuXCIsXHJcbiAgLy8gICAgIFwiSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGUgZmlyc3QgaW50ZXJhY3Rpb24gY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyIGJ1c2luZXNzLiBUaGF0J3Mgd2h5IGFsbW9zdCA5NSBwZXJjZW50IG9mIGEgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvIHdlYiBkZXNpZ24uIEl04oCZcyBhbHNvIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuIGltbWVuc2UgaW1wYWN0IG9uIHlvdXIgY29tcGFueeKAmXMgYm90dG9tIGxpbmUuXCIsXHJcbiAgLy8gICAgIFwiVGhhdOKAmXMgd2h5IG1vcmUgY29tcGFuaWVzIGFyZSBub3Qgb25seSByZWV2YWx1YXRpbmcgdGhlaXIgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvIHBhcnRuZXJpbmcgd2l0aCBLcnlwdGljIEhhc2gsIHRoZSB3ZWIgZGVzaWduIGFnZW5jeSB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpbiByZXZlbnVlIGZvciBpdHMgY2xpZW50cy4gV2l0aCBvdmVyIDUwIHdlYiBkZXNpZ24gYXdhcmRzIHVuZGVyIG91ciBiZWx0LCB3ZSdyZSBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhIGN1c3RvbSB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvciB5b3VyIHVuaXF1ZSBidXNpbmVzcy5cIixcclxuICAvLyAgIF0sXHJcbiAgLy8gICBpbWFnZTogXCJhc3NldHMvaW1nL25ld3MvNC5qcGdcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA1LFxyXG4gIC8vICAgbmFtZTogXCJBZnRlciBFZmZlY3RzXCIsXHJcbiAgLy8gICB0ZXh0OiBbXHJcbiAgLy8gICAgIFwiS3J5cHRpYyBIYXNoIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuIGF3YXJkLXdpbm5pbmcgZGVzaWduIHRlYW0gdGhhdCBjcmVhdGVzIGlubm92YXRpdmUsIGVmZmVjdGl2ZSB3ZWJzaXRlcyB0aGF0IGNhcHR1cmUgeW91ciBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZCBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3MgYW5kIGFjaGlldmUgeW91ciBnb2Fscy5cIixcclxuICAvLyAgICAgXCJJbiB0b2RheeKAmXMgZGlnaXRhbCB3b3JsZCwgeW91ciB3ZWJzaXRlIGlzIHRoZSBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXIgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYSB1c2Vy4oCZcyBmaXJzdCBpbXByZXNzaW9uIHJlbGF0ZXMgdG8gd2ViIGRlc2lnbi4gSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW4gaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cIixcclxuICAvLyAgICAgXCJUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5IHJlZXZhbHVhdGluZyB0aGVpciB3ZWJzaXRl4oCZcyBkZXNpZ24gYnV0IGFsc28gcGFydG5lcmluZyB3aXRoIEtyeXB0aWMgSGFzaCwgdGhlIHdlYiBkZXNpZ24gYWdlbmN5IHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWUgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHMgdW5kZXIgb3VyIGJlbHQsIHdlJ3JlIGNvbmZpZGVudCB3ZSBjYW4gZGVzaWduIGEgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlIGJ1c2luZXNzLlwiLFxyXG4gIC8vICAgXSxcclxuICAvLyAgIGltYWdlOiBcImFzc2V0cy9pbWcvbmV3cy8xLmpwZ1wiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDYsXHJcbiAgLy8gICBuYW1lOiBcIk1vYmlsZSBBcHBcIixcclxuICAvLyAgIHRleHQ6IFtcclxuICAvLyAgICAgXCJLcnlwdGljIEhhc2ggaXMgYSBsZWFkaW5nIHdlYiBkZXNpZ24gYWdlbmN5IHdpdGggYW4gYXdhcmQtd2lubmluZyBkZXNpZ24gdGVhbSB0aGF0IGNyZWF0ZXMgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXQgY2FwdHVyZSB5b3VyIGJyYW5kLCBpbXByb3ZlIHlvdXIgY29udmVyc2lvbiByYXRlcywgYW5kIG1heGltaXplIHlvdXIgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzcyBhbmQgYWNoaWV2ZSB5b3VyIGdvYWxzLlwiLFxyXG4gIC8vICAgICBcIkluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlIGZpcnN0IGludGVyYWN0aW9uIGNvbnN1bWVycyBoYXZlIHdpdGggeW91ciBidXNpbmVzcy4gVGhhdCdzIHdoeSBhbG1vc3QgOTUgcGVyY2VudCBvZiBhIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0byB3ZWIgZGVzaWduLiBJdOKAmXMgYWxzbyB3aHkgd2ViIGRlc2lnbiBzZXJ2aWNlcyBjYW4gaGF2ZSBhbiBpbW1lbnNlIGltcGFjdCBvbiB5b3VyIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlwiLFxyXG4gIC8vICAgICBcIlRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHkgcmVldmFsdWF0aW5nIHRoZWlyIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzbyBwYXJ0bmVyaW5nIHdpdGggS3J5cHRpYyBIYXNoLCB0aGUgd2ViIGRlc2lnbiBhZ2VuY3kgdGhhdOKAmXMgZHJpdmVuIG1vcmUgdGhhbiAkMi40IGJpbGxpb24gaW4gcmV2ZW51ZSBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkcyB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYSBjdXN0b20gd2Vic2l0ZSB0aGF0IGRyaXZlcyBzYWxlcyBmb3IgeW91ciB1bmlxdWUgYnVzaW5lc3MuXCIsXHJcbiAgLy8gICBdLFxyXG4gIC8vICAgaW1hZ2U6IFwiYXNzZXRzL2ltZy9uZXdzLzIuanBnXCIsXHJcbiAgLy8gfSxcclxuXTtcclxuY29uc3QgU2VydmljZUl0ZW1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0U2VydmljZU1vZGFsLCBtb2RhbFRvZ2dsZSwgbW9kYWwgfSA9IHVzZUNvbnRleHQoVG9reW9Db250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0IHctZnVsbCBoLWF1dG8gY2xlYXItYm90aCBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtbC1bLTQwcHhdIGxpc3Qtbm9uZSBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi1bNDBweF0gdy0xLzMgcGwtWzQwcHhdXCIga2V5PXtzZXJ2aWNlLmlkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyIHctZnVsbCBoLWF1dG8gY2xlYXItYm90aCBmbG9hdC1sZWZ0IHJlbGF0aXZlIGJvcmRlci1zb2xpZCBib3JkZXItW3JnYmEoMCwwLDAsLjEpXSBib3JkZXIgYmctd2hpdGUgcHQtWzQ1cHhdIHByLVszMHB4XSBwYi1bNDBweF0gcGwtWzMwcHhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlciBpbmxpbmUtYmxvY2sgbWItWzI1cHhdIHJlbGF0aXZlIHctWzYwcHhdIGgtWzYwcHhdIGxlYWRpbmctWzYwcHhdIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1bcmdiYSgwLDAsMCwuMDMpXSBmb250LWJvbGQgdGV4dC1ibGFjayBmb250LW1vbnRzZXJyYXQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICB7c2VydmljZS5pZCA8PSA5ID8gYDAke3NlcnZpY2UuaWR9YCA6IHNlcnZpY2UuaWR9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBmb250LWJvbGQgdGV4dC1ibGFjayB0ZXh0LVsxOHB4XSBtYi1bMTVweF1cIj57c2VydmljZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPntzZXJ2aWNlLnRleHRbMF0uc2xpY2UoMCwgNzApfS4uLjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX3JlYWRfbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VydmljZU1vZGFsKHNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5SZWFkIE1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRva3lvX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG1vZGFsVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZXJ2aWNlTW9kYWwoc2VydmljZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIFNlcnZpY2UgUG9wdXAgU3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3B1cF9zZXJ2aWNlX2ltYWdlIG9wYWNpdHktMCBpbnZpc2libGUgaGlkZGVuIGFic29sdXRlIHotWy0xMTFdXCIgc3JjPXtzZXJ2aWNlLmltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3B1cF9zZXJ2aWNlX2ltYWdlIG9wYWNpdHktMCBpbnZpc2libGUgaGlkZGVuIGFic29sdXRlIHotWy0xMTFdXCIgc3JjPXtzZXJ2aWNlLnZpZGVvfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VJdGVtcztcclxuXHJcbiJdLCJuYW1lcyI6WyJUb2t5b0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2VydmljZXMiLCJpZCIsIm5hbWUiLCJ0ZXh0IiwidmlkZW8iLCJpbWFnZSIsIlNlcnZpY2VJdGVtcyIsInNldFNlcnZpY2VNb2RhbCIsIm1vZGFsVG9nZ2xlIiwibW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInNlcnZpY2UiLCJsaSIsInNwYW4iLCJoMyIsInAiLCJzbGljZSIsImEiLCJocmVmIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/service/ServiceItems.js\n"));

/***/ })

});