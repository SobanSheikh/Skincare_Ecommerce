import React from 'react'

const ShoeCard = ({imageUrl, changeBigShoeImage
,bigShoeImg}) => {

    const handleClick=()=>{
        if(bigShoeImg!== imageUrl.imageUrl){
            changeBigShoeImage(imageUrl.imageUrl)
        }
    }
  return (
    <div className=
    {`border-2 rounded-xl
    ${bigShoeImg===imageUrl.imageUrl
        ? 'border-coral-red'
        : 'border-transparent'
    
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
        <div className='flex justify-center
        items-center bg-card bg-center bg-cover
        sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img
            src={imageUrl.imageUrl}
            alt='shoe collection'
            height={103}
            width={127}
            className="object-contain" />
        </div>

    </div>
  )
}

export default ShoeCard