var express = require("express");
var request = require("request-promise");

var app = express();

app.get('/', (req, res) => {
    request('http://world-service:2000/')
        .then((body) => {
            res.status(200).send("Hello " + body);
        })
        .catch((err) => {
            res.status(500).send(err);
        })
});

app.listen(3000, () => {
    console.log("World service up on 3000");
});