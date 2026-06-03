import './App.css'
import Greeting from './Components/Greeting.jsx'
import Counter from './Components/Counter.jsx'
import Toggle from './Components/Toggle.jsx'

function App(){

return(
  // Fragments
  <>
     {/* <h1>Welcome to React</h1>
    <p>Hello</p> */}
    <Greeting city="Bangalore"/>
    <Counter/>
    <Toggle/>

    
  </>
)

}

export default App