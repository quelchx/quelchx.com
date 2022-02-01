"use strict";
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 2389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnimateOnScroll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function AnimateOnScroll({ children , animation , easing , mirror , duration , once , delay , anchor ,  }) {
    AnimateOnScroll.defaultProps = {
        animation: "fade-in",
        easing: "ease-in-out",
        mirror: true,
        once: false,
        delay: "0",
        anchor: "",
        duration: "0"
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-aos": animation,
        "data-aos-easing": easing,
        "data-aos-mirror": mirror,
        "data-aos-duration": duration,
        "data-aos-once": once,
        "data-aos-delay": delay,
        "data-aos-anchor-placement": anchor,
        children: children
    }));
};


/***/ }),

/***/ 7057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorHighlight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9499);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rough_notation__WEBPACK_IMPORTED_MODULE_2__);



function ColorHighlight({ color , children  }) {
    // Change the animation duration depending on length of text we're animating (speed = distance / time)
    const animationDuration = Math.floor(30 * children.length);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_rough_notation__WEBPACK_IMPORTED_MODULE_2__.RoughNotation, {
        type: "highlight",
        multiline: true,
        padding: [
            0,
            2
        ],
        iterations: 1,
        animationDuration: animationDuration,
        color: color,
        children: children
    }));
};


/***/ }),

/***/ 6675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContainerBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(75);
var data_default = /*#__PURE__*/__webpack_require__.n(data);
;// CONCATENATED MODULE: ./components/Footer.jsx


function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "text-gray-700 body-font",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#_",
                    className: "text-xl font-black leading-none dark:text-white text-gray-900 select-none logo",
                    children: [
                        "Eric",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-600",
                            children: " Quelch"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-4 text-sm text-gray-500 dark:text-gray-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0",
                    children: "Built with Next.js and Tailwind"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: (data_default()).social.github,
                            target: "_blank",
                            className: "hvr-buzz text-gray-400 hover:text-gray-500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "GitHub"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                        clipRule: "evenodd"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: (data_default()).social.twitter,
                            target: "_blank",
                            className: "hvr-buzz text-gray-400 hover:text-gray-500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Twitter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            target: "_blank",
                            href: (data_default()).social.linkedin,
                            className: "hvr-buzz text-gray-400 hover:text-gray-500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Linkedin"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-linkedin h-6 w-6",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./components/Navigation/routes.js
var routes = __webpack_require__(7007);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);
;// CONCATENATED MODULE: ./components/Navigation/Navbar.jsx







function Navbar() {
    const router = (0,router_.useRouter)();
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    function generateRoutes() {
        return routes_default().map((route)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: route.path,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "hvr-grow text-base font-normal text-gray-700 dark:text-white",
                    children: [
                        route.name,
                        router.asPath === route.path && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "currentColor",
                                className: "my-1 bi bi-arrow-down inline-block h-3 w-3 mb-1",
                                viewBox: "0 0 16 16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                })
                            })
                        })
                    ]
                })
            }, route.id));
        });
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "top",
        className: "max-w-6xl mx-auto px-4 py-2 md:py-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex md:flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "hvr-pulse font-semibold text-xl text-gray-800 dark:text-white",
                                        children: (data_default()).name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-base text-gray-800 dark:text-white",
                                        children: (data_default()).title
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-x-8 hidden md:block",
                        children: generateRoutes()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-x-4 flex flex-row items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: (data_default()).social.github,
                                target: "_blank",
                                className: "hvr-buzz text-base font-normal text-gray-700 dark:text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    className: "bi bi-github h-5 w-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: (data_default()).social.twitter,
                                target: "_blank",
                                className: "hvr-buzz text-base font-normal text-gray-700 dark:text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-twitter h-5 w-5",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: (data_default()).social.linkedin,
                                target: "_blank",
                                className: "hvr-buzz text-base font-normal text-gray-700 dark:text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-linkedin h-5 w-5",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "aria-label": "Toggle Dark Mode",
                                type: "button",
                                className: "w-12 h-12 p-3 rounded focus:outline-none",
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: mounted && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    className: "w-6 h-6 text-yellow-500 dark:text-yellow-500",
                                    children: theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-x-8 block md:hidden mt-4",
                children: generateRoutes()
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Layout/ContainerBlock.jsx






function ContainerBlock({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Eric Quelch - Developer, Writer, Creator, Mentor and Tutor",
        description: `I've been developing websites for 4 years straight. Get in touch with me to know more.`,
        image: "https://avatars.githubusercontent.com/u/74473426?v=4",
        type: "website",
        ...customMeta
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
                        integrity: "sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://quelchx${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://quelchx.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "quelchx.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@wcbblez"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 7007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _uuid = _interopRequireDefault(__webpack_require__(4329));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
module.exports = [
    {
        id: (0, _uuid).default(),
        name: "About",
        path: "/about"
    },
    {
        id: (0, _uuid).default(),
        name: "Experience",
        path: "/experience"
    },
    {
        id: (0, _uuid).default(),
        name: "Contact",
        path: "/contact"
    }, 
];


/***/ }),

/***/ 75:
/***/ ((module) => {


module.exports = {
    name: "Eric Quelch",
    title: "Full Stack Developer",
    social: {
        github: "https://github.com/quelchx",
        linkedin: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEXA_gvDoYhwwAAAX0LWPjAXFBRMlWVhGrf8RhVYW7Cszs8BOzR-clkcNZitlgufNBEYunms4B2H1bvMTGPL5Vlwr5BkA-Lie6ReuupqqMRM8SoWt_O0sWlIweKIAYSNwIk34k=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fca.linkedin.com%2Fin%2Feric-quelch-768861201",
        twitter: "https://twitter.com/wcbblez",
        avatar: "https://avatars.githubusercontent.com/u/74473426?v=4"
    },
    highlights: [
        "Developer",
        "Mentor",
        "Designer",
        "Leader"
    ],
    colors: [
        "#F59E0B",
        "#b30059",
        "#007399",
        "#84CC16",
        "#10B981",
        "#3B82F6",
        "#ff6633",
        "#2d862d", 
    ]
};


/***/ }),

/***/ 4329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ guid)
/* harmony export */ });
/** @returns random string of 4 chars */ function s4() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
/** @returns random identification */ function guid() {
    return s4() + "-" + s4() + "-" + s4() + "-" + s4();
}; /**
 * functions are modified from Prashant Yadav
 * @https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/#:~:text=Javascript%20does%20not%20have%20any,to%20generate%20unique%20random%20ids.
 */ 


/***/ })

};
;