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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProvider = exports.ProductsContext = void 0;
const react_1 = __importStar(require("react"));
exports.ProductsContext = (0, react_1.createContext)(null);
function DataProvider({ children }) {
    const [productsFromFetch, setProductsFromFetch] = (0, react_1.useState)([]);
    const [productsFiltered, setProductsFiltered] = (0, react_1.useState)([]);
    const [categories, setCategories] = (0, react_1.useState)([]);
    const [lowPriceFilter, setLowPriceFilter] = (0, react_1.useState)(false);
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)('');
    const [textFilter, setTextFilter] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        loadProducts();
    }, []);
    const loadProducts = () => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        const response = yield fetch("https://dummyjson.com/products");
        const data = yield response.json();
        setProductsFromFetch(data.products);
        setProductsFiltered(data.products);
        var products = new Array();
        var categories = new Array();
        products = data.products;
        products.map((product, i) => {
            const finded = categories.findIndex(e => e.category === product.category);
            if (finded === -1) {
                categories.push({ category: product.category });
            }
        }, {});
        setCategories(categories);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });
    const onResetFilter = () => {
        setProductsFiltered(productsFromFetch);
    };
    const onFilterChange = (value) => {
        setTextFilter(value);
        var productsFilter = [];
        if (value === '') {
            productsFilter = productsFromFetch.filter((product) => {
                if (lowPriceFilter ? product.price < 400.00 : true) {
                    return true;
                }
            });
        }
        else {
            productsFilter = productsFromFetch.filter((product) => {
                var product_name = product.title.toLowerCase();
                if (product_name.includes(value.toLowerCase()) && (lowPriceFilter ? product.price < 400.00 : true)) {
                    return true;
                }
            });
        }
        if (categoryFilter === '') {
            setProductsFiltered(productsFilter);
        }
        else {
            setProductsFiltered(productsFilter.filter(product => product.category == categoryFilter));
        }
    };
    const onFilterPrice = (checked) => {
        setLowPriceFilter(checked);
        var productsFilter = [];
        if (textFilter === '') {
            if (checked) {
                productsFilter = productsFromFetch.filter((producto) => {
                    if (producto.price < 400.00) {
                        return true;
                    }
                });
            }
            else {
                productsFilter = productsFromFetch;
            }
        }
        else {
            productsFilter = productsFromFetch.filter((product) => {
                var product_name = product.title.toLowerCase();
                if (product_name.includes(textFilter.toLowerCase()) && (checked ? product.price < 400.00 : true)) {
                    return true;
                }
            });
        }
        if (categoryFilter === '') {
            setProductsFiltered(productsFilter);
        }
        else {
            setProductsFiltered(productsFilter.filter(product => product.category == categoryFilter));
        }
    };
    const onFilterCategory = (category) => {
        setCategoryFilter(category);
        var productsFilter = [];
        if (textFilter === '') {
            if (lowPriceFilter) {
                productsFilter = productsFromFetch.filter((product) => {
                    if (product.price < 400.00) {
                        return true;
                    }
                });
            }
            else {
                productsFilter = productsFromFetch;
            }
        }
        else {
            productsFilter = productsFromFetch.filter((product) => {
                var product_name = product.title.toLowerCase();
                if (product_name.includes(textFilter.toLowerCase()) && (lowPriceFilter ? product.price < 400.00 : true)) {
                    return true;
                }
            });
        }
        if (category === '') {
            setProductsFiltered(productsFilter);
        }
        else {
            setProductsFiltered(productsFilter.filter(product => product.category == category));
        }
    };
    const providerValue = {
        productsFromFetch,
        setProductsFromFetch,
        productsFiltered,
        setProductsFiltered,
        categories,
        setCategories,
        lowPriceFilter,
        setLowPriceFilter,
        categoryFilter,
        setCategoryFilter,
        textFilter,
        setTextFilter,
        loading,
        setLoading,
        onResetFilter,
        onFilterChange,
        onFilterCategory,
        onFilterPrice
    };
    return (react_1.default.createElement(exports.ProductsContext.Provider, { value: {
            productsFromFetch,
            setProductsFromFetch,
            productsFiltered,
            setProductsFiltered,
            categories,
            setCategories,
            lowPriceFilter,
            setLowPriceFilter,
            categoryFilter,
            setCategoryFilter,
            textFilter,
            setTextFilter,
            loading,
            setLoading,
            onResetFilter,
            onFilterChange,
            onFilterCategory,
            onFilterPrice
        } }, children));
}
exports.DataProvider = DataProvider;
exports.default = exports.ProductsContext;
