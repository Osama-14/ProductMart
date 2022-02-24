import './App.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';

import './stylesheets/layout.css'
import './stylesheets/products.css'


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
    <Route path='/' exact element={ <Homepage />} />
    <Route path='/login' exact element={ <Login />} />
    <Route path='/register' exact element={ <Register />} />
    <Route path='/productinfo' exact element={ <ProductInfo />} />
    <Route path='/cart' exact element={ <Cartpage />} />


     </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;
