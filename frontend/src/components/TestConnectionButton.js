import React from 'react';
import testBackendConnection from '../services/testService';

const TestConnectionButton = () => {
    const handleTestConnection = async () => {
        try {
            const response = await testBackendConnection();
            console.log(response.message);
            alert(response.message); // Or display this message in the UI
        } catch (error) {
            console.error('Failed to connect to backend', error);
            alert('Failed to connect to backend');
        }
    };

    return (
        <button onClick={handleTestConnection}>Test Backend Connection</button>
    );
};

export default TestConnectionButton;
