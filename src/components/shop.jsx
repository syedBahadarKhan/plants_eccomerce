import React from "react";
import bgshop from "../assets/shop_bg.jpg";
import { Link } from "react-router-dom";

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
      img: "https://media.istockphoto.com/id/1401702743/photo/3d-illustration-of-houseplant-potted-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=19leV7F7_kCGu1oFLBZFy5CtD3v5S3KraZqR1jqgDAw=",
    },
    {
      id: 3,
      name: "Peace Lily",
      category: "Indoor Plants",
      price: "$62.90",
      img: "https://media.istockphoto.com/id/1400665790/photo/3d-illustration-of-houseplant-collection-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Q3xP4s-fJCcT6rbtq47KH5Ve7JhThba15Vf7Q5b78W8=",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      category: "Indoor Plants",
      price: "$88.00",
      img: "https://media.istockphoto.com/id/2155718994/photo/3d-rendering-banana-plant-with-pot.jpg?s=612x612&w=0&k=20&c=4em9Cp9Btow0kUuwn6QVJzTn0yPciPaM9GSDi8sAjY0=",
    },
     {
      id: 1,
      name: "Desert Bloom",
      category: "Indoor Plants",
      price: "$70.58",
      img: "https://media.istockphoto.com/id/1449861577/photo/3d-illustration-of-potted-plant-isolated-on-grey-background.jpg?s=612x612&w=0&k=20&c=MDoCtPK49KEcmvWbuAggTfybd6YVFAs6oJnTAhV9dvU=",
    },
    {
      id: 2,
      name: "Snake Plant",
      category: "Indoor Plants",
      price: "$55.20",
      img: "https://media.istockphoto.com/id/1400664949/photo/3d-illustration-of-houseplant-in-modern-potted-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1xLybJe85m5pNaGLKl8zGsdDAJgdDo5Hc0eGqfGl1ac=",
    },
    {
      id: 3,
      name: "Peace Lily",
      category: "Indoor Plants",
      price: "$62.90",
      img: "https://media.istockphoto.com/id/1400664562/photo/3d-illustration-of-houseplant-in-modern-potted-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_1hsVR6Ih-wDSmXi-qZoxQTfgk0aD38dTwbc9_4QNnA=",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      category: "Indoor Plants",
      price: "$88.00",
      img: "https://media.istockphoto.com/id/1400116917/photo/3d-illustration-of-banana-tree-in-black-potted-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9N_qX58Yru4kucFQmp_S5UtrNmZ9Hn6eycEPr5jLwNA=",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-72 flex items-center justify-center bg-cover bg-center my-15"
        style={{ backgroundImage: `url(${bgshop})` }}
      >
      {/* hwhhw whwhhwhwh */}
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative text-4xl md:text-5xl font-bold text-white">
          Shop
        </h2>
      </div>

      {/* Products Grid */}
       <h3 class="text-center text-4xl font-bold my-8 ">Trending Products</h3>
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
