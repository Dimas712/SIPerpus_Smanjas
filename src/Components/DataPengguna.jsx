import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';

const DataPengguna = () => {
    const [data, setData] = useState(
        {   name: "",
            tempat: "",
            date: "",
            password: "",
            level: "",
            jeniskelamin: "Laki-laki,Perempuan",
            phone: "",
            email: "",
            image: "",
            alamat: ""
        })
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData ({...data, [name]: value})

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(data)
    }

    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(true);

    const handleLogin = () => {

        setLoggedIn(true);    
        navigate('/datapenggunalist');
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
                <form method='post' onSubmit={handleSubmit} className='w-4/6 space-y-8'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Nama</label>
                        <input onChange={handleChange} value={data.name}
                        className='rounded-lg pl-3 text-lg' 
                        type="text"
                        name='name' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Tempat Lahir</label>
                        <input onChange={handleChange} value={data.tempat}
                        className='rounded-lg pl-3 text-lg' 
                        type="text"
                        name='tempat' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Tanggal Lahir</label>
                        <input onChange={handleChange} value={data.date}
                        className='rounded-lg pl-3 text-lg' 
                        type="date"
                        name='date' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <input onChange={handleChange} value={data.password}
                        className='rounded-lg pl-3 text-lg' 
                        type="password"
                        name='password' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Level</label>
                        <select onChange={handleChange} value={data.level}
                        className='rounded-lg pl-3 text-lg' 
                        type="text"
                        name='level'>
                        <option>-- Pilih Admin/Siswa --</option>
                        <option>Admin</option>
                        <option>Siswa</option>
                        </select>
                    </div>
                </form>



                <form method='post' onSubmit={handleSubmit} className='w-2/6 space-y-4' action="">
                    <div className='flex flex-col '>
                        <p>Jenis Kelamin</p>
                        <div className='text-lg'>
                            <input onChange={handleChange} value={data.jeniskelamin['Laki-laki','Perempuan']}
                            type="radio"
                            id='laki-laki'
                            value='Laki-laki'
                            name='jenisKelamin'
                            />
                            <label htmlFor="laki">Laki-Laki</label>
                        </div>

                        <div className='text-lg'>
                            <input onChange={handleChange}
                            type="radio"
                            id='perempuan'
                            value='Perempuan'
                            name='jenisKelamin'
                            />
                            <label htmlFor="perempuan">Perempuan</label>
                        </div>

                    </div>

                
                    <div className='flex flex-col'>
                        <label htmlFor="">Telepon</label>
                        <input onChange={handleChange} value={data.phone}
                        className='rounded-lg pl-3 text-lg' 
                        type="number"
                        name='phone' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Email</label>
                        <input onChange={handleChange} value={data.email}
                        className='rounded-lg pl-3 text-lg' 
                        type="email"
                        name='email' />
                    </div>

                    <div>
                    <label htmlFor="image">Profile Image</label>
                        <input onChange={handleChange} value={data.image}
                            className='text-base mt-1 cursor-pointer'
                            type="file"
                            id="image"
                            accept="image/*"
                        />
                    </div>

                    <div className='flex flex-col pb-14'>
                        <label htmlFor="">Alamat</label>
                        <input onChange={handleChange} value={data.alamat}
                        className='flex rounded-lg  h-36 px-3 text-lg pb-24' 
                        type="text"
                        placeholder="Masukkan Alamatmu"
                        name='alamat'/>
                    </div>

                    <div className='h-12 w-45 space-x-7 text-base font-sans font-semibold text-white pt-7 absolute right-0 bottom-0'>
                        <button 
                        className='rounded-md md:w-20 md:h-8 bg-red-500 hover:bg-red-700'
                        onClick={handleLogin}
                        >Kembali</button>
                        <button type='submit' className='rounded-md md:w-20 md:h-8 bg-green hover:bg-green2'>Tambah</button>
                         {<p>{data.name}, {data.tempat}, {data.date}, {data.password}, {data.level}, {data.phone}, {data.email}, {data.image}, {data.alamat}</p>} */}
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