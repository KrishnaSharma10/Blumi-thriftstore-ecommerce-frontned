import React from "react";

const UserRegistrationForm = () => (
    <form className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">User Registration</h2>
        <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Register</button>
    </form>
);

export default UserRegistrationForm;