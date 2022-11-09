import React from "react";
import MyShoppingStore from '../../assets/MyShoppingStore.png';
import { NavLink, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { GrCart } from "react-icons/gr";
import ProductsPage from "../pages/ProductsPage";
import ProductItem from "../pages/ProductItem";

const Header = () => {
    return (
        <div className="bg-white border-gray-200 p-0 rounded">
            <nav className="bg-lpink-100 p-2 fixed top-0 left-0 right-0 shadow-lgreen-400">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink flex items-center' : 'flex items-center')}>
                        <img src={MyShoppingStore} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap tracking-wide">My Online Store</span>
                    </NavLink>
                    <div className="inline flex flex-rows">
                        <div className="flex items-center mx-4">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink ' : '')}>Home</NavLink>
                        </div>
                        <div className="flex items-center mx-4">
                            <NavLink to="/Products" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Products</NavLink>
                        </div>
                        <div className="flex items-center mx-4">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
                                <GrCart/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="w-full h-full bg-shopping bg-repeat min-h-screen">
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/Products" element={<ProductsPage/>}></Route>
                    <Route path="/Product/:id" element={<ProductItem/>}></Route>
                </Routes>
            </section>
        </div>
    )
}

export default Header;