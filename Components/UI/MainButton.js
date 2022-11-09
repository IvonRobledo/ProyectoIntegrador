"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainButton = ({ text, action }) => {
    return (react_1.default.createElement("button", { className: "bg-pink-500 w-full py-2 my-2 rounded-xl border-pink-800 shadow-pink-300 text-lg text-center tracking-widest text-white hover:bg-pink-700", onClick: (e) => action(e) }, text));
};
exports.default = MainButton;
