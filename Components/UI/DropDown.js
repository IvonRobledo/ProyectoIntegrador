"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DropDown = ({ text, options, action }) => {
    return (react_1.default.createElement("div", { className: "flex items-center mr-4 w-[250px]" },
        react_1.default.createElement("select", { onChange: action, className: "w-full text-xl px-2 py-1 bg-white rounded-md border-pink-300 focus:border-pink-300" },
            react_1.default.createElement("option", { value: "" }, text),
            options !== undefined && options !== null && options.length > 0 ?
                options.map((option) => {
                    return react_1.default.createElement("option", { key: option.category, value: option.category }, option.category);
                })
                :
                    '')));
};
exports.default = DropDown;
