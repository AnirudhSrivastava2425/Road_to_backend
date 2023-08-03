const express = require('express');
const app = express();

app.get('',(req,res) => {
    res.send("this is home page");
});
app.get('/contact',(req,res) => {
    res.send("this is contact page");
});
app.get('/about',(req,res) => {
    res.send("this is about page");
});

app.listen(5000);