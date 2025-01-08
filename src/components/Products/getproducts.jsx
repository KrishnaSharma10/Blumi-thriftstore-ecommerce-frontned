import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = (currentPage, productsPerPage) => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_GETALLPRODUCTS_ENDPOINT}`, {
                params: {
                    page: currentPage,
                    limit: productsPerPage,
                }
            });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, productsPerPage]);

    return { products, totalPages, loading, error };
};

export default useProducts;
