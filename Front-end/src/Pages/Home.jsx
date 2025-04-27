import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
// import Product from "../Components/Product";

const details = [
  {
    name: "Eternal Tides",
    price: "325",
    category: "Classics",
    img: "https://img.freepik.com/premium-photo/3d-illustration-open-book-with-light_68747-226.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "The Gilded Cage",
    price: "285",
    category: "Classics",
    img: "https://img.freepik.com/premium-vector/international-day-education-concept-international-education-day-design-banner-poster-3d_623784-451.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Dragon's Oath",
    price: "375",
    category: "Fantasy",
    img: "https://img.freepik.com/free-psd/books-stack-icon-isolated-3d-render-illustration_47987-15482.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "The Forgotten Rune",
    price: "395",
    category: "Fantasy",
    img: "https://img.freepik.com/premium-vector/orange-red-book-with-blue-ribbon-it_854353-860.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Starlight Rebels",
    price: "405",
    category: "YA",
    img: "https://img.freepik.com/free-psd/open-book-white-background-pages-book-knowledge-literature_191095-80890.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "The Hidden Oracle",
    price: "385",
    category: "YA",
    img: "https://img.freepik.com/free-vector/open-book-vector_23-2147690155.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Crimson Dynasty",
    price: "445",
    category: "Historical Fiction",
    img: "https://img.freepik.com/free-photo/open-book-icon-symbol-yellow-background-education-bookstore-concept-3d-rendering_56104-1334.jpg?ga=GA1.1.1488238479.1745777778&semt=ais_hybrid&w=740",
  },
  {
    name: "The Silent Patient",
    price: "250",
    category: "Mystery",
    img: "https://cdn.pixabay.com/photo/2021/06/18/10/39/notebook-6345795_1280.jpg",
  },
  {
    name: "Dune",
    price: "400",
    category: "Sci-Fi",
    img: "https://cdn.pixabay.com/photo/2019/03/18/15/42/books-4063414_1280.png",
  },
  {
    name: "Pride and Prejudice",
    price: "300",
    category: "Classics",
    img: "https://cdn.pixabay.com/photo/2013/07/12/18/42/book-153755_1280.png",
  },
  {
    name: "The Hobbit",
    price: "350",
    category: "Fantasy",
    img: "https://cdn.pixabay.com/photo/2024/04/24/06/59/ai-generated-8716779_1280.jpg",
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    price: "500",
    category: "Non-Fiction",
    img: "https://cdn.pixabay.com/photo/2017/04/21/02/00/book-2247427_1280.png",
  },
  {
    name: "The Girl with the Dragon Tattoo",
    price: "280",
    category: "Thriller",
    img: "https://cdn.pixabay.com/photo/2011/08/14/18/10/book-8643_1280.png",
  },
  {
    name: "Little Women",
    price: "220",
    category: "Classics",
    img: "https://cdn.pixabay.com/photo/2021/07/29/11/58/book-6507042_1280.jpg",
  },
  {
    name: "The Hunger Games",
    price: "380",
    category: "YA",
    img: "https://cdn.pixabay.com/photo/2021/01/31/05/23/book-5965886_1280.jpg",
  },
  {
    name: "The Nightingale",
    price: "420",
    category: "Historical Fiction",
    img: "https://cdn.pixabay.com/photo/2013/07/13/13/34/book-161128_1280.png",
  },
  {
    name: "Atomic Habits",
    price: "450",
    category: "Self-Help",
    img: "https://cdn.pixabay.com/photo/2023/12/01/16/55/ai-generated-8424056_1280.jpg",
  },
  {
    name: "The Song of Achilles",
    price: "320",
    category: "Romance",
    img: "https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_1280.png",
  },
  {
    name: "Project Hail Mary",
    price: "480",
    category: "Sci-Fi",
    img: "https://cdn.pixabay.com/photo/2024/06/18/08/28/book-8837299_1280.jpg",
  },
  
  // ...............

  {
    name: "Whispers in the Fog",
    price: "275",
    category: "Mystery",
    img: "https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "The Last Cipher",
    price: "295",
    category: "Mystery",
    img: "https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Nebula Drift",
    price: "425",
    category: "Sci-Fi",
    img: "https://img.freepik.com/premium-photo/floating-book-color-background-ing_110893-718.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Quantum Echo",
    price: "410",
    category: "Sci-Fi",
    img: "https://img.freepik.com/premium-vector/realistic-open-book-with-white-pages_257312-1108.jpg?semt=ais_hybrid&w=740",
  },
 
  {
    name: "Mind Over Matter",
    price: "475",
    category: "Self-Help",
    img: "https://img.freepik.com/premium-vector/hand-drawn-literature-illustration_23-2149263478.jpg?ga=GA1.1.1488238479.1745777778&semt=ais_hybrid&w=740",
  },
  {
    name: "The Love Algorithm",
    price: "335",
    category: "Romance",
    img: "https://img.freepik.com/premium-photo/book-cover-mockup-3d-rendering-illustration_3146-1582.jpg?ga=GA1.1.1488238479.1745777778&semt=ais_hybrid&w=740",
  },
  {
    name: "Civilization's Edge",
    price: "525",
    category: "Non-Fiction",
    img: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "The Knowledge Frontier",
    price: "345",
    category: "Non-Fiction",
    img: "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Midnight Pursuit",
    price: "305",
    category: "Thriller",
    img: "https://img.freepik.com/premium-vector/classic-book-cover_1203700-1467.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Vanishing Point",
    price: "290",
    category: "Thriller",
    img: "https://img.freepik.com/free-psd/black-book-mockup-elegant-simple-design-publication_191095-84101.jpg?semt=ais_hybrid&w=740",
  },
];

function Home() {
  const [editFilter, setEdtFilter] = useState("all");
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (editFilter == "all") {
      setBooks(details);
    } else {
      const filterss = details.filter((books) => {
        return books.category == editFilter;
      });

      setBooks(filterss);
    }
  }, [editFilter]);

  useEffect(() => {
    setEdtFilter("all");
    if (searchQuery == "") {
      setBooks(details);
    } else {
      const filterss = details.filter((books) => {
        return (
          books.name
            .toLowerCase()
            .replaceAll(" ", "")
            .startsWith(searchQuery.toLowerCase()) ||
          books.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      });

      setBooks(filterss);
    }
  }, [searchQuery]);

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

      <div className="flex justify-center py-6 w-full">
      <div className="flex items-center gap-6 w-full max-w-2xl">
          <select
            onClick={() => setSearchQuery("")}
            value={editFilter}
            onChange={(e) => setEdtFilter(e.target.value)}
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setEdtFilter("all")}
          className="w-full md:w-[300px] border rounded-md px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-500"
        />
      </div>

      <div className="py-7 px-3">
        {/* <Product /> */}

        {/* ......................... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg border overflow-hidden transition-transform transform hover:scale-105 shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  Price: ₹{item.price}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Category: {item.category}
                </p>
                <div className="flex flex-col space-y-2">
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-gradient-to-l transition-colors">
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

        {/* .............................. */}
      </div>

      <div className="py-8 text-center">
        {books.length <= 0 ? (
          <p className="text-3xl font-semibold text-red-700">
            Products Not Found
          </p>
        ) : (
          <p className="text-3xl font-semibold text-gray-700">
            end of products{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
