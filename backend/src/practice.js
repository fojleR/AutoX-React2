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


const ImgSchema = new mongoose.Schema({
    name: String,
    url: String
});

const Image = mongoose.model('Image', ImgSchema);

app.post("/practice", async(req, res) =>{
    try{
        console.log(req.body.name);
        console.log(req.body.url);
        const newInfo = Image({
            name: req.body.name,
            url: req.body.url
        })
        newInfo.save();
        console.log("value is updated successfully.")
    }catch(err){
        console.log(err);
    }
})
  
// const Product = mongoose.model('Product', ProductSchema);

app.get('/practice', async (req, res) => {
    try {
      const items = await Image.find();
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