import React, { useState } from "react";

const Register = () => {
    const [registrationType, setRegistrationType] = useState(null);

    const handleTypeSelection = (type) => {
        setRegistrationType(type);
    };

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
            ) : (<div>hello</div>)

            }
        </div>
    );
};

export default Register;