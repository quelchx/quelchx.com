"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4339:
/***/ ((module) => {


module.exports = [
    {
        name: "AOS Vue",
        details: "Animate on scroll single file component for Vue 3. This package is slowly growing with almost 1000 downloads to this day.",
        path: "https://www.npmjs.com/package/aos-vue",
        image: "https://www.zdnet.com/a/img/resize/41f98ac5e953bbdc816fda798ab505817d23e886/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?width=1200&height=1200&fit=crop&auto=webp"
    },
    {
        name: "Vue Typewriter",
        details: "Typewriting component with lots of features built for Vue 3. Vue Writer has over 5000 downloads to this day, and used across multiple websites!",
        path: "https://www.npmjs.com/package/vue-writer",
        image: "https://avatars.githubusercontent.com/u/6128107?s=280&v=4"
    },
    {
        name: "Perty UI",
        details: "Github inspired dark theme with a twist for Visual Studio Code. Syntax highlighting for every major programming language and much more.",
        path: "https://marketplace.visualstudio.com/items?itemName=ericquelch.perty",
        image: "https://pbs.twimg.com/profile_images/1410632439370641409/Pt-7RucE_400x400.jpg"
    }, 
];


/***/ }),

/***/ 6517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout/ContainerBlock.jsx + 2 modules
var ContainerBlock = __webpack_require__(6675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-rough-notation"
var external_react_rough_notation_ = __webpack_require__(9499);
// EXTERNAL MODULE: ./components/ColorHighlight.jsx
var ColorHighlight = __webpack_require__(7057);
;// CONCATENATED MODULE: external "typewriter-effect"
const external_typewriter_effect_namespaceObject = require("typewriter-effect");
var external_typewriter_effect_default = /*#__PURE__*/__webpack_require__.n(external_typewriter_effect_namespaceObject);
// EXTERNAL MODULE: ./components/AnimateOnScroll.jsx
var AnimateOnScroll = __webpack_require__(2389);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(75);
var data_default = /*#__PURE__*/__webpack_require__.n(data);
;// CONCATENATED MODULE: ./components/Hero.jsx








function Hero() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "px-2 py-32 md:px-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container items-center max-w-6xl px-8 mx-auto xl:px-5",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap items-center spa sm:-mx-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full md:w-1/2 md:px-3",
                        children: data_default().highlights.map((highlight)=>{
                            let i = data_default().highlights.indexOf(highlight);
                            return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl md:text-8xl flex font-bold text-gray-700 dark:text-white my-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "p-2",
                                    style: {
                                        backgroundColor: (data_default()).colors[i]
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-monaco pt-2",
                                        children: highlight
                                    })
                                })
                            }));
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full md:w-1/2 avatar",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full h-auto overflow-hidden rounded-md sm:rounded-xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AnimateOnScroll/* default */.Z, {
                                    delay: "200",
                                    duration: "300",
                                    animation: "fade-down",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: (data_default()).social.avatar,
                                        className: "shadow rounded-full hover:animate-pulse"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(AnimateOnScroll/* default */.Z, {
                                    duration: "400",
                                    delay: "400",
                                    animation: "fade-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-row justify-between pl-36 mt-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " hover:-rotate-2 rotate-2 flex flex-row space-x-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-arrow-90deg-up",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((external_typewriter_effect_default()), {
                                                    onInit: (typewriter)=>{
                                                        typewriter.typeString("Yep, thats me").pauseFor(2500).start();
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Projects/Project.jsx


function Project({ details , path , image , name  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
        className: "flex items-center justify-between w-full col-span-1 p-6 dark:bg-gray-700 bg-white rounded-lg shadow",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col pr-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative pl-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "absolute left-0 w-10 h-10 dark:text-gray-200 text-green-600 fill-current",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 125",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-2 text-sm dark:text-green-400 text-gray-600 sm:text-base lg:text-sm xl:text-base",
                                children: details
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pl-12 mt-3 text-sm font-medium leading-5 dark:text-white text-gray-800 truncate sm:text-base lg:text-base",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mx-2 text-sm leading-5 text-gray-500 dark:text-gray-200 truncate",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: path,
                                target: "_blank",
                                children: name
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24",
                src: image,
                alt: name,
                width: "auto",
                height: "auto"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./constants/projects.js
var projects = __webpack_require__(4339);
var projects_default = /*#__PURE__*/__webpack_require__.n(projects);
// EXTERNAL MODULE: ./utils/uuid.js
var uuid = __webpack_require__(4329);
;// CONCATENATED MODULE: ./components/Projects/Projects.jsx






function Projects() {
    const listProjects = projects_default().map((project)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(AnimateOnScroll/* default */.Z, {
                animation: "zoom-in",
                duration: "500",
                delay: "300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                        name: project.name,
                        image: project.image,
                        details: project.details,
                        path: project.path
                    })
                })
            })
        }, (0,uuid["default"])()));
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(AnimateOnScroll/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "projects",
            className: "flex items-center justify-center py-16 dark:bg-gray-900 bg-gray-100 min-w-screen",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-6xl px-12 mx-auto bg-gray-100 dark:bg-gray-900 md:px-16 xl:px-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center lg:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AnimateOnScroll/* default */.Z, {
                                animation: "zoom-in",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 text-base font-medium tracking-tight text-green-500 uppercase",
                                        children: "What I have been up to"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-4xl font-extrabold leading-10 tracking-tight dark:text-gray-300 text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl",
                                        children: "Projects of mine"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "my-2 text-lg text-gray-600 dark:text-gray-300",
                                        children: "Here are a few useful packages and side projects I have created."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full lg:w-1/2",
                            children: listProjects
                        })
                    ]
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Repositories.jsx


function Repositories({ repos  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "py-20 bg-gray-300 dark:bg-gray-700",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-8 mx-auto max-w-7xl lg:px-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-6xl lg:text-9xl max-w-lg font-bold text-gray-700 dark:text-white my-20 md:my-0 text-center lg:text-left",
                            children: "Latest Code"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: `https://github.com/quelchx`,
                            className: "is-button mb-20 md:mb-0 px-6 py-4 rounded-md bg-gray-900 text-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 dark:bg-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-arrow-up-right-square",
                                    stroke: "4",
                                    strokeWidth: "4",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "View GitHub"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-1 gap-0 text-gray-600 dark:text-gray-200 md:grid-cols-2 mt-6 md:gap-8",
                    children: repos.map((repo)=>{
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AnimateOnScroll/* default */.Z, {
                            animation: "fade-up",
                            delay: "300",
                            duration: "500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "mt-4 mb-2 font-semibold text-gray-900 dark:text-gray-300",
                                    children: repo.name.toUpperCase()
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-800 dark:text-gray-200",
                                    children: repo.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    target: "_blank",
                                    href: repo.clone_url,
                                    className: "font-semibold group flex flex-row space-x-2 w-full items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pt-2",
                                            children: "View Repository "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "transform group-hover:translate-x-2 transition duration-300",
                                            children: "→"
                                        })
                                    ]
                                })
                            ]
                        }, repo.id));
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./lib/repositories.js

const getRepositories = async ()=>{
    try {
        const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:quelchx+sort:author-date-asc`);
        let repos = res.data.items;
        let latest = repos.slice(0, 6);
        return latest;
    } catch (error) {
        return error;
    }
};
/* harmony default export */ const lib_repositories = (getRepositories);

;// CONCATENATED MODULE: ./pages/index.jsx






function Home({ repositories  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerBlock/* default */.Z, {
        title: "Eric Quelch - Developer, Writer, Creator",
        description: "Building a template with Next.js and Tailwindcss - for FreeCodeCamp users.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Repositories, {
                repos: repositories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {})
        ]
    }));
};
const getStaticProps = async ()=>{
    const repositories = await lib_repositories();
    return {
        props: {
            repositories
        }
    };
};


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9499:
/***/ ((module) => {

module.exports = require("react-rough-notation");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,211], () => (__webpack_exec__(6517)));
module.exports = __webpack_exports__;

})();