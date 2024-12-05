import React, { useState } from "react";

const FilterProducts = () => {
    const ClearFilters = () => {

    }

    return (
        <aside className="w-full md:w-1/6 bg-gray-100 p-4 rounded-lg mb-4 mx-2">
            <h2 className="text-xl font-semibold mb-4">Filter By Category</h2>
            <ul className="mb-6">
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" />
                        <span className="ml-2">Clothing</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" />
                        <span className="ml-2">Electronics</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" />
                        <span className="ml-2">Stationary</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" />
                        <span className="ml-2">Home Decor</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" />
                        <span className="ml-2">Shoes</span>
                    </label>
                </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 " onClick={ClearFilters}>
                Clear Filters
            </button>
        </aside>
    )
}

export default FilterProducts;