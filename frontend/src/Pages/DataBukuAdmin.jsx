import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { RiBook2Line } from "react-icons/ri";
import Navbar from '../Components/Navbar';
import SidebarAdmin from '../Components/SidebarAdmin';
import Footer from '../Components/Footer';
import { Checkbox } from '@material-tailwind/react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { DaftarBuku } from '../Components/Data/DaftarBuku';
 

const DataBukuAdmin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  

  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  const handleTambahBukuClick = () => {
    // Navigate to the desired page when "Tambah Buku" button is clicked
    navigate('/tambahbuku');
  };

  const [search, setSearch] = useState('')

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin />
        <div className=' w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative h-screen'>
            <div className=' bg-green3 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <RiBook2Line className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Data Buku</p>
            </div>
            <div className='mt-10'>
                <div>
                  <button onClick={handleTambahBukuClick}
                  className='flex flex-row justify-center items-center rounded-2xl h-12 w-60 bg-green active:bg-green2'>
                    <PlusSmallIcon className='h-6 w-6 mr-1 text-white'/>
                    <p className='text-white'>Tambah Buku</p>
                  </button>
                </div>
            </div>

            <div className='flex justify-end items-center mt-6'>
              <div className='relative'>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  className='pl-10 pr-3 h-10 hover:shadow-lg rounded-3xl bg-gray-200 shadow-black'
                />
                <MagnifyingGlassIcon className='absolute left-3 top-3 w-4' />
              </div>
            </div>

            <div className='mt-6'>
              <div>
                <table className='w-full table-fixed' style={{ margin: '0', padding: '0' }}>
                  <thead>
                    <tr className='bg-gray-200 text-center border'>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>ISBN</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Judul Buku</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Nama Penulis</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Penerbit</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Tahun Buku</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Stok Buku</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Kategori</th>
                      <th className='pr-8  border' style={{ fontSize: '15px' }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* search filter by title */}
                    {DaftarBuku.filter((item) => {
                      return search.toLowerCase() === ''
                      ? item 
                      : item.title.toLowerCase().includes(search);
                    }).map((item) => (
                      <tr key={item.id} className='text-center'>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.ISSBN}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.title}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.penulis}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.penerbit}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.tahun}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.stock}</td>
                      <td className='pr-17  border' style={{ fontSize: '15px' }}>{item.kategori}</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center' tyle={{ fontSize: '17px' }}>
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

export default DataBukuAdmin;
