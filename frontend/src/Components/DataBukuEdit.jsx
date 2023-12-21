import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import Navbar from './Navbar';
import SidebarAdmin from './SidebarAdmin';
import Footer from './Footer';
import { BiEdit, BiSearch } from 'react-icons/bi';

const DataBukuEdit = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate()
    const [activeMenuItem, setActiveMenuItem] = useState('databukulist');
    const {id} = useParams()
    const [form, setForm] = useState({
        isbn: '',
        judul_buku: '',
        pengarang: '',
        nama_penerbit: '',
        tahun_buku: '',
        stok_buku: '',
        kategori_id: '',
        rak_id: '',
        sampul: '',
        deskripsi: '',
    })
    
    useEffect(() => {
        axios.get(`http://localhost:8800/auth/databukulist/` + id)
            .then(result => {
                const data = result.data.Result[0];
                setForm({
                    ...form,
                    isbn: data.isbn,
                    judul_buku: data.judul_buku,
                    pengarang: data.pengarang,
                    nama_penerbit: data.nama_penerbit,
                    tahun_buku: data.tahun_buku,
                    stok_buku: data.stok_buku,
                    kategori_id: data.kategori_id,
                    rak_id: data.rak_id,
                    sampul: data.sampul || '',
                    deskripsi: data.deskripsi,
                });
            })
            .catch(err => {
                console.error('Error fetching user data:', err);
                // Handle the error, e.g., show an error message to the user
            });
    }, [id]);
    
    

    const handleBack = () => {
        navigate('/databukulist');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('isbn', form.isbn);
        formData.append('judul_buku', form.judul_buku);
        formData.append('pengarang', form.pengarang);
        formData.append('nama_penerbit', form.nama_penerbit);
        formData.append('tahun_buku', form.tahun_buku);
        formData.append('stok_buku', form.stok_buku);
        formData.append('kategori_id', form.kategori_id);
        formData.append('rak_id', form.rak_id);
        formData.append('sampul', form.sampul[0] || form.sampul);
        formData.append('deskripsi', form.deskripsi);
    
        axios.put(`http://localhost:8800/auth/edit_databuku/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(result => {
                console.log("PUT Request Result:", result);
    
                if (result.data.Status) {
                    navigate('/databukulist');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => {
                console.error("PUT Request Error:", err);
                // Handle the error (e.g., display an error message)
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
          activeMenuItem={activeMenuItem}
          profileImage={`http://localhost:8800/Images/${userProfileData[0]?.image}`}
          userName={userProfileData[0]?.nama}
        />
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
                            <label htmlFor="isbn">ISBN</label>
                            <input
                            id='isbn'
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='isbn'
                            value={form.isbn}
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
                            value={form.judul_buku} 
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
                            value={form.pengarang}
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
                            value={form.nama_penerbit}
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
                            value={form.tahun_buku}
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
                            value={form.stok_buku}
                            onChange={(e) => setForm({...form, stok_buku: e.target.value})}
                            />
                        </div>
                    </div> 
                    
                    <div className='w-2/6 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="kategori">Kategori</label>
                            <select
                                id='kategori'
                                className='rounded-lg pl-3 text-lg'
                                name='kategori_id'
                                value={form.kategori_id}
                                onChange={(e) => setForm({ ...form, kategori_id: e.target.value })}
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
                                id='rak'
                                className='rounded-lg pl-3 text-lg'
                                name='rak_id'
                                value={form.rak_id}
                                onChange={(e) => setForm({ ...form, rak_id: e.target.value })}
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
                            files={form.sampul}
                            onChange={(e) => setForm({ ...form, sampul: e.target.files })}
                        />
                        </div>

                        <div className='flex flex-col pb-14'>
                            <label htmlFor="deskripsi">Deskripsi</label>
                            <textarea
                                className='flex rounded-lg h-36 px-3 text-lg pb-2'
                                id='deskripsi'
                                value={form.deskripsi}
                                placeholder="Tuliskan Deskripsi Buku"
                                name='deskripsi'
                                onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
                            />
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

export default DataBukuEdit