const express=require("express");
const router=express.Router();
const Todo=require("../models/Todo");
router.post("/add/todo",(req,res)=>{
    const{todo}=req.body;
    const newTodo=new Todo({todo})
    newTodo.save().then(()=>{
        console.log("Data sent");
        res.redirect("/");

    }).catch((err)=>
        console.log(err))
})
.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id}).
    then(()=>{
        console.log("Deleted successfully");
        res.redirect("/");
    })
    .catch((e)=>{
        console.log(e);
    })
   
});

module.exports=router