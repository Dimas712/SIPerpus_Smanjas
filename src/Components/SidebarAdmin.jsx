  import React, { useState } from 'react';
  import { ArrowLeftCircleIcon, DocumentTextIcon, ArrowsRightLeftIcon, ChevronDownIcon, UserIcon} from '@heroicons/react/24/outline'
  import { AiOutlineDashboard } from "react-icons/ai";
  import { RiBook2Line } from "react-icons/ri";
  import { PiStudent } from "react-icons/pi";
  import { BiCategory } from "react-icons/bi";
  import { GiBookshelf } from "react-icons/gi";
  import { TfiDownload, TfiUpload } from "react-icons/tfi";
  import Admin from '../assets/admin.jpg'
  import { Link } from 'react-router-dom';

  const SidebarAdmin = ({ activeMenuItem: propActiveMenuItem }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(propActiveMenuItem);
    const [open, setOpen] = useState(true);
    const [dataSubMenuOpen, setDataSubMenuOpen] = useState(false);
    const [transaksiSubMenuOpen, setTransaksiSubMenuOpen] = useState(false);
    const [dataChevronRotation, setDataChevronRotation] = useState(dataSubMenuOpen ? "rotate-180" : "");
    const [transaksiChevronRotation, setTransaksiChevronRotation] = useState(transaksiSubMenuOpen ? "rotate-180" : "");



    const handleMenuItemClick = (menuItem) => {
      setActiveMenuItem(menuItem);

      if (menuItem === "Data") {
        setDataSubMenuOpen(!dataSubMenuOpen);
        setDataChevronRotation(dataSubMenuOpen ? "" : "rotate-180");
        
        setTransaksiSubMenuOpen(false);
        setTransaksiChevronRotation("");
      } else if (menuItem === "Transaksi") {
        setTransaksiSubMenuOpen(!transaksiSubMenuOpen);
        setTransaksiChevronRotation(transaksiSubMenuOpen ? "" : "rotate-180");
      } else {
        setDataSubMenuOpen(false);
        setTransaksiSubMenuOpen(false);
  ;
      }
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
                src={Admin}
                alt="foto siswa"
              />
          </div>
          <div className='static mt-5 flex justify-center text-center' style={{ minHeight: open ? '' : '30px' }}>
            <p className={`font-poppins ${open ? "text-2xl" : "hidden"}`}>Admin</p>
          </div> 
          <br className='static' /> 
          <hr className={`static border-2 mx-[-1rem] ${open ? "" : ""}`} />
          
          
          <div className='mt-8 mx-[-1rem]'>
            <ul>
              <Link to="/dashboard" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'dashboard' ? 'bg-green' : '' }`}>
                <AiOutlineDashboard className={`mr-2 h-8 ${open ? "w-8" : "w-8"}`}/>
                <p className={`static ${open ? "" : "hidden"}`}>Dashboard</p>
              </Link>
              
              <Link to="/datapenggunalist" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'datapenggunalist' ? 'bg-green' : '' }`}>
                <PiStudent className={`mr-2 h-8 ${open ? "w-8" : "w-8"}`}/>
                <p className={`static ${open ? "" : "hidden"}`}>Data Siswa</p>
              </Link>
              

              
              <li className={`flex flex-col cursor-pointer py-2 mb-4 ${open ? "px-6" : "px-3"} hover:bg-green `}>
                  <div className={`flex items-center`} onClick={() => handleMenuItemClick('Data')}>
                    <DocumentTextIcon className={`mr-2 h-8 ${open ? "w-8" : "w-8"} ` }/>
                    <p className={`${open ? "" : "hidden"} `}>Data</p>
                    <div className='flex ml-auto'>
                      <ChevronDownIcon className={`h-5 ${open ? "w-5" : "hidden"} ${dataChevronRotation}`} />
                    </div>
                  </div>
                  {dataSubMenuOpen && (               
                    <ul className={`mt-3 ${open ? "" : "hidden"} `}>
                      <Link to="/databukuadmin" className={`flex items-center cursor-pointer py-2 mb-1 hover:bg-green2 active:bg-green3 ${open ? "px-6" : "px-3"}  `}>
                        <RiBook2Line className={`mr-2 h-6 ${open ? "w-6" : "hidden"}`}/>
                        <p className={`static text-sm ${open ? "" : "hidden"}`}>Data Buku</p>
                      </Link>

                      <Link to='/datakategoribuku' className={`flex items-center cursor-pointer py-2 mb-1 hover:bg-green2 active:bg-green3 ${open ? "px-6" : "px-3"}`}>
                        <BiCategory className={`mr-2 h-6 ${open ? "w-6" : "w-6"}`}/>
                        <p className={`static text-sm ${open ? "" : "hidden"}`}>Kategori Buku</p>  
                      </Link>

                      <Link to='/rakbuku' className={`flex items-center cursor-pointer py-2 mb-1 hover:bg-green2 active:bg-green3 ${open ? "px-6" : "px-3"}`}>
                        <GiBookshelf className={`mr-2 h-6 ${open ? "w-6" : "w-6"}`}/>
                        <p className={`static text-sm ${open ? "" : "hidden"}`}>Rak</p>
                      </Link>
                    </ul>
                  )}
                </li>



                <li className={`flex flex-col cursor-pointer py-2 mb-4 ${open ? "px-6" : "px-3"} hover:bg-green `}>
                  <div className={`flex items-center`} onClick={() => handleMenuItemClick('Transaksi')}>
                    <ArrowsRightLeftIcon className={`mr-2 h-8 ${open ? "w-8" : "w-8"}`}/>
                    <p className={` ${open ? "" : "hidden"}`}>Transaksi</p>
                    <div className='flex ml-auto'>
                      <ChevronDownIcon className={`h-5 ${open ? "w-5" : "hidden"} ${transaksiChevronRotation}`} />
                    </div>
                  </div>
                  {transaksiSubMenuOpen && (               
                    <ul className={`mt-3 ${open ? "" : "hidden"}`}>
                      <Link to="/pinjamadmin" className={`flex items-center cursor-pointer py-2 mb-1 hover:bg-green2 active:bg-green3 ${open ? "px-6" : "px-3"}`}>
                        <TfiDownload className={`mr-2 h-5 ${open ? "w-5" : "hidden"}`}/>
                        <p className={`static text-sm ${open ? "" : "hidden"}`}>Peminjaman</p>
                      </Link>

                      <Link to="/kembaliadmin" className={`flex items-center cursor-pointer py-2 mb-1 hover:bg-green2 active:bg-green3 ${open ? "px-6" : "px-3"}`}>
                        <TfiUpload className={`mr-2 h-5 ${open ? "w-5" : "hidden"}`}/>
                        <p className={`static text-sm ${open ? "" : "hidden"}`}>Pengembalian</p>  
                      </Link>
                    </ul>
                  )}

                  
                </li>
                
              <Link to="/profiladmin" className={`flex items-center cursor-pointer py-2 mb-4 hover:bg-green active:bg-green3 ${open ? "px-6" : "px-3"} ${activeMenuItem === 'profil' ? 'bg-green' : '' }`}>
                <UserIcon className={`mr-2 h-8 ${open ? "w-8" : "w-8"}`}/>
                <p className={`static ${open ? "" : "hidden"}`}>Profil</p>
              </Link>   


            </ul>
          </div>
        </div>   
      </div>
    );
  };

  export default SidebarAdmin;
