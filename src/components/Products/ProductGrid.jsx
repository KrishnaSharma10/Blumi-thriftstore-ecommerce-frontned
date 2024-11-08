import React, { useState } from 'react';
import ProductCard from './ProductCard';

const sampleProducts = new Array(50).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    price: (index + 1) * 100,
    image: null,
}));

const ProductGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sampleProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(sampleProducts.length / productsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    const handlePrevPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);

        }
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} />
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-gray-300 rounded-md ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-400'}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-gray-300 rounded-md ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-400'}`}
                >
                    Next
                </button>
            </div>
            <div className="mt-2 text-center">
                Page {currentPage} of {totalPages}
            </div>
        </div>
    );
}

export default ProductGrid;