import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignupPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-teal-400 text-center mb-6">
          Create an Account
        </h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-lg hover:bg-teal-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-400 hover:text-teal-500">
              Login
            </Link>
          </span>
        </div>
        <Link className="text-2xl text-center" to='/shop'>Click here for shop page, this text will remove later</Link>

      </motion.div>
    </div>
  );
};

export default SignupPage;
