import React, { useState } from "react";
import { useBooks } from "../Components/Context";
import { FaShoppingCart } from "react-icons/fa";
// import { VscGlobe } from "react-icons/vsc";
import { useEffect } from "react";

function Cartt() {
  const [price, setPrice] = useState(1500);
  const [deleveryCahrge, setDeleveryCharge] = useState(0);
  const [subtotal, setsubtotal] = useState(0);
  const { books } = useBooks();
  const percentage = 75;

  //   console.log(books);
  // const [Total, setTotal]=useState("")
  useEffect(() => {
    const arrayOfPrice = books.map((aa) => {
      return aa.Price;
    });
    const arrayOfCharges = books.map((aa) => {
      return aa.Price / percentage;
    });

    function sum2(acc, x) {
      return acc + x;
    }

    const subtotal = arrayOfPrice.reduce(sum2, 0);
    const charge = arrayOfCharges.reduce(sum2, 0);
    setsubtotal(subtotal);
    setDeleveryCharge(charge);
  }, []);

  const [plus, setPlus] = useState(1);
  const onplus = () => {
    setPlus(plus + 1);
  };

  const onminus = () => {
    if (plus > 1) {
      setPlus(plus - 1);
    }
  };
  return (
    <>
      <section className="py-24 relative">
        <div className="w-[90vw] max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>

          {books.length == 0 ? (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-md mx-auto">
                {/* Animated Cart Icon */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                    <FaShoppingCart className="w-12 h-12 text-indigo-600 animate-bounce" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    0
                  </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Your cart feels lonely
                </h2>
                <p className="text-gray-600 mb-8">
                  Your shopping cart is empty. Let's find something special for
                  you!
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">
                  Product
                </div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                  <span className="w-[90vw] max-w-[200px] text-center">
                    Delivery Charge
                  </span>
                  <span className="w-[90vw] max-w-[260px] text-center">
                    Quantity
                  </span>
                  <span className="w-[90vw] max-w-[200px] text-center">
                    Total
                  </span>
                </p>
              </div>
              {books.map((book, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
                >
                  <div className="flex   items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box">
                      <img
                        src={book.image}
                        alt={book.ProductName}
                        className="xl:w-[140px] rounded-xl object-cover"
                      />
                    </div>
                    <div className="pro-data w-full max-w-sm ">
                      <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                        {book.ProductName}
                      </h5>
                      <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                        {book.category}
                      </p>
                      <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                        Rs {book.Price}.00
                      </h6>
                    </div>
                  </div>
                  {/* .................... */}
                  <div className="flex items-center   py-3 min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                      {(book.Price / percentage).toFixed(2)}{" "}
                      <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                        Delivery Charge
                      </span>
                    </h6>
                    <div className="flex items-center w-full mx-auto   justify-center">
                      <button
                        onClick={onminus}
                        className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        placeholder={plus}
                      />
                      <button
                        onClick={onplus}
                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            strokeOpacity="0.2"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px]  text-center">
                      {book.Price * plus}
                    </h6>
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between w-full mb-6">
                  <p className="font-normal text-xl leading-8 text-gray-400">
                    Sub Total
                  </p>
                  <h6 className="font-semibold text-xl leading-8 text-gray-900">
                    
                    {subtotal * plus}
                  </h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                  <p className="font-normal text-xl leading-8 text-gray-400">
                    Delivery Charges
                  </p>
                  <h6 className="font-semibold text-xl leading-8 text-gray-900">
                    
                    {deleveryCahrge.toFixed(2)}
                  </h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                  <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                    Total
                  </p>
                  <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                   
                    {(deleveryCahrge + subtotal).toFixed(2)} Rs
                  </h6>
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                  <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
                    Add Coupon Code
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                      stroke="#4F46E5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                  Continue to Payment
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <path
                      d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Cartt;
