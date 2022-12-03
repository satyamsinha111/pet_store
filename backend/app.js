const express = require("express");
const PORT = 3001 | process.env.PORT;

let app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Successfully called api"
    })
})

app.listen(PORT,()=>{
    console.info(`Listening at port ${PORT}`)
})