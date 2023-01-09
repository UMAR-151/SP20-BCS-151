const express = require('express');
const app = express();
const alphabets = ["a", "b", "c", "d", "e"];
const products = ["bags", "clothes", "beds", "phones"];

app.get('/', function(req, res){
    res.send('hello world')
})

app.get("/api/alphabets", function(req, res){
    res.send(alphabets);
});
app.get("/api/products", function(req, res){
    res.send(products);
});

app.get("/api/alphabets/:index",function(req, res){
        if(!alphabets[req.params.index])
         return res.status(400).send("no alphabet is found");
    res.send(alphabets[req.params.index]);
});
app.get("/api/products", function(req, res){
        if(!products[req.params.index])
            return res.status(400).send("no products is found");
    res.send(products);
});

app.listen(3000);
