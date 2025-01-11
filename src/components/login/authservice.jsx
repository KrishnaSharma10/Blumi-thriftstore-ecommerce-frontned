import api from '../../api'
import Cookies from 'js-cookie';

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
        Cookies.set('accesstoken', accessToken, { secure: true, sameSite: 'strict' });
        Cookies.set('refreshtoken', refreshToken, { secure: true, sameSite: 'strict' });
        const x = Cookies.get('accesstoken');
        console.log(x);
        return response.data;
    }
    catch (error) {
        console.error("Error during login", error);
        throw error;
    }
}

export const refreshToken = async () => {
    const refreshToken = Cookies.get('refreshtoken');
    if (!refreshToken) throw new Error("No refresh token found");

    try {
        const response = await api.post(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_REFRESH_TOKEN_ENDPOINT}`, { token: refreshToken });
        const { accesstoken } = response.data;
        Cookies.set('accesstoken', accesstoken, { secure: true, sameSite: 'strict' });
        return accesstoken;
    }
    catch (error) {
        console.error("Token refresh failed", error);
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const refreshToken = Cookies.get('refreshtoken');
        console.log(refreshToken);
        await api.post(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_LOGOUT_ENDPOINT}`, {}, { withCredentials: true });
        Cookies.remove('accesstoken');
        console.log('loggedout done');
    }
    catch (error) {
        console.error("Logout failed", error);
        throw error;
    }
}