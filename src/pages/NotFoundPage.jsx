import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center my-32 px-4'>
            <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
            <p className="text-2xl text-gray-600 mb-8 text-center">Sorry, we could not find the page you were looking for.</p>
            <Link 
                to='/' 
                className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFoundPage;
