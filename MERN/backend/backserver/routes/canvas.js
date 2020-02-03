const express = require('express')
const router = express.Router()
const db = require('../models')

// router get all canvas list
router.get('/',(req,res)=>{
     db.canvas.find()
     .then((data)=> res.json(data))
     .catch((err)=> res.send(err))     
})
//creating a canvas 
router.post('/',(req,res)=>{
    db.canvas.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))     
})
//single canvas 
router.get('/:id',(req,res)=>{
    db.canvas.findOne({_id : req.params.id})
    .then((data)=> res.json(data))
     .catch((err)=> res.send(err)) 
})


module.exports = router