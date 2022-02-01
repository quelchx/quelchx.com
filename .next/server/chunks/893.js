"use strict";
exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 6893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Heading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-rough-notation"
var external_react_rough_notation_ = __webpack_require__(9499);
// EXTERNAL MODULE: ./components/ColorHighlight.jsx
var ColorHighlight = __webpack_require__(7057);
// EXTERNAL MODULE: ./components/AnimateOnScroll.jsx
var AnimateOnScroll = __webpack_require__(2389);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(75);
var data_default = /*#__PURE__*/__webpack_require__.n(data);
;// CONCATENATED MODULE: ./utils/random.js
// random number function for colors
function randomize(num) {
    return Math.round(Math.random() * num);
};

;// CONCATENATED MODULE: ./components/Heading.jsx






function Heading({ title  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_rough_notation_.RoughNotationGroup, {
        show: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ColorHighlight/* default */.Z, {
            animationDuration: 3,
            color: (data_default()).colors[randomize((data_default()).colors.length - 1)],
            children: /*#__PURE__*/ jsx_runtime_.jsx(AnimateOnScroll/* default */.Z, {
                animation: "fade-right",
                delay: "300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-4xl md:text-8xl font-bold text-gray-100 dark:text-white my-2",
                    children: title
                })
            })
        })
    }));
};


/***/ })

};
;