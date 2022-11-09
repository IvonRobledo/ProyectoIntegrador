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
const react_router_dom_1 = require("react-router-dom");
const MainButton_1 = __importDefault(require("../UI/MainButton"));
const not_found_jpg_1 = __importDefault(require("../../assets/not_found.jpg"));
const react_loader_spinner_1 = require("react-loader-spinner");
const Products_1 = __importDefault(require("../sections/Products"));
const ProductItem = () => {
    const [currentProduct, setCurrentProduct] = (0, react_1.useState)();
    const context = (0, react_1.useContext)(DataContext_1.default);
    let { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        var product = new Array();
        product = context === null || context === void 0 ? void 0 : context.productsFromFetch.filter(product => product.id == Number(id));
        setCurrentProduct(product[0]);
    }, [context === null || context === void 0 ? void 0 : context.productsFromFetch, id]);
    return (react_1.default.createElement("div", { className: "bg-lgreen-200 w-full container flex flex-wrap justify-between items-center mx-auto pt-16" },
        react_1.default.createElement("div", { className: "bg-lgreen-100 w-full h-full p-5 rounded-xl border-brown-200 shadow-brown-400" }, (context === null || context === void 0 ? void 0 : context.loading) ?
            react_1.default.createElement(react_loader_spinner_1.InfinitySpin, { width: '200', color: "#f0f5f3" })
            :
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("section", { className: "grid grid-cols-2" },
                        react_1.default.createElement("div", null, currentProduct === undefined || currentProduct === null || currentProduct.images === undefined || currentProduct.images.length === 0 ?
                            react_1.default.createElement("img", { src: not_found_jpg_1.default, className: "w-full h-full" })
                            :
                                react_1.default.createElement("img", { src: currentProduct.images[0], className: "w-full h-full" })),
                        react_1.default.createElement("div", { className: "py-5 px-10" },
                            react_1.default.createElement("h3", { className: "text-2xl my-2 text-center font-medium tracking-wide text-left" }, currentProduct !== undefined && currentProduct.title !== undefined ? currentProduct.title : ''),
                            react_1.default.createElement("div", { className: "text-left font-medium tracking-wide" }, "Category:"),
                            react_1.default.createElement("div", { className: "text-left font-light" },
                                " ",
                                currentProduct !== undefined && currentProduct.category !== undefined ? currentProduct.category : '',
                                " "),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: "text-left font-medium tracking-wide" }, "Rating:"),
                            react_1.default.createElement("div", { className: "text-left font-light" },
                                " ",
                                currentProduct !== undefined && currentProduct.rating !== undefined ? currentProduct.rating : '',
                                " "),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: "text-left font-medium tracking-wide" }, "Description:"),
                            react_1.default.createElement("div", { className: "text-left font-light" }, currentProduct !== undefined && currentProduct.description !== undefined ? currentProduct.description : ''),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("div", { className: "text-left font-medium tracking-wide" }, "Price:"),
                            react_1.default.createElement("div", { className: "text-left font-light" },
                                "$ ",
                                currentProduct !== undefined && currentProduct.price !== undefined ? currentProduct.price : ''),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement(MainButton_1.default, { text: "Add to cart", action: (e) => { } }))),
                    react_1.default.createElement("section", null, currentProduct !== undefined ?
                        react_1.default.createElement(Products_1.default, { title: "More similar products", productsFiltered: context === null || context === void 0 ? void 0 : context.productsFromFetch.filter((product) => (product.category == currentProduct.category && product.id != currentProduct.id)) })
                        :
                            '')))));
};
exports.default = ProductItem;
