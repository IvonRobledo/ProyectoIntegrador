import React, { useContext, useEffect } from 'react';
import ProductsContext from "../../Context/DataContext";
import { InfinitySpin } from 'react-loader-spinner';
import Products from '../sections/Products';
import Filters from "../sections/Filters";

const ProductsPage = () => {

    const context = useContext(ProductsContext);

    useEffect(() => {
        context?.onResetFilter();
    }, []);
        
    return(
        <div className="bg-lgreen-200 w-full container flex flex-wrap justify-between items-center mx-auto pt-16">
            {
                context?.loading ?
                    <InfinitySpin 
                        width='200'
                        color="#f0f5f3"
                    />
                :          
                <>
                    <Filters/>
                    <Products title="All products" productsFiltered={context?.productsFiltered}/>
                </> 
            }
        </div>
    )
}

export default ProductsPage;