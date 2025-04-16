import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#fff7cc] text-[#5a4400] py-12 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <p className="text-center text-orange-700 text-normal mb-12">Contact us for a quote, help to join the team.</p>

      {/* Form + Map */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none" />
          <input type="text" placeholder="Your Subject" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none" />
          <textarea rows="5" placeholder="Message" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">Send Message</button>
        </form>

        {/* Google Map */}
        <div className="w-full h-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15551.574827957922!2d80.16881123374223!3d12.978649807075746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20street%20B.V.%20Nagar%20%20meenambakkam%20chennai!5e0!3m2!1sen!2sin!4v1743874312183!5m2!1sen!2sin" 
        className="w-full h-full border-0 rounded-md"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
        <div>
          <span className="text-lg font-bold text-[#5a4400]">📍 Location</span>
          <p className="text-sm mt-2">132, 3rd street, B. V Nagar, Meenambakkam, Chennai </p>
        </div>
        <div>
          <span className="text-lg font-bold text-[#5a4400]">📧 Email</span>
          <p className="text-sm mt-2">deepikadpz@gmail.com</p>
        </div>
        <div>
          <span className="text-lg font-bold text-[#5a4400]">📞 Phone</span>
          <p className="text-sm mt-2">+91 98765 43676</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-black-400 text-base font-bold">
        &copy; {new Date().getFullYear()} Dry Fruits & Nuts. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
