import { motion } from "framer-motion";

const NewArrivals = () => {
  const cardItems = [
    {
      id: 1,
      title: "Fenugreek",
      price: "₹599 / pack",
      images: ["/Product-Web/assets/v.jpg",
      ]
    },
    {
      id: 2,
      title: "Black Pepper",
      price: "₹799 / pack",
      images: ["/Product-Web/assets/pp.jpg",
      ]
    },
    {
      id: 3,
      title: "Fennel Seeds",
      price: "₹800 / pack",
      images: [
            "/Product-Web/assets/so.webp"
      ],
    },
    {
        id: 3,
        title: "Cardamom",
        price: "₹750 / pack",
        images: ["/Product-Web/assets/e.jpg"
        ],
      },
      {
        id: 3,
        title: "Cumin Seeds",
        price: "₹600 / pack",
        images: ["/Product-Web/assets/j.jpg"
        ],
      },
      {
        id: 3,
        title: "Black Cumin",
        price: "₹899 / pack",
        images: ["/Product-Web/assets/kj.webp"
        ],
      },
  ];

  return (
    <section className="py-16 px-4 bg-[#fffaf3]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-700">🌟 Other Products</h2>
        <p className="text-black-600 mt-2 text-lg font-bold">From nature’s heart to your home... fresh!</p>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {cardItems.map((card, index) => (
          <motion.div
          key={card.id}
          className="bg-white p-4 rounded-2xl shadow-xl w-[350px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          {/* Loop through only the first image to show 1 image per card */}
          <div className="flex gap-4 items-center">
            <div className="w-24 h-24 overflow-hidden rounded-xl">
              <img
                src={card.images[0]}
                alt={`item-${card.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-800">{card.title}</h3>
              <p className="text-gray-600">{card.price}</p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition duration-200 text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
        
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
