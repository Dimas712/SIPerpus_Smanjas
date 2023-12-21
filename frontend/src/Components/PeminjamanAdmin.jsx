import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import { TfiDownload } from "react-icons/tfi";
import Footer from './Footer';
import { Checkbox } from '@material-tailwind/react';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios';
import { FaUserCheck } from "react-icons/fa6";


const PeminjamanAdmin = () => {
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
              <TfiDownload className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Data Peminjaman Buku Siswa</p>
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
                      <th>No</th>
                      <th className='pr-20'>Nama</th>
                      <th className='pr-20'>Judul Buku</th>
                      <th>Pinjam</th>
                      <th>Kembali</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='pl-1'>1</td>
                      <td className=''>Zahra</td>
                      <td>Dilan 1990</td>
                      <td className=''>12-09-2023</td>
                      <td className=''>15-09-2023</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
                      <div>
                          <FaUserCheck className='h-6 w-6 fill-light-green-800 cursor-pointer'/>
                          </div>
                        <div>
                          <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
                          </div>
                        </td>
                    </tr>

                    <tr className='border-b'>
                      <td className='pl-1'>2</td>
                      <td className=''>Dimas</td>
                      <td className='pr-20'>Naruto Vol.1</td>
                      <td className='pr-10'>3-09-2023</td>
                      <td className=''>12-09-2023</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
                        <div>
                          <FaUserCheck className='h-6 w-6 fill-light-green-800 cursor-pointer'/>
                          </div>
                        <div>
                          <RiDeleteBin2Fill className='h-6 w-6 fill-red-800 cursor-pointer'/>
                          </div>
                        </td>
                    </tr>

                    <tr className='border-b'>
                      <td className='pl-1'>3</td>
                      <td className=''>Reza</td>
                      <td >Bahasa Inggris Kelas XII</td>
                      <td className='pr-10'>10-09-2023</td>
                      <td className=''>20-09-2023</td>
                      <td className='flex h-12 w-22 justify-evenly  items-center'>
                        <div>
                          <FaUserCheck className='h-6 w-6 fill-light-green-800 cursor-pointer'/>
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
