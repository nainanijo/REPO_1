import '/.Greeting.css'

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

        return(
       <>
        <h2>Welcome to Day 2 of Summer Internship program</h2>
        <h3 className='head'>Today's date is {date}</h3>
        <h3>Good {message} class!- Message from {city}</h3>
       
        </>
    )
}

export default Greeting