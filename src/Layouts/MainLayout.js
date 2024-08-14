import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/navbar";
import Footer from "../components/Footer/Footer";


function MainLayout(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout;