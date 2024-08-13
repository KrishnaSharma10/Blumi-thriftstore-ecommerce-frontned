import React from "react";
import Slider from "../components/Home/slider";
import ProductCard from "../components/Products/ProductCard";

function HomePage(){
    return(
        <div>
            <Slider/>
            <ProductCard/>
        </div>
    )
}

export default HomePage;