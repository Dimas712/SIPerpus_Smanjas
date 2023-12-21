import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { RiBook2Line } from 'react-icons/ri';
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DataBukuList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleTambahBukuClick = () => {
    navigate('/tambahbuku');
  };

  const [databukulist, setDatabukulist] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8800/auth/databukulist')
      .then((result) => {
        console.log('API Response:', result.data);
        if (result.data.Status) {
          setDatabukulist(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => {
        console.error('API Error:', err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8800/auth/delete_databuku/${id}`)
      .then((result) => {
        if (result.data.Status) {
          setDatabukulist((prevData) => prevData.filter((item) => item.id !== id));
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => {
        console.error('API Error', err);
      });
  };

  const [searchTerm, setSearchTerm] = useState('');

  const [userProfileData, setUserProfileData] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8800/auth/profiladmin', {
          withCredentials: true,
        });
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
        <div className=' w-full h-screen p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative h-screen'>
            <div className=' bg-green3 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <RiBook2Line className='h-10 w-8' color='white' />
              <p className='text-white font-noto font-semibold text-3xl'>Data Buku</p>
            </div>
            <div className='mt-10'>
              <div>
                <button
                  onClick={handleTambahBukuClick}
                  className='flex flex-row justify-center items-center rounded-2xl h-12 w-60 bg-green active:bg-green2'
                >
                  <PlusSmallIcon className='h-6 w-6 mr-1 text-white' />
                  <p className='text-white'>Tambah Buku</p>
                </button>
              </div>
            </div>

            <div className='flex justify-end items-center mt-6'>
              <div className='relative'>
                <input
                  type='search'
                  className='pl-10 pr-3 h-10 hover:shadow-lg rounded-3xl bg-gray-200 shadow-black'
                  placeholder='Cari'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                      <th className=''>Sampul</th>
                      <th className='pr-8'>Judul Buku</th>
                      <th>ISBN</th>
                      <th>Stok Buku</th>
                      <th>Kategori</th>
                      <th>Rak</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {databukulist
                      .filter((e) =>
                        Object.values(e).some(
                          (value) =>
                            typeof value === 'string' &&
                            value.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                      )
                      .map((e, index) => (
                        <tr key={index} className='border-b border-gray-300'>
                          <td className='pl-4'>{index + 1}</td>
                          <td className='pl-2'>
                            <img
                              src={`http://localhost:8800/Images/${e.sampul}`}
                              className='w-10 h-10 rounded-full'
                              alt={`Profile of ${e.nama}`}
                            />
                          </td>
                          <td className='pr-8'>{e.judul_buku}</td>
                          <td>{e.isbn}</td>
                          <td className=''>{e.stok_buku}</td>
                          <td className=''>{e.kategori_nama}</td>
                          <td>{e.rak_nama}</td>
                          <td className='flex h-12 items-center'>
                            <Link to={`/databukuedit/${e.id}`}>
                              <BiEdit className='h-6 w-6 fill-blue-800 cursor-pointer mr-1' />
                            </Link>
                            <div>
                              <RiDeleteBin2Fill
                                className='h-6 w-6 fill-red-800 cursor-pointer'
                                onClick={() => handleDelete(e.id)}
                              />
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
      <Footer />
    </div>
  );
};

export default DataBukuList;
