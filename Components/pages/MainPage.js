"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DataContext_1 = __importDefault(require("../../Context/DataContext"));
const react_loader_spinner_1 = require("react-loader-spinner");
const Products_1 = __importDefault(require("../sections/Products"));
const online_shop_png_1 = __importDefault(require("../../assets/online_shop.png"));
const MainPage = () => {
    const context = (0, react_1.useContext)(DataContext_1.default);
    return (react_1.default.createElement("div", { className: "bg-lgreen-200 w-full container flex flex-wrap justify-between items-center mx-auto" },
        react_1.default.createElement("div", { className: "mt-14 rounded-xl" },
            react_1.default.createElement("img", { src: online_shop_png_1.default, className: "" })),
        (context === null || context === void 0 ? void 0 : context.loading) ?
            react_1.default.createElement(react_loader_spinner_1.InfinitySpin, { width: '200', color: "#f0f5f3" })
            :
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Products_1.default, { title: "Most popular products", productsFiltered: context === null || context === void 0 ? void 0 : context.productsFromFetch.slice(0, 10) }))));
};
exports.default = MainPage;
