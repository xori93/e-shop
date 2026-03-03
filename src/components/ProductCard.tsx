import React from 'react'
import { Product } from '../types/Product'

typed Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  )
}

export default ProductCard