import React from "react";
import MainButton from "./MainButton";
import { Link } from 'react-router-dom';
import { Product }  from "../../Context/Types";

type Props = {
    product: Product
};

const Thumbnail = ({product}: Props) => {
    return(
        <div className="bg-lgreen-100 w-full h-full p-5 rounded-xl border-brown-200 shadow-brown-400">
            <img src={product.thumbnail} className="w-full h-56"/>
            <h3 className="text-lg my-2 text-center font-medium tracking-wide text-left">{product.title}</h3>
            <div className="text-lg grid grid-cols-2 text-brown-800">
                <div className="justify-self-start font-medium">{product.category}</div> 
                <div className="justify-self-end"> $ {product.price}</div>    
            </div>
            <Link to={`/Product/${product.id}`}>
                <MainButton text="View Details" action={(e) => {}}/>
            </Link>
        </div>
    )
}

export default Thumbnail;