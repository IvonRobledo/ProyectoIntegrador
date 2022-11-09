"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Thumbnail_1 = __importDefault(require("../UI/Thumbnail"));
const Products = ({ title, productsFiltered }) => {
    return (react_1.default.createElement("div", { className: "bg-white w-full h-full m-2 p-5 rounded-xl" },
        react_1.default.createElement("h1", { className: "text-3xl text-center font-medium tracking-widest mb-5" },
            title,
            " (",
            productsFiltered !== undefined ? productsFiltered.length : 0,
            ")"),
        react_1.default.createElement("div", { className: "grid grid-cols-4 gap-3" }, productsFiltered !== undefined ?
            productsFiltered.map((product) => {
                return (react_1.default.createElement(Thumbnail_1.default, { key: product.id, product: product }));
            })
            :
                'Loading...')));
};
exports.default = Products;
