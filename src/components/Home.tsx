import { Shirt } from "lucide-react";
import hoodie from "../assets/home-hoodie.png";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
// import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div >
      <div className="flex justify-center items-center min-h-screen">
        {/* <Shirt /> */}
      <img
        src={hoodie}
        alt="Hoodie"
        className=" transform-3d rotate-y-180 animate-spin w-100 h-100"
      />
      </div>
      <div className="flex mt-20 justify-around items-center text-center shadow-md cursor-poiner">
        {/* // Show first 6 products/images */}
        {products.slice(0, 6).map((product) => (
          <div key={product.id}>
            <ProductCard product={product}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
