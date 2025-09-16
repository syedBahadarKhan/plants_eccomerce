import React from "react";
import bgshop from "./assets/shop_bg.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Desert Bloom",
      category: "Indoor Plants",
      price: "$70.58",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Snake Plant",
      category: "Indoor Plants",
      price: "$55.20",
      img: "https://images.unsplash.com/photo-1600490052029-90c7f0b2b9fb?w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Peace Lily",
      category: "Indoor Plants",
      price: "$62.90",
      img: "https://images.unsplash.com/photo-1598032895152-2f1b4c21bb3a?w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      category: "Indoor Plants",
      price: "$88.00",
      img: "https://images.unsplash.com/photo-1600508774630-d8cbf643d80d?w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgshop})` }}
      >
      {/* hwhhw whwhhwhwh */}
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative text-4xl md:text-5xl font-bold text-white">
          Shop
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-4"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover rounded-xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <h5 className="text-xl font-bold text-green-600 mt-2">
                {product.price}
              </h5>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
