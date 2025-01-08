import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('accesstoken'));

    // Function to check authentication status
    const checkAuthStatus = () => {
        const token = Cookies.get('accesstoken');
        setIsLoggedIn(!!token);
    };

    useEffect(() => {
        // Check authentication status initially and on page load
        checkAuthStatus();

        // Polling for token changes
        const interval = setInterval(checkAuthStatus, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, checkAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
