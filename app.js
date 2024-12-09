const express=require('express')
const mongoose=require('mongoose')
const productRouter=require('./routers/productRouter')
const userRouter=require('./routers/userRouter')
const jwt=require('jsonwebtoken')
const cors=require('cors')
require('dotenv').config()

const app=express()
const port=3001
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello")

})
//app.use(express.json())

app.post('/login',(req,res)=>{
    //Authenticate

    //Token creation
  //  const username =req.body.username
    //const user={name:username}

    //const secretKey=process.env.JWT_SECRET_KEY
    //const token=jwt.sign(user,secretKey)
    //res.json({accesstoken:token})
    
})
app.use('/products',productRouter)
app.use('/users',userRouter)

async function main(){
    await mongoose.connect('mongodb+srv://gowribalan123:Indiaismy%40123@cluster0.tv1a7.mongodb.net/ProductDB');
    
}

main()
.then(()=>console.log("Database connected"))
.catch(err=>console.log(err));

const ProductData=require('./models/product')


app.listen(3001,()=>{
    console.log("Server started")

})