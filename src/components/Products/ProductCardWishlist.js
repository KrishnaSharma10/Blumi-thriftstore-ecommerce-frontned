import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import productImage from '../assets/random.jpg';

const ProductCardWishlist = () => {
    const productName = 'Headset';
    const productPrice = 1050;

    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-4 w-full sm:w-3/4 md:w-1/2 mx-auto relative">
            <img src={productImage} alt={productName} className="w-32 h-24 object-cover rounded-md" />
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{productName}</h3>
                <p className="text-lg font-bold text-blue-800">Rs. {productPrice}</p>
            </div>
            <button className="absolute top-2 right-2 text-xl text-black hover:text-red-600 transition-colors">
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <button className="absolute bottom-4 right-2 text-xl text-red-500 hover:text-red-600 transition-colors">
                <FontAwesomeIcon icon={faHeart} />
            </button>
        </div>
    );
};

export default ProductCardWishlist;
