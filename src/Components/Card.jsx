import React from 'react'
import Gambar from '../Components/LogoSMA.svg'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 bg-green-200 rounded-md'>
    <img src={Gambar} className='rounded-md rounded-b-none'/>
    <div className='p-4'>
      <h2 className=''>Title</h2>
      <p>Deskripsi</p>
      <button className='bg-blue-500 text-white'>Selengkapnya</button>
    </div>
   </div>
  )
}

export default Cards