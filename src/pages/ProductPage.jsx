import React, { useState, useEffect } from "react";

// Simulating a product fetching function
const getProductById = (id) => {
    // Replace this with your actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: "Nike Men's Air Jordan 1 Zm Air CMFT 2 Running",
                price: 7000,
                description: "Nike's Air Jordan 1 Zm Air CMFT 2 offers an iconic design with superior cushioning and support.",
                imageUrl: "https://via.placeholder.com/400x300",
                rating: 4.7,
                reviews: 2,
                category: "Shoes",
                brand: "Nike",
                color: "Black",
                material: "Leather",
                dimensions: "30 x 20 x 10 cm",
                store: "Thrift Rag",
            });
        }, 1000); // Simulating a delay
    });
};

const ProductPage = ({ productId }) => {
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product details by ID
        const fetchProduct = async () => {
            const fetchedProduct = await getProductById(productId);
            setProduct(fetchedProduct);
        };

        fetchProduct();
    }, [productId]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const addToCart = () => {
        alert(`Added ${quantity} item(s) to cart!`);
    };

    const buyNow = () => {
        alert("Redirecting to checkout...");
    };

    if (!product) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen py-10">
            <div className="max-w-6xl w-full flex items-start space-x-10">
                {/* Product Image Section */}
                <div className="w-1/2 flex flex-col items-center">
                    <img
                        src={product.imageUrl}
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
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg">★★★★★</span>
                        <span className="text-gray-500 ml-2 text-sm">
                            ({product.reviews} reviews)
                        </span>
                    </div>
                    <p className="text-3xl font-semibold text-gray-800 mt-2">₹{product.price}</p>

                    {/* Additional Product Details */}
                    <div className="mt-4 text-gray-700 text-lg">
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Thrift Store:</strong> {product.store}</p>
                        <p><strong>Colour:</strong> {product.color}</p>
                        <p><strong>Material:</strong> {product.material}</p>
                        <p><strong>Product Dimensions:</strong> {product.dimensions}</p>
                    </div>

                    <p className="text-gray-600 mt-4">{product.description}</p>

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
                                Reviews ({product.reviews})
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "description" && (
                            <div className="mt-4">
                                <p className="text-gray-600 text-lg">
                                    {product.description}
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
