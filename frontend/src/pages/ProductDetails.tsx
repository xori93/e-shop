import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 


const cartContext = useContext(CartContext)
if (!cartContext){
  throw new Error ("CartContext must be in CartProvider")
}
 const { dispatch } = cartContext

const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
    navigate("/cart");
  };

  return (
    // product detail
    //item
    //price
    //add button
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-contain mx-auto"
        />

        <h2 className="font-bold mt-4 text-4xl">{product.name}</h2>
        <div className="flex flex-col gap-3 text-center mt-8">
          <h3 className="font-semi-bold text-2xl">Description</h3>
          <p className="text-gray-500 text-xl w-[50%] text-center m-auto">
            {product.description}
          </p>
          <p className="text-amber-700 text-xl font-semibold mt-2">
            ${product.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-gray-600 text-white rounded-sm p-2 w-50 m-auto cursor-pointer hover:bg-gray-500"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
