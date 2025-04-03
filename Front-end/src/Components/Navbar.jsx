import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Navbar({ isLogin, ChangeLogin }) {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          <Link to="/" className="hover:text-indigo-300">
            Tech-Book
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-indigo-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-indigo-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-indigo-300">
              Cart
            </Link>
          </li>
        </ul>

        {/* User Profile Dropdown */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={open}
          >
            <FaRegCircleUser className="text-2xl hover:text-indigo-300" />
            {show ? (
              <FaAngleUp className="text-lg hover:text-indigo-300" />
            ) : (
              <FaAngleDown className="text-lg hover:text-indigo-300" />
            )}
          </div>

          {/* Dropdown Content */}
          {show && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Link
                  to="/account-settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Account Settings
                </Link>
                {isLogin ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={ChangeLogin}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
