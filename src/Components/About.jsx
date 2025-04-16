import React from "react"


const About = () => {
    return (
            <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 via-amber-50 to-orange-100" id="about">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src="/Product-Web/assets/img1.jpg" 
                        alt="About Dry Fruits"
                        className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-800">
                        Who <span className="text-yellow-600">We Are</span>
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We bring you the finest selection of <span className="font-semibold text-amber-700">premium dry fruits and nuts</span>,
                        sourced from the best farms. Our mission is to deliver healthy, tasty, and natural snacks right to your doorstep.
                        Explore a wide variety of almonds, cashews, pistachios, dates, and much more – all at affordable prices!
                    </p>
                    <a href="#products">
                    <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition">
                        Explore Our Products
                    </button>
                    </a>
                </div>

            </div>
        </section>

    )
}



export default About