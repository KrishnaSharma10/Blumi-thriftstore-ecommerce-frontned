import React from "react";
import ProductCard from "./ProductCard";

const Worldofproducts = () => {
    const sampleProducts = new Array(50).fill(null).map((_, index) => ({
        id: index + 1,
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
                    <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} />
                ))}
            </div>
        </div>
    )
}

export default Worldofproducts;