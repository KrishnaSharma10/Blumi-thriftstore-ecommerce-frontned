import React, { useState, useEffect } from "react";
import useProductById from "../components/Products/getproductbyid";
import { useParams } from "react-router-dom";

const ProductPage = ({ }) => {
    const { productId } = useParams();
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    console.log(productId)
    const { product, loading, error } = useProductById(productId);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const addToCart = () => {
        alert(`Added ${quantity} item(s) to cart!`);
    };

    const buyNow = () => {
        alert("Redirecting to checkout...");
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const {
        name = "Unknown Product",
        price = "Price Not Available",
        description = "No description provided.",
        imageUrl = "https://via.placeholder.com/400x300",
        rating = 0,
        reviews = 0,
        category = "General",
        brand = "Unknown",
        color = "N/A",
        material = "N/A",
        dimensions = "N/A",
        store = "Unknown Store",
    } = product;

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen py-10">
            <div className="max-w-6xl w-full flex items-start space-x-10">
                {/* Product Image Section */}
                <div className="w-1/2 flex flex-col items-center">
                    <img
                        src={imageUrl}
                        alt={name}
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
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg">
                            {"★".repeat(Math.round(rating))}
                            {"☆".repeat(5 - Math.round(rating))}
                        </span>
                        <span className="text-gray-500 ml-2 text-sm">
                            ({reviews} reviews)
                        </span>
                    </div>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">
                        ₹{price}
                    </p>

                    {/* Additional Product Details */}
                    <div className="mt-4 text-gray-700 text-lg">
                        <p><strong>Brand:</strong> {brand}</p>
                        <p><strong>Category:</strong> {category}</p>
                        <p><strong>Thrift Store:</strong> {store}</p>
                        <p><strong>Colour:</strong> {color}</p>
                        <p><strong>Material:</strong> {material}</p>
                        <p><strong>Product Dimensions:</strong> {dimensions}</p>
                    </div>

                    <p className="text-gray-600 mt-4">{description}</p>

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
                                className={`text-gray-700 font-semibold px-4 py-2 border-b-2 ${activeTab === "description" ? "border-blue-500" : ""} focus:outline-none`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => handleTabChange("reviews")}
                                className={`text-gray-700 font-semibold px-4 py-2 ml-4 ${activeTab === "reviews" ? "border-blue-500" : ""} focus:outline-none`}
                            >
                                Reviews ({reviews})
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "description" && (
                            <div className="mt-4">
                                <p className="text-gray-600 text-lg">
                                    {description}
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
