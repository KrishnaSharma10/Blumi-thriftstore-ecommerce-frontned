import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="sticky relative p-4 mx-auto bg-blue-100">
            <div className="flex justify-between items-center mx-auto">
                <div className="pt-2 flex-shrink-0">
                    <img src="#" alt="logo"></img>
                </div>
                <div className="hidden md:flex items-center bg-white rounded-lg shadow space-x-2">
                    <input type="text" placeholder="Search..." className="px-2 py-1 w-128 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-96"></input>
                    <button aria-label = "Search" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300 w-12 md:w-20"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="hidden md:flex space-x-8 ">
                    <Link to="/" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faHeart} /><span className="ml-1">Wishlist</span></Link>
                    <a href="#" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingCart} /><span className="ml-1">Cart</span></a>
                    <a href="#" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faUser} /><span className="ml-1">Account</span></a>
                </div>
                <Link to="/login" className="md:bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-400 hover:text-white transition-colors duration-300  hidden md:inline-block">
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;