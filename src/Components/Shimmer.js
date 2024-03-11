import React from 'react';

function ShimmerUI() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        Navbar
      </nav>

      <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
        {/* Full width height div content here */}
      </div>

      <div className="flex justify-around p-4">
        {/* Shimmer cards content here */}
        <div className="bg-white rounded shadow-md w-64 h-96 relative overflow-hidden">
          <div className="animate-pulse absolute bg-gray-300 w-full h-full"></div>
        </div>
        <div className="bg-white rounded shadow-md w-64 h-96 relative overflow-hidden">
          <div className="animate-pulse absolute bg-gray-300 w-full h-full"></div>
        </div>
        <div className="bg-white rounded shadow-md w-64 h-96 relative overflow-hidden">
          <div className="animate-pulse absolute bg-gray-300 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerUI;
