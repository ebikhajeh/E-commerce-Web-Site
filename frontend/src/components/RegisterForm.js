// components/RegisterForm.js
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import userService from '../services/userService';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        // ... other fields as needed
    });

    const navigate = useNavigate(); // useHistory hook for navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register service
            const response = await userService.createUser(formData);
            alert('Success! Your registration has been confirmed. Thank you for joining us.');
            console.log('Registration successful', response);
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Registration failed', error);
            // Handle errors (e.g., display error messages)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            {/* Include other fields as necessary */}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
