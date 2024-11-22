import React, { useState, useEffect } from 'react';

const ProductGrid = ({ title, isHorizontal }) => {
  const products = [
    { id: 1, name: 'Product 1', price: '$100' },
    { id: 2, name: 'Product 2', price: '$200' },
    { id: 3, name: 'Product 3', price: '$300' },
    { id: 4, name: 'Product 4', price: '$400' },
  ];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="container mx-auto px-3 py-10">
  <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">{title}</h2>
  <div
    className={`${
      isHorizontal
        ? 'flex overflow-x-auto space-x-6'
        : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
    }`}
  >
    {products.map((product, index) => (
      <div
        key={product.id}
        className={`bg-white w-[240px] flex-shrink-0 p-8 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Larger Image Placeholder */}
        <div className="h-56 w-full bg-gray-200 rounded-lg mb-6 transition duration-300 transform hover:scale-110"></div>
        <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
        <p className="text-xl font-semibold text-blue-600">{product.price}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default ProductGrid;
