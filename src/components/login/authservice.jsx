import api from '../../api'

export const registerUser = async (email, password, role) => {
    try {
        const response = await api.post('/register', { email, password, role });
        return response.data;
    }
    catch (error) {
        console.error("Registration failed", error);
        throw error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        const { accesstoken, refreshtoken } = response.data;
        localStorage.setitem('accesstoken', accesstoken);
        localStorage.setItem('refreshtoken', refreshtoken);
        return response.data;
    }
    catch (error) {
        console.error("Invalid", error);
        throw error;
    }
}