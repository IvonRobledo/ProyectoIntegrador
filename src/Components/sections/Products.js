import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const Products = () =>{
    const { productsFiltered } = useContext(DataContext);

    return(
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsFiltered.map((producto) => {
                            return(
                                <tr key={producto.id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.precio}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>  
    )
}

export default Products;