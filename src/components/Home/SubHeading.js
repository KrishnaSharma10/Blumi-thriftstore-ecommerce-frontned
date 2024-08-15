import React from "react";

const SubHeading = () => {
  return (
    <div className="text-center mb-10"> {/* Added mb-10 for bottom margin */}
      <h2 className="text-2xl font-bold mt-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 md:text-5xl">
        Discover our World of Products
      </h2>
      <div className="h-1 bg-gray-600 w-2/3 mx-auto mt-4"></div>
    </div>
  );
};

export default SubHeading;
