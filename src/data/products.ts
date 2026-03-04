// This store

// What file of data needs to do is the following:
// - Exports an array of product objects.
// - Uses the Product interface for type safety.
// - Imports a local image file


// TypeScrip Interface Enforcement
// 1. The Product interface ensures every product object
// has the correct shape/structure.

//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   category: string;

// 2. import type
// Product is an interface.
// Interfaces DO NOT exist at run time. 



import type { Product } from "../types/Product";
import hoodie from "../assets/home-hoodie.png";
import shirt from "../assets/t-shirt.jpg"

//export const products

// Breakdown:
// - export means allows other files to import this Variable.
// - const means this array reference will not change.
// - products means variable name.
// - : Product[] this means Type annotation

// Product[] means:
// An array where every item must follow the Product interface.App

// If one object is missing a property, Typscript will show an error.


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
  {
    id: 3,
    name: "White Tee",
    price: 45,
    image: hoodie,
    category: "tshirts",
  },
  {
    id: 4,
    name: "White Tee",
    price: 50,
    image: hoodie,
    category: "tshirts",
  },
  {
    id: 5,
    name: "White Tee",
    price: 50,
    image: hoodie,
    category: "tshirts",
  },
]; 