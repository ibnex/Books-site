import axios from "axios";
import React, { useState, useEffect } from "react";

function ItemDetails() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "http://localhost:8080/auth/products"; 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        const finaldata = await response.data
        setProduct(finaldata); // Corrected data access
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to fetch product"); // Corrected error handling
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center py-4">Product not found.</div>;
  }

  return (
    <div>
      {product.map((items) => (
        <div key={items._id} className="">
          <h1>{items.ProductName}</h1>
          <h1>{items.Price}</h1>
          <h1>{items.category}</h1>
          <img src={items.image} alt={items.ProductName} />
        </div>
      ))}
    </div>
  );
}

export default ItemDetails;