import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {ArrowUpTrayIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';
import Pancasila from '../assets/pancasila.jpg'
import Matematika from '../assets/matematika.png'
import axios from 'axios';


const Pengembaliansiswa = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('kembalisiswa');
  
  const handleOpen = () => {
    setActiveMenuItem('kembalisiswa');
  };

  const handleLogin = ( ) => {
    setLoggedIn(true);
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
          onOpen={handleOpen} />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
          <div className='relative h-screen'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <ArrowUpTrayIcon className='h-10 w-10' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl '>Data Pengembalian Buku</p>
            </div>
            
            <div className='relative flex mt-5  bg-opacity-20 rounded-2xl'>
               <div className='static flex flex-col md:mx-8 my-10 w-full text-xl space-y-10 font-noto drop-shadow-lg'>
                    <div className='flex w-full items-center content-center space-x-10  rounded-3xl border border-gray-300 shadow-xl overflow-hidden'>
                        <img
                        className='w-46 h-48'
                        src={Pancasila} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISSBN</span>
                              <span>:</span>
                              <span className='ml-4'>20054</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Nama</span>
                              <span>:</span>
                              <span className='ml-4'>Mumtazah</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Judul Buku</span>
                              <span>:</span>
                              <span className='ml-4'>Pendidikan Pancasila Dan Kewarganegaraan</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Pengembalian</span>
                              <span>:</span>
                              <span className='ml-4'>11 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Peminjaman</span>
                              <span>:</span>
                              <span className='ml-4'>20 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal kembali</span>
                              <span>:</span>
                              <span className='ml-4'>20 November 2023</span>
                          </li>
                        </ul>
                    </div>

                    <div className='flex w-full items-center content-center space-x-10 rounded-3xl border border-gray-300 shadow-xl overflow-hidden'>
                        <img
                        className='w-46 h-48'
                        src={Matematika} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISSBN</span>
                              <span>:</span>
                              <span className='ml-4'>20053</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Nama</span>
                              <span>:</span>
                              <span className='ml-4'>Mumtazah</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Judul Buku</span>
                              <span>:</span>
                              <span className='ml-4'>Matematika</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Pengembalian</span>
                              <span>:</span>
                              <span className='ml-4'>11 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Peminjaman</span>
                              <span>:</span>
                              <span className='ml-4'>20 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Kembali</span>
                              <span>:</span>
                              <span className='ml-4'>21 November</span>
                          </li>
                        </ul>
                    </div>

                </div> 
            </div>
            </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Pengembaliansiswa;