const express = require("express");
const PORT = 3000 | process.env.PORT;
const connection = require("./db/connection");

connection.connect((err,res)=>{
    if(err){
        throw err
    }else{
        console.log("Connected successfully")
    }
})

let app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Successfully called api"
    })
})

app.listen(PORT,()=>{
    console.info(`Listening at port ${PORT}`)
})