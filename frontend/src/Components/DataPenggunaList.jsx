import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import { PiStudent } from "react-icons/pi";
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios';
 

const DataPenggunaList = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('datapenggunalist');
  
  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:8800/auth/delete_pengguna/' +id)
    .then(result => {
      if(result.data.Status) {
        setDatapenggunalist(prevData => prevData.filter(item => item.id !== id));
      } else {
        alert(result.data.Error)
      }
    })
    .catch(err => {
      console.error('API Error', err)
    })
  }

  const[datapenggunalist, setDatapenggunalist] = useState([])
  useEffect(() => {
  axios.get('http://localhost:8800/auth/datapenggunalist')
    .then(result => {
      console.log('API Response:', result.data); // Log the response data
      if(result.data.Status) {
        setDatapenggunalist(result.data.Result);      
      } else {
        alert(result.data.Error)
      }
    })
    .catch(err => {
      console.error('API Error:', err); // Log any errors
    });
}, []);


  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin activeMenuItem={activeMenuItem}  />
        <div className=' w-full h-screen p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative h-full'>
            <div className=' bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <PiStudent className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Daftar Data Pengguna</p>
            </div>
            <div className='mt-10'>
                <div>
                  <Link to="/datapengguna"
                  className='flex flex-row justify-center items-center rounded-2xl h-12 w-60 bg-green active:bg-green2'>
                    <PlusSmallIcon className='h-6 w-6 mr-1 text-white'/>
                    <p className='text-white'>Tambah Siswa</p>
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

            <div className='mt-6 h-3/5 overflow-y-scroll'>
              <div>
              <table className='w-full'>
                  <thead>
                    <tr className='bg-gray-200 text-left '>
                      <th className='pl-3'>No</th>
                      <th className=''>Foto</th>
                      <th className='pr-10'>Nama</th>
                      <th className='pr-10'>NISN</th>
                      <th>Password</th>
                      <th>Jenis Kelamin</th>
                      <th className='pr-5'>Level</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datapenggunalist.map((e, index) => (
                      <tr key={index} className='border-b border-gray-300'>
                        <td className='pl-4'>{index + 1}</td>
                        <td>
                          <img
                            src={`http://localhost:8800/Images/${e.image}`}
                            className='w-10 h-10 rounded-full'
                            alt={`Profile of ${e.nama}`}
                          />
                        </td>
                        <td className='pr-20'>{e.nama}</td>
                        <td className='pr-10'>{e.nisn}</td>
                        <td className='pr-2'>{e.password}</td>
                        <td className='pr-2'>{e.jenis_kelamin}</td>
                        <td>{e.level}</td>
                        <td className='flex h-12 w-22 space-x-1  items-center'>
                          <Link to={`/editdatapengguna/` + e.id}>
                            <BiEdit className='h-6 w-6 fill-blue-800 cursor-pointer'/>
                          </Link>
                          <div>
                            <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer' onClick={() => handleDelete(e.id)}/>
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