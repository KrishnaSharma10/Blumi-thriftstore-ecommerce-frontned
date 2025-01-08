import React, { useState } from "react";

const ProductPage = ({ name }) => {
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const addToCart = () => {
        alert(`Added ${quantity} item(s) to cart!`);
    };

    const buyNow = () => {
        alert("Redirecting to checkout...");
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen py-10">
            <div className="max-w-6xl w-full flex items-start space-x-10">
                {/* Product Image Section */}
                <div className="w-1/2 flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Product Image"
                        className="w-3/4 h-auto object-cover rounded-md"
                    />
                    <button
                        onClick={buyNow}
                        className="bg-green-600 text-white px-6 py-3 mt-4 text-xl font-bold rounded-md hover:bg-green-700"
                    >
                        BUY NOW
                    </button>
                </div>

                {/* Product Details Section */}
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold">
                        Nike Men's Air Jordan 1 Zm Air CMFT 2 Running
                    </h2>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg">★★★★★</span>
                        <span className="text-gray-500 ml-2 text-sm">(4.7 ratings)</span>
                    </div>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">₹7000</p>

                    {/* Additional Product Details */}
                    <div className="mt-4 text-gray-700 text-lg">
                        <p>
                            <strong>Brand:</strong> Nike
                        </p>
                        <p>
                            <strong>Category:</strong> Shoes
                        </p>
                        <p>
                            <strong>Thrift Store:</strong> Thrift Rag
                        </p>
                        <p>
                            <strong>Colour:</strong> Black
                        </p>
                        <p>
                            <strong>Material:</strong> Leather
                        </p>
                        <p>
                            <strong>Product Dimensions:</strong> 30 x 20 x 10 cm
                        </p>
                    </div>

                    <p className="text-gray-600 mt-4">
                        Experience unparalleled comfort and style with Nike's Air Jordan
                        series, perfect for both casual wear and high-performance running.
                    </p>

                    {/*
                    <div className="mt-6">
                        <p className="font-medium text-gray-700">Size:</p>
                        <div className="flex flex-wrap mt-2">
                            {[3, 4, 5, 6, 7, 8, 9, 10, 11].map((size) => (
                                <button
                                    key={size}
                                    className="bg-white border rounded-md px-4 py-2 mr-2 mb-2 hover:bg-gray-200 focus:outline-none"
                                >
                                    UK {size}
                                </button>
                            ))}
                        </div>
                    </div>*/}

                    {/* Quantity Selector and Add to Cart Button */}
                    <div className="flex items-center mt-6">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            className="w-16 p-2 border rounded-md text-center"
                        />
                        <button
                            onClick={addToCart}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md ml-4 hover:bg-blue-700"
                        >
                            Add To Cart
                        </button>
                    </div>

                    {/* Description and Reviews Tabs */}
                    <div className="mt-8">
                        <div className="flex">
                            <button
                                onClick={() => handleTabChange("description")}
                                className={`text-gray-700 font-semibold px-4 py-2 border-b-2 ${activeTab === "description" ? "border-blue-500" : ""
                                    } focus:outline-none`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => handleTabChange("reviews")}
                                className={`text-gray-700 font-semibold px-4 py-2 ml-4 ${activeTab === "reviews" ? "border-blue-500" : ""
                                    } focus:outline-none`}
                            >
                                Reviews (2)
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "description" && (
                            <div className="mt-4">
                                <p className="text-gray-600 text-lg">
                                    Nike's Air Jordan 1 Zm Air CMFT 2 offers an iconic design with
                                    superior cushioning and support, making it ideal for active
                                    and casual wear.
                                </p>
                            </div>
                        )}
                        {activeTab === "reviews" && (
                            <div className="mt-4">
                                <p className="text-gray-600 text-lg">
                                    Customer reviews will appear here.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
