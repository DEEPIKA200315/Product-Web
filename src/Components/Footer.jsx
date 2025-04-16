import React from "react";

const Footer =()=>{
    return(
        <footer className="bg-primary text-white py-6 mt-12">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} Dry Fruits & Nuts. All rights reserved.</p>
    <div className="flex gap-4 text-sm">
      <a href="#home" className="hover:text-orange-200">Home</a>
      <a href="#about" className="hover:text-orange-200">About</a>
      <a href="#products" className="hover:text-orange-200">Products</a>
      <a href="#contact" className="hover:text-orange-200">Contact</a>
    </div>
  </div>
</footer>

    )
}
export default Footer