import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import random from '../assets/random.jpg';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className="bg-blue-100 w-full sm:w-64 md:w-72 lg:w-80 min-h-[20rem] shadow-lg rounded-md overflow-hidden relative">
            <img src={image || random} className="w-full h-40 object-cover" alt={title} />
            <div className="p-5 flex flex-col gap-3">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <span className="text-xl font-bold">
                    Rs.{price}
                </span>
                <div className="mt-5 flex justify-between items-center gap-6">
                    <button className="bg-blue-500/80 hover:bg-blue-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition flex items-center">
                        Add to Cart
                        <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
