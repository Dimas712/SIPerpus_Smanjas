import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
const Footer = () => {
    return(
        <footer className='flex flex-row justify-between bg-footer h-10 items-center px-10'>
            <div className='text-icons'>
                <h3>Create by: Startech - Infinitelearning</h3>
            </div>
            <div className='flex gap-2 text-icons'>
                <a href='#'>
                    <FaTwitter className='w-6 h-6' />
                </a>
                <a href='#'>
                    <FaInstagram className='w-6 h-6' />
                </a>
                <a href='#'>
                    <FaFacebook className='w-6 h-6' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;