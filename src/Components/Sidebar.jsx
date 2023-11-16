import React, { useState } from 'react';
import { ArrowLeftCircleIcon} from '@heroicons/react/24/outline'
import LogoSMA from '../assets/LogoSMA.svg'

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex'>
      <div className={`bg-green2 text-white h-screen ${open ? "w-1/5" : "w-16"} duration-300 relative p-4 `}>
        <div>
          <ArrowLeftCircleIcon className={`h-10 w-10 -right-5 absolute cursor-pointer ${!open && "rotate-180"}`} stroke='#657864' fill='white' onClick={() => setOpen (!open)} />
        </div>
        <div className='mt-6 flex justify-center'>
          <img
              className={`h-28 w-28 rounded-full border border-black ${open ? "" : "hidden"}`}
              src={LogoSMA}
              alt="Your Company"
            />
        </div>
        <div className={`mt-5 flex justify-center text-center ${open ? "" : "hidden"}`}>
          <p className='font-poppins text-xl'>Zahra Mumtazah </p>
        </div> 
        <br /> 
        <hr className={`border-2 mx-[-1rem] ${open ? "" : "hidden"}`} />
      </div>   
    </div>
  );
};

export default Sidebar;
