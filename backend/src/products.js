const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/AutoX").then(function(){
    console.log("Database is connect successfully.");
}).catch(function(err){
    console.log(err);
});


const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    type: String,
    brand: String,
    price: String,
    url: String,
    store_id: String,
  });
  
const Product = mongoose.model('Product', ProductSchema);

app.get('/product', async (req, res) => {
    try {
      const items = await Product.find();
      // console.log(items);
      res.send(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Error fetching items' });
    }
  });


app.listen(5000, function(){
    console.log("The server is running on port 5000");
})