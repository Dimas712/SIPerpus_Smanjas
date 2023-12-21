import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiBookshelf } from "react-icons/gi";
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import axios from 'axios';

const RakBuku = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [rak, setRak] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/auth/rak_kategori', { kategori: newCategory })
      .then(result => {
        console.log(result.data);
    
        fetchCategories();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchCategories = () => {
    axios.get('http://localhost:8800/auth/rak')
      .then(result => {
        if (result.data.Status) {
          setRak(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:8800/auth/delete_rak/' +id)
    .then(result => {
      if(result.data.Status) {
        setRak(prevData => prevData.filter(item => item.id !== id));
      } else {
        alert(result.data.Error)
      }
    })
    .catch(err => {
      console.error('API Error', err)
    })
  }

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
      <div className='flex justify-center'>
      <SidebarAdmin
          profileImage={`http://localhost:8800/Images/${userProfileData[0]?.image}`}
          userName={userProfileData[0]?.nama}
        />
        <div className='w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative'>
            <div className='bg-green3 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <GiBookshelf className='h-10 w-8' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Rak Buku</p>
            </div>
            <div>
              <div>
                <form className="py-3" onSubmit={handleSubmit} >

                  <div className=" flex flex-col justify-center items-start pl-2 py-5 w-5/12 md:w-8/12 mx-auto ">
                    <label htmlFor='kategori' className="py-2 text-base font-bold">Tambah RaK</label>
                    <input
                      type="text"
                      name="kategori"
                      placeholder='Masukkan Rak'
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="flex flex-row border-solid border-2 border-blue-gray-100 bg-white h-8 px-2 py-2 justify-center items-center md:w-8/12 md:h-10 md:py-2"
                    />
                    <div className="flex justify-end py-3">
                      <button
                        type="submit"
                        className="bg-green3 border-solid rounded-full text-sm px-7 py-1 font-bold text-white hover:bg-green md:mr-56">
                        Tambah
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className=''>
                <div className=''>
                  <table className='w-8/12 mx-auto'>
                    <thead>
                      <tr className='bg-blue-gray-100 h-10'>
                        <th>Rak</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>

                    <tbody className='border-2 shadow-xl'>
                      {rak.map((rack, index) => (
                        <tr key={index} className='w-full'>
                          <td className='flex justify-center'>{rack.nama}</td>
                          <td>
                            <div className='flex justify-center'>
                              <RiDeleteBin2Fill className='h-5 w-5 fill-red-800 cursor-pointer'
                                onClick={() => handleDelete(rack.id)}
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
      </div>
      <Footer />
    </div>
  );
};

export default RakBuku;
