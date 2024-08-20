import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from "react-router-dom";

const NavLinks = () =>{
    return(
        <>
        <NavLink to="/Wishlist" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faHeart} /><span className="ml-1">Wishlist</span></NavLink>
        <NavLink to="/Cart" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingCart} /><span className="ml-1">Cart</span></NavLink>
        <NavLink to="#" className="hover:text-red-700 transition-colors duration-300"><FontAwesomeIcon icon={faUser} /><span className="ml-1">Account</span></NavLink>
        </>
    )
}

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav className="sticky top-0 z-50 p-4 mx-auto bg-blue-100">
            <div className="flex justify-between items-center mx-auto">
                <div className="pt-2 flex-shrink-0">
                    <Link to='/'>
                    <img src="#" alt="logo"></img>
                    </Link>
                </div>
                <div className="flex items-center bg-white rounded-lg shadow space-x-2">
                    <input type="text" placeholder="Search..." className="px-2 py-1 w-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-96"></input>
                    <button aria-label = "Search" className="bg-blue-500 text-white px-1.5 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300 w-6 md:w-20"><FontAwesomeIcon icon={faSearch} className="text-sm md:text-lg"/></button>
                </div>
                <NavLink to='/browseproducts' className='hidden md:inline hover:text-red-700 transition-colors duration-300 text-2xl'><span className="ml-1">Browse Products</span></NavLink>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                </div>
                <div className="hidden md:flex space-x-8 ">
                    {isLoggedIn ? <NavLinks /> : null}
                </div>
                {!isLoggedIn && (
                    <Link
                        to="/login"
                        className="md:bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-400 hover:text-white transition-colors duration-300 hidden md:inline-block"
                    >
                        Register/Login
                    </Link>
                )}
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-4">
                    {isLoggedIn ? <NavLinks /> : null}
                    <NavLink to='/browseproducts' className='hover:text-red-700 transition-colors duration-300 text-xl'><span className="ml-1">Browse</span></NavLink>
                </div>
            )}
        </nav>
    )
}

export default Navbar;