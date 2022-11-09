"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DataContext_1 = require("./Context/DataContext");
const Layout_1 = __importDefault(require("./Components/sections/Layout"));
function App() {
    return (react_1.default.createElement(DataContext_1.DataProvider, null,
        react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(Layout_1.default, null))));
}
exports.default = App;
