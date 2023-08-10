const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Temp')

const app = express();
app.use(express.json());

//creating schema in same file but for projects create different files.
const tempSchema = new mongoose.Schema({
    name:String,
    class:String,
    father:String
});




//get API for searching in database
app.get('/:key', async (req,res) => {
    // console.log(req.params.key);
    const tempModel = mongoose.model('temp1',tempSchema);
    let data = await tempModel.find({
        "$or":[
            {name: {$regex:req.params.key}}
        ]
    });
    // console.log(data);
    res.send(data);
});

app.listen('5000');