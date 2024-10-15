import React,{useState} from 'react';
import ProductGrid from '../components/Products/ProductGrid';
import FilterProducts from '../components/Miscellaneous/Filter';

const BrowseProducts = () => {
    return (
        <div className="mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row">
                <FilterProducts/>
                <div className="flex-grow">
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg ml-10"
                        />
                    </div>
                    <ProductGrid />
                </div>
            </div>
        </div>
    );
};

export default BrowseProducts;
