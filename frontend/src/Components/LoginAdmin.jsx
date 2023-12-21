import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import SMA from '../assets/SMA.svg'
import VideoBG from '../assets/VideoSMA.mp4'
import axios from 'axios';

function LoginAdmin() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [error, setError] = useState(null)
  
  const [values, setValues] = useState({
    nisn: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8800/auth/adminlogin', values)
    .then(result => {
      if(result.data.loginStatus) {
        localStorage.setItem("valid", true)
        navigate('/dashboard')
      } else {
          setError(result.data.error)
      }
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <video  src={VideoBG} autoPlay loop muted
            style={{
              position: "absolute",
              width: "100%",
              height:"100%",
              top:"0",
              left:"0",
              objectFit: "cover",
              zIndex:"-1"
            }}
            >
            </video>
        </div>
        
       
        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm bg-green p-10 shadow-md rounded-lg">
        <img
            className="mx-auto h-20 w-auto"
            src={SMA}
            alt="Your Company"
          />
         
        <h2 className="mt-2 text-center text-2xl font-bold leading-8 tracking-tight text-white">
            PERPUSTAKAAN
            <br />
            SMAN 1 JASINGA
          </h2>
          <p className="mt-2 text-center text-1xl font-bold leading-2 tracking-tight text-white">Admin</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center justify-between"> 
              <label htmlFor='nisn' className="block text-sm font-medium leading-6 text-white">
                Nama Pengguna
              </label>
              </div>
              <div className="mt-2">
                <input
                  id='nisn'
                  name="nisn"
                  type="text"
                  autoComplete="text"
                  onChange={(e) => setValues({...values, nisn : e.target.value})}
                  required
                  className="block w-full  rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor='password' className="block text-sm font-medium leading-6 text-white">
                  Kata Sandi
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id='password'
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setValues({...values, password : e.target.value})}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="Tombol">
              <button
                
                type="submit"
                className="flex w-full justify-center rounded-md bg-green4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen-600"
              >
                Masuk
              </button>
            </div>
            <div className='text-red-800'>
              {error && error}
            </div>
          </form>

        </div>
        
      </div>
      
  );
};

export default LoginAdmin;