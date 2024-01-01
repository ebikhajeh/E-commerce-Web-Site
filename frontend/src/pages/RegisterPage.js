// pages/RegisterPage.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    const [showModal, setShowModal] = useState(true); // Control the modal display

    const handleClose = () => setShowModal(false); // Function to close the modal

    return (
        <div className="container mt-5">
            <div className="card">
                    <div className="card-header text-center">
                         <h2>Sign Up</h2>
                    </div>
                     <div className="card-body">
                        <div className="row">
                            {/* Left Column */}
                            <div className="col-md-6">
                                <div className="message-box">
                                        <h4>Setup New Store</h4>
                                        <p>
                                        You have reached a private website. To register a new store or complete an existing store registration click the button below.
                                        </p>
                                        <button className="btn btn-primary">Register Store</button>
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className="col-md-6">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default RegisterPage;
