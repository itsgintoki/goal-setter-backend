const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalmodel')
const Goal = require('../models/userModel')


const getGoals = asyncHandler(async (req,res)=>{

    const goals = await Goal.find({user:req.user.id})
    res.status(200).json(goals)
}) 

const setGoal = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        .json({message:"Please add the text"})
    }

    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id,
    })
    res.status(200).json({message:'Get goals'})
}) 

const updateGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        .json({message:'Goal not found'})
    }


    const user = await UserActivation.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

 

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })


    res.status(200).json(updatedGoal)
})


const deleteGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        .json({message:'Goal not found'})
    }

    const user = await UserActivation.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString()!== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()


    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,setGoal,deleteGoal,updateGoal
}