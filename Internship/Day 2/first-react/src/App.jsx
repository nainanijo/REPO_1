import './App.css'
import Profile from'./components/Profile'
import UserBadge from './Components/UserBadge'
import TimeLocation from '/Components/TimeLocation'

function App(){

  return (
    //fragments
    <>
    
    {/*<h1>Welcome to React</h1>
   <p>Hello</p>*/}
    <Profile/>
    <div className='flex justify-center items-center gap-6 flex-wrap py-8'>
    <UserBadge name="Alice" role ="Developer" />
    <UserBadge name="Vivien" role="Designer" />
   
  </div>
  <div className=''>
    <TimeLocation time="12" location= "Kottayam"></TimeLocation>
    <TimeLocation time="13" location="Kochi"></TimeLocation>

  </div>
   </>
)
}

export default App