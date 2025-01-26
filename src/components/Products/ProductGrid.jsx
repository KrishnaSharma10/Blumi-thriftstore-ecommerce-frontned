import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const sampleProducts = new Array(50).fill(null).map((_, index) => ({
        _id: `${index + 1}`,
        title: `Product ${index + 1}`,
        price: (index + 1) * 100,
        image: null, // Replace with actual image source if needed
    }));

    const productsPerPage = 16;
    const totalPages = Math.ceil(sampleProducts.length / productsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    // Get products for the current page
    const currentProducts = sampleProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
            {/* Pagination */}
            <div className="mt-6 flex justify-center">
                <nav className="flex space-x-2">
                    {[...Array(totalPages).keys()].map((pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            onClick={() => handlePageChange(pageIndex + 1)}
                            className={`px-4 py-2 border rounded-md ${currentPage === pageIndex + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-black'
                                }`}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default ProductGrid;
