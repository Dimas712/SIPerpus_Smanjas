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
import { Pinjam } from '../Components/Data/Pinjam';
 

const PeminjamanAdmin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  

  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  const [search, setSearch] = useState('')

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin />
        <div className=' w-full p-5 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative h-screen'>
            <div className=' bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <TfiDownload className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Data Peminjaman Buku Siswa</p>
            </div>
            <div className='mt-10'>
                <div>
                  <button className='flex flex-row justify-center items-center rounded-2xl h-12 w-60 bg-green active:bg-green2'>
                    <PlusSmallIcon className='h-6 w-6 mr-1 text-white'/>
                    <p className='text-white'>Tambah Peminjaman</p>
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
                  <thead>
                    <tr className='bg-gray-200 text-center border'>
                      <th className='pr-10  border' style={{ fontSize: '15px' }}>No Peminjaman</th>
                      <th className='pr-10  border' style={{ fontSize: '15px' }}>ID Anggota</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Nama</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Kelas</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Buku</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Pinjam</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Kembali</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Status</th>
                      <th className='pr-10  border' style={{ fontSize: '15px' }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* search filter by title */}
                    {Pinjam.filter((item) => {
                      return search.toLowerCase() === ''
                      ? item
                      : item.name.toLowerCase().includes(search);
                     }).map((item) => (
                      <tr key={item.id} className='text-center'>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.no}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.idpeng}</td>
                      <td className='pr-17 text-left border' style={{ fontSize: '15px' }}>{item.name}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.kelas}</td>
                      <td className='pr-17 text-left  border' style={{ fontSize: '15px' }}>{item.buku}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.pinjam}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.kembali}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.status}</td>
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

export default PeminjamanAdmin;
