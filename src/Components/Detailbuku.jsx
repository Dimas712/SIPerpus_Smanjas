import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

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
          <div className='mt-20 flex flex-col md:flex-row'>
            <Card className="w-full max-w-[47em] flex-row mt-[-3rem]">
              <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-2 w-2/5 shrink-0 rounded-r-none"
                >
            <img
              src="https://ebooks.gramedia.com/ebook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
            />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="gray" className="mb-2 uppercase">
                  Novel Dilan 1990
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Pidi Baiq
                </Typography>
                <Typography color="gray" className="mb-2 font-normal">
                  Novel berjudul Dia Adalah Dilanku Tahun 1990 merupakan karya dari Pidi Baiq. Dilan Dia Adalan Dilanku menceritakan percintaan anak SMA yang cukup unik. Novel dengan tebal 348 halaman ini diterbitkan pada tahun 2014. Ada beberapa penerbit yang telah menerbitkan novel Dilan 1990, yakni penerbit Pastel Books pada 2014 dan penerbit Mizan Pustaka pada 2015. Baca selengkapnya di artikel "Sinopsis Novel 'Dilan' Dia Adalah Dilanku Tahun 1990 - Pidi Baiq"
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Jumlah : 30
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2 bg-green2">
                    Pinjam
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
        <br />
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
    </div>
    <Footer />
    </div>
  );
};

export default Detailbuku;