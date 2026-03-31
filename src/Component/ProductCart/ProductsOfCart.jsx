import React, { useState } from 'react';
import noAvailableImg from '../../assets/error.png'
import { toast } from 'react-toastify';
const ProductsOfCart = ({ selectCart, setSelectCart,setCount }) => {
    const total = selectCart.reduce((sum, items) => sum + items.price, 0);
    const handlePay = () => {
        setSelectCart([]);
        setCount(0)
        toast.success("Sucessfully proceed payment")
        
    }
    const handleRemove = (carts) => {
        const filteredCart = selectCart.filter(items => items.name != carts.name)
        setSelectCart(filteredCart);
      
        setCount(filteredCart.length)
          toast.error("Remove item from the card ")
    }

    return (
        <div>
            <div className='w-10/12 mx-auto border-2 border-stone-300 p-5 rounded-2xl mb-20'>
                <p className='text-2xl font-bold mb-4'>Your Cart</p>



                {
                    selectCart.length === 0 ? <div className='text-center'><p className='text-xl text-stone-400'>No Available Cart</p>
                    <img className='w-40 mx-auto' src={noAvailableImg} alt="" /></div> : selectCart.map(carts => (
                        <div className='flex justify-between items-center  bg-base-300 p-4 rounded-2xl mb-3 '>
                            <div className='flex  items-center gap-3 '>
                                <div className=''>
                                    <img className='w-7 ' src={carts.icon} alt={carts.name} />
                                </div>
                                <div>
                                    <p className='font-bold text-md'>{carts.name}</p>
                                    <p className='font-semibold'>${carts.price}</p>
                                </div>
                            </div>
                            <div className='hover:cursor-pointer' onClick={() => handleRemove(carts)}>
                                <p className='text-red-700 font bold'>Remove</p>
                            </div>
                        </div>
                    ))
                }
                {
                    selectCart.length === 0 ? "" : <div>  <div className='flex justify-between items-center'>
                        <p className='text-xl text-stone-400'>total</p>
                        <p className='text-2xl font-bold'>{total.toFixed(2)}$</p>
                    </div>
                        <div onClick={handlePay}>
                            <button className='hover:cursor-pointer btn btn-primary w-full rounded-full p-5 m-4 text-xl font-bold'>Proceed to Checkout</button>
                        </div></div>
                }
            </div>
        </div>
    );
};

export default ProductsOfCart;