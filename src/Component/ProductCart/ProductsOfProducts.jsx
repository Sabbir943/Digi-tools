import React from 'react';
import Cart from './Cart';

const ProductsOfProducts = ({productCart ,selectCart,setSelectCart,count,setCount}) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5 mb-20 '>
           {
             productCart.map((cart,idx)=><Cart cart={cart} selectCart={selectCart} setSelectCart={setSelectCart} count={count} setCount={setCount} idx={idx}></Cart>)
           } 
        </div>
    );
};

export default ProductsOfProducts;