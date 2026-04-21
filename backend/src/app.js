// built in express 
//Express.js → helps you create a server easily
import express from "express";
//cors → allows your frontend (React) to talk to your backend
import cors from "cors";
import products from "./database/clothes.js"
//initialize our express application
//so basically creating the server
const app = express();
//cors middleware so its just a function that runs
//Middleware = a function that runs before your route
app.use(cors());
// app.use(express.json());

// app.get → you're creating a GET route
// "/shirt" → the endpoint (URL)
// (req, res) → request & response objects
// “When someone visits /shirt, send them shirt data”
// app.get("/shirt", (req, res)=>{
//   const shirt = {id: 0, name: "T-shirt", price: 30, description: "blah hlad"}
//   res.send(shirt);
// })

app.get("/products", (req, res) => {  
//   //return this object when you get this endpoint
  // sending a response
  res.send(products)
})

export default app;