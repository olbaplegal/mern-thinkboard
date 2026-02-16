import express from "express";
// const express = require("express"); // "type": "commonjs"

const app = express();

const PORT = 5001

app.get("/api/notes", (req,res) => {
    res.send("you got 11 notes");
})

app.post("/api/notes", (req,res) => {
    res.status(201).json({message:"post created successfully!"})
})

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"post updated successfully!"})
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})