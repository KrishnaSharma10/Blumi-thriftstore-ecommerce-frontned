import React from 'react'

const Footer = () => {
    
    return(
        <footer class="bg-gray-800 py-16">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Company</h4>
                    <ul class="list-none">
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">About us</a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Our team</a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Product Documentation</a></li>
                        <li><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Investors</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Need Help?</h4>
                    <ul class="list-none">
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">FAQ</a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Payment option</a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Shipping</a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Terms of use</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Services</h4>
                    <ul class="list-none">
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Order Status</a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Privacy </a></li>
                        <li class="mb-2"><a href="#" class="text-base font-light text-gray-400 capitalize hover:text-white hover:pl-2 transition-all duration-300">Return Policy </a></li>
                        
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-lg font-medium text-white capitalize mb-8 relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-12 before:h-0.5 before:bg-pink-500">Contact us</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="h-10 w-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-all duration-500"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        
    )
}

export default Footer;
