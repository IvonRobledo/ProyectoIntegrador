import React from "react";
import Thumbnail from "../UI/Thumbnail";
import { Product }  from "../../Context/Types";

type Props = {
    title: string,
    productsFiltered: Product[] | undefined
};

const Products = ({title, productsFiltered}: Props) => {

    return(
        <div className="bg-white w-full h-full m-2 p-5 rounded-xl">
            <h1 className="text-3xl text-center font-medium tracking-widest mb-5">{title} ({ productsFiltered !== undefined ? productsFiltered.length: 0})</h1>
            <div className="grid grid-cols-4 gap-3">
                {
                    productsFiltered !== undefined ?
                        productsFiltered.map((product) => {
                            return(
                                <Thumbnail key={product.id} product={product} />
                            )
                        })
                    :
                        'Loading...'
                }
            </div>
           
        </div>
    )
}

export default Products;