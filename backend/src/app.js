import express from "express";
import cors from "cors";
import products from "./database/clothes.js";
const app = express();
app.use(cors());
app.use("/assets", express.static("public/assets"));

app.get("/", (req, res) => {
  res.send({ msg: "This is coming from the backend" });
});

app.get("/products", (req, res) => {
  console.log(products);

  res.send(products);
});

export default app;

// built in express
//Express.js → helps you create a server easily
//cors → allows your frontend (React) to talk to your backend
//initialize our express application
//so basically creating the server
//cors middleware so its just a function that runs
//Middleware = a function that runs before your route
// app.use(express.json());

// app.get → you're creating a GET route
// "/shirt" → the endpoint (URL)
// (req, res) → request & response objects
// “When someone visits /shirt, send them shirt data”
// app.get("/shirt", (req, res)=>{
//   const shirt = {id: 0, name: "T-shirt", price: 30, description: "blah hlad"}
//   res.send(shirt);
// })
