import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import random from '../assets/random.jpg'

const product = {
    id: 1,
    name: "Sample Product",
    price: 29.99,
    quantity: 2,
    image: {random}
};

const CartProductCard = ({ onRemove }) => {
    return (
        <div className="flex items-center justify-between border-b border-gray-300 py-4">
            <div className="flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center">
                <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    className="w-12 text-center border border-gray-300 rounded-md"
                />
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
