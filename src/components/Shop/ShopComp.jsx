import React from 'react';
import Header from './HeaderFile';
import Hero from './HEro';
import ProductGrid from './ProductGrid';
import Promotions from './Promotions';
import Footer from './FooterFile';

const ShopComp = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <main>
        {/* Horizontal scrolling for the first ProductGrid */}
        <ProductGrid title="Recent Posts..." isHorizontal />
        <Promotions />
        {/* Regular grid layout for the second ProductGrid */}
        <ProductGrid title="Products You May Like" />
      </main>
      <Footer />
    </div>
  );
};

export default ShopComp;
