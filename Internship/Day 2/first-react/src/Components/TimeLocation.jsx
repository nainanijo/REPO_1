import App from "../App"

function TimeLocation(props){
    const date=new Date().toDateString()


    return(
        <>
        
        <div className="p-4 m-2 border-solid text-center   ">
        <h3 className=" ">Welcome to Day 2 of Summer Internship Program</h3>
        <p className="p-2 m-2 bg-cyan-300 ">Today's date is{props.date}</p>
        <h2></h2>




            
        </div>
        </>
    )
    }