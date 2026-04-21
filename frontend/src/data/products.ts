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
    name: "Black Essential Hoodie",
    price: 60,
    image: hoodie,
    category: "hoodies",
    description:
      "A premium black hoodie made from soft cotton blend fabric. Designed for everyday comfort with a relaxed fit and durable stitching.",
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: 40,
    image: hoodie,
    category: "tshirts",
    description:
      "A clean and minimal white t-shirt made from breathable cotton. Perfect for layering or wearing on its own.",
  },
  {
    id: 3,
    name: "Oversized Street Tee",
    price: 80,
    image: hoodie,
    category: "tshirts",
    description:
      "A modern oversized t-shirt with a streetwear vibe. Features a relaxed fit and soft fabric for all-day comfort.",
  },
  {
    id: 4,
    name: "Premium Heavyweight Tee",
    price: 60,
    image: hoodie,
    category: "tshirts",
    description:
      "A durable heavyweight t-shirt built for structure and style. Holds its shape while giving a premium feel.",
  },
  {
    id: 5,
    name: "Graphic Print Tee",
    price: 70,
    image: hoodie,
    category: "tshirts",
    description:
      "A bold graphic t-shirt designed to stand out. Made with high-quality print and soft cotton fabric.",
  },
]; 