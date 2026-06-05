const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
//required for all applitcation
app.use(express.json())

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

        
