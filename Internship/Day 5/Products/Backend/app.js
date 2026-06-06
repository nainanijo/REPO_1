const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Product = require('./Models/productSchema')

const app = express()
//required for all applitcation
app.use(express.json())
app.use(cors())

//access env values
require('dotenv').config()
//connect to MongoDB
const dbUrl = process.env.MONGODBURL;
async function main(){
    await mongoose.connect(dbUrl) 

}

main()
.then(()=> console.log("DB Connected"))
.catch(err=> console.log(err));

app.get('/',(req,res)=>{
    res.send("Hello")
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server has started....")
})

//To create product
app.post('/products',async(req,res)=>{
    try{console.log(req.body)
        const{name,price,description,image}=req.body
        const product = new Product({name,price,description,image})
        await product.save()
        res.status(201).json({message:"Product added", data:product})
     }catch(error) {
            console.error(error)} 
        })

        
//to get products
app.get('/products',async(req,res) => {
    try{
        const products = await Product.find()
        res.status(200).json({message:"Product Details Received",data:products})

    }catch(error){
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

//edit a product

app.patch('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const productId=req.params.id
        const product = await Product.findByIdAndUpdate(productId,req.body,{new:true})
        res.status(200).json({message:"Product Updated",updatedProduct:product})

    }catch(error) {
        console.lof(error)
        res.status(500).json({error:error.message})
    }
})

app.delete('/products/:id',async(req,res)=>{
    try{
        const productId=req.params.id
        const product=await Product.findByIdAndDelete(productId)
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
    
        else{
        res.status(200).json({message:"Product deleted"})
        }
    }   catch (error){
        console.log(error)
        res.status(500).json({erro:error.message})
    }
})

//to get a single product
app.get('/products/:id',async(req,res)=> {
    try{
        const productId=req.params.idconst product=await Product.findById(productId)
    }
})