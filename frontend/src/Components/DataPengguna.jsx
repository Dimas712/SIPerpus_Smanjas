    import React, {useState, useEffect} from 'react';
    import { Link } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom'
    import Navbar from './Navbar';
    import SidebarAdmin from './SidebarAdmin';
    import Footer from './Footer';
    import axios from 'axios';
    

    
    const DataPengguna = () => {
        const navigate = useNavigate();
        const [isLoggedIn, setLoggedIn] = useState(true);
        const [activeMenuItem, setActiveMenuItem] = useState('datapenggunalist');
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
        formData.append('image', form.image);
        formData.append('alamat', form.alamat);

        axios.post('http://localhost:8800/auth/add_pengguna', formData)
      .then((result) => {
        console.log(result.data);
        navigate('/datapenggunalist');
        })
            .catch((err) => {
            console.log(err);
            window.alert('Gagal menambahkan data.');
            });
        };

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
            <div className='relative flex mt-5 bg-gray-500  bg-opacity-20 rounded-2xl'>
                <form className='static flex md:mx-8 my-10 w-full text-xl space-x-5 font-noto drop-shadow-lg ' onSubmit={handleSubmit}>
                    
                    <div className='w-4/6 space-y-8'>
                        <div className='flex flex-col'>
                            <label htmlFor="nama">Nama</label>
                            <input
                            id='nama'
                            className='rounded-lg pl-3 text-lg' 
                            type="text"
                            name='nama'
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
                            onChange={(e) => setForm({...form, tempat_lahir: e.target.value})} 
                             />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="tangal_lahir">Tanggal Lahir</label>
                            <input
                            id='tangal_lahir'
                            className='rounded-lg pl-3 text-lg' 
                            type="date"
                            name='tanggallahir  '
                            onChange={(e) => setForm({...form, tanggal_lahir: e.target.value})}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="level">Level</label>
                            <select 
                                name="level" 
                                id="level" 
                                className='rounded-lg' 
                                defaultValue=""
                                onChange={(e) => setForm({...form, level: e.target.value})}
                            >
                                <option value="" disabled>-- Pilih Admin/Siswa --</option>
                                <option value="Admin">Admin</option>
                                <option value="Siswa">Siswa</option>
                            </select>
                        </div>
                    </div> 
                    
                    <div className='w-2/6 space-y-4'>
                        <div className='flex flex-col '>
                            <p>Jenis Kelamin</p>
                            <div className='text-lg'>
                                <input 
                                type="radio"
                                id='laki'
                                value='laki'
                                name='jenisKelamin'
                                onChange={(e) =>
                                    setForm({
                                      ...form,
                                      jenis_kelamin: e.target.value,
                                    })
                                  }
                                />
                                <label htmlFor="laki">Laki-Laki</label>
                            </div>
                            <div className='text-lg'>
                                <input 
                                type="radio"
                                id='perempuan'
                                value='perempuan'
                                name='jenisKelamin'
                                onChange={(e) =>
                                    setForm({
                                      ...form,
                                      jenis_kelamin: e.target.value,
                                    })
                                }
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
                            onChange={(e) => setForm({...form, no_telepon: e.target.value})} />
                            
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input
                            id='email'
                            className='rounded-lg pl-3 text-lg' 
                            type="email"
                            name='email'
                            onChange={(e) => setForm({...form, email: e.target.value})} />
                        </div>

                        <div>
                            <label htmlFor="image">Profile Image</label>
                            <input
                                className='text-base mt-1 cursor-pointer'
                                type="file"
                                id="image"
                                name='image'
                                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                            />
                        </div>

                        <div className='flex flex-col pb-14'>
                            <label htmlFor="alamat">Alamat</label>
                            <textarea
                            className='flex rounded-lg  h-36 px-3 text-lg pb-24' 
                            id='alamat'
                            type="text"
                            placeholder="Masukkan Alamatmu"
                            name='alamat'
                            onChange={(e) => setForm({...form, alamat: e.target.value})}/>
                        </div>

                        <div className='h-12 w-45 space-x-7 text-base font-sans font-semibold text-white pt-7 absolute right-0 bottom-0'>
                            <button 
                            className='rounded-md md:w-20 md:h-8 bg-red-500 hover:bg-red-700'
                            onClick={() => navigate('/datapenggunalist')}
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

    export default DataPengguna;