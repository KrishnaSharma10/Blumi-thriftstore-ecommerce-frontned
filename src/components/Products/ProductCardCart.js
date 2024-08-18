import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import productImage from '../assets/random.jpg';

const ProductCardCart = () => {
    const productName = 'Headset';
    const productPrice = 1050;
    const productQuantity = 1;
    const totalPrice = productPrice * productQuantity;

    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-4 w-full sm:w-3/4 md:w-1/2 mx-auto">
            <img src={productImage} alt={productName} className="w-32 h-24 object-cover rounded-md" />
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{productName}</h3>
                <p className="text-lg font-bold text-blue-800">{totalPrice}</p>
            </div>
            <div className="flex items-center space-x-2">
                <button className="bg-gray-100 border border-gray-300 p-2 rounded hover:bg-blue-200">
                    <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
                </button>
                <button className="bg-gray-100 border border-gray-300 p-2 rounded hover:bg-blue-200">
                    <FontAwesomeIcon icon={faMinus} className="text-blue-600" />
                </button>
            </div>
            <button className="ml-4 text-xl text-black hover:text-red-600 transition-colors">
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
};

export default ProductCardCart;
