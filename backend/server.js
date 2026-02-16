import express from "express";
// const express = require("express"); // "type": "commonjs"

const app = express();

const PORT = 5001

app.get("/api/notes", (req,res) => {
    res.send("you got 11 notes");
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})