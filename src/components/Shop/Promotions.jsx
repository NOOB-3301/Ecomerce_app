import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Promotions = () => {
  const promotions = [
    { id: 1, title: 'Manga', description: 'Discover other ads' },
    { id: 2, title: 'Action Figure', description: 'Discover other ads' },
    // { id: 3, title: 'Travel with Quality', description: 'Perfect for on-the-go' },
  ];

  return (
    <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {promotions.map((promo) => (
        <div
          key={promo.id}
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-row justify-between p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">{promo.title}</h3>
            <p className="text-lg">{promo.description}</p>
          </div>
          <div className="flex justify-center items-center text-2xl">
            <FaArrowRight />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Promotions;
