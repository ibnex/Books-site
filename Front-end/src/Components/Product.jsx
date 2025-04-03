import React from "react";

function Product() {
  const details = [
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

    {
      name: "The Lincoln Highway",
      price: "390",
      category: "Historical Fiction",
      img: "https://m.media-amazon.com/images/I/41-i0i9C3GL._SY346_.jpg",
    },
    {
      name: "Where the Crawdads Sing",
      price: "360",
      category: "Mystery",
      img: "https://m.media-amazon.com/images/I/51j1V84wKPL._SY346_.jpg",
    },
    {
      name: "The Lord of the Rings",
      price: "600",
      category: "Fantasy",
      img: "https://m.media-amazon.com/images/I/71m+k+eR6YL._SY346_.jpg",
    },
    ,
    {
      name: "1984",
      price: "290",
      category: "Classics",
      img: "https://m.media-amazon.com/images/I/41y0Bw57KjL._SY346_.jpg",
    },
    {
      name: "The Martian",
      price: "410",
      category: "Sci-Fi",
      img: "https://m.media-amazon.com/images/I/51nE77d+gDL._SY346_.jpg",
    },
    {
      name: "The Book Thief",
      price: "330",
      category: "Historical Fiction",
      img: "https://m.media-amazon.com/images/I/51aY0nZ7iUL._SY346_.jpg",
    },
    {
      name: "Gone Girl",
      price: "370",
      category: "Thriller",
      img: "https://m.media-amazon.com/images/I/51w7g63Kq+L._SY346_.jpg",
    },
    {
      name: "Eleanor Oliphant Is Completely Fine",
      price: "310",
      category: "Fiction",
      img: "https://m.media-amazon.com/images/I/51fG94m77DL._SY346_.jpg",
    },
    {
      name: "The Alchemist",
      price: "270",
      category: "Fiction",
      img: "https://m.media-amazon.com/images/I/51Z0nLAfLPL._SY346_.jpg",
    },
    {
      name: "The Power of Now",
      price: "430",
      category: "Self-Help",
      img: "https://m.media-amazon.com/images/I/516E166827L._SY346_.jpg",
    },
    {
      name: "The Lies of Locke Lamora",
      price: "380",
      category: "Fantasy",
      img: "https://m.media-amazon.com/images/I/516w5Xm2iNL._SY346_.jpg",
    },
    {
      name: "Red, White & Royal Blue",
      price: "340",
      category: "Romance",
      img: "https://m.media-amazon.com/images/I/51v1zVd3fNL._SY346_.jpg",
    },
    {
      name: "Children of Blood and Bone",
      price: "420",
      category: "YA",
      img: "https://m.media-amazon.com/images/I/51wXw0159dL._SY346_.jpg",
    },
    {
      name: "The Devil in the White City",
      price: "400",
      category: "Non-Fiction",
      img: "https://m.media-amazon.com/images/I/51d6a69zU0L._SY346_.jpg",
    },
    {
      name: "The Name of the Wind",
      price: "460",
      category: "Fantasy",
      img: "https://m.media-amazon.com/images/I/51cF0U3w+iL._SY346_.jpg",
    },
    {
      name: "The Road",
      price: "300",
      category: "Fiction",
      img: "https://m.media-amazon.com/images/I/41m1n1Y3JcL._SY346_.jpg",
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      price: "320",
      category: "Sci-Fi",
      img: "https://m.media-amazon.com/images/I/51S4N8y671L._SY346_.jpg",
    },
    {
      name: "Circe",
      price: "390",
      category: "Fantasy",
      img: "https://www.bookswagon.com/productimages/mainimages/393/9789365693393.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {details.map((item) => (
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
            <p className="text-lg text-gray-600 mb-2">Price: ₹{item.price}</p>
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
  );
}

export default Product;
