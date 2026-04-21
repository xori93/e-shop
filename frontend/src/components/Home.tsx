import { div } from "framer-motion/client";
import hoodie from "../assets/home-hoodie.png";
import { products } from "../data/products";
import { Link } from "react-router-dom";

// import { Carousel } from "flowbite-react";
// import { Divide } from './../../node_modules/hamburger-react/dist-esm/Divide';

const Home = () => {

  const firstProduct = products[0];
  return (
    <div className="bg-stone-200 min-h-screen flex justify-center items-center content-center">
       <div className="flex flex-col text-center text-xl ">
      <img
        src={hoodie}
        alt="Hoodie"
        className=" transform-3d rotate-y-180 animate-spin w-100 h-100"
      />

<div className="p-4 rounded-lg hover:bg-stone-100"> 
      <Link to={`/products/${firstProduct.id}`}><h2 className="font-bold text-xl text-stone-800">{firstProduct.name}</h2></Link>
      <p className="text-amber-700 font-semibold">${firstProduct.price}</p>
</div>
  
        </div> 
    </div>
  );
};

export default Home;

    // <div className="flex mt-20 justify-around items-center text-center shadow-md cursor-poiner">
    //     {/* // Show first 6 products/images */}
    //     {products.slice(0, 6).map((product) => (
    //       <div key={product.id}>
    //         {/* <ProductCard product={product}  /> */}
    //       </div>
    //     ))}
    //   </div>