import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section 
    className='max-contaner'>
      <h3 className='font-palanquin 
      text-center text-4xl font-bold'>
      Meet Our  <span className='text-coral-red '>
        Team</span> 
      </h3>
      <p className='info-text m-auto mt-4
      max-w-lg text-center'>Hearing genuine stories from our satisified customers
      </p>
      <div
      className='mt-24 flex flex-1 
      justify-evenly items-center
       max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewCard key=
          {review.customerName}
          imgURL ={review.imgURL}
          customerName ={review.customerName}
          rating ={review.rating}
          feedback ={review.feedback}
           />
        ))}

      </div>

    </section>
  )
}

export default CustomerReviews