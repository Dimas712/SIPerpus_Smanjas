import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bukuing from '../assets/Bukuing.svg'
import Bukudilan from '../assets/Bukudilan.svg'
import Bukupkn from '../assets/Bukupkn.svg'
import Bukukimia from '../assets/Bukukimia.svg'
import Bukusbk from '../assets/Bukusbk.svg'
import Bukumtk from '../assets/Bukumtk.svg'
import { GrFormNextLink } from "react-icons/gr";

const Carousel = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    };

    return (
        <div className="px-1 w-2/3 m-auto">
            <div className="">
                <Slider {...settings}>
                    <div className="'flex justify-start items-start bg-white h-[320px]">
                        <div className="md:flex md:justify-center">
                            <img src={Bukusbk} alt="BUku SBK" className="md:h-60"/>
                        </div>
                        <div className='px-3 py-1 md:flex md:flex-col md:justify-center md:items-center'>
                            <h3 className='text-sm font-bold'>Seni Budaya</h3>
                            <p className='text-xs'>Kelas XII</p>
                        </div>
                        <div className='px-3 md:flex md:items-center md:justify-center'>
                            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green md:w-44'>
                                <p className='text-xs'>Selengkapnya</p>
                                <GrFormNextLink className='ml-2' />
                            </a>
                        </div>
                    </div>
                    <div className="'bg-white h-[320px]">
                        <div className="md:flex md:justify-center">
                            <img src={Bukumtk} alt="Buku MTK" className="md:h-60"/>
                        </div>
                        <div className='px-3 py-1 md:flex md:flex-col md:justify-center md:items-center'>
                            <h3 className='text-sm font-bold'>Matematika</h3>
                            <p className='text-xs'>Kelas XII</p>
                        </div>
                        <div className='px-3 md:flex md:items-center md:justify-center'>
                            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green md:w-44'>
                                <p className='text-xs'>Selengkapnya</p>
                                <GrFormNextLink className='ml-2' />
                            </a>
                        </div>
                    </div>
                    <div className="'bg-white h-[320px]">
                        <div className="md:flex md:justify-center">
                            <img src={Bukukimia} alt="Buku Kimia" className="md:h-60"/>
                        </div>
                        <div className='px-3 py-1 md:flex md:flex-col md:justify-center md:items-center'>
                            <h3 className='text-sm font-bold'>Kimia</h3>
                            <p className='text-xs'>Kelas X</p>
                        </div>
                        <div className='px-3 md:flex md:items-center md:justify-center'>
                            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green md:w-44'>
                                <p className='text-xs'>Selengkapnya</p>
                                <GrFormNextLink className='ml-2' />
                            </a>
                        </div>
                    </div>
                    <div className="'bg-white h-[320px]">
                        <div className="md:flex md:justify-center">
                            <img src={Bukupkn} alt="Buku PKN" className="md:h-60"/>
                        </div>
                        <div className='px-3 py-1 md:flex md:flex-col md:justify-center md:items-center'>
                            <h3 className='text-sm font-bold'>PPKN</h3>
                            <p className='text-xs'>Kelas XII</p>
                        </div>
                        <div className='px-3 md:flex md:items-center md:justify-center'>
                            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green md:w-44'>
                                <p className='text-xs'>Selengkapnya</p>
                                <GrFormNextLink className='ml-2' />
                            </a>
                        </div>
                    </div>
                    <div className="'bg-white h-[320px]">
                        <div className="md:flex md:justify-center">
                            <img src={Bukuing} alt="Buku Binggris" className="md:h-60"/>
                        </div>
                        <div className='px-3 py-1 md:flex md:flex-col md:justify-center md:items-center'>
                            <h3 className='text-sm font-bold'>Bahasa Inggris</h3>
                            <p className='text-xs'>Kelas XII</p>
                        </div>
                        <div className='px-3 md:flex md:items-center md:justify-center'>
                            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green md:w-44'>
                                <p className='text-xs'>Selengkapnya</p>
                                <GrFormNextLink className='ml-2' />
                            </a>
                        </div>
                    </div>
                    <div className="'bg-white h-[320px]">
                        <div className="md:flex md:justify-center">
                            <img src={Bukudilan} alt="Buku dilan" className="md:h-60"/>
                        </div>
                        <div className='px-3 py-1 md:flex md:flex-col md:justify-center md:items-center'>
                            <h3 className='text-sm font-bold'>Dilan 1990</h3>
                            <p className='text-xs'>Kelas XII</p>
                        </div>
                        <div className='px-3 md:flex md:items-center md:justify-center'>
                            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green md:w-44'>
                                <p className='text-xs'>Selengkapnya</p>
                                <GrFormNextLink className='ml-2' />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Carousel