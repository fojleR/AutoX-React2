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


const signUpSchema = new mongoose.Schema({
    email: String,
    password: String
})

const storeSchema = new mongoose.Schema({
    store_name: String,
    district: String,
    thana: String,
    area: String,
    items: [{
      id: String,
      name: String,
      type: String,
      brand: String,
      price: String,
      url: String,
    }],
  });
  
  const Store = mongoose.model('Store', storeSchema, 'store_list');
  app.get('/api/stores', async (req, res) => {
    try {
      // Fetch all documents from the "store_list" collection
      const stores = await Store.find();
      stores.map(store=>{
        console.log(store.items);
      })
  
      // Send the fetched data as the response
      res.json(stores);
    } catch (error) {
      // Handle any errors that occur during the database operation
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


const User = mongoose.model("User", signUpSchema);

app.post("/signUp", async(req, res) =>{
    try{
        console.log(req.body.password);
        console.log(req.body.email);
        const newInfo = User({
            email: req.body.email,
            password: req.body.password
        })
        newInfo.save();
    }catch(err){
        console.log(err);
    }
})
app.get("/logIn", async(req, res)=>{
    try{
        const userData = await User.find();
        res.send(userData);
        //console.log(userData);
    }catch(err){
        console.log(err);
    }
});

app.get("/store", async(req, res)=>{
    try {
        // Fetch all documents from the "store_list" collection
        const stores = await Store.find();
    
        // Send the fetched data as the response
        //res.json(stores);
        res.send(stores);
      } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(500).json({ error: 'Internal Server Error' });
      }
});


app.listen(5000, function(){
    console.log("The server is running on port 5000");
})