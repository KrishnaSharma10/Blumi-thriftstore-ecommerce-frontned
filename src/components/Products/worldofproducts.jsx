import React from "react";
import ProductCard from "./ProductCard";

const Worldofproducts = () => {
    const sampleProducts = new Array(50).fill(null).map((_, index) => ({
        _id: `${index + 1}`,
        title: `Product ${index + 1}`,
        price: (index + 1) * 100,
        image: null, // Replace with actual image source if needed
    }));

    const maxproducts = 16;
    const currentProducts = sampleProducts.slice(0, 16);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard key={product._id} id={product._id} image={product.image} title={product.title} price={product.price} />
                ))}
            </div>
            <ProductCard key={"63f7a5c4a3c9d2e10f5a9e31"} id={"63f7a5c4a3c9d2e10f5a9e31"} image={null} title={"jai mata di"} price={1000} />
        </div>
    )
}

export default Worldofproducts;