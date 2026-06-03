import React from 'react'
import {useState} from 'react'

const Toggle=() =>{
    const[isLoggedIn,setIsLoggedIn]= useState(true)


    //create isLoggedIn  initial value-true


    return(
        <div className='text-center'>
            {/*turnery operator*/}
            <h2> 
                {isLoggedIn? "Welcome Back User!": "Please Login"}
                
            </h2>

            {
                isLoggedIn &&
                <p>You have new notifications</p>
            }
            
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)} className='shadow bg-red-500 rounded hover:bg-rose-600 px-4 py-2'>
                {isLoggedIn? "Log Out." : "Log in."}
                
            </button>

        </div>
    )
}

export default Toggle