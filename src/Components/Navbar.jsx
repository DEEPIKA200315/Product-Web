import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavbarMenu } from "../DB/db";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import Login from "./Login"

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const [openModal, setOpenModal] = useState(false);
    return (
        // className="bg-[url(../src/assets/3.jpg)]"
        <div id="home" className="bg-[url(/Product-Web/assets/7.jpg)] relative h-[100vh] bg-cover bg-center w-full bg-no-repeat"
         style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
            <nav className="fixed top-0 left-0 z-50 w-full">
                <div className="container flex justify-between py-5">

                    <div className="text-2xl text-white flex items-center gap-2 font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                        <p className="whitespace-nowrap">DRY FRUITS</p>
                        <p className="whitespace-nowrap">& NUTS</p>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-600">
                            {
                                NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link}
                                                className="inline-block py-1 px-3 text-yellow-400 hover:text-amber-600
                                            font-semibold">
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-2xl hover:bg-primary hover: rounded-full p-2 duration-200">
                            <CiSearch />
                        </button>
                        <button className="text-2xl hover:bg-primary hover: rounded-full p-2 duration-200">
                            <FaCartShopping />
                        </button>
                        <button
                        onClick={() => setOpenModal(true)}
                        className="bg-primary font-semibold hover:text-white rounded-md cursor-pointer px-6 py-2 duration-200 hidden md:block"
                        >
                        Login
                        </button>


                    </div>

                    <div className="md-hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>
            <ResponsiveMenu open={open} />

            <div className="flex flex-col justify-center absolute inset-0 bg-black/50 text-white items-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
            100% Natural & <span className="text-primary">Organic</span>
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-xl mt-2">
            "Taste the freshness, feel the energy—premium dry fruits and nuts delivered to your doorstep!"
            </p>
            </div>


            {openModal && <Login closeModal={() => setOpenModal(false)} />}

        </div>
    )
}

export default Navbar