import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useState } from 'react'

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  return (
    <div>
      <h1>Catalogue</h1>
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Catalogue