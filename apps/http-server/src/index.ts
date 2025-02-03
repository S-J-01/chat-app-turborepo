import express from "express";

const app = express()

app.get('/healthcheck', (req,res)=>{
    res.json({
        message:"server healthy"
    })
})


app.listen(3001)