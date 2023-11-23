import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

const Footer = () => {
    return(
        <footer className='flex flex-row justify-between bg-footer fixed bottom-0 h-10 items-center px-5 w-full md:px-10'>
            <div className='text-xs md:text-sm'>
                <h3>Create by: Startech - Infinitelearning</h3>
            </div>
            <div className='flex gap-2 text-icons'>
                <a href='#'>
                    <FaTwitter className='w-4 h-4 md:w-5 md:h-5' />
                </a>
                <a href='#'>
                    <FaInstagram className='w-4 h-4 md:w-5 md:h-5' />
                </a>
                <a href='#'>
                    <FaFacebook className='w-4 h-4 md:w-5 md:h-5' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;