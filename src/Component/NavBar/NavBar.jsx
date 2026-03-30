import React from 'react';
import digiImg from '../../assets/DigiTools.png'
import { FaShoppingCart, } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

const NavBar = () => {
    return (
        <div>

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

                <FaShoppingCart />
                <p>LogIn</p>
                <button class="btn btn-active btn-primary rounded-full">Get Started</button>
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