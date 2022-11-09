"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Checkbox = ({ text, action }) => {
    return (react_1.default.createElement("div", { className: "flex items-center mr-4" },
        react_1.default.createElement("input", { type: "checkbox", id: "checkbox", onClick: action, className: "w-5 h-5 text-pink-600 bg-lgreen-100 rounded-lg border-gray-300 focus:ring-pink-500 focus:ring-2" }),
        react_1.default.createElement("label", { htmlFor: "checkbox", className: "ml-2 text-base font-medium text-brown-900" }, text)));
};
exports.default = Checkbox;
