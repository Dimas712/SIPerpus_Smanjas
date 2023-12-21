import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CariBuku = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('caribuku');
  const [dataBuku, setDataBuku] = useState([]);
  const { id } = useParams();
  const handleOpen = () => {
    setActiveMenuItem('caribuku');
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    const fetchDataBuku = async () => {
      try {
        const response = await axios.get('http://localhost:8800/auth/caribuku', {
          withCredentials: true,
        });
        console.log('API Response:', response.data);
        if (response.data.Status) {
          setDataBuku(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchDataBuku();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [datapenggunalist, setDatapenggunalist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/auth/profilsiswa', { withCredentials: true });
        console.log('API Response:', response.data);
        if (response.data.Status) {
          setDatapenggunalist(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    fetchData();
}, []);

  return (
    <div>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
      </div>
      <div className="flex flex-row">
      <Sidebar
          activeMenuItem={activeMenuItem}
          profileImage={`http://localhost:8800/Images/${datapenggunalist[0]?.image}`}
          userName={datapenggunalist[0]?.nama}
          onOpen={handleOpen} />
        <div className="px-5 py-10 w-full">
          <div className="bg-green3 rounded-xl px-5 py-3">
            <p className="text-white font-bold text-xl">Data Buku</p>
          </div>

          <form className="flex flex-col items-center justify-center py-3 rounded-2xl">
            <div className="flex flex-col justify-center items-center pl-2 py-5 w-5/12 md:w-8/12">
              <input
                placeholder="Search Book...."
                type="text"
                name="search"
                className="flex flex-row border-solid border-2 rounded-xl border-blue-gray-100 bg-white h-8 px-2 py-2 justify-center items-center shadow-lg md:w-8/12 md:h-10 md:py-2"
              />
            </div>
          </form>

          <div className="flex flex-col mt-5 justify-center items-center">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:h-10 md:w-9/12">
              <a
                className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2"
                href="#"
              >
                Kelas X
              </a>
              <a
                className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2"
                href="#"
              >
                Kelas XI
              </a>
              <a
                className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2"
                href="#"
              >
                Kelas XII
              </a>
              <a
                className="flex bg-green text-white rounded-3xl px-3 text-xs items-center justify-center shadow-md hover:bg-green2"
                href="#"
              >
                Lainnya
              </a>
            </div>
          </div>

          <div className="py-10 mb-24 w-[800px] m-auto ">
            <div className="shadow-xl">
              <Slider {...settings}>
                {dataBuku.map((book) => (
                  <div className="flex items-center px-3 h-100 text-black rounded-xl shadow-lg border-2 border-blue-gray-100 shadow-xl" key={book.id}>
                    <div className="flex justify-center items-center -mb-8">
                    <img
                        src={`http://localhost:8800/Images/${book.sampul}`}
                        alt={`Cover of ${book.judul_buku}`}
                      className="h-80 w-64 mt-6"  />
                    </div>

                    <div className="flex flex-col justify-center items-center mb-3 mt-11">
                      <p>{book.judul_buku}</p>
                      <p>{book.kategori_nama}</p>
                      <Link to={`/detailbuku/${book.id}`}>
                          <button className="border border-gray-600 rounded-md hover:bg-green md:w-36">Selengkapnya</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CariBuku;
