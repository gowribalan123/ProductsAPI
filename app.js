const express=require('express')
const mongoose=require('mongoose')
const productRouter=require('./routers/productRouter')
const userRouter=require('./routers/userRouter')
const jwt=require('jsonwebtoken')
const cors=require('cors')
require('dotenv').config()
app.use(express.static('public'));
const app=express()
const port=process.env.PORT
app.use(express.json())
app.use(cors())

const mongourl=process.env.MONGODB_URL

app.get('/',(req,res)=>{
    res.send("Hello")

})
 

app.post('/login',(req,res)=>{
    //Authenticate

    //Token creation
  //  const username =req.body.username
    //const user={name:username}

   // const secretKey=process.env.JWT_SECRET_KEY
    //const token=jwt.sign(user,secretKey)
    //res.json({accesstoken:token})
    
})
app.use('/products',productRouter)
app.use('/users',userRouter)





main()

.then(()=>console.log("Database connected"))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect(mongourl);
    
}


const ProductData=require('./models/product')


app.listen(3001,()=>{
    console.log("Server started")
})
