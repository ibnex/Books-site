import React, { useState } from "react";
import Product from "../Components/Product";

function Home() {
  const [editFilter, setEdtFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen ">
      <div className="w-full py-8 px-4 ">
        <div className="flex gap-8 overflow-x-auto scroll-smooth max-w-screen-xl mx-auto border m-2 py-3 px-2 rounded-2xl">
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2020/02/05/14/39/books-4821356_1280.png"
            alt="Book Sale Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2021/10/27/05/09/woman-6745977_1280.png"
            alt="Basketball Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2017/09/23/11/00/books-2778472_1280.jpg"
            alt="Fitness Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2024/06/16/16/16/book-8833738_1280.jpg"
            alt="Fitness Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_1280.jpg"
            alt="Fitness Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2016/11/29/07/21/book-1868068_1280.jpg"
            alt="Fitness Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2020/10/17/21/57/book-5663376_1280.png"
            alt="Fitness Banner"
          />
          <img
            className="h-64 rounded-2xl shadow-xl flex-shrink-0 snap-start"
            src="https://cdn.pixabay.com/photo/2016/11/18/16/56/book-1835799_1280.jpg"
            alt="Fitness Banner"
          />
        </div>
      </div>

      <div className="flex justify-center py-1 w-screen">
        <nav className="flex justify-between items-center w-screen max-w-screen-md px-4  ">
          <div className="flex items-center gap-4">
            <select
              value={editFilter}
              onChange={(e) => setEdtFilter(e.target.value)}
              className="border rounded-md px-4 py-2 bg-white shadow-sm focus:outline-none"
            >
              <option value="all">All</option>
              <option value="english">English</option>
              <option value="english">Maths</option>
              <option value="english">Kannada</option>
              <option value="english">Hindi</option>
              <option value="english">History</option>
              <option value="english">Fantasy</option>

              <option value="english">Hindi</option>
              <option value="english">Classics</option>
              <option value="english">Hindi</option>
            </select>
          </div>
          <div className="flex items-center bg-red-200">
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-md px-4 py-2 bg-white shadow-sm focus:outline-none "
            />
          </div>
        </nav>
      </div>

      <div className="py-7 px-3">
        <Product />
      </div>

      <div className="py-8 text-center">
        <p className="text-3xl font-semibold text-gray-700">End of Products</p>
      </div>
    </div>
  );
}

export default Home;
