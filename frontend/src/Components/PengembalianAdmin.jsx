import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import { TfiUpload } from "react-icons/tfi";
import Footer from './Footer';
import { Checkbox } from '@material-tailwind/react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios';

const PengembalianAdmin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  

  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  const [userProfileData, setUserProfileData] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8800/auth/profiladmin', { withCredentials: true });
        console.log('API Response:', response.data);
        if (response.data.Status) {
          setUserProfileData(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex'>
        <SidebarAdmin
          profileImage={`http://localhost:8800/Images/${userProfileData[0]?.image}`}
          userName={userProfileData[0]?.nama}
        />
        <div className=' w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative'>
            <div className=' bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <TfiUpload className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Data Pengembalian Buku Siswa</p>
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
                      <th>No</th>
                      <th className=''>Nama</th>
                      <th className=''>Judul Buku</th>
                      <th>Pinjam</th>
                      <th>Kembali</th>
                      <th>Dikembalikan</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='pl-2'>1</td>
                      <td className=''>Zahra</td>
                      <td>Dilan 1990</td>
                      <td >12-09-2023</td>
                      <td className=''>15-09-2023</td>
                      <td className=''>14-09-2023</td>
                      <td className=''>Dikembalikan</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
                        <div>
                          <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
                          </div>
                        </td>
                    </tr>

                    <tr>
                      <td className='pl-2'>2</td>
                      <td className=''>Dimas</td>
                      <td>Naruto Vol.1</td>
                      <td >03-09-2923</td>
                      <td className=''>12-09-2923</td>
                      <td className=''>28-09-2923</td>
                      <td className='text-'>Telat Dikembalikan</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
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

export default PengembalianAdmin;
