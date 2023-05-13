"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 7132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.tsx



const listItems = [
    "GIGS",
    "NEWSLETTER",
    "SOCIAL"
];
function Header({ selected  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex justify-end absolute top-8 left-8",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            className: "flex text-sm lg:flex-col tracking-wider text-gray-400 gap-4 lg:gap-0",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: `${!selected ? "text-black" : ""} hover:text-black `,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: "HOME"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: `${selected === "bio" ? "text-black" : ""} hover:text-black `,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/bio",
                        children: "BIO"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: "https://davidogilvy.uk/",
                    target: "_blank",
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "hover:text-black",
                        children: "STORE"
                    })
                }),
                listItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        className: "group relative",
                        children: [
                            item,
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "opacity-0 group-hover:opacity-100 z-10 absolute transition duration-500 ease-in-out bg-gray-200 p-2 left-10 top-0 rounded text-sm whitespace-nowrap",
                                children: "Coming Soon"
                            })
                        ]
                    }, item))
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.tsx




function Layout({ children , selected  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            selected ? `${selected.charAt(0).toUpperCase() + selected.slice(1)} | ` : "",
                            "David Ogilvy"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: ""
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header, {
                selected: selected
            }),
            children
        ]
    });
}


/***/ })

};
;