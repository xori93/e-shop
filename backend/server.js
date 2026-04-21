import app from "./src/app.js";
import "dotenv/config";


// app.get("/", (req, res) => {
// res.send("Hello, Xori");
// });

// app.get("/product", (req, res) => {
//   // creates a product object
//   const product = { 
//     id: 0,
//     name: "Black Essential Hoodie",
//     price: 60,
//     // image: hoodie,
//     category: "hoodies",
//     description:
//       "A premium black hoodie made from soft cotton blend fabric. Designed for everyday comfort with a relaxed fit and durable stitching.",
//   }
//   // res.send(product)
//   res.send("hello world")
// })





//creates the serve and opens up a port like local host
// console. log shows up in the terminal

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {console.log(`server running ${PORT}`);})


//endpoint |  params |  query
//amazon.com/category/shoes/children?limit=151

//THESE ARE CALL C=reate R=ead U=update D=elete OPERATION
// GET (read)
//POST (create)
//DELETE
//UPDATE

// What they mean:
// Method	        What it does	          Example

// GET	          Read data	              get products
// POST	          Create data	            add product
// PUT	          Update data	            edit product
// DELETE	        Remove data	            delete product