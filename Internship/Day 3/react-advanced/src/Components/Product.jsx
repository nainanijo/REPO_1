import React from 'react'

const Product = ({title,description,price,image}) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-x1 transition'>
        <img src={image} alt={title} className='w-full h-40 object-cover' />


        <div className='p-4'>
            <h2 className='text-lg font-bold text-purple-700'>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>


    </div>
  )
}

export default Product