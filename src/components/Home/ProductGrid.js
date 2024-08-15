import React,{useState} from 'react';
import ProductCard from '../Products/ProductCard';

const ProductGrid = () => {
    return (
        <div className='mx-auto max-w-7xl px-10 grid grid-cols-1 md:grid-cols-4 gap-10'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}

export default ProductGrid;