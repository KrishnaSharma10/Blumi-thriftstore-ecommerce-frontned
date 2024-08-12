import React from "react";

function Navbar(){
    return(
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center mx-auto justify-between">
                <div className="pt-2 flex-shrink-0">
                    <img src="C:/Users/VICTUS/frontend/src/components/thapar.png" alt="logo"></img>
                </div>
                <div className="flex items-center bg-white rounded-lg shadow space-x-2">
                    <input type="text" placeholder="Search..." className="px-4 py-2 w-44 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-64"></input>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300 w-12 md:w-20">Search</button>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#">Wishlist</a>
                    <a href="#">Cart</a>
                    <a href="#">Account</a>
                </div>
                <a href="#" className="md:bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-400 hover:text-white transition-colors duration-300  hidden md:inline-block">
                    LOGIN
                </a>
            </div>
        </nav>
    )
}

export default Navbar;