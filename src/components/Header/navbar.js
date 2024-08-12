import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <nav className="relative p-6 mx-auto bg-green-100">
            <div className="flex justify-between items-center mx-auto">
                <div className="pt-2 flex-shrink-0">
                    <img src="#" alt="logo"></img>
                </div>
                <div className="hidden md:flex items-center bg-white rounded-lg shadow space-x-2">
                    <input type="text" placeholder="Search..." className="px-4 py-2 w-128 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 md:w-96"></input>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-300 w-12 md:w-20"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="hidden md:flex space-x-8 ">
                    <a href="#" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faHeart} /><span className="ml-1">Wishlist</span></a>
                    <a href="#" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingCart} /><span className="ml-1">Cart</span></a>
                    <a href="#" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faUser} /><span className="ml-1">Account</span></a>
                </div>
                <a href="#" className="md:bg-white text-green-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-400 hover:text-white transition-colors duration-300  hidden md:inline-block">
                    Register
                </a>
            </div>
        </nav>
    )
}

export default Navbar;