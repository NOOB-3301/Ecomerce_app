import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 p-3 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-4">Stay Connected</h3>
          {/* <p>Subscribe to our newsletter for updates and offers.</p> */}
        </div>
        <div>
          <h3 className="font-bold mb-4">MBU</h3>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            {/* <li>Careers</li> */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping Info</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Access</h3>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
