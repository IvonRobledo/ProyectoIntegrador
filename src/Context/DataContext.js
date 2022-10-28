import React, { createContext, useState, useEffect } from 'react';
import { loadProducts } from "../Utils/index";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [productosFromFetch, setProductosFromFetch] = useState([]); 
    const [productsFiltered, setProductsFiltered] = useState([]); 
    const [lowPriceFilter, setLowPriceFilter] = useState(false); 
    const [textFilter, setTextFilter] = useState(''); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadProducts(setProductosFromFetch, setProductsFiltered, setLoading);
    }, []);
    
    const onFilterChange = (value) =>{
        setTextFilter(value);
        var productosFilter = [];
        if(value === ''){
            productosFilter = productosFromFetch.filter((producto) => {
                if(lowPriceFilter ? producto.precio < 400.00 : true){
                   return true;
                }
            });
        }
        else{
            productosFilter = productosFromFetch.filter((producto) => {
                var product_name = producto.nombre.toLowerCase();
                if(product_name.includes(value.toLowerCase()) && (lowPriceFilter ? producto.precio < 400.00 : true)){
                   return true;
                }
            });
        }
        
        setProductsFiltered(productosFilter);
    }

    const onFilterPrice = (checked) =>{
        setLowPriceFilter(checked);
        var productosFilter = [];
        
        if(textFilter === ''){
            if(checked){
                productosFilter = productsFiltered.filter((producto) => {
                    if(producto.precio < 400.00){
                       return true;
                    }
                });
                setProductsFiltered(productosFilter);
            }
            else{
                setProductsFiltered(productosFromFetch);
            }
        }
        else{
            productosFilter = productosFromFetch.filter((producto) => {
                var product_name = producto.nombre.toLowerCase();
                if(product_name.includes(textFilter.toLowerCase()) && (checked ? producto.precio < 400.00 : true)){
                   return true;
                }
            });

            setProductsFiltered(productosFilter);
        }
    }

    return (
        <DataContext.Provider 
            value={{
                productosFromFetch,
                setProductosFromFetch,
                productsFiltered,
                setProductsFiltered,
                loading,
                setLoading,
                lowPriceFilter,
                setLowPriceFilter,
                textFilter,
                setTextFilter,
                onFilterChange,
                onFilterPrice
            }}
        >
            {children}
        </DataContext.Provider>
    )
}