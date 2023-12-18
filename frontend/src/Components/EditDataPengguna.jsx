    import axios from 'axios';
    import React, { useEffect, useState } from 'react'
    import { useNavigate, useParams, } from 'react-router-dom'
    import Navbar from './Navbar';
    import SidebarAdmin from './SidebarAdmin';
    import Footer from './Footer';
    import { BiEdit, BiSearch } from 'react-icons/bi';

    const editdatapengguna = () => {
        const [isLoggedIn, setLoggedIn] = useState(true);
        const navigate = useNavigate()
        const [activeMenuItem, setActiveMenuItem] = useState('datapenggunalist');
        const {id} = useParams()
        const [form, setForm] = useState({
            nama: '',
            nisn: '',
            password: '',
            tempat_lahir: '',
            tanggal_lahir: '',
            level: '',
            jenis_kelamin: '',
            no_telepon: '',
            email: '',
            image: '',
            alamat: '',
        })
        
        useEffect(() => {
            axios.get(`http://localhost:8800/auth/datapenggunalist/` + id)
                .then(result => {
                    const data = result.data.Result[0];
                    setForm({
                        ...form,
                        nama: data.nama,
                        nisn: data.nisn,
                        password: data.password,
                        tempat_lahir: data.tempat_lahir,
                        tanggal_lahir: new Date(data.tanggal_lahir).toISOString().split('T')[0],
                        level: data.level,
                        jenis_kelamin: data.jenis_kelamin,
                        no_telepon: data.no_telepon,
                        email: data.email,
                        image: data.image || '',
                        alamat: data.alamat,
                    });
                })
                .catch(err => {
                    console.error('Error fetching user data:', err);
                    // Handle the error, e.g., show an error message to the user
                });
        }, [id]);
        
        

        const handleBack = () => {
            navigate('/datapenggunalist');
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('nama', form.nama);
            formData.append('nisn', form.nisn);
            formData.append('password', form.password);
            formData.append('tempat_lahir', form.tempat_lahir);
            formData.append('tanggal_lahir', form.tanggal_lahir);
            formData.append('level', form.level);
            formData.append('jenis_kelamin', form.jenis_kelamin);
            formData.append('no_telepon', form.no_telepon);
            formData.append('email', form.email);
            formData.append('image', form.image[0] || form.image);
            formData.append('alamat', form.alamat);
        
            axios.put(`http://localhost:8800/auth/edit_pengguna/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(result => {
                    console.log("PUT Request Result:", result);
        
                    if (result.data.Status) {
                        navigate('/datapenggunalist');
                    } else {
                        alert(result.data.Error);
                    }
                })
                .catch(err => {
                    console.error("PUT Request Error:", err);
                    // Handle the error (e.g., display an error message)
                });
        };
        


        
    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} />
        <div>

        <div className='flex '>
            <SidebarAdmin activeMenuItem={activeMenuItem} />
            <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
            <div className='relative h-full'>
            <div className=' bg-green2 h-10 rounded-3xl flex justify-center items-center space-x-4 md:pl-6'>
                <BiEdit className='h-6 w-6' color='white'/>
                <p className='text-white font-noto font-semibold text-2xl'>Daftar Data Pengguna</p>
                </div>
                <div className='relative flex mt-5 bg-gray-500  bg-opacity-20 rounded-2xl'>
                    <form className='static flex md:mx-8 my-10 w-full text-xl space-x-5 font-noto drop-shadow-lg' onSubmit={handleSubmit} encType="multipart/form-data" >
                        
                        <div className='w-4/6 space-y-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="nama">Nama</label>
                                <input
                                id='nama'
                                className='rounded-lg pl-3 text-lg' 
                                type="text"
                                name='nama'
                                value={form.nama}
                                onChange={(e) => setForm({...form, nama: e.target.value})}
                                />                          
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="nisn">NISN</label>
                                <input
                                id='nisn'
                                className='rounded-lg pl-3 text-lg' 
                                type="text"
                                name='nisn'
                                value={form.nisn} 
                                onChange={(e) => setForm({...form, nisn: e.target.value})}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="password">Password</label>
                                <input
                                id='password'
                                className='rounded-lg pl-3 text-lg' 
                                type="password"
                                name='password' 
                                value={form.password}
                                onChange={(e) => setForm({...form, password: e.target.value})}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="tempat_lahir">Tempat Lahir</label>
                                <input
                                id='tempat_lahir'
                                className='rounded-lg pl-3 text-lg' 
                                type="text"
                                name='tempatlahir'
                                value={form.tempat_lahir}
                                onChange={(e) => setForm({...form, tempat_lahir: e.target.value})} 
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="tangal_lahir">Tanggal Lahir</label>
                                <input
                                id='tangal_lahir'
                                className='rounded-lg pl-3 text-lg' 
                                type="date"
                                name='tanggallahir'
                                value={form.tanggal_lahir}
                                onChange={(e) => setForm({...form, tanggal_lahir: e.target.value})}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="level">Level</label>
                                <select 
                                    name="level" 
                                    id="level" 
                                    className='rounded-lg' 
                                    value={form.level}
                                    onChange={(e) => setForm({...form, level: e.target.value})}
                                >

                                    <option value="" disabled>-- Pilih Admin/Siswa --</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Siswa">Siswa</option>
                                </select>
                            </div>
                        </div> 
                        
                        <div className='w-2/6 space-y-4'>
                            <div className='flex flex-col'>
                                <p>Jenis Kelamin</p>
                                <div className='text-lg'>
                                    <input 
                                        type="radio"
                                        id='laki'
                                        value='laki'
                                        name='jenisKelamin'
                                        checked={form.jenis_kelamin === 'laki'}
                                        onChange={(e) => setForm({...form, jenis_kelamin: e.target.value})}
                                    />
                                    <label htmlFor="laki">Laki-Laki</label>
                                </div>
                                <div className='text-lg'>
                                    <input 
                                        type="radio"
                                        id='perempuan'
                                        value='perempuan'
                                        name='jenisKelamin'
                                        checked={form.jenis_kelamin === 'perempuan'}
                                        onChange={(e) => setForm({...form, jenis_kelamin: e.target.value})}
                                    />
                                    <label htmlFor="perempuan">Perempuan</label>
                                </div>
                            </div>

                            

                            <div className='flex flex-col'>
                                <label htmlFor="noTelepon">No. Telepon</label>
                                <input
                                id='noTelepon'
                                className='rounded-lg pl-3 text-lg' 
                                type="number"
                                name='noTelepon'
                                value={form.no_telepon}
                                onChange={(e) => setForm({...form, no_telepon: e.target.value})} />
                                
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input
                                id='email'
                                className='rounded-lg pl-3 text-lg' 
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={(e) => setForm({...form, email: e.target.value})} />
                            </div>

                            <div>
                                <label htmlFor="image">Profile Image</label>
                                <input
                                className='text-base mt-1 cursor-pointer'
                                type="file"
                                id="image"
                                name='image'
                                files={form.image}
                                onChange={(e) => setForm({ ...form, image: e.target.files })}
                            />
                            </div>



                            <div className='flex flex-col pb-14'>
                                <label htmlFor="alamat">Alamat</label>
                                <input
                                className='flex rounded-lg  h-36 px-3 text-lg pb-24' 
                                id='alamat'
                                type="text"
                                value={form.alamat}
                                placeholder="Masukkan Alamatmu"
                                name='alamat'
                                onChange={(e) => setForm({...form, alamat: e.target.value})}/>
                            </div>

                            <div className='h-12 w-45 space-x-7 text-base font-sans font-semibold text-white pt-7 absolute right-0 bottom-0'>
                                <button
                                    className='rounded-md md:w-20 md:h-8 bg-red-500 hover:bg-red-700'
                                    onClick={handleBack}
                                    >
                                    Kembali
                                </button>

                                <button type='submit' className='rounded-md md:w-20 md:h-8 bg-green hover:bg-green2' name='submit'>
                                    Edit
                                </button>
                            </div>
                        </div>
                        
                    </form>
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

    export default editdatapengguna