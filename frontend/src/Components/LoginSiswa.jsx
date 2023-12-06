import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SMA from '../assets/SMA.svg'
import VideoSMA from '../assets/VideoSMA.mp4'
import VideoBG from '../assets/VideoSMA.mp4'

function LoginSiswa()  {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    setLoggedIn(true);
    navigate('/caribuku');
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
              transform: "trasnlete(-100%, -100%)",
              zIndex:"-1"
            }}
            >
            </video>
            
        </div>
        
        <card>
        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm bg-green p-10 rounded shadow-md rounded-lg object-top">
        <img
            className="mx-auto h-20 w-auto"
            src={SMA}
            alt="Your Company"
          />
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            PERPUSTAKAAN
            <br />
            SMAN 1 JASINGA
          </h2>
          <p className="mt-2 text-center text-1xl font-bold leading-2 tracking-tight text-white">Siswa</p>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between"> 
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Nama Pengguna
              </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Kata Sandi
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Lupa kata sandi?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div classname="Tombol">
              <button
              onClick={handleLogin}
                type="button"
                className="flex w-full justify-center rounded-md bg-green4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen-600"
              >
                Masuk
              </button>
            </div>
          </form>

        </div>
        </card>
      </div>
      
  );
};

export default LoginSiswa;