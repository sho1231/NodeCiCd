const express = require('express');
const app = express();
const mongo = require('./connect.js');

// app.listen(process.env.PORT, () => console.log('listening on',process.env.PORT));
// await mongo.connect();
app.use(express.json());
app.get("/get", (req, res) => {
    // console.log("Hey how are you?");
    res.status(200).json({
        message: "Test success",
        url: process.env.MONGO_URL
    })
})

app.post("/get", async (req, res) => {
    await mongo.users.insertOne(req.body);
    return res.status(201).json({ ...req.body });
})
module.exports = app;

