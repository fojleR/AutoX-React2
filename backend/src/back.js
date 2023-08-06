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

//----------------------------------- signUp && logIn ------------------
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

//--------------------------------- products ---------------------

// PID: PID,
//             PName: PName,
//             PType: PType,
//             PBrand: PBrand,
//             PPrice: PPrice,
//             url: imageData,
//             PSname: PSname

const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    type: String,
    brand: String,
    price: String,
    url: String,
    store_name: String,
    description: String
  });
  
const Product = mongoose.model('Product', ProductSchema);

app.post("/product", async(req, res) =>{
  try{
      // console.log(req.body.password);
      // console.log(req.body.email);
      const newInfo = Product({
        id: req.body.PID,
        name: req.body.PName,
        type: req.body.PType,
        brand: req.body.PBrand,
        price: req.body.PPrice,
        url: req.body.url,
        store_name: req.body.PSname,
        description: req.body.description
      })
      newInfo.save();
  }catch(err){
      console.log(err);
  }
})

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

//----------------------------- Store list ----------------------

// email: newEmail,
//             storeName: storeName,
//             password: newPassword,
//             division: divName,
//             district: disName,
//             thana: thanaName,
//             url: imageData

const StoreSchema = new mongoose.Schema({
    email: String,
    Store_name: String,
    password: String,
    division: String,
    district: String,
    thana: String,
    url: String
  });
const store_list = mongoose.model('store_list', StoreSchema);

app.post("/storeSignUp", async(req, res) =>{
  try{
      // console.log(req.body.password);
      // console.log(req.body.email);
      const newInfo = store_list({
        email: req.body.email,
        Store_name: req.body.storeName,
        password: req.body.password,
        division: req.body.division,
        district: req.body.district,
        thana: req.body.thana,
        url: req.body.url
      })
      newInfo.save();
  }catch(err){
      console.log(err);
  }
})

app.get('/store', async (req, res) => {
    try {
      const items = await store_list.find();
      //console.log(items);
      res.send(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Error fetching items' });
    }
  });


  //-------------------------------- Order --------------------------

  const OrderSchema = new mongoose.Schema({
    customerEmail: String,
    productName: String,
    productPrice: String,
    quantity: String,
    productUrl: String
  })

  const Order = mongoose.model("Order", OrderSchema);

  app.post("/order", async(req, res) =>{
    try{
        // console.log(req.body.password);
        // console.log(req.body.email);
        const newOrder = Order({
          customerEmail: req.body.customerEmail,
          productName: req.body.productName,
          storeName: req.body.storeName,
          productPrice: req.body.productPrice,
          quantity: req.body.quantity,
          productUrl: req.body.productUrl
        })
        newOrder.save();
    }catch(err){
        console.log(err);
    }
  })

  app.get('/order', async (req, res) => {
    try {
      const items = await Order.find();
      //console.log(items);
      res.send(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Error fetching items' });
    }
  });
  


app.listen(5000, function(){
    console.log("The server is running on port 5000");
})