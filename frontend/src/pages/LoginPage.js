// pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container } from 'react-bootstrap';


const LoginPage = () => {
    return (
        <Container className="my-4">
            <h1>Login</h1>
            <LoginForm />
            {/* Optionally, include links to register page or password reset */}
        </Container>
    );
};

export default LoginPage;
