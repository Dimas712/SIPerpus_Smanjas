import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';
import Noveldilan from '../assets/Noveldilan.jpg'
import Kimia from '../assets/kimia.jpeg'

const PeminjamanSiswa = () => {
  return (
    <div>
      <Navbar />
      <div className='flex '>
        <Sidebar />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
          <div className='relative h-full'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <ArrowDownTrayIcon className='h-10 w-10' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl '>Data Peminjaman Buku</p>
            </div>
            
            <div className='relative flex mt-5 bg-gray-500  bg-opacity-20 rounded-2xl'>
              <div className='static flex md:mx-8 my-10 w-full text-xl space-x-5 font-noto drop-shadow-lg '>
                    <div>
                        halo
=======
               <div className='static flex flex-col md:mx-8 my-10 w-full text-xl space-y-10 font-noto drop-shadow-lg'>
                    <div className='flex w-full items-center content-center space-x-10  rounded-3xl border border-black border-l-transparent cursor-pointer'>
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
                    </div>
                  </div>
                    <div className='flex w-full items-center content-center space-x-10  rounded-3xl border border-black border-l-transparent'>
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
    </div>
    <Footer />
    </div>
  );
};

export default PeminjamanSiswa;
