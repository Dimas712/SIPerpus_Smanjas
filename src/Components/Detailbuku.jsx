import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Detailbuku = () => {
  return (
    <div>
          <Navbar />
      <div className='flex h-screen'>
          <Sidebar />
      <div className=' border-2 w-full h-screen p-10 pl-5 md:pl-32 pr-5 md:pr-20'>
        <div className='relative '>
          <div className='bg-green2 h-12 rounded-3xl flex items-center space-x-10 md:pl-4'>
            <UserCircleIcon className='h-10 w-10 text-white' />
            <p className='text-white font-noto font-semibold text-3xl'>Detail Buku</p>
          </div>
          <div className='mt-2 flex flex-col md:flex-row'>
            <div className="flex justify-center items-center h-screen drop-shadow-xl">
              <BookCard
                title="Novel Dilan 1990"
                author="Pidi Baiq"
                description="Novel berjudul Dia Adalah Dilanku Tahun 1990 merupakan karya dari Pidi Baiq. Dilan Dia Adalan Dilanku menceritakan percintaan anak SMA yang cukup unik. Novel dengan tebal 348 halaman ini diterbitkan pada tahun 2014. 
                Ada beberapa penerbit yang telah menerbitkan novel Dilan 1990, yakni penerbit Pastel Books pada 2014 dan penerbit Mizan Pustaka pada 2015. Baca selengkapnya di artikel Sinopsis Novel 'Dilan' Dia Adalah Dilanku Tahun 1990 - Pidi Baiq."
                quantity={30}
              />
            </div>
          </div>
        </div>
        <div>
        <ul className='md:pl-10 font-semibold flex flex-col md:flex-coloumn'>
          <li className='mb-1.5'>
            <span style={{ minWidth: '120px', display: 'inline-block' }}>ISSBN</span>
            <span>:</span>
            <span className='ml-4'>20056</span>
          </li>
          <li className='mb-1.5'>
            <span style={{ minWidth: '120px', display: 'inline-block' }}>Judul Buku</span>
            <span>:</span>
            <span className='ml-4'>Dilan 1990</span>
          </li>
          <li className='mb-1.5'>
            <span style={{ minWidth: '120px', display: 'inline-block' }}>Nama Pengarang</span>
            <span> :</span>
            <span className='ml-4'>Pidi Baiq</span>
          </li>
          <li className='mb-1.5'>
            <span style={{ minWidth: '120px', display: 'inline-block' }}>Penerbit</span>
            <span>:</span>
            <span className='ml-4'>Pastel Books (Mizan Group)</span>
          </li>
          <li className='mb-1.5'>
            <span style={{ minWidth: '120px', display: 'inline-block' }}>Tahun Buku</span>
            <span>:</span>
            <span className='ml-4'>2015</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

const BookCard = ({ title, author, description, quantity }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-50 object-cover md:w-48"
            src="https://ebooks.gramedia.com/ebook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpg"
            alt="Book Cover"
          />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-3xl font-semibold italic">
            {title}
          </div>
          <p className="block mt-1 text-lg leading-tight font-semibold text-black">
            {author}
          </p>
          <p className="mt-2 text-gray-600 text-justify text-sm">{description}</p>
          <p className="mt-4 font-semibold">Jumlah Buku: {quantity}</p>
          <button className="mt-4 bg-green5 hover:bg-green2 text-white font-bold py-2 px-4 rounded-lg">
            Pinjam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detailbuku;