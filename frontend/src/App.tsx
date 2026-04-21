import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Catalogue from './pages/Catalogue'
import Contact from './pages/Contact'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
// import Input from './components/Input'
// import Button from './components/Button'

function App() {
  // async function fetchData(endpoint) {
  //   const res = await fetch(`http://localhost:3000/${endpoint}`);
  //   const data = res.json();
  //   console.log(data)
  // }

 

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/catalogue' element={<Catalogue />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App
