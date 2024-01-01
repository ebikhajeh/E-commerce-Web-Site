// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        setIsLoggedIn(!!userData);
    }, []);

    // Function to update the login state
    const updateLoginState = (loggedIn) => {
        setIsLoggedIn(loggedIn);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, updateLoginState }}>
            {children}
        </AuthContext.Provider>
    );
};
