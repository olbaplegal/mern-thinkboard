import express from "express";
// const express = require("express"); // "type": "commonjs"

const app = express();

const PORT = 5001

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})