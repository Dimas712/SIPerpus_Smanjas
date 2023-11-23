import React, {useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { CiSearch } from "react-icons/ci";
import Carousel from "./Carousel";
import CardBook from "./CardBook";

const CariBuku = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
  
    const handleLogin = ( ) => {
    setLoggedIn(true);
    };
    
    return(
        <div>
            <Navbar isLoggedIn={isLoggedIn} />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col py-10 w-screen md:px-10">
                    {/* Sub Judul */}
                    <div className="px-5 py-5 flex justify-center">
                        <div className="flex items-center bg-green3 w-11/12 rounded-lg px-8 h-8 md:w-10/12/12 md:h-8 ">
                            <p className="text-base font-bold text-white">Data Buku</p>
                        </div>
                    </div>
                    {/* Search */}
                    <div className="px-5 py-2 ">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-end items-center bg-search px-3 md:w-5/12 md:h-8 rounded-lg shadow-xl">
                                <CiSearch className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        {/* Button Pilihan */}
                        <div className="flex flex-col mt-8 justify-center items-center">
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:w-9/12">
                            <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md md:h-9" href="#">Kelas 10</a>
                            <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md" href="#">Kelas 11</a>
                            <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md" href="#">Kelas 12</a>
                            <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md" href="#">Lainnya</a>
                            </div>
                        </div>
                    </div>
                    {/* Carousel */}
                    <div className="flex flex-col mt-8 justify-center">
                        <div className="py-7 px-16">
                            <p className="text-base font-bold">Pilih buku yang menarik bagi anda</p>
                        </div>
                        <div className="px-5 py-5 mt-5 flex justify-center">
                            <Carousel />
                        </div>
                    </div>
                    {/* Card Buku */}
                    <div className="flex flex-col mt-8 justify-center">
                        <div className="py-7 px-16">
                            <p className="text-base font-bold">Pilih buku yang menarik bagi anda</p>
                        </div>
                        <div>
                            <CardBook />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CariBuku