import './App.css'

import Home from './Pages/Home.jsx'
import Products from './Components/Products.jsx'
import AddProduct from './Components/AddProduct.jsx'



import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'


function App(){

  return(
    // Fragments
    
      <BrowserRouter>
        <nav className='bg-blue-300 shadow-lg text-white' >
        <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 max=wl=7' >
          <ul className='flex justify-around gap-3 py-4'>
            <li>
              <NavLink to= '/'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/AddProducts">Addproducts</NavLink>
            </li>

            <li>
              <NavLink to="/Products"> Products</NavLink>
            </li>

          </ul>
        </div>

        </nav>
        <Routes>
          <Route path= '/' element={<Home/>}  />
          <Route path= '/AddProduct' element={<AddProduct/>}  />
          <Route path= '/Products' element={<Products/>}  />;
        </Routes>
          
    

      </BrowserRouter>
    

    
    
  )

}

export default App