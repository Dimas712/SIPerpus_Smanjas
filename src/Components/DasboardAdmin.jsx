import React from 'react'
import Footer from './Footer';

const DasboardAdmin = () => {
  return (
    <div>
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="max-w-md bg-bgds shadow-lg rounded-lg overflow-hidden mx-auto w-85">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">12</h2>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Anggota</h2>
            <button className="bg-green text-white px-20 py-2.5 rounded-lg hover:bg-green4">
              Selengkapnya
            </button>
          </div>
        </div>

        <div className="max-w-md bg-bgds shadow-lg rounded-lg overflow-hidden mx-auto w-85">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">50</h2>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Di Kembalikan</h2>
            <button className="bg-green text-white px-20 py-2.5 rounded-lg hover:bg-green4">
              Selengkapnya
            </button>
          </div>
        </div>

        <div className="max-w-md bg-bgds shadow-lg rounded-lg overflow-hidden mx-auto w-85">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">20</h2>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Di Pinjam</h2>
            <button className="bg-green text-white px-20 py-2.5 rounded-lg hover:bg-green4">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default DasboardAdmin