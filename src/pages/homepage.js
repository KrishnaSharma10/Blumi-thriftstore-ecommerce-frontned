import React from "react";
import Slider from "../components/Home/slider";
import ProductCard from "../components/Products/ProductCard";
import SubHeading from "../components/Home/SubHeading";

function HomePage(){
    return(
        <div>
            <Slider/>
            <SubHeading/>
        </div>
    )
}

export default HomePage;