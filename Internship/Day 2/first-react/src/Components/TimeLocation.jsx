import App from "../App"

function TimeLocation(props){
    const date=new Date().toDateString()

    let greeting="";
    const time=props.time;
    if (time<12){
        greeting="Morning";
    }
    else if (time<=12 && time<=14){
        greeting="Afternoon";     
    }
    else{
        greeting="Evening";
    }


    return(
        <>
        
        <div className="p-4 m-2 border-solid text-center   ">
        <h3 className=" ">Welcome to Day 2 of Summer Internship Program</h3>
        <p className="p-2 m-2 bg-cyan-300 ">Today's date is{props.date}</p>
        <h2>Good {greeting} class! - Message from{props.loc}</h2>

            
        </div>
        </>
    )
    }
 
    export default TimeLocation
