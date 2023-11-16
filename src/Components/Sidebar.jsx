import React, { useState } from 'react';
import { ArrowLeftCircleIcon, MagnifyingGlassIcon, ArrowDownTrayIcon,ArrowUpTrayIcon, UserIcon} from '@heroicons/react/24/outline'
import LogoSMA from '../assets/LogoSMA.svg'

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex'>
      <div className={`bg-green2 text-white h-screen ${open ? "w-1/5" : "w-16"} duration-300 relative p-4 `}>
        <div>
          <ArrowLeftCircleIcon className={`h-10 w-10 -right-5 absolute cursor-pointer ${!open && "rotate-180"}`} stroke='#657864' fill='white' onClick={() => setOpen (!open)} />
        </div>
        <div className='mt-6 flex justify-center static'>
          <img
              className={`h-28 w-28 rounded-full ${open ? "" : "w-0"}`}
              src={LogoSMA}
              alt="Your Company"
            />
        </div>
        <div className='static mt-5 flex justify-center text-center' style={{ minHeight: open ? '' : '30px' }}>
          <p className={`font-poppins ${open ? "text-2xl" : "hidden"}`}>Zahra Mumtazah </p>
        </div> 
        <br className='static' /> 
        <hr className={`static border-2 mx-[-1rem] ${open ? "" : ""}`} />
        
        
        <div className='mt-8 mx-[-1rem]'>
          <ul>
            <li className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"}`}>
              <MagnifyingGlassIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Cari Buku</p>
            </li>
            <li className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"}`}>
              <ArrowDownTrayIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Data Peminjaman</p>
            </li>
            <li className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"}`}>
              <ArrowUpTrayIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Data Pengembalian</p>
            </li>
            <li className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"}`}>
              <UserIcon className={`mr-2 ${open ? "w-8" : "w-8"}`}/>
              <p className={`static ${open ? "" : "hidden"}`}>Profil</p>
            </li>
          </ul>
        </div>
      </div>   
    </div>
  );
};

export default Sidebar;
