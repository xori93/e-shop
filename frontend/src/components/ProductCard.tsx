// This component Recieives a single product object from a parent Component.
// - Display the product image
// - Display the product name
// - Display the product price

// Props (Parent to Child Coommunication)
// 1. The parent component Catalogue passes a product object down into this component.App

// 2. TypeScript Interface
// We use the Product interface to ensure the object has the correct structure (id, name, price, image, category).

// 3. import type
// The product interface only exists during devlopment. 
// It does NOT exist in the final JavaScript.


import  type { Product } from '../types/Product'
import { useCart } from "../context/useCart";


// // type props
// This will define the structure or shape of the props this component expects. 
// Props must contain:
// product --> which must match the Product interface. 


type Props = 
{
  product:Product
};

// ProductCard component
  // ({product}: Props)


  // Breakdown:

  // - {} means object destructuring 
  // // - product means we extract the product property from props
  // - : means Props which means we tell TypeScript what shape/structure  props follow. 



const ProductCard = ({ product }: Props) => {
  const { dispatch } = useCart();
  return (
    <div className='flex flex-col text-center items-center'>
      <img src={product.image} alt={product.name} className='w-50'/>
      <h2>{product.name}</h2>
      <p>${product.price}</p>

      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: product })
        }
        className='cursor-pointer border-1 py-2 w-[100%] px-2 rounded-full  '
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard