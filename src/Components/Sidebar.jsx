import React, { useState } from 'react';
import { ArrowLeftCircleIcon, MagnifyingGlassIcon, ArrowDownTrayIcon,ArrowUpTrayIcon, UserIcon} from '@heroicons/react/24/outline'
import LogoSMA from '../assets/LogoSMA.svg'
import Foto3x4 from '../assets/foto3x4.jpg'
import { Link } from 'react-router-dom';

const Sidebar = ({ activeMenuItem }) => {
  const [open, setOpen] = useState(true);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className='flex'>
      <div className={`bg-green2 text-white ${open ? "w-72" : "w-16"} duration-300 relative p-4`}>
        <div>
          <ArrowLeftCircleIcon className={`h-10 w-10 -right-5 absolute cursor-pointer ${!open && "rotate-180"}`} stroke='#657864' fill='white' onClick={() => setOpen (!open)} />
        </div>
        <div className='mt-6 flex justify-center static'>
          <img
              className={` rounded-full ${open ? "w-32" : "hidden"} ${open ? "h-32" : "hidden"}`}
              src={Foto3x4}
              alt="foto siswa"
            />
        </div>
        <div className='static mt-5 flex justify-center text-center' style={{ minHeight: open ? '' : '30px' }}>
          <p className={`font-poppins ${open ? "text-2xl" : "hidden"}`}>Zahra Mumtazah </p>
        </div> 
        <br className='static' /> 
        <hr className={`static border-2 mx-[-1rem] ${open ? "" : ""}`} />
        
        
        <div className='mt-8 mx-[-1rem]'>
          <ul>
            <Link to="/caribuku" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'caribuku' ? 'bg-green' : '' }`}>
              <MagnifyingGlassIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Cari Buku</p>
            </Link>
            
            <Link to="/pinjamsiswa" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'pinjamsiswa' ? 'bg-green' : '' }`}>
              <ArrowDownTrayIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Data Peminjaman</p>
            </Link>
            
            <Link to="/kembalisiswa" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'kembalisiswa' ? 'bg-green' : '' } `}>
              <ArrowUpTrayIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"} $`}>Data Pengembalian</p>
            </Link>

            <Link to="/profil" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'profil' ? 'bg-green' : '' }`}>
              <UserIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Profil</p>
            </Link>
          </ul>
        </div>
      </div>   
    </div>
  );
};

export default Sidebar;
