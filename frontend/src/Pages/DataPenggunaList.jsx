import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from '../Components/Navbar';
import SidebarAdmin from '../Components/SidebarAdmin';
import { TfiDownload } from "react-icons/tfi";
import Footer from '../Components/Footer';
import { Checkbox } from '@material-tailwind/react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import { Pengguna } from '../Components/Data/Pengguna';
 

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

  const [activeMenuItem, setActiveMenuItem] = useState('datapenggunalist');
  
  const handleOpen = () => {
    setActiveMenuItem('datapenggunalist');
  };

  const [search, setSearch] = useState('')

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin activeMenuItem={activeMenuItem} />
        <div className=' w-full p-5 pl-5 md:pl-25 pr-5 md:pr-18'>
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
                    <p className='text-white'>Tambah Pengguna</p>
                  </button>
                </div>
            </div>

            <div className='flex justify-end items-center mt-6'>
              <div className='relative'>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  className=' pl-10 pr-3 h-10 hover:shadow-lg rounded-3xl bg-gray-200 shadow-black'
                />
                <MagnifyingGlassIcon className='absolute left-3 top-3 w-4' />
              </div>
            </div>

            <div className='mt-6'>
              <div>
              <table className='w-full table-fixed' style={{ margin: '0', padding: '0' }}>
                <thead >
                  <tr className='bg-gray-200 text-center border'>
                    <th className='pr-8  border' style={{ fontSize: '12px' }}>No Peminjaman</th>
                    <th className='pr-10 border'style={{ fontSize: '12px' }}>Nama</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Username</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Password</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Tanggal Lahir</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Jenis Kelamin</th>
                    <th className='pr-20 border'style={{ fontSize: '12px' }}>Telepon</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Role</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Alamat</th>
                    <th className='pr-8  border'style={{ fontSize: '12px' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* search filter by */}
                  {Pengguna.filter((item) => {
                    return search.toLowerCase() === '' 
                    ? item 
                    : item.name.toLowerCase().includes(search);
                  }).map((item) => (
                    <tr key={item.id} className='text-center' >
                    <td className='pr-2   border'style={{ fontSize: '12px' }}>{item.no}</td>
                    <td className='pr-20  border 'style={{ fontSize: '12px' }}>{item.name}</td>
                    <td className='pr-17  border'style={{ fontSize: '12px' }}>{item.username}</td>
                    <td className='pr-17  border'style={{ fontSize: '12px' }}>{item.password}</td>
                    <td className='pr-10  border 'style={{ fontSize: '12px' }}>{item.ttl}</td>
                    <td className='pr-2   border'style={{ fontSize: '12px' }}>{item.gender}</td>
                    <td className='pr-17  border'style={{ fontSize: '12px' }}>{item.telepon}</td>
                    <td className='pr-17  border' style={{ fontSize: '12px' }}>{item.role}</td>
                    <td className='pr-17  border' style={{ fontSize: '12px' }}>{item.alamat}</td>
                    <td className='flex h-12 w-22 justify-evenly items-center border' style={{ fontSize: '12px' }}>
                      <div>
                        <BiEdit className='h-6 w-6 fill-blue-800 cursor-pointer'/>
                      </div>
                      <div>
                        <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
                      </div>
                    </td>
                  </tr>
                  ))} 
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