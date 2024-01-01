// components/AuthLinks.js
import React, { useContext } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { BsPersonCircle } from 'react-icons/bs';

const AuthLinks = () => {
    const { isLoggedIn, updateLoginState } = useContext(AuthContext);

      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem('userData'));
      const username = userData ? userData.username : '';
    
    const handleLogout = () => {
        // Perform logout operations like clearing local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        updateLoginState(false);
        // Redirect to home or login page as needed
    };

    return (
        <>
        {!isLoggedIn ? (
            // Show Sign In and Register links if not logged in
            <>
                <Nav.Link href="/login">Sign In</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </>
        ) : (
            // Show profile icon and dropdown if logged in
            <NavDropdown
                    title={
                      <>
                        <span className="me-2">Welcome, {username}</span>
                        <BsPersonCircle size="1.5em" />
                      </>
                    }
                    id="nav-dropdown-profile"
                >
                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/wishlist">My Wish List</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                </NavDropdown>
        )}
    </>
    );
};

export default AuthLinks;
