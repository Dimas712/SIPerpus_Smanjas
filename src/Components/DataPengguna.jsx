import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';

const DataPengguna = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(true);

    const handleLogin = () => {

        setLoggedIn(true);    
        navigate('/');
};
  return (
    <div>
    <Navbar isLoggedIn={isLoggedIn} />
<div>

<div className='flex '>
    <SidebarAdmin />
    <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
    <div className='relative h-full'>
        <div className='relative flex mt-5 bg-gray-500  bg-opacity-20 rounded-2xl'>
            <div className='static flex md:mx-8 my-10 w-full text-xl space-x-5 font-noto drop-shadow-lg '>
                <form className='w-4/6 space-y-8'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Nama</label>
                        <input
                        className='rounded-lg pl-3 text-lg' 
                        type="text"
                        name='nama' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Tempat Lahir</label>
                        <input
                        className='rounded-lg pl-3 text-lg' 
                        type="text"
                        name='nama' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Tanggal Lahir</label>
                        <input
                        className='rounded-lg pl-3 text-lg' 
                        type="date"
                        name='nama' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <input
                        className='rounded-lg pl-3 text-lg' 
                        type="password"
                        name='nama' />
                    </div>
                </form>


                <form className='w-2/6 space-y-4' action="">
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

                
                    <div className='flex flex-col'>
                        <label htmlFor="">No. Telepon</label>
                        <input
                        className='rounded-lg pl-3 text-lg' 
                        type="number"
                        name='nama' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Email</label>
                        <input
                        className='rounded-lg pl-3 text-lg' 
                        type="email"
                        name='nama' />
                    </div>

                    <div>
                    <label htmlFor="image">Profile Image</label>
                        <input
                            className='text-base mt-1 cursor-pointer'
                            type="file"
                            id="image"
                            accept="image/*"
                        />
                    </div>

                    <div className='flex flex-col pb-14'>
                        <label htmlFor="">Alamat</label>
                        <input
                        className='flex rounded-lg  h-36 px-3 text-lg pb-24' 
                        type="text"
                        placeholder="Masukkan Alamatmu"
                        name='nama'/>
                    </div>

                    <div className='h-12 w-45 space-x-7 text-base font-sans font-semibold text-white pt-7 absolute right-0 bottom-0'>
                        <button 
                        className='rounded-md md:w-20 md:h-8 bg-red-500 hover:bg-red-700'
                        onClick={handleLogin}
                        >Kembali</button>
                        <button className='rounded-md md:w-20 md:h-8 bg-green hover:bg-green2'>Tambah</button>
                    </div>
                </form>
            </div> 
        </div>
        </div>
    </div>
    </div>
<div className='relative'>
    <Footer/>
</div>
</div>
</div>
  )
}

export default DataPengguna