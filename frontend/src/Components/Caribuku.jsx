import React, {useState} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Bukuing from '../assets/Bukuing.svg'
import Bukudilan from '../assets/Bukudilan.svg'
import Bukupkn from '../assets/Bukupkn.svg'
import Bukukimia from '../assets/Bukukimia.svg'
import Bukusbk from '../assets/Bukusbk.svg'
import Bukumtk from '../assets/Bukumtk.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Data Dummy untuk buku 
const DataBuku =[
    {
        id: 1,
        title:  "Seni Budaya",
        kategori: "Kelas XII",
        image: Bukusbk
    },
    {
        id: 2,
        title:  "Matematika",
        kategori: "Kelas XII",
        image: Bukumtk
    },
    {
        id: 3,
        title:  "Kimia",
        kategori: "Kelas X",
        image: Bukukimia
    },
    {
        id: 4,
        title:  "PPKN",
        kategori: "Kelas XII",
        image: Bukupkn
    },
    {
        id: 5,
        title:  "Bahasa Inggris",
        kategori: "Kelas XII",
        image: Bukuing
    },
    {
        id: 6,
        title:  "Dilan 1990",
        kategori: "Novel",
        image: Bukudilan
    },
]


const CariBuku = () =>{
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState('caribuku');
  
    const handleOpen = () => {
    setActiveMenuItem('caribuku');
  };
  const handleLogin = ( ) => {
    setLoggedIn(true);
  };
    return(
        <div>
            <div>
            <Navbar isLoggedIn={isLoggedIn} />
            </div>
                <div className="flex flex-row">
                    <Sidebar activeMenuItem={activeMenuItem} onOpen={handleOpen} />
                    <div className="px-5 py-10 w-full">
                        <div className="bg-green3 rounded-xl px-5 py-3">
                            <p className="text-white font-bold text-xl">Data Buku</p>
                        </div>
                        {/* Search */}
                        <Search />
                        <ButtonSearch />
                        <CarouselBook />
                    </div>
                </div> 
            <Footer />
        </div>
    )
}

function Search (){
    return(
        <div>
            <form className="flex flex-col items-center justify-center py-3 rounded-2xl ">
            <div className="flex flex-col justify-center items-center pl-2 py-5 w-5/12 md:w-8/12">
                <input
                placeholder="Search Book...."
                type="text"
                name="search"
                className="flex flex-row border-solid border-2 rounded-xl border-blue-gray-100 bg-white h-8 px-2 py-2 justify-center items-center shadow-lg md:w-8/12 md:h-10 md:py-2"
                />
            </div>
        </form>
        </div>
    )
}


function ButtonSearch (){
    return(
        <div>
            <div className="flex flex-col mt-5 justify-center items-center">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:h-10 md:w-9/12">
                    <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2" href="#">Kelas X</a>
                    <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2" href="#">Kelas XI</a>
                    <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2" href="#">Kelas XII</a>
                    <a className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2" href="#">Lainnya</a>
                </div>
            </div>
        </div>
    )

    function ButtonPilihan(){
        return(
            <div>

            </div>
        )
    }

}

function CarouselBook (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return(
        <div className="py-10 mb-24 w-[800px] m-auto">
            <div className="">
            <Slider {...settings}>
                {DataBuku.map((e) =>(
                    <div className="flex items-center px-3 text-black rounded-xl -mt-5 shadow-lg ">
                        <div className="flex justify-center items-center -mb-10">
                            <img src={e.image} alt="Gambar Buku" className="h-[450px]" />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-1 mb-3">
                            <p>{e.title}</p>
                            <p>{e.kategori}</p>
                            <button className="border border-gray-600 rounded-md hover:bg-green md:w-36">Selengkapnya</button>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    )
}
export default CariBuku