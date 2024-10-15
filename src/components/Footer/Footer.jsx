import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-16 w-full mt-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Company</h4>
                        <ul className="list-none">
                            <li className="mb-2"><NavLink to='/AboutUs' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">About us</NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Our team</NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Product Documentation</NavLink></li>
                            <li><NavLink to="#" className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Investors</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Need Help?</h4>
                        <ul className="list-none">
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">FAQ</NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Payment option</NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Shipping</NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Terms of use</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Services</h4>
                        <ul className="list-none">
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Order Status</NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Privacy </NavLink></li>
                            <li className="mb-2"><NavLink to='' className="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Return Policy </NavLink></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Contact us</h4>
                        <div className="flex space-x-4">
                            <NavLink to='' className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><FontAwesomeIcon icon={faHeart} /></NavLink>
                            <NavLink to='' className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><FontAwesomeIcon icon={faHeart} /></NavLink>
                            <NavLink to='' className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><FontAwesomeIcon icon={faHeart} /></NavLink>
                            <NavLink to='' className="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><FontAwesomeIcon icon={faHeart} /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
