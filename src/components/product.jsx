import React from "react";
import Card from "./card";
import ProductCategories from "./product-categories";

const Product = () => {
  return (
    <section
      id="product"
      className="w-full h-full justify-center flex items-center"
    >
      <div className="max-w-full mx-auto px-4 py-10 gap-4 flex flex-col">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold text-gray-800">Our Products</h1>
        </div>
        {ProductCategories.map((category, index) => (
          <div key={index} className="w-full px-4 py-4">
            <h2 className="text-xl font-bold text-gray-800">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {category.products.map((product, productIndex) => (
                <Card
                  key={productIndex}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  buttonText={product.buttonText}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
