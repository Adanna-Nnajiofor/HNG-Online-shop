import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../product components/card";
import { useCart } from "../context/CartContext"; // Import cart context

const API_URL = `/api/products?organization_id=${
  import.meta.env.VITE_APP_ORGANIZATION_ID
}&reverse_sort=false&page=`;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1); // Initialize with 1

  const { addToCart } = useCart(); // Use cart context

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}${page}&size=10&Appid=${
            import.meta.env.VITE_APP_APP_ID
          }&Apikey=${import.meta.env.VITE_APP_TIMBU_API_KEY}`
        );
        console.log("API Response:", response.data); // Log API response
        setProducts(response.data.items);
        if (response.data.totalPages !== undefined) {
          setTotalPages(response.data.totalPages); // Set total pages from response if available
        } else if (response.data.total_count !== undefined) {
          // Fallback logic if totalPages is not available
          const pages = Math.ceil(response.data.total_count / 10);
          setTotalPages(pages);
        } else {
          console.warn("No totalPages or total_count in response");
          // Fallback logic assuming 5 pages as an example
          setTotalPages(3);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => {
        console.log("Setting page to:", prevPage + 1);
        return prevPage + 1;
      });
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => {
        console.log("Setting page to:", prevPage - 1);
        return prevPage - 1;
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products.length) {
    return <div>No products available.</div>;
  }

  return (
    <section
      id="product"
      className="w-auto justify-center flex flex-col items-center mt-3 lg:mt-8"
    >
      <div className="w-full lg:max-w-[1512px] mx-auto px-6 lg:px-20 py-10 flex flex-col">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold text-gray-800">Our Products</h1>
        </div>
        <div className="w-full grid grid-cols-1 sm2:grid-cols-2 sm3:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8 mt-4">
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.photos[0]?.url}
              title={product.name}
              description={product.description}
              price={Math.ceil(product.current_price[0]?.LRD[0])}
              buttonText="Add To Cart"
              onAddToCart={() => addToCart(product)} // Pass addToCart function
            />
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className={`w-auto lg:w-[200px] h-[60px] py-[12px] px-[40px] rounded-[30px] ${
              page === 1 ? "bg-gray-300" : "bg-[#1A1B4B] text-white"
            }`}
          >
            Prev
          </button>
          <button
            onClick={nextPage}
            disabled={page >= totalPages}
            className={`w-auto lg:w-[200px] h-[60px] py-[12px] px-[40px] rounded-[30px] ${
              page >= totalPages ? "bg-gray-300" : "bg-[#1A1B4B] text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
