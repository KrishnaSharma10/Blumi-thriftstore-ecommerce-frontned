import React from 'react';
import ProductGrid from '../components/Products/ProductGrid';

const BrowseProducts = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row">
                {/* Sidebar with Filters */}
                <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Filter By Category</h2>
                    {/* Category Filters */}
                    <ul className="mb-6">
                        <li><input type="checkbox" /> Category 1</li>
                        <li><input type="checkbox" /> Category 2</li>
                        <li><input type="checkbox" /> Category 3</li>
                        {/* Add more categories as needed */}
                    </ul>

                    <h2 className="text-xl font-semibold mb-4">Filter By Price</h2>
                    {/* Price Filter */}
                    <div className="mb-6">
                        <input type="range" min="0" max="1000" />
                    </div>

                    {/* Clear Filters Button */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Clear Filters
                    </button>
                </aside>

                {/* Main Content Area */}
                <div className="flex-grow">
                    {/* Search Bar */}
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    
                    {/* Product Grid */}
                    <ProductGrid />
                </div>
            </div>
        </div>
    );
};

export default BrowseProducts;
