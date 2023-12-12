import React from 'react';
import { Link } from 'react-router-dom';
import Bukuing from '../assets/Bukuing.svg'
import Bukudilan from '../assets/Bukudilan.svg'
import Bukupkn from '../assets/Bukupkn.svg'
import Bukukimia from '../assets/Bukukimia.svg'
import Bukusbk from '../assets/Bukusbk.svg'
import Bukumtk from '../assets/Bukumtk.svg'
import { GrFormNextLink } from "react-icons/gr";

const CardBook = () => {
  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-2 gap-2 px-10 py-5 md:grid-cols-3 md:gap-10">
        <div className='bg-white shadow-xl w-40 h-80'>
          <img src={Bukusbk} alt='Buku SBK' className='' />
          <div className='px-3 py-1'>
            <h3 className='text-sm font-bold'>Seni Budaya</h3>
            <p className='text-xs'>Kelas XII</p>
          </div>
          <div className='px-3'>
            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green'>
              <p className='text-xs'>Selengkapnya</p>
              <GrFormNextLink className='ml-2' />
            </a>
          </div>
        </div>
        <div className='bg-white shadow-xl w-40 h-80'>
          <img src={Bukuing} alt='Buku BInggris' className='' />
          <div className='px-3 py-1'>
            <h3 className='text-sm font-bold'>Bahasa Inggria</h3>
            <p className='text-xs'>Kelas XII</p>
          </div>
          <div className='px-3'>
            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green'>
              <p className='text-xs'>Selengkapnya</p>
              <GrFormNextLink className='ml-2' />
            </a>
          </div>
        </div>
        <div className='bg-white shadow-xl w-40 h-80'>
          <img src={Bukukimia} alt='Buku Kimia' className='' />
          <div className='px-3 py-1'>
            <h3 className='text-sm font-bold'>Kimia</h3>
            <p className='text-xs'>Kelas X</p>
          </div>
          <div className='px-3'>
            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green'>
              <p className='text-xs'>Selengkapnya</p>
              <GrFormNextLink className='ml-2' />
            </a>
          </div>
        </div>
        <div className='bg-white shadow-xl w-40 h-80'>
          <img src={Bukumtk} alt='Buku SBK' className='' />
          <div className='px-3 py-1'>
            <h3 className='text-sm font-bold'>Matematika</h3>
            <p className='text-xs'>Kelas XII</p>
          </div>
          <div className='px-3'>
            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green'>
              <p className='text-xs'>Selengkapnya</p>
              <GrFormNextLink className='ml-2' />
            </a>
          </div>
        </div>
        <div className='bg-white shadow-xl w-40 h-80'>
          <img src={Bukupkn} alt='Buku SBK' className='' />
          <div className='px-3 py-1'>
            <h3 className='text-sm font-bold'>PPKN</h3>
            <p className='text-xs'>Kelas XII</p>
          </div>
          <div className='px-3'>
            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green'>
              <p className='text-xs'>Selengkapnya</p>
              <GrFormNextLink className='ml-2' />
            </a>
          </div>
        </div>
        <div className='bg-white shadow-xl w-40 h-80'>
          <img src={Bukudilan} alt='Buku SBK' className='' />
          <div className='px-3 py-1'>
            <h3 className='text-sm font-bold'>Dilan 1990</h3>
            <p className='text-xs'>Kelas XII</p>
          </div>
          <div className='px-3'>
            <a href='#' className='flex flex-row px-1 py-1 items-center justify-center border border-gray-600 rounded-md hover:bg-green'>
              <Link to='/detailbuku' className='text-xs'>Selengkapnya</Link>
              <GrFormNextLink className='ml-2' />
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CardBook
