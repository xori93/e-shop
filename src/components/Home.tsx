import React from 'react'
import { Shirt } from 'lucide-react';
import hoodie from '../assets/home-hoodie.png'

const Home = () => {
  return (
    <div className='flex justify-center items-center screen-min'>
      <Shirt  />
      <img src={hoodie} alt="Hoodie" className=' transform-3d rotate-y-180 animate-spin' />
    </div>
  )
}

export default Home