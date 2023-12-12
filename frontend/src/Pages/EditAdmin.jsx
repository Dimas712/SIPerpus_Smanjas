import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import SidebarAdmin from '../Components/SidebarAdmin';
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import Footer from '../Components/Footer';

const EditAdmin = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(true);
    

    const handleLogin = () => {

        setLoggedIn(true);    
        navigate('/profiladmin');
};

return (
    <div>
        <Navbar isLoggedIn={isLoggedIn} />
    <div>
    
    <div className='flex '>
        <SidebarAdmin />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
        <div className='relative h-screen'>
            <div className='bg-green2 h-16 rounded-3xl flex items-center space-x-10 md:pl-6'>
            <PencilSquareIcon className='h-10 w-10' color='white'/>
            <p className='text-white font-noto font-semibold text-3xl '>Edit Profil</p>
            </div>
            <div className='relative flex mt-5 bg-gray-500  bg-opacity-20 rounded-2xl'>
                <div className='static flex md:mx-8 my-10 w-full text-xl space-x-5 font-noto drop-shadow-lg '>
                    <form className='w-1/2 space-y-8'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Nama</label>
                            <input
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='nama' />
                        </div>


                        <div className='flex flex-col'>
                            <label htmlFor="">Password</label>
                            <input
                            className='rounded-lg pl-3 text-lg' 
                            type="password"
                            name='nama' />
                        </div>
                    

                        <div className='flex flex-col '>
                            <p>Jenis Kelamin</p>
                            <div className='text-lg'>
                                <input 
                                type="radio"
                                id='laki'
                                value='laki'
                                name='jenisKelamin'
                                />
                                <label htmlFor="laki">Laki-Laki</label>
                            </div>

                            <div className='text-lg'>
                                <input 
                                type="radio"
                                id='perempuan'
                                value='perempuan'
                                name='jenisKelamin'
                                />
                                <label htmlFor="perempuan">Perempuan</label>
                            </div>
                        </div>


                        <div>
                        <label className='flex' htmlFor="image">Profile Image</label>
                            <input
                                className='text-base mt-1 cursor-pointer'
                                type="file"
                                id="image"
                                accept="image/*"
                            />
                        </div>

                        

                        <div className='h-12 w-45 space-x-7 text-base font-sans font-semibold text-white pt-7 absolute right-0 bottom-0'>
                            <button 
                            className='rounded-md md:w-20 md:h-8 bg-red-500 hover:bg-red-700'
                            onClick={handleLogin}
                            >Kembali</button>
                            <button className='rounded-md md:w-20 md:h-8 bg-green hover:bg-green2'>Simpan</button>
                        </div>
                    </form>
                </div> 
            </div>
            </div>
        </div>
        </div>
            <Footer/>
    </div>
    </div>
);
};

export default EditAdmin;
