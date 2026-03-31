import React from 'react';
import digiImg from '../../assets/DigiTools.png'
import { FaShoppingCart, } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

const NavBar = ({count,setCount}) => {
    return (
        <div className=''>

        <div className='flex justify-between items-center w-10/12 mx-auto mt-8'>
           <div>
            <img src={digiImg} alt="" />
            </div> 
            <div>
                <ul className='hidden md:flex gap-5 font-semibold hover:cursor-pointer'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <div className='hidden md:flex justify-between items-center gap-4 font-semibold hover:cursor-pointer'>
                    <div className='relative p-3  '>
                        <div className='absolute -top-1 right-1 text-xl text-red-700 font-bold'>{count}</div>
                        <div>

                  <FaShoppingCart  />
                        </div>
                </div>
                
                  
                <p>LogIn</p>
                <button className="btn btn-active btn-primary rounded-full">Get Started</button>
                </div>

            </div>
            <div className='flex md:hidden text-4xl hover:cursor-pointer'>
                
                <HiBars3 />
            </div>
          
        </div>
         <div className="divider"></div>
        </div>
    );
};

export default NavBar;