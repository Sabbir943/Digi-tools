import React from 'react';
import { TbPoint } from "react-icons/tb";
import { VscTriangleRight } from "react-icons/vsc";
import BannerImg from '../../assets/banner.png'
const HeroSection = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>

                  <div className=''>
                <button className="btn btn-soft btn-primary rounded-full text-xl"> <TbPoint />New: AI-Powered Tools Available</button>
                <p className='text-5xl font-bold mt-6 mb-5'>Supercharge Your<br/> Digital Workflow</p>
                <p className='text-stone-500 mb-5'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>
                <div className='flex gap-3'>
                    <button className="btn btn-active btn-primary rounded-full">Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-full"><VscTriangleRight />Watch Demo</button>
                </div>

            </div>
            <div className='mt-8 md:mt-2'>
                <img className='' src={BannerImg} alt="" />
            </div>

            </div>
          
        </div>
    );
};

export default HeroSection;