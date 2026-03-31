import React from 'react';
import { FcApproval } from "react-icons/fc";
const PricingCart = () => {
    return (
        <div className='w-10/12 mx-auto mb-20'>
           <div className='text-center mb-6 space-y-3 '>
            <p className='text-3xl font-bold '>Simple, Transparent Pricing</p>
            <p className='text-stone-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div> 
            <div className='flex flex-col md:flex-row justify-between items-center mb-10'>
                <div className='bg-base-200 p-13 rounded-2xl shadow-xl'>
                    <p className='text-xl font-bold'>Starter</p>
                    <p className='text-stone-500'>Perfect for getting started</p>
                    <p className='mt-4 mb-4'><span className='text-4xl font-bold'>$0</span><span className='text-stone-400'>/Month</span></p>
                    <ul className='text-stone-500 mb-10'>
                        <li className='flex items-center gap-2'><FcApproval />Access to 10 free tools</li>
                        <li className='flex items-center gap-2'><FcApproval />Basic templates</li>
                        <li className='flex items-center gap-2'><FcApproval />Community support</li>
                        <li className='flex items-center gap-2'><FcApproval />1 project per month</li>
                    </ul>
                    <button className='w-full  btn btn-primary mb-10 rounded-full'>Get Started Free</button>
                </div>
                <div className='bg-[#4F39F6] relative text-white p-13 rounded-2xl shadow-md'>
                    <div>
                        <div className="badge badge-warning absolute -top-2 right-25">Most Popular</div>
                    </div>
                    <p className='text-xl font-bold'>Pro</p>
                    <p className='text-white'>Best for professionals</p>
                    <p className='mt-4 mb-4'><span className='text-4xl font-bold'>$29</span><span className='text-white'>/Month</span></p>
                    <ul className='text-white mb-10'>
                        <li className='flex items-center gap-2'><FcApproval />Access to all premium tools</li>
                        <li className='flex items-center gap-2'><FcApproval />Unlimited templates</li>
                        <li className='flex items-center gap-2'><FcApproval />Priority support</li>
                        <li className='flex items-center gap-2'><FcApproval />Unlimited projects</li>
                    </ul>
                    <button className='w-full btn rounded-full '>Start Pro Trial</button>
                </div>
                <div className='bg-base-200 p-13 rounded-2xl shadow-md'>
                    <p className='text-xl font-bold'>Enterprise</p>
                    <p className='text-stone-500'>For teams and businesses</p>
                    <p className='mt-4 mb-4'><span className='text-4xl font-bold'>$99</span><span className='text-stone-400'>/Month</span></p>
                    <ul className='text-stone-500 mb-10 '>
                        <li className='flex items-center gap-2'><FcApproval />Everything in Pro</li>
                        <li className='flex items-center gap-2'><FcApproval />Team collaboration</li>
                        <li className='flex items-center gap-2'><FcApproval />Custom integrations</li>
                        <li className='flex items-center gap-2'><FcApproval />Dedicated support</li>
                    </ul>
                    <button className='w-full rounded-full btn btn-primary '>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCart;