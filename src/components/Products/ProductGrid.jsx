import React, { useState } from 'react';
import ProductCard from './ProductCard';
import useProducts from './getproducts';

const ProductGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    const { products, totalPages, loading, error } = useProducts(currentPage, productsPerPage);
    console.log(products);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <div className="text-center py-6">Loading...</div>;
    if (error) return <div className="text-center py-6 text-red-500">{error}</div>;

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        id={product._id}
                        image={product.image?.[0]?.url}
                        title={product.name}
                        price={product.price}
                    />
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
};

export default ProductGrid;
