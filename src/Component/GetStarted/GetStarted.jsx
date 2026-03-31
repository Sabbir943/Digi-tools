import React from 'react';
import User from '../../assets/user.png';
import Rocket from '../../assets/rocket.png';
import PakageImg from '../../assets/package.png';
const GetStarted = () => {
    return (
        <div className='bg-stone-100 p-8 mb-20'>

        <div className='w-10/12 mx-auto mb-20 '>
            <div className='text-center mb-10'>
                <p className='text-3xl font-bold'>Get Started in 3 Steps</p>
                <p className='text-stone-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 text-center'>
                <div className='border border-stone-200 p-6 space-y-3 relative rounded-2xl shadow-md'>
                    <div className='absolute right-4 top-2 bg-blue-800 text-white font-bold rounded-full p-2'>
                        <p>01</p>
                    </div>
                    <img className='bg-blue-200 rounded-full mt-6 w-10 mx-auto p-2' src={User} alt="" />
                    <p className='text-xl font-bold'>User Account</p>
                    <p className='text-stone-400'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='border border-stone-200 p-6 space-y-3 relative rounded-2xl shadow-md'>
                    <div className='absolute right-4 top-2 bg-blue-800 text-white font-bold rounded-full p-2'>
                        <p>02</p>
                    </div>
                    <img className='bg-blue-200 rounded-full mt-6  w-10 mx-auto p-2' src={PakageImg} alt="" />
                    <p className='text-xl font-bold'>Choose Products</p>
                    <p className='text-stone-400'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='border border-stone-200 p-6 space-y-3 relative rounded-2xl shadow-md'>
                    <div className='absolute right-4 top-2 bg-blue-800 text-white font-bold rounded-full p-2'>
                        <p>03</p>
                    </div>
                    <img className='bg-blue-200 rounded-full w-10 mt-6 mx-auto p-2' src={Rocket} alt="" />
                    <p className='text-xl font-bold'>Start Creating</p>
                    <p className='text-stone-400'>Download and start using your premium tools immediately.</p>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default GetStarted;