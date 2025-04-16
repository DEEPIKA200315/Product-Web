import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = ({ closeModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg relative"
          initial={{ scale: 0.5, opacity: 0, y: -100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-black hover:text-red-500 text-xl"
          >
            ✖
          </button>
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
