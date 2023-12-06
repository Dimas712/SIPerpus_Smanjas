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
 

const PeminjamanAdmin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  

  const handleLogin = ( ) => {
    setLoggedIn(true);
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
                      <th className='pr-20'>Nama</th>
                      <th className=''>Kelas</th>
                      <th>Pinjam</th>
                      <th>Kembali</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Checkbox/></td>
                      <td className=''>12</td>
                      <td className='pr-20'>Rani</td>
                      <td className='pr-10'>10</td>
                      <td className=''>12-09-2023</td>
                      <td className=''>15-09-2023</td>
                      <td>Dipinjam</td>
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
                      <td className=''>45</td>
                      <td className='pr-20'>Ahmad</td>
                      <td className='pr-10'>12</td>
                      <td className=''>12-09-2023</td>
                      <td className=''>28-09-2023</td>
                      <td>Dipinjam</td>
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
                      <td className=''>67</td>
                      <td className='pr-20'>Iqbal</td>
                      <td className='pr-10'>10</td>
                      <td className=''>20-09-2023</td>
                      <td className=''>29-09-2023</td>
                      <td>Dipinjam</td>
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
                      <td className=''>89</td>
                      <td className='pr-20'>Reina</td>
                      <td className='pr-10'>11</td>
                      <td className=''>21-09-2023</td>
                      <td className=''>23-09-2023</td>
                      <td>Dipinjam</td>
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

export default PeminjamanAdmin;
