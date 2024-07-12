import React, { useState, useEffect } from "react";
import Card from "../product components/card";
// import ProductCategories from "../product components/product-categories";
import { GetProducts } from "../services/api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await GetProducts(page);
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setHasMore(data.products.length > 0);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section
      id="product"
      className="w-auto justify-center flex flex-col items-center mt-3 lg:mt-8"
    >
      <div className="w-full lg:max-w-[1512px] mx-auto px-2 lg:px-6 py-10 flex flex-col">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold text-gray-800">Our Products</h1>
        </div>
        <div className="w-full grid grid-cols-1 sm2:grid-cols-2 sm3:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-4">
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              buttonText={product.buttonText}
            />
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {hasMore && !loading && (
          <button
            onClick={loadMoreProducts}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Product;
