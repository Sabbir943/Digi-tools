import React from 'react';

const User = () => {
    return (
        <div className='bg-[#4F39F6] mb-20 mt-10'>
            <div className='text-white flex justify-between items-center w-8/12 mx-auto p-8'>
                <div>
                    <p className='text-4xl font-bold mb-3'>50K+</p>
                    <p>Active Users</p>
                </div>
                <div>
                    <p className='text-4xl font-bold mb-3'>200+</p>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <p className='text-4xl font-bold mb-3'>4.9</p>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default User;