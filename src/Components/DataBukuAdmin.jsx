import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { RiBook2Line } from "react-icons/ri";
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import { Checkbox } from '@material-tailwind/react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
 

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

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin />
        <div className=' w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative h-screen'>
            <div className=' bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
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
                  type="search"
                  className='pl-10 pr-3 h-10 hover:shadow-lg rounded-3xl bg-gray-200 shadow-black'
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
                      <th className=''>ISBN</th>
                      <th className='pr-20'>Judul Buku</th>
                      <th className=''>Nama Penerbit</th>
                      <th>Penerbit</th>
                      <th>Tahun Buku</th>
                      <th>Stok Buku</th>
                      <th>Kelas</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Checkbox/></td>
                      <td className=''>10005</td>
                      <td className='pr-20'>MAtematika X</td>
                      <td className=''>Budi</td>
                      <td className=''>Gramedia</td>
                      <td className=''>2006</td>
                      <td className=''>112</td>
                      <td>10</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
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
                      <td className=''>29076</td>
                      <td className='pr-20'>PPKN XI</td>
                      <td className=''>Agung</td>
                      <td className=''>Gramedia</td>
                      <td className=''>2010</td>
                      <td className=''>80</td>
                      <td>11</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
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
                      <td className=''>10004</td>
                      <td className='pr-20'>Bahasa Indonesia XII</td>
                      <td className=''>Kanjeng</td>
                      <td className=''>Gramedia</td>
                      <td className=''>2012</td>
                      <td className=''>96</td>
                      <td>12</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
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

export default DataBukuAdmin;
