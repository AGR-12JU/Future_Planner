const express=require("express");
const app=express();
const bodyparser=require("body-parser");


app.use(bodyparser.urlencoded({extended:true}));

app.use(require("./routes/index"));
app.use(require("./routes/todo"));
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todoapp",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log("Server started");
})
