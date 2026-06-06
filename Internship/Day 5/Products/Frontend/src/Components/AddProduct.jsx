import React from 'react'
import { useForm } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {

        const isEditMode = false
        const {register,handleSubmit,reset,setValue}=useForm()
        const navigate = useNavigate()
        
        
       const onSubmit = async (data) => {
    try {

      console.log(data)
      const url = isEditMode
      ? 'http://localhost:3000/products/${id}'
      : "http://localhost:3000/products";
      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // sending form values to backend
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      alert(isEditMode ? "Product Updated!" : "Product Added!");
      reset();
      navigate('/products') 

    } catch(error) {
      console.error(error);
      alert("Error adding product");
    }
  };


  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'> AddProduct
        <form className='bg-white p-6 rounded-lg shadow-md w-96 space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-xl font-semibold text-center'></h2>
            {isEditMode? "Edit Product":"Add Product"}
            <input 
                {...register("name")} 
                placeholder='Product Name'
                className='w-full border p-2 rounded' />
            <input 
                {...register("price")}
                placeholder='Price'
                className='w-full border p-2 rounded' />
            <input 
                {...register("description")} 
                placeholder='Description'
                className='w-full border p-2 rounded'   />

            <input
                {...register("image")}
                placeholder='Image'
                className='w-full border p-2 rounded'   />

            <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2-rounded'>
                {isEditMode? "Update Product":"Add Product"}

            </button>
        </form>
    </div>
  )
}

export default AddProduct