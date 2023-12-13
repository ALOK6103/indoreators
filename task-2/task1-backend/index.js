const mongoose=require("mongoose")
const express=require("express")
const {connection}=require("./db")
const {noteRouter}=require("./routes/notes.route")
require("dotenv").config()
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/notes",noteRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
})