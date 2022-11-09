import React from "react";
import Header  from "./Header";
import Footer  from "./Footer";
import { BrowserRouter as Router } from 'react-router-dom';

const Layout = () => {
    return (
        <Router>
            <Header/>
            <Footer/>
        </Router>

    )
}

export default Layout;