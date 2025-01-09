import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductById = (productId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_GETALLPRODUCTS_ENDPOINT}/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                setError('Product not found or server error');
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    return { product, loading, error };
};

export default useProductById;
