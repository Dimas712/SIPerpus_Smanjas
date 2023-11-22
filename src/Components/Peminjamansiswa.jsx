import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';
import Noveldilan from '../assets/Noveldilan.jpg'

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
               <div className='static flex flex-col md:mx-8 my-10 w-full text-xl space-y-10 font-noto drop-shadow-lg '>
                    <div className='w-full rounded-3xl border border-black'>
                        <img
                        className='w-46 h-48'
                        src={Noveldilan} 
                        alt="" />
                    </div>

                    <div className='w-full rounded-3xl border border-black'>
                        <img
                        className='w-46 h-48'
                        src={Noveldilan} 
                        alt="" />
                    </div>

                    <div className='w-full rounded-3xl border border-black'>
                        <img
                        className='w-46 h-48'
                        src={Noveldilan} 
                        alt="" />
                    </div>

                    <div className='w-full rounded-3xl border border-black'>
                        <img
                        className='w-46 h-48'
                        src={Noveldilan} 
                        alt="" />
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
