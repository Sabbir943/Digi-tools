import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './Component/HeroSection/HeroSection'
import NavBar from './Component/NavBar/NavBar'
import Product from './Component/ProductCart/Product'
import User from './Component/UserSection/User'
  import { ToastContainer, toast } from 'react-toastify';
import GetStarted from './Component/GetStarted/GetStarted'
const productData=async () =>{
  const productFetch=await fetch('productData.json');
  return productFetch.json();
}
function App() {
  const productPromise=productData();
  const [count,setCount]=useState(0);
 return (
    <>
   <NavBar count={count} setCount={setCount}></NavBar>
   <HeroSection></HeroSection>
   <User></User>
   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>

   <Product productPromise={productPromise} count={count} setCount={setCount}></Product>
   </Suspense>

  <GetStarted></GetStarted>
    
 <ToastContainer />
   

    </>
  )
}

export default App
