import React from 'react'
import { useState,useEffect } from 'react';
import { useCart } from './CartContext';
const Cart = ({ cartView, changeCartView, }) => {

    const [quatityCount, setquatityCount] = useState(1);
    const {cartItems, removeFromCart, increaseQuantity, decreaseQuantity} = useCart();
    

    const handleClickAdd =()=>{
        setquatityCount(quatityCount+1)
    }

    const handleClickMinus =()=>{
        if (quatityCount>1)
        {
            setquatityCount(quatityCount-1)
        }
        
    }

    useEffect(() => {
        // Update render key to force re-render when cart items change
      }, [cartItems]);
    
    const totalPrice = cartItems.reduce((total, item) => {
        if (item.price) {
            // Remove the "$" sign and parse the price to a float
            if (!isNaN(item.price)) {
                return total + (item.price*item.quantity);
            }
        }
        return total;
    }, 0);
    return (
        <div className={`flex ml-6 mt-6 rounded-lg  fixed top-0 right-0 z-50  ${cartView ? 'block' : 'hidden'} 
     flex-col max-h-[435px] w-[360px] p-2 gap-3
     bg-gray-100 border-gray-300 border shadow-lg  `}>
            <div className='flex flex-row justify-between '>
                <div className='font-bold font-montserrat'>Shopping Cart</div>
                <div onClick={() => changeCartView()} className='cursor-pointer transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-150 ...'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-0.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>
            <hr className='border-gray-600' />
            <div className='flex flex-col max-h-[240px] gap-1 overflow-y-auto shrink'>

                {cartItems && cartItems.map((prod, index) => (

                    <div key={index} className='flex  p-1 bg-gray-200 rounded-md min-h-[115px] '>
                        <div className='flex flex-row justify-between  w-full'>
                            <div className=' flex m-2 mt-2.5 h-[90px] rounded-md overflow-hidden justify-center
                    w-[100px] '>
                                <img src={prod.imageUrl}

                                    className='w-full'
                                />
                            </div>
                            <div className='flex flex-col gap-1
                      flex-1 m-1.5'>
                                <div className='flex flex-row 
                        text-[14px]
                        font-palanquin  justify-between '>
                                    <div className='flex 
                             text-wrap mt-1  w-[130px] text-[13px]
                             mr-1  '>
                                        {prod.name}
                                    </div>
                                    <span className='font-semibold'>{prod.price && prod.price*prod.quantity}</span>
                                </div>

                                <span className='text-[12px] ml-1 text-gray-500'> {prod.product_num_offers}</span>

                                <div className='flex flex-row justify-between mt-1 text-[13px]'>
                                    <span className=''>
                                        Quantity {prod.quantity}</span>
                                    <div className='flex  gap-2'>
                                        <div onClick={()=>increaseQuantity(prod.id)} className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </div>
                                        <div onClick={()=>decreaseQuantity(prod.id)} className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                            </svg>
                                        </div>



                                    </div>




                                </div>
                                <div className='flex gap-1 mt-2 text-[13px]'>
                                    
                                    remove
                                    <div onClick={() => removeFromCart(prod.id)} className='cursor-pointer transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-150 ...'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                                            <path className='hover:fill-coral-red' stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0 " />
                                        </svg>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>





                ))}







            </div >

            <hr className='border-gray-400' />


            <div className='flex flex-row ml-1 mr-1
            justify-between text-[12px] font-montserrat text-gray-600'>
                <div className='flex flex-col'>
                    <span>Subtotal</span>
                    <span>Shipping</span>
                    <span>Tax</span>
                </div>

                <div className='flex flex-col'>
                    <span> ${totalPrice}</span>
                    <span>{totalPrice ? '$20' : '$0'}</span>
                    <span>{totalPrice ? '$1.00' : '$0'}</span>

                </div>


            </div>
            <hr className='border-gray-400' />
            <div className='flex flex-row font-semibold ml-1 mr-3 justify-between'>
                <span>Total</span>
                <span>${totalPrice && totalPrice + 21}</span>

            </div>
            <div className='flex ml-1 mr-3 justify-center'>
                <div onClick={() => { }} className='bg-coral-red rounded-full p-1
                 cursor-pointer hover:bg-red-600 
                 text-white text-[14px]'>CheckOut</div>

            </div>



        </div>
    )
}

export default Cart