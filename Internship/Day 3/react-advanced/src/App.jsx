import './App.css'
import Greeting from './Components/Greeting.jsx'
import Counter from './Components/Counter.jsx'
import Toggle from './Components/Toggle.jsx'
import Home from './Pages/Home.jsx'
import Products from './Components/Products.jsx'



import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'


function App(){

  return(
    // Fragments
    
      <BrowserRouter>
        <nav className='bg-blue-300 shadow-lg' text-white >
        <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 max=wl=7' >
          <ul className='flex justify-around gap-3 py-4'>
            <li>
              <NavLink to= '/'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="/toggle">Toggle</NavLink>
            </li>
            <li>
              <NavLink to="/Greetings"> Greetings</NavLink>
            </li>
            <li>
              <NavLink to="/Products"> Products</NavLink>
            </li>

          </ul>
        </div>

        </nav>
        <Routes>
          <Route path= '/' element element={<Home/>}  />
          <Route path= '/counter' counter element={<Counter/>}  />
          <Route path= '/toggle' toggle element={<Toggle/>}  />
          <Route path= '/Greetings' greeting element={<Greeting/>}  />
          <Route path= '/Products' product element={<Products/>}  />;
        </Routes>
          
    

      </BrowserRouter>
    

    
    
  )

}

export default App