import React from "react";

const testimonials = [
    {
        name: "Dinesh",
        review: "Fresh and premium quality! I'm so happy with the taste and packaging.",
        image: "../src/assets/men1.jpg",
      },
  {
    name: "Deepika",
    review: "Best dry fruits I've had in a long time. Highly recommended!",
    image: "../src/assets/gr2.jpg",
  },
  {
    name: "Alya",
    review: "Delivered on time and everything was super fresh!",
    image: "../src/assets/g1.jpg",
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say About Us</h2>
        <p className="text-yellow-400">I love the variety! Great prices and excellent quality!</p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((client, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 duration-300">
            <img
              src={client.image}
              alt={client.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <div className="flex justify-center mb-2 text-yellow-400">
              {Array(5).fill("⭐").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-sm text-white-300">{client.review}</p>
            <h4 className="mt-4 font-semibold">{client.name}</h4>
          </div>
        ))}
      </div>

      {/* App Section */}
      <div className="mt-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-12 px-6 md:px-20 text-center rounded-lg mx-6 md:mx-20">
        <h2 className="text-2xl font-bold mb-2">Get Started with our app</h2>
        <p className="mb-6 text-sm">Shop premium dry fruits anytime, anywhere with our app!</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src="../src/assets/az.png" alt="Google Play" className="w-40 cursor-pointer hover:scale-105 duration-300" />
          <img src="../src/assets/bb.png" alt="App Store" className="w-40 cursor-pointer hover:scale-105 duration-300" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
