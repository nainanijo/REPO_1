import React, { useEffect, useState } from 'react'
import axios from "axios"
import Product from './Product.jsx'


const Products = () => {

    const[data,setData]=useState([])
    const productsUrl= "http://localhost:3000/products"
    console.log(productsUrl)
    useEffect(()=>{

        const fetchData=async()=>{
            try{
                const response = await axios.get(productsUrl)
                console.log(response.data.data)
                setData(response.data.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
        
    },[])
  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4' >
        {
            data.map((product)=>(
                <Product
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                   
                    image={product.image}

                />
            )


            
            )

        }


    </div>
  )
}

export default Products
