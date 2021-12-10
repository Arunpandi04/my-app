import express from "express";

export const cornRoute=express.Router()

cornRoute.get("/get",(req:express.Request,res:express.Response)=>{
    console.log("called")
    res.send("welcome--->")
})