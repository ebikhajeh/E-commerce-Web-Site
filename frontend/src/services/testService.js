import api from './api';

const testBackendConnection = async () => {
    const response = await api.get('/api/test');
    return response.data;
};

export default testBackendConnection;