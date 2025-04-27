import axios from "axios";
import React, { useState, useEffect } from "react";
import { useBooks } from '../Components/Context';


function ItemDetails() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemincart, setItemInCart] = useState([]);

  const { addBook } = useBooks();



  const addtocart = (ss) => {
    const addcart = product.filter((book) => {
      // console.log(book.ProductName);
      // console.log(ss);

      return book._id === ss;
    });
    // console.log(addcart[0]);
    // console.log(addcart[0].ProductName);
    // console.log("items in cart ", addcart);
    // setItemInCart((itemincart) => [...itemincart, addcart]);
    addBook(addcart[0])
  };

  const url = "http://localhost:8080/auth/products";
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        const finaldata = await response.data;
        setProduct(finaldata); // Corrected data access
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch product"
        ); // Corrected error handling
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    // setTimeout(() => {
    //   setLoading(false)

    // }, 3000);

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Our Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-gray-200 h-48 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-3 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-3 w-2/3"></div>
                  <div className="flex justify-between">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">Error: {error}</div>;
  }

  if (product.length == 0) {
    return (
      <div className="">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-40 h-40 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            No Products Found
          </h2>
          <p className="text-gray-500 mb-6 max-w-md">
            We couldn't find any products in our store. Check back later or
            explore other categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="flex justify-center py-6 w-full">
      <div className="flex items-center gap-6 w-full max-w-2xl">
          <select
            
            className="w-full md:w-[200px] border rounded-md px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-500"
          >
            <option value="all">All</option>
            <option value="Mystery">Mystery</option>
            <option value="Classics">Classics</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="YA">YA</option>

            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <input
          type="search"
          placeholder="Search products..."
          
          className="w-full md:w-[300px] border rounded-md px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-500"
        />
      </div>

      {/* ................ */}
    <div className="my-25 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg border overflow-hidden transition-transform transform hover:scale-105 shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.ProductName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.ProductName}
              </h2>
              <p className="text-lg text-gray-600 mb-2">Price: ₹{item.Price}</p>
              <p className="text-sm text-gray-500 mb-4">
                Category: {item.category}
              </p>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => addtocart(item._id)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-gradient-to-l transition-colors"
                >
                  Add to Cart
                </button>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors flex-1">
                    View Details
                  </button>
                  <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
}

export default ItemDetails;
