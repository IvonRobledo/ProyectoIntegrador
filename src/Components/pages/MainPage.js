import React, { useContext } from 'react';
import { DataContext } from "../../Context/DataContext";
import { InfinitySpin } from 'react-loader-spinner';
import Products from '../sections/Products';
import Filters from '../sections/Filters';

const MainPage = () => {

    const { loading } = useContext(DataContext);
        
    return(
        <div className="container_practicas container_green">
            <div className="fixed_width_productos">
                <h1 className="main_text">Productos</h1>
                {
                    loading ?
                        <InfinitySpin 
                            width='200'
                            color="#f0f5f3"
                        />
                    :          
                    <>
                        <Filters/>
                        <Products/>
                    </> 
                }
            </div>  
        </div>
    )
}

export default MainPage;