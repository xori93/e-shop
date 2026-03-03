import { Product } from "../types/Product";
import hoodie from "../assets/home-hoodie.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Black Hoodie",
    price: 60,
    image: hoodie,
    category: "hoodies",
  },
  {
    id: 2,
    name: "White Tee",
    price: 35,
    image: hoodie,
    category: "tshirts",
  },
];