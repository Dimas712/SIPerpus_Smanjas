import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import Footer from './Footer';
import axios from 'axios';

const Tambahbuku = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(true);
    const handleLogin = () => {
        setLoggedIn(true);    
        navigate('/databukulist');
    };

    const [form, setForm] = useState({
        isbn: '',
        judul_buku: '',
        pengarang: '',
        nama_penerbit: '',
        tahun_buku: '',
        stok_buku: '',
        kategori: '',
        rak: '',
        sampul: '',
        deskripsi: '',
    })    
    
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('isbn', form.isbn);
    formData.append('judul_buku', form.judul_buku);
    formData.append('pengarang', form.pengarang);
    formData.append('nama_penerbit', form.nama_penerbit);
    formData.append('tahun_buku', form.tahun_buku);
    formData.append('stok_buku', form.stok_buku);
    formData.append('kategori_id', form.kategori);
    formData.append('rak_id', form.rak);
    formData.append('sampul', form.sampul);
    formData.append('deskripsi', form.deskripsi);

    axios.post('http://localhost:8800/auth/add_buku', formData)
  .then((result) => {
    console.log(result.data);
    navigate('/databukulist');
    })
        .catch((err) => {
        console.log(err);
        window.alert('Gagal menambahkan data.');
        });
    };

    const [kategori, setKategori] = useState([]);
    const fetchCategories = () => {
        axios.get('http://localhost:8800/auth/kategori')
            .then(result => {
                if (result.data.Status) {
                    setKategori(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    const [rak, setRak] = useState([]);
    const fetchRaks = () => {
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
        fetchRaks(); // Call the function to fetch racks
    }, []);


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
    <div className='flex '>
    <SidebarAdmin
          profileImage={`http://localhost:8800/Images/${userProfileData[0]?.image}`}
          userName={userProfileData[0]?.nama}
        />
        <div className='md:w-full p-10 pl-5 md:pl-32 pr-5 md:pr-20 '>
        <div className='relative h-full'>
            <div className='relative flex mt-5 bg-gray-500  bg-opacity-20 rounded-2xl'>
                <form className='static flex md:mx-8 my-10 w-full text-xl space-x-5 font-noto drop-shadow-lg ' onSubmit={handleSubmit}>
                    
                    <div className='w-4/6 space-y-8'>
                        <div className='flex flex-col'>
                            <label htmlFor="isbn">ISBN</label>
                            <input
                            id='isbn'
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='isbn'
                            onChange={(e) => setForm({...form, isbn: e.target.value})}
                            />                          
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="judul_buku">Judul Buku</label>
                            <input
                            id='judul_buku'
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='judul_buku' 
                            onChange={(e) => setForm({...form, judul_buku: e.target.value})}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="pengarang">Pengarang</label>
                            <input
                            id='pengarang'
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='pengarang' 
                            onChange={(e) => setForm({...form, pengarang: e.target.value})}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="nama_penerbit">Nama Penerbit</label>
                            <input
                            id='nama_penerbit'
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='nama_penerbit'
                            onChange={(e) => setForm({...form, nama_penerbit: e.target.value})} 
                             />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="tahun_buku">Tahun Buku</label>
                            <input
                            id='tahun_buku'
                            className='rounded-lg pl-3 text-lg' 
                            type="number"
                            name='tahun_buku'
                            onChange={(e) => setForm({...form, tahun_buku: e.target.value})}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="stok_buku">Stok Buku</label>
                            <input
                            id='stok_buku'
                            className='rounded-lg pl-3 text-lg' 
                            type="number"
                            name='stok_buku'
                            onChange={(e) => setForm({...form, stok_buku: e.target.value})}
                            />
                        </div>
                    </div> 
                    
                    <div className='w-2/6 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="kategori">Kategori</label>
                            <select
                                name="kategori"
                                id="kategori"
                                onChange={(e) => setForm({ ...form, kategori: e.target.value })}
                                value={form.kategori}
                            >
                                {kategori.map((c, index) => (
                                    <option key={index} value={c.id}>
                                        {c.nama}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="rak">Rak</label>
                            <select
                                name="rak"
                                id="rak"
                                onChange={(e) => setForm({ ...form, rak: e.target.value })}
                                value={form.rak}
                            >
                                {rak.map((c, index) => (
                                    <option key={index} value={c.id}>
                                        {c.nama}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="sampul">Sampul</label>
                            <input
                                className='text-base mt-1 cursor-pointer'
                                type="file"
                                id="sampul"
                                name='sampul'
                                onChange={(e) => setForm({ ...form, sampul: e.target.files[0] })}
                            />
                        </div>

                        <div className='flex flex-col pb-14'>
                            <label htmlFor="deskripsi">Deskripsi</label>
                            <textarea
                                className='flex rounded-lg h-36 px-3 text-lg pb-24'
                                id='deskripsi'
                                placeholder="Deskripsikan Buku"
                                name='deskripsi'
                                onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
                            />
                        </div>


                        <div className='h-12 w-45 space-x-7 text-base font-sans font-semibold text-white pt-7 absolute right-0 bottom-0'>
                            <button 
                            className='rounded-md md:w-20 md:h-8 bg-red-500 hover:bg-red-700'
                            onClick={() => navigate('/databukulist')}
                            >Kembali</button>

                            <button type='submit' className='rounded-md md:w-20 md:h-8 bg-green hover:bg-green2' name='submit'>
                                Tambah
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

export default Tambahbuku