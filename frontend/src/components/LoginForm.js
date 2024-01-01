// components/LoginForm.js
import React, { useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import userService from '../services/userService';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext'; 

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate(); // useHistory hook for navigation
    const { updateLoginState } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.loginUser(credentials);
            // Check if the response contains an error message
            if (!response && response.error) {
                console.error('Login failed:', response.message);
                // Here, you can show an alert or update the UI to display the error message
                // For example, using an alert: alert(response.message);
            } else {
                console.log('Login successful');
                updateLoginState(true);
                navigate('/products');
            }   
        } catch (error) {
            console.error('Login failed', error);
            // Handle errors
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default LoginForm;
