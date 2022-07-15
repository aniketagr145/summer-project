const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config/keys');
const usersLogin = mongoose.model('user');
const JWT_SECRET = "lfkasnlfkdjsaui39302423eh932h9jd9j329";

router.get('/',(req,res)=>{
    usersLogin.find().then(result=>{
        res.json(result)
    }).catch(err=>console.log(err))
})

router.put('/signup',async (req,res)=>{
    const {name,email,pass,number}=req.body
    try{
        if(!email || !pass||!name ||!number){
            return res.status(422).json({message:'Enter the all required fields!'})
        }
        const foundUser = await usersLogin.findOne({email})
        if(foundUser){
            return res.status(422).json({message:'User already exist!'})
        }
        const newpaasward = await bcrypt.hash(pass,12)
        const myPass = new usersLogin({
            email,password:newpaasward,name,mobileNum:number
        })
        myPass.save().then(result=>{
            res.json({message:'User saved sucessfully.Try logging in.'})
        })
    }catch(e){
        res.status(400).json({error:'Something went wrong try again..!'})
    }
})

router.put('/login',async (req,res)=>{
    const {email,pass}=req.body
    try{
        if(!email || !pass){
            return res.status(422).json({message:'Enter the all required fields!'})
        }
        var foundUser = await usersLogin.findOne({email})
        if(!foundUser){
            return res.status(422).json({message:'Incorrect Email or password'})
        }
        // const newpaasward = await bcrypt.hash(pass,12)
        const doMAtch = bcrypt.compare(pass,foundUser.password)
        if(doMAtch){
            const token = jwt.sign({_id:foundUser._id},JWT_SECRET);
            foundUser.password=undefined
            res.json({message:'logged in successfully..!',token})
        }else{
            return res.status(422).json({message:'Incorrect Email or password'})
        }
    }catch(e){
        console.log(e);
        res.status(400).json({error:'Something went wrong try again..!'})
    }
})

module.exports = router;