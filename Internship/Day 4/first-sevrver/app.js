const express=require('express')
const products=require('./products')

//console.log("Welcome to the server side!")

//console.log(__dirname)
//console.log(__filename)

// Core Module - 05

//const os=require('os')
//console.log(os.version())
//console.log(os.platform())

//Local Module -math.js
//const{add,subtract} = require('./math')
//let sum= add(20,30)
//console.log(`Sum is ${sum}`)

//local module- greeting.js

//const{greeting} = require('./greeting')
//et name="Anu"
//console.log(greeting(name))

//To start server!//
//const express=require('express')
const app= express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("From my first server")

})

app.listen(port,()=> {
    console.log("Server has started......")
    
})
// /hello
app.get('/hello',(req,res)=>{
    res.send("Hello")

})
// get all products

app.get('/products',(req,res)=>{
    //res.send("From product end point ")
    res.status(200).json(products)

})

//get single products
app.get('/products/:id',(req,res)=>{
   
    try{
        const productID=parseInt(req.params.id)
        
        const pdts=products.find((p=> p.id===productID));
        if(!pdts){
            return res.status(404).json({Error:'Product not found'})
        }
        res.status(200).json(pdts)
    }catch (error) {
        console.error()
        res.status(500).json({Error: error.message})

    }
})

app.listen(port,()=> {
    console.log("Server has started....")
    
})

