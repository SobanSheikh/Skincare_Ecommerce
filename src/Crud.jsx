import React from 'react'
import { bigShoe1, customer1 } from './assets/images'
import CrudCard from './CrudCard'
import { useState, useEffect } from 'react'
import Cart from './Cart'


import axios from 'axios';

const Crud = () => {


  const [movie, setmovie] = useState([])
  const [mainMovie, setmainMovie] = useState([])
  const [cartItems, setcartItems] = useState([])
  const options = {
    method: 'GET',
    url: 'https://real-time-product-search.p.rapidapi.com/search',
    params: {
      q: 'Nike shoes',
      country: 'us',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd46ce10e16mshbc316b6599a60fep1b489fjsnf7813c117cc3',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
  };
  
  
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setmovie(response.data.data);
      setmainMovie(response.data.data);

      console.log(response.data)

    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };


  useEffect(() => {


    fetchData();
  }, []);

  const handleDelete = (url) => {

    const state = movie.filter(mov => mov.img !== url);
    setmovie(state)

  }

  const addCartItems = (product) => {

    setcartItems([...cartItems,product])

  }

  const deleteCartItems =(id)=>{
    const state = cartItems.filter(mov => mov.product_id !== id);
    setcartItems(state)

  }

  const handleAdd = () => {
    // Assuming each item has an 'image' property
    const firstNewImage = mainMovie.find(item => !movie.some(existingItem => existingItem.img === item.img));

    if (firstNewImage) {
      setmovie(prevItems => [...prevItems, firstNewImage]);

    }

  }





  return (
    <div className='flex p-12 '>
      
      <div className='flex ml-4 w-full flex-wrap gap-8  '>
        {movie && movie.map((mov, index) => (
          <CrudCard key={index}

            product ={mov}
            deleteImg={handleDelete}
            addImg={addCartItems}

          />
        ))}

        <div className='flex justify-center  items-center  w-[200px] h-[200px]  
          mt-16  bg-gray-200 rounded-xl shadow-lg drop-shadow-lg  border-gray-600 '>
            <div className='cursor-pointer transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-150 ...' 
            onClick={()=>handleAdd()}>
          <svg width={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path   stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          </div>
        </div>


      </div>
      <div className='absolute top-0 right-0'>
      <Cart
       product ={cartItems} 
       deleteCart ={deleteCartItems}
       />
      </div>
    </div>
  )
}

export default Crud