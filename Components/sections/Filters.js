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
const Checkbox_1 = __importDefault(require("../UI/Checkbox"));
const MainInput_1 = __importDefault(require("../UI/MainInput"));
const DropDown_1 = __importDefault(require("../UI/DropDown"));
const Filters = () => {
    const context = (0, react_1.useContext)(DataContext_1.default);
    return (react_1.default.createElement("div", { className: "flex flex-rows px-5" },
        react_1.default.createElement("h1", { className: "text-lg tracking-wide mr-5" }, "Looking for a product?..."),
        react_1.default.createElement(MainInput_1.default, { text: "Search...", action: (e) => context === null || context === void 0 ? void 0 : context.onFilterChange(e.target.value) }),
        react_1.default.createElement(DropDown_1.default, { text: "All categories...", options: context === null || context === void 0 ? void 0 : context.categories, action: (e) => context === null || context === void 0 ? void 0 : context.onFilterCategory(e.target.value) }),
        react_1.default.createElement(Checkbox_1.default, { text: "Products with low price", action: (e) => context === null || context === void 0 ? void 0 : context.onFilterPrice(e.target.checked) })));
};
exports.default = Filters;
