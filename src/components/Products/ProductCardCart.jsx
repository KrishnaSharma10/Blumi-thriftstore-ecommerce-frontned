import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import random from '../assets/random.jpg';

const product = {
    id: 1,
    name: "Sample Product",
    price: 549.99,
    quantity: 2,
    image: random,
};

const CartProductCard = ({ onRemove, onQuantityChange }) => {
    const handleIncrease = () => {
        onQuantityChange(product.id, product.quantity + 1); // Increase quantity by 1
    };

    const handleDecrease = () => {
        if (product.quantity > 1) { // Prevent quantity from going below 1
            onQuantityChange(product.id, product.quantity - 1); // Decrease quantity by 1
        }
    };

    return (
        <div className="flex items-center justify-between py-2 w-2/3 mx-auto mt-4 border-solid border-2 rounded-lg shadow-xl"> 
            <div className="flex items-center px-2 py-2">
                <img src={product.image} alt={product.name} className="w-32 h-24 object-cover rounded border-solid border-1 rounded-md border-blue-500" />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center px-2 py-2">
                <button
                    onClick={handleIncrease}
                    className="text-gray-600 hover:text-gray-800 transition duration-200"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button
                    onClick={handleDecrease}
                    className="text-gray-600 hover:text-gray-800 transition duration-200"
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <button
                    onClick={() => onRemove(product.id)}
                    className="ml-4 text-red-500 hover:text-red-700 transition duration-200"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default CartProductCard;
