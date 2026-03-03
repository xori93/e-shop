import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Catalogue from './pages/Catalogue'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </>
  )
}

export default App
