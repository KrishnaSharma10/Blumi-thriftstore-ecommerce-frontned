import React,{useState} from "react";

const FilterProducts = () => {
    const [price, setPrice] = useState(0);

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const ClearFilters = () => {
        setPrice(0);
    }

    return(
        <aside className="w-full md:w-1/6 bg-gray-100 p-4 rounded-lg mb-4 mx-2">
            <h2 className="text-xl font-semibold mb-4">Filter By Category</h2>
                <ul className="mb-6">
                    <li><input type="checkbox" /> Category 1</li>
                    <li><input type="checkbox" /> Category 2</li>
                    <li><input type="checkbox" /> Category 3</li>
                </ul>
            <h2 className="text-xl font-semibold mb-4">Filter By Max.Price</h2>
            <div className="mb-6">
                <input type="range" min="0" max="5000" value={price} onChange={handlePriceChange} className="w-full"/>
                <div className="text-right mt-2">
                        <span className="text-lg font-semibold">Price: Rs. {price}</span>
                </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 " onClick={ClearFilters}>
                Clear Filters
            </button>
        </aside>
    )
}

export default FilterProducts;