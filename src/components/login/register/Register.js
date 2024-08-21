import React, { useState } from "react";

const Register = () => {
    const [registrationType, setRegistrationType] = useState(null);

    const handleTypeSelection = (type) => {
        setRegistrationType(type);
    };

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

    const VendorRegistrationForm = () => (
        <form className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Vendor Registration</h2>
            <div className="mb-4">
                <label className="block mb-2">Business Name</label>
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
            <div className="mb-4">
                <label className="block mb-2">Business Address</label>
                <input type="text" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Register</button>
        </form>
    );

    return (
        <div className="max-w-md mx-auto mt-10">
            {!registrationType ? (
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Select Registration Type</h2>
                    <div className="flex gap-4">
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            onClick={() => handleTypeSelection("user")}
                        >
                            User Registration
                        </button>
                        <button
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                            onClick={() => handleTypeSelection("vendor")}
                        >
                            Vendor Registration
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    {registrationType === "user" && <UserRegistrationForm />}
                    {registrationType === "vendor" && <VendorRegistrationForm />}
                </div>
            )}
        </div>
    );
};

export default Register;
