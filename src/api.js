import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-backend-url.com', // replace with the actual backend URL
});

export default api;
