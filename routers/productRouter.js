const express=require('express')
const productRouter=express.Router()
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct}=require('../controllers/productController')
//const productRouter = require('../models/productRouter')
//localhost:3000/products
productRouter.get('/',getProducts)

//localhost:3000/products//672f18954c2597bb816466ff
productRouter.get('/:id',getProductById)

//create product

productRouter.post('/',createProduct)


//update product

productRouter.patch('/:id',updateProduct)

//delete product
productRouter.delete('/:id',deleteProduct)

module.exports=productRouter
