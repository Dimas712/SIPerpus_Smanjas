import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import axios from 'axios';

const DasboardAdmin = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const handleOpen = () => {
    setActiveMenuItem('dashboard');
  };

  const [isLoggedIn, setLoggedIn] = useState(true);
  const handleLogin = ( ) => {
    setLoggedIn(true);
  };

  const [totalSiswa, SettotalSiswa] = useState()
  useEffect(() => {
    total_siswa();
  }, [])
  const total_siswa = () => {
    axios.get('http://localhost:8800/auth/total_siswa')
    .then(result => {
      if(result.data.Status) {
        SettotalSiswa(result.data.Result[0].siswa)
      }
    })
  }
  
  const [totalAdmin, SettotalAdmin] = useState()
  useEffect(() => {
    total_admin();
  }, [])
  const total_admin = () => {
    axios.get('http://localhost:8800/auth/total_admin')
    .then(result => {
      if(result.data.Status) {
        SettotalAdmin(result.data.Result[0].admin)
      }
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
        <div>
          <div className='flex'>
          <SidebarAdmin
          activeMenuItem={activeMenuItem}
          profileImage={`http://localhost:8800/Images/${userProfileData[0]?.image}`}
          userName={userProfileData[0]?.nama}
        />
            <div className=' md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
              <div className=" flex justify-center items-center h-full ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 ">
                  <div className="max-w-md bg-bgds shadow-2xl rounded-lg overflow-hidden mx-auto w-96 h-56">
                    <div className="pt-10 pl-10">
                      <h2 className="text-4xl font-semibold text-gray-800 mb-2">{totalAdmin}</h2>
                      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Admin</h2>
                      <Link to='/datapenggunalist'>
                      <button className="bg-green mt-4 text-white px-24 py-2.5 rounded-lg hover:bg-green4">
                        Selengkapnya
                      </button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="max-w-md bg-bgds shadow-2xl rounded-lg overflow-hidden mx-auto w-96 h-56">
                    <div className="pt-10 pl-10">
                      <h2 className="text-4xl font-semibold text-gray-800 mb-2">{totalSiswa}</h2>
                      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Siswa</h2>
                      <Link to='/datapenggunalist'>
                      <button className="bg-green mt-4 text-white px-24 py-2.5 rounded-lg hover:bg-green4">
                        Selengkapnya
                      </button>
                      </Link>
                    </div>
                  </div>


                  <div className="max-w-md bg-bgds shadow-2xl rounded-lg overflow-hidden mx-auto w-96 h-56">
                    <div className="pt-10 pl-10">
                      <h2 className="text-4xl font-semibold text-gray-800 mb-2">3</h2>
                      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Di Kembalikan</h2>
                      <Link to='/kembaliadmin'>
                      <button className="bg-green mt-4 text-white px-24 py-2.5 rounded-lg hover:bg-green4">
                        Selengkapnya
                      </button>
                      </Link>
                    </div>
                  </div>

                  <div className="max-w-md bg-bgds shadow-2xl rounded-lg overflow-hidden mx-auto w-96 h-56">
                    <div className="pt-10 pl-10">
                      <h2 className="text-4xl font-semibold text-gray-800 mb-2">2</h2>
                      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Di Pinjam</h2>
                      <Link to='/pinjamadmin'>
                      <button className="bg-green mt-4 text-white px-24 py-2.5 rounded-lg hover:bg-green4">
                        Selengkapnya
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              
        </div>
        <Footer/>
    </div>
  );
}

export default DasboardAdmin;