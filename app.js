const express = require('express')
const app = express();
const mongo=require('./connect.js')
app.use(express.json());
app.get("/get", (req, res) => {
    // console.log("Hey how are you?");
    res.status(200).json({
        message: "Test success",
        url: process.env.MONGO_URL
    })
})

app.post("/get", (req, res) => {
    console.log(req.body);
    mongo.users.insertOne(req.body);
    console.log(req.body);
    return res.status(201).json(req.body);
})

module.exports=app;