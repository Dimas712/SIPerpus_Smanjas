import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import { IdentificationIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';
import axios from 'axios';

const ProfilAdmin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('profil');
  const [datapenggunalist, setDatapenggunalist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/auth/profiladmin', { withCredentials: true });
        console.log('API Response:', response.data);
        if (response.data.Status) {
          setDatapenggunalist(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditProfile = () => {
    const userId = datapenggunalist.length > 0 ? datapenggunalist[0].id : null;
    if (userId) {
      navigate(`/editdatapengguna/${userId}`);
    }
  };
  
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex h-screen'>
      <SidebarAdmin
          activeMenuItem={activeMenuItem}
          profileImage={`http://localhost:8800/Images/${datapenggunalist[0]?.image}`}
          userName={datapenggunalist[0]?.nama}
        />
        <div className='border-2 w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <IdentificationIcon className='h-10 w-10' color='white' />
              <p className='text-white font-noto font-semibold text-3xl'>Profil</p>
            </div>
            <div className='mt-20 flex flex-col md:flex-row'>
              {datapenggunalist.map((e, index) => (
                <React.Fragment key={index}>
                  <img
                    className='h-60 w-48 mb-4 md:mb-0 md:mr-0 border-2 border-blue-gray-100 rounded-lg shadow-md'
                    style={{ margin: '5px', padding: '5px' }}
                    src={`http://localhost:8800/Images/${e.image}`}
                    alt={`foto admin ${e.nama}`}
                  />
                  <div className='md:pl-20 font-semibold'>
                    <ul>
                      <li className='mb-1.5'>
                        <span style={{ minWidth: '120px', display: 'inline-block' }}>Nama</span>
                        <span>:</span>
                        <span className='ml-4'>{e.nama}</span>
                      </li>
                      <li className='mb-1.5'>
                        <span style={{ minWidth: '120px', display: 'inline-block' }}>NISN</span>
                        <span>:</span>
                        <span className='ml-4'>{e.nisn}</span>
                      </li>
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className='absolute bottom-0 right-0 mb-4 mr-4'>
              <button
                type='button'
                className='bg-green hover:bg-green2 text-white px-4 py-2 rounded-md'
                onClick={handleEditProfile}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilAdmin;
