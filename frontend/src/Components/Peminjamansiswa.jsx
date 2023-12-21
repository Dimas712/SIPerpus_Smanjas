import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';
import Noveldilan from '../assets/Noveldilan.jpg'
import Kimia from '../assets/kimia.jpeg'
import { Link } from 'react-router-dom';
import axios from 'axios';


const PeminjamanSiswa = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('pinjamsiswa');
  
  const handleOpen = () => {
    setActiveMenuItem('pinjamsiswa');
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
      <div className='flex '>
      <Sidebar
          activeMenuItem={activeMenuItem}
          profileImage={`http://localhost:8800/Images/${datapenggunalist[0]?.image}`}
          userName={datapenggunalist[0]?.nama}
          onOpen={handleOpen} />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
          <div className='relative h-screen'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <ArrowDownTrayIcon className='h-10 w-10' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl '>Data Peminjaman Buku</p>
            </div>
            
            <div className='relative flex mt-5   bg-opacity-20 rounded-2xl'>
               <div className='static flex flex-col md:mx-8 my-10 w-full text-xl space-y-10 font-noto '>
                    <div className='flex w-full items-center content-center space-x-10  rounded-3xl overflow-hidden border border-gray-300  shadow-xl'>
                        <img
                        className='w-46 h-48'
                        src={Noveldilan} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISBN</span>
                              <span>:</span>
                              <span className='ml-4'>20056</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Nama</span>
                              <span>:</span>
                              <span className='ml-4'>Mumtazah</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Judul Buku</span>
                              <span>:</span>
                              <span className='ml-4'>Dilan 1990</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Peminjaman</span>
                              <span>:</span>
                              <span className='ml-4'>21 Desember 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Pengembalian</span>
                              <span>:</span>
                              <span className='ml-4'>28 Desember 2023</span>
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

export default PeminjamanSiswa;
