import React from "react";
import NewArrivals from "./NewArrivals";

const Products = () =>{
    const items = [
        {
          name: "Premium Almonds",
          price: "₹450 / 500g",
          image: "../src/assets/img2.jpg",
        },
        {
          name: "Cashew Nuts",
          price: "₹380 / 500g",
          image: "../src/assets/img3.webp",
        },
        {
          name: "Fresh Pistachios",
          price: "₹520 / 500g",
          image: "../src/assets/img4.jpg",
        },
        {
          name: "Soft Dates",
          price: "₹290 / 500g",
          image: "../src/assets/d.webp",
        },{
            name: "Groundnut",
            price: "₹600 / 500g",
            image: "../src/assets/gn.jpg",
          },
          {
            name: "Walnuts",
            price: "₹550 / 500g",
            image: "../src/assets/w.jpg",
          },
          {
            name: "Dry Fruit Mix",
            price: "₹750 / 1kg",
            image: "../src/assets/m.png",
          },
          {
            name: "Golden Raisins",
            price: "₹320 / 500g",
            image: "../src/assets/g2.webp",
          },
      ];
    
      return (
        <section className="py-16 px-4 bg-white" id="products">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-amber-700 mb-10">
              Our <span className="text-yellow-500">Products</span>
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {items.map((item, index) => (
                <div key={index} className="bg-yellow-50 rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300">
                  <img src={item.image} alt={item.name} className="rounded-xs w-full h-40 object-contain mb-4" />
                  <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                  <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
          <NewArrivals />
        </section>
      );
}

export default Products