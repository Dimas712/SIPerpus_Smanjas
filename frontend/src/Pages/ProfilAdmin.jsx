import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import SidebarAdmin from '../Components/SidebarAdmin';
import {IdentificationIcon} from '@heroicons/react/24/outline'
import Admin from '../assets/admin.jpg'
import Footer from '../Components/Footer';
 

const ProfilAdmin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);
  

  const handleLogin = ( ) => {
    setLoggedIn(true);
    navigate('/editadmin');
  };

  const [activeMenuItem, setActiveMenuItem] = useState('profil');
  
  const handleOpen = () => {
    setActiveMenuItem('profil');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex h-screen'>
        <SidebarAdmin activeMenuItem={activeMenuItem} />
        <div className='border-2 w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
          <div className='relative'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
              <IdentificationIcon className='h-10 w-10' color='white'/>
              <p className='text-white font-noto font-semibold text-3xl'>Profil</p>
            </div>
            <div className='mt-20 flex flex-col md:flex-row'>
                <img
                className='h-54 w-48 mb-4 md:mb-0 md:mr-0'
                src={Admin} 
                alt="foto siswa" 
                />
                <div className='md:pl-20 font-semibold'>
                    <ul>
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Nama</span>
                            <span>:</span>
                            <span className='ml-4'>Admin</span>
                        </li>
                        
                        <li className='mb-1.5'>
                            <span style={{ minWidth: '120px', display: 'inline-block' }}>Password</span>
                            <span>:</span>
                            <span className='ml-4'>infinitelearning</span>
                        </li>
                           
                    </ul>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 mb-4 mr-4'>
              <button
              type='button'
              onClick={handleLogin}
              className='bg-green hover:bg-green2 text-white px-4 py-2 rounded-md'>Edit</button>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfilAdmin;