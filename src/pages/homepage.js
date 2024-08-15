import React from "react";
import Slider from "../components/Home/slider";
import SubHeading from "../components/Home/SubHeading";
import ProductGrid from "../components/Home/ProductGrid";

function HomePage(){
    return(
        <div>
            <Slider/>
            <SubHeading/>
            <ProductGrid/>
        </div>
    )
}

export default HomePage;