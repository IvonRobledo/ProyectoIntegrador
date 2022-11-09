"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainButton_1 = __importDefault(require("./MainButton"));
const react_router_dom_1 = require("react-router-dom");
const Thumbnail = ({ product }) => {
    return (react_1.default.createElement("div", { className: "bg-lgreen-100 w-full h-full p-5 rounded-xl border-brown-200 shadow-brown-400" },
        react_1.default.createElement("img", { src: product.thumbnail, className: "w-full h-56" }),
        react_1.default.createElement("h3", { className: "text-lg my-2 text-center font-medium tracking-wide text-left" }, product.title),
        react_1.default.createElement("div", { className: "text-lg grid grid-cols-2 text-brown-800" },
            react_1.default.createElement("div", { className: "justify-self-start font-medium" }, product.category),
            react_1.default.createElement("div", { className: "justify-self-end" },
                " $ ",
                product.price)),
        react_1.default.createElement(react_router_dom_1.Link, { to: `/Product/${product.id}` },
            react_1.default.createElement(MainButton_1.default, { text: "View Details", action: (e) => { } }))));
};
exports.default = Thumbnail;
