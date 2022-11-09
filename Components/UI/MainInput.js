"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainInput = ({ text, action }) => {
    return (react_1.default.createElement("div", { className: "flex items-center mr-4" },
        react_1.default.createElement("input", { type: "text", placeholder: text, onChange: action, className: "w-full text-xl px-2 py-1 bg-white rounded-md border-pink-300 focus:border-pink-300" })));
};
exports.default = MainInput;
