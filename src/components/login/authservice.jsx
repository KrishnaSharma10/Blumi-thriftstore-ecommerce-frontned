import api from '../../api'

export const registerUser = async (email, password, role) => {
    try {
        const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_REGISTER_ENDPOINT}`, { email, password, role });
        return response.data;
    }
    catch (error) {
        console.error("Registration failed", error);
        throw error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_LOGIN_ENDPOINT}`, { email, password }, { withCredentials: true });
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accesstoken', accessToken);
        localStorage.setItem('refreshtoken', refreshToken);
        return response.data;
    }
    catch (error) {
        console.error("Error during login", error);
        throw error;
    }
}

export const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshtoken');
    if (!refreshToken) throw new Error("No refresh token found");

    try {
        const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_REFRESH_TOKEN_ENDPOINT}`, { token: refreshToken });
        const { accesstoken } = response.data;
        localStorage.setItem('accesstoken', accesstoken);
        return accesstoken;
    }
    catch (error) {
        console.error("Token refresh failed", error);
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshtoken');
        console.log(refreshToken);
        await api.post(``, { token: localStorage.getItem('refreshtoken') });
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
    }
    catch (error) {
        console.error("Logout failed", error);
        throw error;
    }
}