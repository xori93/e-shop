import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Link      } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-around  py-8'>
      <h1 className='text-5xl'>Shop</h1>
      <ul className='flex justify-center gap-5 text-2xl curser-pointer'>
        <li>
          <Link to="/">Home</Link></li>
        <li><Link to="/catalogue">Catalogue</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ShoppingCart />
    </div>
  )
}

export default Nav