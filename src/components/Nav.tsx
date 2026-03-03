import React from 'react'
import { ShoppingCart } from 'lucide-react';

const Nav = () => {
  return (
    <div className='flex justify-around  py-8'>
      <h1 className='text-5xl'>Shop</h1>
      <ul className='flex justify-center gap-5 text-2xl curser-pointer'>
        <li>Home</li>
        <li>Catalogue</li>
        <li>Contact</li>
      </ul>
      <ShoppingCart />
    </div>
  )
}

export default Nav