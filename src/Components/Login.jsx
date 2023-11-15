import React from 'react';
import LogoSMA from '../assets/LogoSMA.svg'
import VideoBG from '../assets/VideoSMA.mp4'
import '../Components/Login.css'

function Login() {
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

    
          <img
            className="mx-auto h-20 w-auto"
            src={LogoSMA}
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            PERPUSTAKAAN
            <br />
            SMAN 1 JASINGA
          </h2>
          
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between"> 
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
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
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
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
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-darkgreen-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen-600"
              >
                Masuk
              </button>
            </div>
          </form>

        </div>
      </div>
  );
};

export default Login;
