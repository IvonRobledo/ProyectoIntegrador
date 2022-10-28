import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const Filters = () => {
    const { onFilterChange, onFilterPrice } = useContext(DataContext);

    return(
        <div>
            <input type='text' placeholder='Search...' onChange={(e) => onFilterChange(e.target.value)}/>  
            <input type="checkbox" onClick={(e) => onFilterPrice(e.target.checked)}/>
            <label>Productos menores a $400</label>
        </div>  
    )
}

export default Filters;