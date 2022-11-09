import React, { useContext } from 'react';
import ProductsContext from "../../Context/DataContext";
import { InfinitySpin } from 'react-loader-spinner';
import Products from '../sections/Products';
import CoverPicture from '../../assets/online_shop.png';

const MainPage = () => {

    const context = useContext(ProductsContext);
        
    return(
        <div className="bg-lgreen-200 w-full container flex flex-wrap justify-between items-center mx-auto">
            <div className="mt-14 rounded-xl">
                <img src={CoverPicture} className="" />
            </div>
            {
                context?.loading ?
                    <InfinitySpin 
                        width='200'
                        color="#f0f5f3"
                    />
                :          
                <>
                    <Products title="Most popular products" productsFiltered={context?.productsFromFetch.slice(0,10)}/>
                </> 
            }
        </div>
    )
}

export default MainPage;