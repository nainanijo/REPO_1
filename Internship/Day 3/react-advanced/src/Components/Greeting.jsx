import './Greeting.css'
import reactLogo from '../assets/react.svg'

function Greeting({city}){

    const date = new Date().toDateString()
    let message;
    const time =new Date().getHours()

    if(time<12){
        message="Morning"
        
    }
    else if(time<16){
        message="Afternoon"
     }
    else{

        message="Evening"
     }
     const handleClick=()=>{
        console.log("You clicked a button")
     }

     return(
       <>
       <div id="header" className='text-center bg-blue-300 flex flex-col items-center justify-center p-10 rounded-xl shadow mx-auto'>
        <h2>Welcome to Day 2 of Summer Internship program</h2>
        <h3 className='head'  >Today's date is {date}</h3>
        <h3>Good {message} class!- Message from {city}</h3>
        <button onClick={handleClick} className='px-4 py-2 shadow bg-pink-400 rounded hover:bg-pink-300 '>
            Click Me!

        </button>
    
        <button onClick={() => alert("hello")} className='shadow bg-red-800 rounded hover:bg-rose-700 px-4 py-2'> 
            ALERT ME! 
            </button> 
        </div>
        <img src={reactLogo} alt="React Logo" 
         className='w-16 h-16 rounded-full mx-auto mb-2'/> 
        </>
    );
        

}






export default Greeting
