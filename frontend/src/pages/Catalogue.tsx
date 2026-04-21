// Goal:

// - Show a list of products.
// - Map over an array.
// - Props by passing each product into <ProductCard/>
// - Use useState by tracking a selected category filter.

// Main Idea:
// Catalogue is the "Parrent" component.
// ProductCard is the "Child" component.
// Parent aka Catalogue passes data to the child aka ProductCard component using props.App

import ProductCard from "../components/ProductCard";
// import { products } from "../data/products";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Catalogue = () => {
  // useState:
  // We store the users current category choice.
  // When this changes, React re-renders the UI automatically.
const [selectedCategory, setSelectedCategory] = useState<string>("all");
const [products, setProducts] = useState<Product[]>([]);



useEffect(()=> {
  const getData = async () => {
  const res = await fetch(`http://localhost:5000/products`);
    const data = await res.json();
    console.log("returing data")
    console.log(data)
    setProducts(data)
  }
  //I want  to get all of the product data.
  getData()
}, [])


  

  
  // Filter logic
  // - If "all", we show everything.
  // - Otherwise, only show the products that match the selected selectedCategory.

  const filterProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-6 bg-stone-200">
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg font-semibold mb-2">Category:</label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow-sm"
        >
          <option value="all">All</option>
          <option value="hoodies">Hoodies</option>
          <option value="tshirts">T-Shirts</option>
        </select>
      </div>

      {/*  PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center cursor-pointer ">
        {filterProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`} className="hover:bg-stone-300 rounded-md p-5 shadow-sm">
            <ProductCard  product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
