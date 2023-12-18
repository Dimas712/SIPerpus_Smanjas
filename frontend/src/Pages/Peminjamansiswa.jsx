import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import Footer from '../Components/Footer';
import Noveldilan from '../assets/Noveldilan.jpg'
import Kimia from '../assets/kimia.jpeg'
import { Link } from 'react-router-dom';

const PeminjamanSiswa = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('pinjamsiswa');
  
  const handleOpen = () => {
    setActiveMenuItem('pinjamsiswa');
  };
  
  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex '>
        <Sidebar activeMenuItem={activeMenuItem} onOpen={handleOpen} />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
          <div className='relative h-full'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <ArrowDownTrayIcon className='h-10 w-10' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl '>Data Peminjaman Buku</p>
            </div>
            
            <div className='relative flex mt-5   bg-opacity-20 rounded-2xl'>
               <div className='static flex flex-col md:mx-8 my-10 w-full text-xl space-y-10 font-noto '>
                    <Link to="/detailbuku" className='flex w-full items-center content-center space-x-10  rounded-3xl overflow-hidden cursor-pointer border border-gray-300  shadow-xl'>
                        <img
                        className='w-46 h-48'
                        src={Noveldilan} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISSBN</span>
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
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Status</span>
                              <span>:</span>
                              <span className='ml-4'>Dipinjam</span>
                          </li>
                        </ul>
                    </Link>

                    <div className='flex w-full items-center content-center space-x-10 overflow-hidden rounded-3xl border border-gray-300  shadow-xl'>
                        <img
                        className='w-46 h-48'
                        src={Kimia} 
                        alt="" />
                        
                        <ul className='text-base'>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>ISSBN</span>
                              <span>:</span>
                              <span className='ml-4'>20058</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Nama</span>
                              <span>:</span>
                              <span className='ml-4'>Mumtazah</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Judul Buku</span>
                              <span>:</span>
                              <span className='ml-4'>Kimia</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Pengembalian</span>
                              <span>:</span>
                              <span className='ml-4'>6 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Tanggal Peminjaman</span>
                              <span>:</span>
                              <span className='ml-4'>18 November 2023</span>
                          </li>
                          <li className='mb-0.5'>
                              <span style={{ minWidth: '180px', display: 'inline-block' }}>Status</span>
                              <span>:</span>
                              <span className='ml-4'>Dipinjam</span>
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
