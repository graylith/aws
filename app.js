const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send("this is home helloooooooooo")
})

app.get("/test", (req, res)=>{
    res.send("this is test page")
})

app.listen(3000)