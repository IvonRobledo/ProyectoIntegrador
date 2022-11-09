import React, { useContext } from "react";
import ProductsContext from "../../Context/DataContext";
import Checkbox from "../UI/Checkbox";
import MainInput from "../UI/MainInput";
import DropDown from "../UI/DropDown";

const Filters = () => {
    const context = useContext(ProductsContext);

    return(
        <div className="flex flex-rows px-5">
            <h1 className="text-lg tracking-wide mr-5">Looking for a product?...</h1>
            <MainInput text="Search..." action={(e) => context?.onFilterChange((e.target as HTMLInputElement).value)}/>  
            <DropDown text="All categories..." options={context?.categories} action={(e) => context?.onFilterCategory((e.target as HTMLInputElement).value)}/>  
            <Checkbox text="Products with low price" action={(e) => context?.onFilterPrice((e.target as HTMLInputElement).checked)}/>
        </div>  
    )
}

export default Filters;