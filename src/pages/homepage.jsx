import React from "react";
import Slider from "../components/Home/slider";
import SubHeading from "../components/Home/SubHeading";
import Worldofproducts from "../components/Products/worldofproducts";

function HomePage() {
    return (
        <div>
            <Slider />
            <SubHeading />
            <Worldofproducts />
        </div>
    )
}

export default HomePage;