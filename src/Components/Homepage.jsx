import React from "react";
import Banner from '../assets/Banner.svg'
import Fasilitas1 from '../assets/Fasilitas1.svg'
import Fasilitas2 from '../assets/Fasilitas2.svg'
import Fasilitas3 from '../assets/Fasilitas3.svg'
import Fasilitas4 from '../assets/Fasilitas4.svg'
import Fasilitas5 from '../assets/Fasilitas5.svg'
import {MdNoFood} from 'react-icons/md';
import {FaPhoneSlash} from 'react-icons/fa6';
import {GiNightSleep} from 'react-icons/gi';
import {RiSpeakFill} from 'react-icons/ri';
import Navbar from "./Navbar";
import Footer from "./Footer";


const Homepage = () =>{
    return(
        <div>
            {/* Navbar */}
            <div className="z-50 relative">
            <Navbar />
            </div>
            {/* Header Homepage */}
            <div className="relative">
                <img
                className="mx-auto w-full  md:max-w-screen sm:max-xl:w-full "
                src={Banner}
                alt="Benner Perpustakaan"
                />
                <div className="flex flex-col items-center absolute inset-0 mt-24 justify-center md:items-center md:mb-42 md:ml-2 tracking-wider z-0">
                    <p className="text-white font-bold md:text-7xl text-center">
                        <span className="block">PERPUSTAKAAN</span> 
                        <span className="block mt-8">SMAN 1 JASINGA</span>
                    </p>
                </div>
            </div>

            {/* Header text */}
            <div className="flex flex-wrap items-center justify-center px-10 py-14 md:mt-10 md:mb-10">
                <p className="text-lg md:text-xl lg:text-2xl">“Apapun yang kamu lakukan, namun membaca adalah salah satu yang terbaik dan paling positif.”</p>
            </div>
            
            {/* Fasilitas */}
            <div>
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold md:text-4xl">Fasilitas Kami</h2>
                    <hr className="my-20 border-t-8 border-black " />
                </div>
                {/* Grid gambar fasilitas */}
                <div className="grid grid-cols-2 gap-2 px-5 py-2 md:grid-cols-4 md:gap-4 md:mb-10 ">
                    <div className="cards-img">
                        <img src={Fasilitas1} alt="Gambar Fasilitas"/>
                    </div>
                    <div className="cards-img">
                        <img src={Fasilitas2} alt="Gambar Fasilitas" />
                    </div>
                    <div className="cards-img">
                        <img src={Fasilitas3} alt="Gambar Fasilitas" />
                    </div>
                    <div className="cards-img">
                        <img src={Fasilitas4} alt="Gambar Fasilitas" />
                    </div>
                </div>
            </div>

             {/* Profil Perpus */}
            <div className="container mx-auto px-4 md:px-4 py-16 md:mb-10">
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold md:text-4xl">Profil Perpustakaan</h2>
                    <hr className="my-20 border-t-8 border-black " />
                </div>
                <div className="flex flex-col justify-center ml-5 mr-5 rounded-3xl shadow-xl bg-bgds px-5 md:flex-row">
                    <p className="py-10 text-base md:py-36 ">Perpustakaan Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (kemendikbudristek) merupakan perpustakaan utama di lingkungan kemendikbudristek yang dibuka secara resmi oleh Menteri Pendidikan Nasional pada 29 November 2004. Perpustakaan in diharapkan menjadi referensi dalam bidang pendidikan dan kebudayaan dengan menyediakan akses informasi dan pengetahuan yang lengkap, baik dalam bentuk koleksi tercetak maupun digital. Perpustakaan kemendikbudristek juga membina lebih dari 150 perpustakan di lingkungan kemendikbudristek baik di unit utama pusat maupun Unit Pelaksana Teknis (UPT) di daerah.</p>
                    <img src={Fasilitas5} alt="person" className="max-w-full mx-auto mb-5 ml-14 md:-mr-16 md:mb-0"/>
                </div>
            </div>

            {/* Tata Tertib */}
            <div className="container mx-auto mb-36 px-4 mb- md:px-4">
                <div className="flex items-center justify-center ">
                    <h2 className="text-2xl font-bold md:text-4xl">Tata Tertib</h2>
                    <hr className="my-20 border-t-8 border-black " />
                </div>
                <div className="grid gap-3 rounded-3xl h-auto shadow-xl bg-bgds px-10 py-10 md:h-96 md:flex-row items-center">
                    <div className="button-layout">
                        <MdNoFood className='icons-color' />
                        <h4 className="text-lg">Dilarang Makan di Perpustakaan</h4>
                    </div>
                    <div className="button-layout">
                        <RiSpeakFill className='icons-color' />
                        <h4 className="text-lg">Dilarang Makan di Perpustakaan</h4>
                    </div>
                    <div className="button-layout">
                        <GiNightSleep className='icons-color' />
                        <h4 className="text-lg">Dilarang Makan di Perpustakaan</h4>
                    </div>
                    <div className="button-layout">
                        <FaPhoneSlash className='icons-color' />
                        <h4 className="text-lg">Dilarang Makan di Perpustakaan</h4>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage;