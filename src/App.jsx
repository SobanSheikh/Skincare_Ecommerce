import {
  CustomerReviews, Footer, Subscribe, SpecialOffer,
  SuperQuality, Services, Hero, PopularProdcuts} 
  from "./sections"
import Nav from "./components/Nav"
import Cart from "./components/Cart"

import { useState } from "react"
import Product_Details from "./components/Product_Details"


const App = () => {
  const [cartOpen, setcartOpen] = useState(false);
  

  



  

  const toggleCart = () => {
    setcartOpen(!cartOpen);
  };
 

  //for product details blur effect
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
<div >
    <main className='relative'>
    
      <Nav cartCheck={toggleCart}/>

      
      
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>

      </section>
      <section className="padding">
        <PopularProdcuts  showDetails1={showDetails} handleClick1={handleClick}/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
    <Cart cartView={cartOpen} changeCartView={toggleCart}   />
    
    </div>
    
  )
}

export default App
