// Goal:

// - Show a list of products.
// - Map over an array.
// - Props by passing each product into <ProductCard/>
// - Use useState by tracking a selected category filter.


// Main Idea:
// Catalogue is the "Parrent" component.
// ProductCard is the "Child" component.
// Parent aka Catalogue passes data to the child aka ProductCard component using props.App



import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useState } from 'react'
import  type { Product } from '../types/Product'

const Catalogue = () => {

  // useState:
  // We store the users current category choice.
  // When this changes, React re-renders the UI automatically.
  
  const [selectedCategory, setSelectedCategory] = useState<String>("all")
  // Filter logic
  // - If "all", we show everything.
  // - Otherwise, only show the products that match the selected selectedCategory.
  
  const filterProducts = 
  selectedCategory === "all" 
  ? products 
  : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* <h1>Catalogue</h1> */}

      <label>
        Category: {" "}
        <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="hodies">Hoodies</option>
          <option value="tshirts">T-Shirts</option>
        </select>
      </label>
      
    
      {filterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default Catalogue