import React, { useContext, useState, useEffect } from 'react';
import ProductsContext from "../../Context/DataContext";
import { Product } from "../../Context/Types";
import { useParams } from 'react-router-dom';
import MainButton from "../UI/MainButton";
import NotFound from '../../assets/not_found.jpg';
import { InfinitySpin } from 'react-loader-spinner';
import Products from '../sections/Products';

const ProductItem = () => {

    const [currentProduct, setCurrentProduct] = useState<Product>();
    const context = useContext(ProductsContext);
    let {id} = useParams();

    useEffect(() => {
        var product = new Array<Product>();
        product = context?.productsFromFetch.filter(product => product.id == Number(id))!;
        setCurrentProduct(product[0]);
    }, [context?.productsFromFetch, id]);
        
    return(
        <div className="bg-lgreen-200 w-full container flex flex-wrap justify-between items-center mx-auto pt-16">
           <div className="bg-lgreen-100 w-full h-full p-5 rounded-xl border-brown-200 shadow-brown-400">
           {
                context?.loading ?
                    <InfinitySpin 
                        width='200'
                        color="#f0f5f3"
                    />
                :          
                <>
                    <section className="grid grid-cols-2">
                        <div>
                            {
                                currentProduct === undefined || currentProduct === null || currentProduct.images === undefined || currentProduct.images.length === 0 ?
                                    <img src={NotFound} className="w-full h-full"/>
                                : 
                                    <img src={currentProduct.images[0]} className="w-full h-full"/>
                            }
                            
                        </div>
                        <div className="py-5 px-10">
                            <h3 className="text-2xl my-2 text-center font-medium tracking-wide text-left">{currentProduct !== undefined && currentProduct.title !== undefined ? currentProduct.title : ''}</h3>
                            <div className="text-left font-medium tracking-wide">Category:</div> 
                            <div className="text-left font-light"> {currentProduct !== undefined && currentProduct.category !== undefined ? currentProduct.category : ''} </div>
                            <br/>
                            <div className="text-left font-medium tracking-wide">Rating:</div> 
                            <div className="text-left font-light"> {currentProduct !== undefined && currentProduct.rating !== undefined ? currentProduct.rating : ''} </div>
                            <br/>
                            <div className="text-left font-medium tracking-wide">Description:</div> 
                            <div className="text-left font-light">{currentProduct !== undefined && currentProduct.description !== undefined ? currentProduct.description : ''}</div>    
                            <br/>
                            <div className="text-left font-medium tracking-wide">Price:</div> 
                            <div className="text-left font-light">$ {currentProduct !== undefined && currentProduct.price !== undefined ? currentProduct.price : ''}</div>    
                            <br/>
                            <MainButton text="Add to cart" action={(e) => {}}/>
                        </div>
                    </section>
                    <section>
                        {
                            currentProduct !== undefined ?
                                <Products title="More similar products" productsFiltered={context?.productsFromFetch.filter((product) => (product.category == currentProduct.category && product.id != currentProduct.id))}/>
                            :
                                ''
                        }
                    </section>
                </> 
            }
                
            </div>
        </div>
    )
}

export default ProductItem;