"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MyShoppingStore_png_1 = __importDefault(require("../../assets/MyShoppingStore.png"));
const react_router_dom_1 = require("react-router-dom");
const MainPage_1 = __importDefault(require("../pages/MainPage"));
const gr_1 = require("react-icons/gr");
const ProductsPage_1 = __importDefault(require("../pages/ProductsPage"));
const ProductItem_1 = __importDefault(require("../pages/ProductItem"));
const Header = () => {
    return (react_1.default.createElement("div", { className: "bg-white border-gray-200 p-0 rounded" },
        react_1.default.createElement("nav", { className: "bg-lpink-100 p-2 fixed top-0 left-0 right-0 shadow-lgreen-400" },
            react_1.default.createElement("div", { className: "container flex flex-wrap justify-between items-center mx-auto" },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: ({ isActive }) => (isActive ? 'activeLink flex items-center' : 'flex items-center') },
                    react_1.default.createElement("img", { src: MyShoppingStore_png_1.default, className: "mr-3 h-6 sm:h-9", alt: "Flowbite Logo" }),
                    react_1.default.createElement("span", { className: "self-center text-xl font-semibold whitespace-nowrap tracking-wide" }, "My Online Store")),
                react_1.default.createElement("div", { className: "inline flex flex-rows" },
                    react_1.default.createElement("div", { className: "flex items-center mx-4" },
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: ({ isActive }) => (isActive ? 'activeLink ' : '') }, "Home")),
                    react_1.default.createElement("div", { className: "flex items-center mx-4" },
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/Products", className: ({ isActive }) => (isActive ? 'activeLink' : '') }, "Products")),
                    react_1.default.createElement("div", { className: "flex items-center mx-4" },
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: ({ isActive }) => (isActive ? 'activeLink' : '') },
                            react_1.default.createElement(gr_1.GrCart, null)))))),
        react_1.default.createElement("section", { className: "w-full h-full bg-shopping bg-repeat min-h-screen" },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(MainPage_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Products", element: react_1.default.createElement(ProductsPage_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Product/:id", element: react_1.default.createElement(ProductItem_1.default, null) })))));
};
exports.default = Header;
