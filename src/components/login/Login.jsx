import React, { useState } from 'react';
import { loginUser } from './authservice';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            navigate('/');
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Invalid login credentials";
            setError(errorMessage);

        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg z-0"></div>
            <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-md border border-white border-opacity-40 p-8 rounded-2xl shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Sign In</h2>
                <form id="loginForm" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-bold mb-2 text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md shadow-md transform transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none"
                        >
                            Sign In
                        </button>
                        <Link to="/register" className="text-sm text-blue-200 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/authentication/register" className="text-blue-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;