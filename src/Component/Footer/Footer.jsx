import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-black text-white  '>

        <div className='w-10/12 mx-auto p-14  '>
            <div className='grid grid-cols-1 md:grid-cols-5 justify-between items-center   mb-10 '>
                <div className='mb-5 text-center'>
                    <h1 className='text-4xl font-bold mb-8'>DigiTools</h1>
                    <p className='line-clamp-3  text-stone-300'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='ml-8 mb-4'>
                    <ul className='space-y-4 text-center mb-4 '>
                        <li className='font-bold text-xl'><a href="#">Product</a></li>
                        <li className=' text-stone-300'><a href="#">Features</a></li>
                        <li className=' text-stone-300'><a href="#">Pricing</a></li>
                        <li className=' text-stone-300'><a href="#">Templates</a></li>
                        <li className=' text-stone-300'><a href="#">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4 ml-8 mb-4 text-center  '>
                        <li className='text-xl font-bold'><a href="#">Company</a></li>
                        <li className=' text-stone-300'><a href="#">About</a></li>
                        <li className=' text-stone-300'><a href="#">Careers</a></li>
                        <li className=' text-stone-300'><a href="#">Press</a></li>
                        <li className=' text-stone-300'><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4 ml-8 mb-4 text-center '>
                        <li className='text-xl font-bold'><a href="#">Resources</a></li>
                        <li className=' text-stone-300'><a href="#">Documentation</a></li>
                        <li className=' text-stone-300'><a href="#">Help Center</a></li>
                        <li className=' text-stone-300'><a href="#">Community</a></li>
                        <li className=' text-stone-300'><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='space-y-3 mb-4 ml-4 text-center'>
                    <h1 className='font-bold text-xl'>Social Links</h1>
                    <div className='flex gap-4 text-center justify-center items-center'>

                    <FaFacebook className='text-blue-600' />
                     <FaInstagramSquare className='text-pink-500' />
                      <FaSquareXTwitter className='text-blue-800' />
                    </div>
                </div>
               
            </div>
        </div>
        <hr className=' pb-15 ' />
        <div className='flex justify-between items-center text-stone-200 pb-5 w-10/12 mx-auto'>
             <p className='text-white'>&copy;2026 Digitools. All rights reserved.</p>
             <div className='flex gap-5 list-none'>
                <li>Privacy Policy </li>
                <li>Terms of Service</li>
                <li>Cookies</li>
             </div>
             
            
        </div>
       
        </div>
    );
};

export default Footer;