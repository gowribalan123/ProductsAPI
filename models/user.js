const mongoose=require('mongoose')
const express=require('express')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
username:String,
email:String,
password:String,
createdAt:Date

})
userSchema.index({name:1})
module.exports=mongoose.model('users',userSchema)