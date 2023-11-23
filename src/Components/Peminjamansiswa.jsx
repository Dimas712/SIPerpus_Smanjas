import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';

const PeminjamanSiswa = () => {
  return (
    <div>
      <Navbar />
      <div className='flex h-screen '>
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
                    </div>
                </div> 
            </div>
            </div>
        </div>
      </div>
      <div className='relative'>
        <Footer/>
      </div>
    </div>
  );
};

export default PeminjamanSiswa;
