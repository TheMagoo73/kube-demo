var express = require("express");

var app = express();

app.get('/', (req, res) => {
    res.status(200).send("World!");
});

app.listen(2000, () => {
    console.log("World server up on port 2000");
});