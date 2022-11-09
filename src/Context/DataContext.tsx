import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Product, Category } from "./Types";

export type ProductsContextType = {
    productsFromFetch: Array<Product>;
    setProductsFromFetch: (value: Array<Product>) => void;
    productsFiltered: Array<Product>;
    setProductsFiltered: (value: Array<Product>) => void;
    categories: Array<Category>;
    setCategories: (value: Array<Category>) => void;
    lowPriceFilter: boolean;
    setLowPriceFilter: (value: boolean) => void;
    categoryFilter: string | undefined;
    setCategoryFilter: (value: string) => void;
    textFilter: string;
    setTextFilter: (value: string) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    onResetFilter: () => void;
    onFilterChange: (value: string) => void;
    onFilterCategory: (value: string) => void;
    onFilterPrice: (value: boolean) => void;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

export interface Props {
    children: ReactNode;
}
  
export function DataProvider({ children }: Props) {
    const [productsFromFetch, setProductsFromFetch] = useState<Product[]>([]);
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]); 
    const [categories, setCategories] = useState<Category[]>([]); 
    const [lowPriceFilter, setLowPriceFilter] = useState<boolean>(false); 
    const [categoryFilter, setCategoryFilter] = useState<string>(''); 
    const [textFilter, setTextFilter] = useState<string>(''); 
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () =>{
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductsFromFetch(data.products);
        setProductsFiltered(data.products);
        var products = new Array<Product>();
        var categories = new Array<Category>();
        products = data.products;
        products.map((product, i) => {
            const finded = categories.findIndex(e => e.category === product.category);
            if(finded === -1){
                categories.push({category: product.category});
            }
        }, {});
        
        setCategories(categories);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    
    const onResetFilter = () =>{
      setProductsFiltered(productsFromFetch);
    }

    const onFilterChange = (value: string) =>{
      setTextFilter(value);
      var productsFilter = [];
      if(value === ''){
          productsFilter = productsFromFetch.filter((product) => {
              if(lowPriceFilter ? product.price < 400.00 : true){
                 return true;
              }
          });
      }
      else{
          productsFilter = productsFromFetch.filter((product) => {
              var product_name = product.title.toLowerCase();
              if(product_name.includes(value.toLowerCase()) && (lowPriceFilter ? product.price < 400.00 : true)){
                 return true;
              }
          });
      }
      
      if(categoryFilter === ''){
          setProductsFiltered(productsFilter);
      }
      else{
          setProductsFiltered(productsFilter.filter(product => product.category == categoryFilter));
      }
  }

    const onFilterPrice = (checked: boolean) =>{
        setLowPriceFilter(checked);
        var productsFilter = [];
        
        if(textFilter === ''){
            if(checked){
                productsFilter = productsFromFetch.filter((producto) => {
                    if(producto.price < 400.00){
                        return true;
                    }
                });
            }
            else{
                productsFilter = productsFromFetch;
            }
        }
        else{
            productsFilter = productsFromFetch.filter((product) => {
                var product_name = product.title.toLowerCase();
                if(product_name.includes(textFilter.toLowerCase()) && (checked ? product.price < 400.00 : true)){
                    return true;
                }
            });
        }

        if(categoryFilter === ''){
            setProductsFiltered(productsFilter);
        }
        else{
            setProductsFiltered(productsFilter.filter(product => product.category == categoryFilter));
        }
    }

    const onFilterCategory = (category: string) =>{
        setCategoryFilter(category);
        var productsFilter = [];
        
        if(textFilter === ''){
            if(lowPriceFilter){
                productsFilter = productsFromFetch.filter((product) => {
                    if(product.price < 400.00){
                        return true;
                    }
                });
            }
            else{
                productsFilter = productsFromFetch;
            }
        }
        else{
            productsFilter = productsFromFetch.filter((product) => {
                var product_name = product.title.toLowerCase();
                if(product_name.includes(textFilter.toLowerCase()) && (lowPriceFilter ? product.price < 400.00 : true)){
                    return true;
                }
            });
        }
        
        if(category === ''){
            setProductsFiltered(productsFilter);
        }
        else{
            setProductsFiltered(productsFilter.filter(product => product.category == category));
        }
    }

    const providerValue: ProductsContextType = {
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

    return (
      <ProductsContext.Provider value={{ 
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
        }}>
        {children}
      </ProductsContext.Provider>
    );
  }
  
  export default ProductsContext;