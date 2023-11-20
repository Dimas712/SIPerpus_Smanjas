import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {UserCircleIcon} from '@heroicons/react/24/outline'
import Foto3x4 from '../assets/foto3x4.jpg'
import Footer from './Footer';
 
const ProfilSiswa = () => {
  return (
    <div>
      <Navbar />
      <div className='flex h-screen'>
        <Sidebar />
        <div className='border-2 w-full h-screen p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <UserCircleIcon className='h-10 w-10' color='white'/>
              <p className='text-slate-50 font-noto font-semibold text-3xl'>Pembaruan Profil</p>
            </div>
            <div className='mt-20 flex flex-col md:flex-row'>
                <img
                className='h-54 w-48 mb-4 md:mb-0 md:mr-0'
                src={Foto3x4} 
                alt="foto siswa" 
                />
                <div className='md:pl-20 font-semibold'>
                    <ul>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Nama</span>
                            <span>:</span>
                            <span className='ml-4'>Mumtazah</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>NIS</span>
                            <span>:</span>
                            <span className='ml-4'>00001</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Password</span>
                            <span>:</span>
                            <span className='ml-4'>infinitelearning</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Tanggal Lahir</span>
                            <span>:</span>
                            <span className='ml-4'>27 Juni 1945</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Tempat Lahir</span>
                            <span>:</span>
                            <span className='ml-4'>Bogor</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>No Telepon</span>
                            <span>:</span>
                            <span className='ml-4'>08321314171</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Email</span>
                            <span>:</span>
                            <span className='ml-4'>mumum221@gmail.com</span>
                        </li>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Alamat</span>
                            <span>:</span>
                            <span className='ml-4'>Bogor</span>
                        </li>   
                    </ul>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 mb-4 mr-4'>
              <button className='bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md'>Edit</button>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfilSiswa;
