import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { PiBookOpenTextLight } from 'react-icons/pi';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const DetailBuku = ({ match }) => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [bookDetails, setBookDetails] = useState({});
    const [activeMenuItem, setActiveMenuItem] = useState('caribuku');
    const [isBorrowModalOpen, setBorrowModalOpen] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleOpen = () => {
        setActiveMenuItem('caribuku');
    };

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleBorrowClick = () => {
        setBorrowModalOpen(true);
    };

    const handleBorrowConfirm = () => {
        // Implement the logic to handle the borrow confirmation here
        // You can make an API call to update the borrow status or perform any other actions
        setBorrowModalOpen(false);
        navigate('/pinjamsiswa')
    };

    const handleBorrowCancel = () => {
        setBorrowModalOpen(false);
    };

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/auth/detailbuku/${id}`);
                console.log('API Response:', response.data);
                if (response.data.status) {
                    setBookDetails(response.data.result);
                } else {
                    alert(response.data.error);
                }
            } catch (error) {
                console.error('API Error:', error);
            }
        };

        fetchBookDetails();
    }, [id]);


    
// Helper function to get the current date in the format YYYY-MM-DD
// Helper function to get the current date in the format DD-MM-YYYY
const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    return formattedDate;
};

// Helper function to get the return date (current date + 7 days) in the format DD-MM-YYYY
const getReturnDate = () => {
    const currentDate = new Date();
    const returnDate = new Date(currentDate);
    returnDate.setDate(returnDate.getDate() + 7);

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = returnDate.toLocaleDateString(undefined, options);
    
    return formattedDate;
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
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
      <Sidebar
          activeMenuItem={activeMenuItem}
          profileImage={`http://localhost:8800/Images/${datapenggunalist[0]?.image}`}
          userName={datapenggunalist[0]?.nama}
        />
        <div className=' w-full h-screen p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
          <div className='relative h-full '>
            <div className=' bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6 '>
              <PiBookOpenTextLight className='h-10 w-8' color='white' />
              <p className='text-white font-noto font-semibold text-3xl'>Detail Buku</p>
            </div>
            <div className='mt-10 rounded-2xl overflow-hidden border shadow-xl'>
                <div className='flex flex-row space-x-2  '>
                    <div className=' w-48'>
                        <img
                            src={`http://localhost:8800/Images/${bookDetails.sampul}`}
                            alt={`Cover of ${bookDetails.judul_buku}`}
                          className="h-72 w-48 "
                        />
                    </div>
                    <div className='md:w-4/5'>
                    <p className='uppercase tracking-wide text-xl font-semibold italic'>{bookDetails && bookDetails.judul_buku}</p>

                        <p className='block mt-1 text-lg leading-tight font-semibold text-black'>{bookDetails && bookDetails.pengarang}</p>
                        <p className='mt-2 text-gray-600 text-justify text-sm  h-36'>{bookDetails && bookDetails.deskripsi}</p>
                        <div className='mt-3 font-semibold'>
                            <span  style={{ minWidth: '90px', display: 'inline-block' }}>Stok Buku</span>
                            <span>:</span>
                            <span className='ml-4'>{bookDetails && bookDetails.stok_buku}</span>
                        </div>
                        <button
                                onClick={handleBorrowClick}
                                className='mt-2 bg-green5 hover:bg-green2 text-white font-bold py-2 px-4 rounded-lg'>
                                Pinjam
                            </button>
                    </div>  
                </div>
                <div className='mt-4'>
                    <ul className='md:pl-10 font-semibold flex-start flex-col md:flex-coloumn'>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '160px', display: 'inline-block' }}>ISSBN</span>
                            <span>:</span>
                            <span className='ml-4'>{bookDetails && bookDetails.isbn}</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '160px', display: 'inline-block' }}>Judul Buku</span>
                            <span>:</span>
                            <span className='ml-4'>{bookDetails && bookDetails.judul_buku}</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '155px', display: 'inline-block' }}>Nama Pengarang</span>
                            <span> :</span>
                            <span className='ml-4'>{bookDetails && bookDetails.pengarang}</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '160px', display: 'inline-block' }}>Penerbit</span>
                            <span>:</span>
                            <span className='ml-4'>{bookDetails && bookDetails.nama_penerbit}</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '160px', display: 'inline-block' }}>Tahun Buku</span>
                            <span>:</span>
                            <span className='ml-4'>{bookDetails && bookDetails.tahun_buku}</span>
                        </li>
                    </ul>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Borrow Confirmation Modal */}
      {isBorrowModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        {/* Modal content */}
                        <div className="relative flex flex-col w-full bg-white opacity-95 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            {/* Header */}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-2xl font-semibold">
                                    Anda ingin pinjam "{bookDetails.judul_buku}"?
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={handleBorrowCancel}
                                >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/* Body */}
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                    Tanggal Pinjam: {getCurrentDate()}
                                    <br />
                                    Tanggal Kembali: {getReturnDate()}
                                </p>
                            </div>
                            {/* Footer */}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={handleBorrowCancel}
                                >
                                    Tidak
                                </button>
                                <button
      className="bg-green text-white active:bg-green2 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      onClick={handleBorrowConfirm}
    >
      Iya
    </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailBuku;

