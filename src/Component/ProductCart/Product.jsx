import React, { use, useState } from 'react';
import ProductsOfProducts from './ProductsOfProducts';
import ProductsOfCart from './ProductsOfCart';

const Product = ({ productPromise,count,setCount }) => {
    const productCart = use(productPromise);
    const[tab,setTab]=useState('product');
    const[selectCart,setSelectCart]=useState([]);
    console.log(productCart);
    return (
        <div>
            <div className='text-center'>
                <p className='text-4xl font-bold mb-3'>Premium Digital Tools</p>
                <p className='text-stone-400 mb-10'>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
            </div>
            <div className='mb-10 flex justify-center items-center gap-3 '>
               <button onClick={()=>setTab('product')} className={`${tab==='product'?"bg-blue-400":""} btn text-xl rounded-full px-8 py-5  `} >product</button>
               <button onClick={()=>setTab('cart')} className={`${tab==='cart'?"bg-blue-400":""} btn text-xl rounded-full px-8 py-5  `}>cart({selectCart.length})</button>
            </div>
            {
                tab==='product'?<ProductsOfProducts productCart={productCart} selectCart={selectCart} setSelectCart={setSelectCart} count={count} setCount={setCount}></ProductsOfProducts>:
                <ProductsOfCart selectCart={selectCart} setSelectCart={setSelectCart} count={count} setCount={setCount}></ProductsOfCart>
            }


        </div>
    );
};

export default Product;