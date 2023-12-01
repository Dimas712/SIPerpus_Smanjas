import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PiStudent } from "react-icons/pi";
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import { Checkbox } from '@material-tailwind/react';
import {RiDeleteBin2Fill } from 'react-icons/ri';
 

const DataPenggunaList = () => {
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
              <PiStudent className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Daftar Data Pengguna</p>
            </div>
            <div className='mt-10'>
                <div>
                  <Link to="/datapengguna " className='flex flex-row justify-center items-center rounded-2xl h-12 w-60 bg-green active:bg-green2'>
                    <PlusSmallIcon className='h-6 w-6 mr-1 text-white'/>
                    <p className='text-white'>Tambah Pengguna</p>
                  </Link>
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
                      <th className='pr-14'>NISN</th>
                      <th>Kata Sandi</th>
                      <th className='pr-20'>Nama</th>
                      <th>Level</th>
                      <th>Tanggal Lahir</th>
                      <th className=''>Kelas</th>
                      <th>Jenis Kelamin</th>
                      <th>Telepon</th>
                      <th>Alamat</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Checkbox/></td>
                      <td className=''>27371923388</td>
                      <td className=''>27371923388</td>
                      <td className='pr-20'>Sarah</td>
                      <td>Siswa</td>
                      <td className='pr-10'>10-08-2005</td>
                      <td className=''>10</td>
                      <td className=''>Perempuan</td>
                      <td>08126436263</td>
                      <td>Bogor</td>
                      <td className='flex h-12 w-22 justify-center items-center'>
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
