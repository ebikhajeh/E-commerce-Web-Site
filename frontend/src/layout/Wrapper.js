import React from 'react';
import '../styles/Wrapper.css'; // Assuming you have a CSS file for styles

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
};

export default Wrapper;
