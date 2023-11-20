import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {ListBulletIcon} from '@heroicons/react/24/outline'
import Foto3x4 from '../assets/foto3x4.jpg'
 
const ProfilSiswa = () => {
  return (
    <div>
      <Navbar />
      <div className='flex h-screen border-2 border-red-500'>
        <Sidebar />
        <div className='static border-2 w-full h-screen border-black p-10 pl-32 pr-20'>
          <div className='relative border '>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-16 pl-10'>
              <ListBulletIcon className='h-10 w-10' strokeWidth={2} color='white'/>
              <p className='text-slate-50 font-noto font-semibold text-2xl'>Pembaruan Profil</p>
            </div>
            <div className='mt-20 flex flex-row'>
                <img
                className='h-52 w-44'
                src={Foto3x4} 
                alt="foto siswa" 
                />
                <div className='pl-20 font-semibold'>
                    <ul>
                        <li className='mb-1.5'>Nama : Mumtazah</li>
                        <li className='mb-1.5'>Password : infinitelearning</li>
                        <li className='mb-1.5'>Tanggal Lahir : 27 Juni 1945</li>
                        <li className='mb-1.5'>Tempat Lahir : Bogor </li>
                        <li className='mb-1.5'>No Telepon : 08321314171</li>
                        <li className='mb-1.5'>Email : mumum221@gmail.com</li>
                        <li className='mb-1.5'>Alamat : Bogor</li>   
                    </ul>
                </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilSiswa;
