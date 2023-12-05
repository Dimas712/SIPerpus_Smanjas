import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import { TfiDownload } from "react-icons/tfi";
import Footer from './Footer';
import { Checkbox } from '@material-tailwind/react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
 

const DataPenggunaList = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  

  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  const handleTambahPeminjamanClick = () => {
    // Navigate to the desired page when "Tambah Peminjaman" button is clicked
    navigate('/datapengguna');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin />
        <div className=' w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative h-screen'>
            <div className=' bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <TfiDownload className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Daftar Data Pengguna</p>
            </div>
            <div className='mt-10'>
                <div>
                  <button onClick={handleTambahPeminjamanClick}
                  className='flex flex-row justify-center items-center rounded-2xl h-12 w-60 bg-green active:bg-green2'>
                    <PlusSmallIcon className='h-6 w-6 mr-1 text-white'/>
                    <p className='text-white'>Tambah Siswa</p>
                  </button>
                </div>
            </div>

            <div className='flex justify-end items-center mt-6'>
              <div className='relative'>
                <input
                  type="search"
                  className=' pl-10 pr-3 h-10 hover:shadow-lg rounded-3xl bg-gray-200 shadow-black'
                />
                <MagnifyingGlassIcon className='absolute left-3 top-3 w-4' />
              </div>
            </div>

            <div className='mt-6'>
              <div>
              <table className='w-full'>
  <thead>
    <tr className='bg-gray-200 text-left '>
      <th><Checkbox/></th>
      <th className=''>No Peminjaman</th>
      <th className='pr-10'>Nama</th>
      <th className='pr-10'>Tanggal Lahir</th>
      <th>Jenis Kelamin</th>
      <th>Telepon</th>
      <th className='pr-5'>Level</th>
      <th className='pr-5'>Alamat</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Checkbox/></td>
      <td className=''>12</td>
      <td className='pr-20'>Sarah</td>
      <td className='pr-10'>20-09-2002</td>
      <td className='pr-2'>Perempuan</td>
      <td className='pr-2'>08944585940</td>
      <td>Admin</td>
      <td>Bogor</td>
      <td className='flex h-12 w-22 justify-evenly items-center'>
        <div>
          <BiEdit className='h-6 w-6 fill-blue-800 cursor-pointer'/>
        </div>
        <div>
          <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
        </div>
      </td>
    </tr>

    <tr>
      <td><Checkbox/></td>
      <td className=''>45</td>
      <td className='pr-20'>Ahmad</td>
      <td className='pr-10'>22-04-2007</td>
      <td className=''>Laki-laki</td>
      <td className='pr-2'>08944585940</td>
      <td>Siswa</td>
      <td>Bogor</td>
      <td className='flex h-12 w-22 justify-evenly items-center'>
        <div>
          <BiEdit className='h-6 w-6 fill-blue-800 cursor-pointer'/>
        </div>
        <div>
          <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
        </div>
      </td>
    </tr>

    <tr>
      <td><Checkbox/></td>
      <td className=''>67</td>
      <td className='pr-20'>Iqbal</td>
      <td className='pr-10'>30-06-2007</td>
      <td className=''>Laki-laki</td>
      <td className='pr-2'>08944585940</td>
      <td>Siswa</td>
      <td>Bogor</td>
      <td className='flex h-12 w-22 justify-evenly items-center'>
        <div>
          <BiEdit className='h-6 w-6 fill-blue-800 cursor-pointer'/>
        </div>
        <div>
          <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
        </div>
      </td>
    </tr>
  </tbody>  
</table>

              </div>
            </div>

            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DataPenggunaList;
