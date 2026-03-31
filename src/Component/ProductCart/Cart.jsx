import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';
const Cart = ({ cart,selectCart,setSelectCart,count,setCount }) => {
    const[active,setActive]=useState(false);
    const handleBuy=(cart)=>{
      setSelectCart([...selectCart,cart]);
      setActive(true);
      setCount(selectCart.length+1);
      toast.success("Added the cart")
    }
    
    return (
        <div key={cart.idx} >
            <div  className='card bg-base-100 w-96 h-full shadow-xl border border-stone-300  relative'>
                <div>
                    <div className="badge badge-warning absolute right-2 top-2 font-bold hover:cursor-pointer">{cart.tag}</div>
                </div>
                <div className="p-8">

                    <img className='w-8 text-left'
                        src={cart.icon}
                        alt={cart.name} />

                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{cart.name}</h2>
                        <p>{cart.description}</p>
                        <p><span className='text-xl font-bold'>${cart.price}</span><span>/{cart.period}</span></p>
                        <div>
                            {
                                cart.features.map(i => <p className='flex items-center gap-3 '><BsFillArrowRightCircleFill className='text-green-600' /><span className='text-stone-500 text-xl'>{i}</span></p>)
                            }
                        </div>
                        <button onClick={()=>handleBuy(cart)} disabled={active} className={`${active?"bg-green-700 text-white":"bg-[#4F39F6] text-white"} rounded-full text-xl p-3 m-3 font-bold hover:cursor-pointer`}>{active?"Added to Cart":"Buy Now"}</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;